import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';
import { glossary } from '../data/dashboardContent';
import { IconClose } from './Icons';
import styles from './GlossaryText.module.css';

const GlossaryContext = createContext(null);
const LinkedTermsContext = createContext(null);

// Tracks which glossary terms have already been linked within the current "page" (the
// landing view, or a single info page) so a term is only ever linked once per page, as
// requested. Re-mounting with a new `scopeKey` (e.g. when navigating to a different info
// page) starts a fresh set.
function ScopedLinkTracker({ children }) {
  const seenRef = useRef(new Set());
  return (
    <LinkedTermsContext.Provider value={seenRef}>
      {children}
    </LinkedTermsContext.Provider>
  );
}

export function GlossaryLinkScope({ scopeKey, children }) {
  return <ScopedLinkTracker key={scopeKey}>{children}</ScopedLinkTracker>;
}

const EXPLICIT_ALIASES = {
  'Community Benefits Agreement (CBA)': [
    'Community Benefits Agreement',
    'Community Benefits Agreements',
    'CBA',
    'CBAs',
  ],
  'Community Benefit Plan (CBP)': [
    'Community Benefit Plan',
    'Community Benefit Plans',
    'CBP',
    'CBPs',
  ],
  'Cumulative Impact Analysis (CIA)': [
    'Cumulative Impact Analysis',
    'Cumulative Impact Analyses',
    'CIA',
  ],
  'Environmental Justice (EJ) Principles': [
    'Environmental Justice',
    'Environmental Justice Principles',
    'EJ',
    'EJ Principles',
  ],
  'Host Community Agreement': ['HCA', 'HCAs'],
  'Key Stakeholders': ['Stakeholder', 'Stakeholders'],
  'Notice and Cure Period': ['Notice and Cure', 'Notice and Cure Period', 'Notice and Cure Periods'],
  'Environmental Impact Assessment (EIA)': [
    'Environmental Impact Assessment',
    'Environmental Impact Assessments',
    'Environmental Impact Report',
    'Environmental Impact Statement',
    'EIA',
    'EIR',
    'EIS',
  ],
  'SLAPP Lawsuit': ['SLAPP', 'SLAPP lawsuits', 'SLAPP suits'],
  'Anti-SLAPP Statute': ['anti-SLAPP', 'anti-SLAPP statutes', 'anti-SLAPP statute'],
  'Short-Term Impact': ['short-term impacts'],
  'Long-Term Impact': ['long-term impacts'],
  'Impact Fee': ['impact fees'],
  'Intervenor Funding': ['intervenor funding', 'state intervenor funding'],
};

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function pluralizePhrase(value) {
  const words = value.split(' ');
  const last = words.at(-1);
  if (!last || last.endsWith('s')) return value;

  if (/[^aeiou]y$/i.test(last)) {
    words[words.length - 1] = `${last.slice(0, -1)}ies`;
  } else if (/(?:s|x|z|ch|sh)$/i.test(last)) {
    words[words.length - 1] = `${last}es`;
  } else {
    words[words.length - 1] = `${last}s`;
  }

  return words.join(' ');
}

function buildGlossaryMatcher() {
  const aliases = new Map();

  glossary.forEach((entry) => {
    const baseTerm = entry.term.replace(/\s*\([^)]+\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
    const abbreviations = [...entry.term.matchAll(/\(([^)]+)\)/g)].map((match) => match[1]);
    const candidates = new Set([
      entry.term,
      baseTerm,
      pluralizePhrase(baseTerm),
      ...abbreviations,
      ...(EXPLICIT_ALIASES[entry.term] || []),
    ]);

    candidates.forEach((candidate) => {
      if (candidate) aliases.set(candidate.toLowerCase(), entry);
    });
  });

  const pattern = [...aliases.keys()]
    .sort((a, b) => b.length - a.length)
    .map(escapeRegExp)
    .join('|');

  return {
    aliases,
    matcher: new RegExp(`\\b(${pattern})\\b`, 'gi'),
  };
}

const { aliases: GLOSSARY_ALIASES, matcher: GLOSSARY_MATCHER } = buildGlossaryMatcher();

export function GlossaryProvider({ children }) {
  const [active, setActive] = useState(null);
  const [position, setPosition] = useState(null);
  const popoverRef = useRef(null);

  const close = useCallback((restoreFocus = false) => {
    if (restoreFocus) active?.trigger?.focus();
    setActive(null);
    setPosition(null);
  }, [active]);

  const toggle = useCallback((entry, trigger) => {
    setPosition(null);
    setActive((current) => current?.trigger === trigger ? null : { entry, trigger });
  }, []);

  const updatePosition = useCallback(() => {
    if (!active?.trigger || !popoverRef.current) return;

    const triggerRect = active.trigger.getBoundingClientRect();
    const popoverRect = popoverRef.current.getBoundingClientRect();
    const gap = 10;
    const pagePadding = 12;
    const preferredTop = triggerRect.top - popoverRect.height - gap;
    const below = preferredTop < pagePadding;
    const top = below ? triggerRect.bottom + gap : preferredTop;
    const unclampedLeft = triggerRect.left + triggerRect.width / 2 - popoverRect.width / 2;
    const left = Math.min(
      Math.max(pagePadding, unclampedLeft),
      window.innerWidth - popoverRect.width - pagePadding,
    );
    const arrowLeft = triggerRect.left + triggerRect.width / 2 - left;

    setPosition({ top, left, arrowLeft, below });
  }, [active]);

  useLayoutEffect(() => {
    if (active) updatePosition();
  }, [active, updatePosition]);

  useEffect(() => {
    if (!active) return undefined;

    const handlePointerDown = (event) => {
      if (popoverRef.current?.contains(event.target) || active.trigger?.contains(event.target)) return;
      close();
    };
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') close(true);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition, true);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition, true);
    };
  }, [active, close, updatePosition]);

  const contextValue = useMemo(() => ({ active, toggle }), [active, toggle]);

  return (
    <GlossaryContext.Provider value={contextValue}>
      {children}
      {active && createPortal(
        <aside
          ref={popoverRef}
          id="glossary-definition-popover"
          className={`${styles.popover} ${position?.below ? styles.popoverBelow : ''}`}
          style={{
            left: position?.left ?? 12,
            top: position?.top ?? 12,
            visibility: position ? 'visible' : 'hidden',
            '--arrow-left': `${position?.arrowLeft ?? 24}px`,
          }}
          role="dialog"
          aria-label={`Definition of ${active.entry.term}`}
        >
          <div className={styles.popoverHeader}>
            <span className={styles.popoverLabel}>Glossary definition</span>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => close(true)}
              aria-label="Close definition"
            >
              <IconClose size={14} />
            </button>
          </div>
          <strong className={styles.popoverTerm}>{active.entry.term}</strong>
          <p className={styles.popoverDefinition}>{active.entry.definition}</p>
          <span className={styles.arrow} aria-hidden="true" />
        </aside>,
        document.body,
      )}
    </GlossaryContext.Provider>
  );
}

function GlossaryTerm({ children, entry }) {
  const glossaryContext = useContext(GlossaryContext);
  const triggerRef = useRef(null);

  if (!glossaryContext) return children;

  const isActive = glossaryContext.active?.trigger === triggerRef.current;

  return (
    <button
      ref={triggerRef}
      type="button"
      className={styles.term}
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        glossaryContext.toggle(entry, triggerRef.current);
      }}
      aria-expanded={isActive}
      aria-controls={isActive ? 'glossary-definition-popover' : undefined}
      aria-label={`${children}. Show glossary definition`}
    >
      {children}
    </button>
  );
}

export default function GlossaryText({ children }) {
  const seenRef = useContext(LinkedTermsContext);

  if (typeof children !== 'string' || !children) return children;

  const parts = [];
  let lastIndex = 0;

  for (const match of children.matchAll(GLOSSARY_MATCHER)) {
    const matchIndex = match.index ?? 0;
    const entry = GLOSSARY_ALIASES.get(match[0].toLowerCase());
    const alreadyLinkedOnThisPage = entry && seenRef?.current?.has(entry.term);

    if (matchIndex > lastIndex) parts.push(children.slice(lastIndex, matchIndex));
    if (entry && !alreadyLinkedOnThisPage) {
      seenRef?.current?.add(entry.term);
      parts.push(
        <GlossaryTerm key={`${matchIndex}-${match[0]}`} entry={entry}>
          {match[0]}
        </GlossaryTerm>,
      );
    } else {
      parts.push(match[0]);
    }
    lastIndex = matchIndex + match[0].length;
  }

  if (lastIndex === 0) return children;
  if (lastIndex < children.length) parts.push(children.slice(lastIndex));

  return parts;
}
