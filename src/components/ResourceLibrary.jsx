import { useState, useMemo } from 'react';
import { resources, steps } from '../data/dashboardContent';
import { IconArrowRight, IconExternal } from './Icons';
import GlossaryText from './GlossaryText';
import styles from './ResourceLibrary.module.css';

const GROUPS = [
  { type: 'template', label: 'Templates', blurb: 'Working forms you can fill in and save as a PDF.' },
  { type: 'external', label: 'External sources', blurb: 'Statutes, databases, funding programs, and research held elsewhere.' },
  { type: 'case-study', label: 'Case studies', blurb: 'Agreements examined for what worked, what failed, and why.' },
];

export default function ResourceLibrary({ onOpenTemplate }) {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStep, setFilterStep] = useState('all');

  const filtered = useMemo(() => resources.filter((r) => {
    const q = search.trim().toLowerCase();
    const haystack = [r.title, r.description, r.organization, r.topic, r.location, r.sector]
      .filter(Boolean).join(' ').toLowerCase();
    return (
      (!q || haystack.includes(q)) &&
      (filterType === 'all' || r.type === filterType) &&
      (filterStep === 'all' || r.step === filterStep)
    );
  }), [search, filterType, filterStep]);

  const activeFilters = (filterType !== 'all') + (filterStep !== 'all') + (search.trim() ? 1 : 0);

  const clearAll = () => { setSearch(''); setFilterType('all'); setFilterStep('all'); };

  return (
    <section className={styles.section} id="resources">
      <div className={styles.container}>
        <div className={styles.intro}>
          <div>
            <p className={styles.sectionLabel}>Appendix</p>
            <h2 className={styles.title}>Resource Library</h2>
          </div>
          <p className={styles.subtitle}>
            <GlossaryText>
              Every template, external source, and case study used across the toolkit, in one
              place. Filter by kind or by the step it belongs to.
            </GlossaryText>
          </p>
        </div>

        <div className={styles.controls}>
          <input
            className={styles.search}
            type="search"
            placeholder="Search resources"
            aria-label="Search resources"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Kind</span>
            <div className={styles.filterBtns}>
              <button
                className={filterType === 'all' ? styles.filterActive : styles.filterBtn}
                onClick={() => setFilterType('all')}
                aria-pressed={filterType === 'all'}
              >
                All
              </button>
              {GROUPS.map((g) => (
                <button
                  key={g.type}
                  className={filterType === g.type ? styles.filterActive : styles.filterBtn}
                  onClick={() => setFilterType(g.type)}
                  aria-pressed={filterType === g.type}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.filterRow}>
            <span className={styles.filterLabel}>Step</span>
            <div className={styles.filterBtns}>
              <button
                className={filterStep === 'all' ? styles.filterActive : styles.filterBtn}
                onClick={() => setFilterStep('all')}
                aria-pressed={filterStep === 'all'}
              >
                All steps
              </button>
              {steps.map((s) => (
                <button
                  key={s.id}
                  className={filterStep === s.id ? styles.filterActive : styles.filterBtn}
                  onClick={() => setFilterStep(s.id)}
                  aria-pressed={filterStep === s.id}
                  style={filterStep === s.id ? { background: s.color, borderColor: s.color } : { '--dot': s.color }}
                >
                  <span className={styles.stepDot} aria-hidden="true" />
                  {s.number}. {s.title}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.resultRow}>
            <p className={styles.resultCount} aria-live="polite">
              {filtered.length} of {resources.length} resources
            </p>
            {activeFilters > 0 && (
              <button className={styles.clearBtn} onClick={clearAll}>Clear filters</button>
            )}
          </div>
        </div>

        {GROUPS.map((group) => {
          const items = filtered.filter((r) => r.type === group.type);
          if (items.length === 0) return null;

          return (
            <div key={group.type} className={styles.group}>
              <div className={styles.groupHead}>
                <h3 className={styles.groupHeading}>{group.label}</h3>
                <span className={styles.groupCount}>{items.length}</span>
                <p className={styles.groupBlurb}>{group.blurb}</p>
              </div>

              <ul className={styles.list}>
                {items.map((r) => {
                  const step = steps.find((s) => s.id === r.step);
                  return (
                    <li
                      key={r.id}
                      className={styles.row}
                      style={{ '--row-color': step ? step.color : 'var(--ink)' }}
                    >
                      <div className={styles.rowMain}>
                        {/* Headings are plain text — glossary links live in body copy only. */}
                        <h4 className={styles.rowTitle}>{r.title}</h4>
                        <p className={styles.rowMeta}>
                          {[r.organization, r.location && `${r.location} · ${r.sector}`, r.topic]
                            .filter(Boolean).join(' · ')}
                        </p>
                        <p className={styles.rowDesc}><GlossaryText>{r.description}</GlossaryText></p>
                        {r.outcome && (
                          <p className={styles.rowOutcome}>Outcome — <GlossaryText>{r.outcome}</GlossaryText></p>
                        )}
                      </div>

                      <div className={styles.rowSide}>
                        {step && <span className={styles.stepTag}>Step {step.number} · {step.title}</span>}

                        {r.type === 'template' && (
                          <button className={styles.action} onClick={() => onOpenTemplate(r.templateId)}>
                            Open template <IconArrowRight size={13} />
                          </button>
                        )}

                        {r.type === 'external' && (
                          r.url && r.url !== '#' ? (
                            <a className={styles.action} href={r.url} target="_blank" rel="noopener noreferrer">
                              Visit source <IconExternal size={12} />
                            </a>
                          ) : (
                            <span className={styles.pending}>
                              {r.status === 'coming-soon' ? 'In development' : 'Link pending'}
                            </span>
                          )
                        )}

                        {r.type === 'case-study' && (
                          <span className={styles.pending}>Write-up in progress</span>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}

        {filtered.length === 0 && (
          <div className={styles.empty}>
            <p>Nothing matches those filters.</p>
            <button className={styles.clearBtn} onClick={clearAll}>Clear filters</button>
          </div>
        )}
      </div>
    </section>
  );
}
