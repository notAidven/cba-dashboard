import { useEffect, useState } from 'react';
import { orientation } from '../data/orientation';
import { landingPage } from '../data/dashboardContent';
import BenefitsBoard from './BenefitsBoard';
import GlossaryText from './GlossaryText';
import Reveal from './Reveal';
import styles from './Orientation.module.css';

/* Glossary terms are linked in body copy only, never in headings — per the
   review note on unpredictable link semantics. Every render of prose goes
   through <GlossaryText>; every heading is rendered as plain text. */

function Prose({ block }) {
  const body = (
    <div className={styles.prose}>
      {block.paragraphs.map((paragraph, index) => (
        <p
          key={paragraph}
          className={block.lead && index === 0 ? styles.lead : undefined}
        >
          <GlossaryText>{paragraph}</GlossaryText>
        </p>
      ))}
    </div>
  );

  if (!block.collapse) return body;

  return (
    <Reveal
      label={block.collapseLabel || 'Read more'}
      openLabel="Show less"
      count={block.paragraphs.length}
    >
      {body}
    </Reveal>
  );
}

function Creed({ block }) {
  return (
    <blockquote className={styles.creed}>
      <GlossaryText>{block.text}</GlossaryText>
    </blockquote>
  );
}

function Principles({ block }) {
  return (
    <div className={styles.principles}>
      <h3 className={styles.blockHeading}>{block.heading}</h3>
      <ul>
        {block.items.map((item) => (
          <li key={item}><GlossaryText>{item}</GlossaryText></li>
        ))}
      </ul>
    </div>
  );
}

function Evidence({ block }) {
  return (
    <Reveal label="See the research" openLabel="Hide the research" count={block.sources.length}>
      <aside className={styles.evidence}>
        <span className={styles.evidenceLabel}>Evidence</span>
        <p><GlossaryText>{block.text}</GlossaryText></p>
        <ul className={styles.sourceList}>
          {block.sources.map((source) => <li key={source}>{source}</li>)}
        </ul>
      </aside>
    </Reveal>
  );
}

function Callout({ block }) {
  return (
    <aside className={`${styles.callout} ${styles[block.tone] || ''}`}>
      <h3 className={styles.calloutHeading}>{block.heading}</h3>
      <p><GlossaryText>{block.body}</GlossaryText></p>
      {block.source && <p className={styles.inlineSource}>{block.source}</p>}
    </aside>
  );
}

function TwoColumn({ block }) {
  return (
    <div className={styles.twoColumn}>
      {block.columns.map((column) => (
        <section key={column.heading} className={`${styles.column} ${styles[column.tone]}`}>
          <h3 className={styles.blockHeading}>{column.heading}</h3>
          <ul className={styles.markedList}>
            {column.items.map((item) => (
              <li key={item}><GlossaryText>{item}</GlossaryText></li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}

function CaseNote({ block }) {
  return (
    <Reveal label={block.heading} openLabel={`Hide: ${block.heading.toLowerCase()}`} count={block.cases.length}>
    <div className={styles.caseNote}>
      <div className={styles.caseGrid}>
        {block.cases.map((entry) => (
          <article key={entry.label} className={styles.caseItem}>
            <span className={styles.caseLabel}>{entry.label}</span>
            <p><GlossaryText>{entry.body}</GlossaryText></p>
            <p className={styles.inlineSource}>{entry.source}</p>
          </article>
        ))}
      </div>
    </div>
    </Reveal>
  );
}

function Reasons({ block }) {
  return (
    <ol className={styles.reasons}>
      {block.items.map((item) => (
        <li key={item.number} className={styles.reason}>
          <span className={styles.reasonNumber}>{String(item.number).padStart(2, '0')}</span>
          <div className={styles.reasonBody}>
            <h3 className={styles.reasonTitle}>{item.title}</h3>
            <p className={styles.reasonHook}><GlossaryText>{item.hook}</GlossaryText></p>
            <Reveal label="What this depends on" openLabel="Show less">
              <p><GlossaryText>{item.body}</GlossaryText></p>
              <p className={styles.condition}><GlossaryText>{item.condition}</GlossaryText></p>
              <p className={styles.inlineSource}>{item.source}</p>
            </Reveal>
          </div>
        </li>
      ))}
    </ol>
  );
}

function CreativeBenefits() {
  const { creativeBenefits } = landingPage;
  return (
    <section className={styles.creative}>
      <h3 className={styles.blockHeading}>{creativeBenefits.heading}</h3>
      <p className={styles.creativeCaption}>
        <GlossaryText>{creativeBenefits.shortCaption}</GlossaryText>
      </p>
      <Reveal label="See examples" openLabel="Hide examples" count={creativeBenefits.items.length} tone="quiet">
      <ul className={styles.creativeList}>
        {creativeBenefits.items.map((item) => (
          <li key={item.label}>
            <strong>{item.label}</strong>
            <span><GlossaryText>{item.detail}</GlossaryText></span>
          </li>
        ))}
      </ul>
      </Reveal>
    </section>
  );
}

function HowTo({ block }) {
  return (
    <div className={styles.howTo}>
      <h3 className={styles.blockHeading}>{block.heading}</h3>
      <ol className={styles.howToList}>
        {block.steps.map((step, index) => (
          <li key={step.label}>
            <span className={styles.howToNumber}>{String(index + 1).padStart(2, '0')}</span>
            <div>
              <strong>{step.label}</strong>
              <p><GlossaryText>{step.body}</GlossaryText></p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

const BLOCKS = {
  prose: Prose,
  creed: Creed,
  principles: Principles,
  evidence: Evidence,
  callout: Callout,
  twoColumn: TwoColumn,
  caseNote: CaseNote,
  reasons: Reasons,
  howTo: HowTo,
  benefitsBoard: BenefitsBoard,
  creativeBenefits: CreativeBenefits,
};

function Block({ block }) {
  const Component = BLOCKS[block.type];
  if (!Component) return null;
  return <Component block={block} />;
}

export default function Orientation({ initialSection, onBack, onGlossaryOpen, onGoToSteps, onGoToResources }) {
  const [activeSection, setActiveSection] = useState(orientation.sections[0].id);

  useEffect(() => {
    if (!initialSection) {
      window.scrollTo(0, 0);
      return;
    }
    // Wait for layout before scrolling to the requested section.
    requestAnimationFrame(() => {
      document.getElementById(initialSection)?.scrollIntoView({ block: 'start' });
    });
  }, [initialSection]);

  // Highlights the contents entry for whichever section currently occupies the
  // upper third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-12% 0px -70% 0px', threshold: 0 },
    );

    orientation.sections.forEach((section) => {
      const node = document.getElementById(section.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  const jumpTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className={styles.page}>
      <nav className={styles.navbar} aria-label="Orientation navigation">
        <button type="button" className={styles.brand} onClick={onBack}>
          <span className={styles.brandName}>CBA Toolkit</span>
          <span className={styles.brandSub}>MIT Renewable Energy Clinic</span>
        </button>
        <div className={styles.navActions}>
          <button type="button" onClick={onBack}>Home</button>
          <button type="button" onClick={onGoToSteps}>Six steps</button>
          <button type="button" onClick={onGoToResources}>Resources</button>
          <button type="button" onClick={onGlossaryOpen}>Glossary</button>
        </div>
      </nav>

      <header className={styles.header}>
        <button type="button" className={styles.back} onClick={onBack}>
          <span aria-hidden="true">←</span> Back to the toolkit
        </button>
        <p className={styles.eyebrow}>{orientation.eyebrow}</p>
        <h1 className={styles.title}>{orientation.title}</h1>
        <p className={styles.standfirst}>{orientation.standfirst}</p>
        <p className={styles.headerNote}>{orientation.note}</p>
      </header>

      <div className={styles.layout}>
        <aside className={styles.contents} aria-label="Contents">
          <p className={styles.contentsLabel}>Contents</p>
          <ol>
            {orientation.sections.map((section) => (
              <li key={section.id}>
                <button
                  type="button"
                  className={activeSection === section.id ? styles.contentsLinkActive : styles.contentsLink}
                  onClick={() => jumpTo(section.id)}
                  aria-current={activeSection === section.id ? 'true' : undefined}
                >
                  <span>{section.number}</span>
                  {section.title}
                </button>
              </li>
            ))}
          </ol>
          <button type="button" className={styles.contentsCta} onClick={onGoToSteps}>
            Go to the six steps <span aria-hidden="true">→</span>
          </button>
        </aside>

        <main className={styles.article}>
          {orientation.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className={`${styles.section} ${styles[`band_${section.band}`] || ''}`}
              style={{ '--section-color': section.color, '--section-tint': section.tint }}
            >
              <div className={styles.sectionHead}>
                <span className={styles.sectionNumber}>{section.number}</span>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                <p className={styles.sectionStandfirst}>{section.standfirst}</p>
              </div>

              {section.photo && (
                <figure className={styles.photo}>
                  <img src={section.photo.src} alt={section.photo.alt} loading="lazy" />
                  <figcaption>{section.photo.caption}</figcaption>
                </figure>
              )}

              <div className={styles.blocks}>
                {section.blocks.map((block, index) => (
                  <Block key={`${section.id}-${block.type}-${index}`} block={block} />
                ))}
              </div>
            </section>
          ))}

          <footer className={styles.articleFooter}>
            <p className={styles.footerLead}>That’s the orientation.</p>
            <p className={styles.footerBody}>
              Next, confirm what your state and municipality already require. Then work the six
              steps in order.
            </p>
            <div className={styles.footerActions}>
              <button type="button" className={styles.primaryButton} onClick={onGoToSteps}>
                Begin the six steps <span aria-hidden="true">→</span>
              </button>
              <button type="button" className={styles.secondaryButton} onClick={onGoToResources}>
                Browse the Resource Library
              </button>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
