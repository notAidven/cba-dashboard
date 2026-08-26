import { useState, useMemo } from 'react';
import { resources, steps } from '../data/dashboardContent';
import { IconArrowRight, IconExternal } from './Icons';
import GlossaryText from './GlossaryText';
import styles from './ResourceLibrary.module.css';

const TYPE_LABELS = { template: 'Template', external: 'External Resource', 'case-study': 'Case Study' };
const TYPE_COLORS = { template: '#9580B8', external: '#6B9B7A', 'case-study': '#C97B54' };

// Show a manageable first screenful per group; the rest is one click away.
// 27 cards open at once was the single largest block of text on the page.
const PREVIEW_COUNT = 6;

export default function ResourceLibrary({ onOpenTemplate }) {
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [filterStep, setFilterStep] = useState('all');
  const [expandedGroups, setExpandedGroups] = useState({});

  const toggleGroup = (type) =>
    setExpandedGroups((prev) => ({ ...prev, [type]: !prev[type] }));

  const filtered = useMemo(() => resources.filter((r) => {
    const q = search.toLowerCase();
    return (
      (!q || r.title.toLowerCase().includes(q) || r.description?.toLowerCase().includes(q)) &&
      (filterType === 'all' || r.type === filterType) &&
      (filterStep === 'all' || r.step === filterStep)
    );
  }), [search, filterType, filterStep]);

  const byType = (type) => filtered.filter((r) => r.type === type);

  // A group opens fully when the user asks, or when a filter/search has already
  // narrowed it to a short list.
  const isExpanded = (type) => expandedGroups[type] || byType(type).length <= PREVIEW_COUNT;
  const visible = (type) => (isExpanded(type) ? byType(type) : byType(type).slice(0, PREVIEW_COUNT));

  const MoreButton = ({ type }) => {
    const total = byType(type).length;
    if (total <= PREVIEW_COUNT) return null;
    const open = expandedGroups[type];
    return (
      <button type="button" className={styles.moreBtn} onClick={() => toggleGroup(type)} aria-expanded={!!open}>
        {open ? 'Show fewer' : `Show all ${total}`}
        <span className={styles.moreChevron} aria-hidden="true">{open ? '\u2191' : '\u2193'}</span>
      </button>
    );
  };

  return (
    <section className={styles.section} id="resources">
      <div className={styles.container}>
        <p className={styles.sectionLabel}>Resources</p>
        <h2 className={styles.title}>Resource Library</h2>
        <p className={styles.subtitle}>
          A searchable appendix for all templates, examples, and external references used throughout the toolkit.
          Filter, sort, and search to find relevant materials.
        </p>

        <div className={styles.controls}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search resources..."
            aria-label="Search resources"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className={styles.filters}>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Type</label>
              <div className={styles.filterBtns}>
                {['all', 'template', 'external', 'case-study'].map((t) => (
                  <button
                    key={t}
                    className={filterType === t ? styles.filterActive : styles.filterBtn}
                    onClick={() => setFilterType(t)}
                  >
                    {t === 'all' ? 'All' : TYPE_LABELS[t]}
                  </button>
                ))}
              </div>
            </div>
            <div className={styles.filterGroup}>
              <label className={styles.filterLabel}>Step</label>
              <div className={styles.filterBtns}>
                <button className={filterStep === 'all' ? styles.filterActive : styles.filterBtn} onClick={() => setFilterStep('all')}>All Steps</button>
                {steps.map((s) => (
                  <button
                    key={s.id}
                    className={filterStep === s.id ? styles.filterActive : styles.filterBtn}
                    onClick={() => setFilterStep(s.id)}
                    style={filterStep === s.id ? { background: s.color, borderColor: s.color } : {}}
                  >
                    {s.number}. {s.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className={styles.resultCount}>{filtered.length} resource{filtered.length !== 1 ? 's' : ''} found</p>

        {(filterType === 'all' || filterType === 'template') && byType('template').length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupHeading} style={{ color: TYPE_COLORS.template, borderColor: TYPE_COLORS.template }}>
              Templates ({byType('template').length})
            </h3>
            <div className={styles.grid}>
              {visible('template').map((r) => (
                <div key={r.id} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.typeBadge} style={{ background: TYPE_COLORS.template }}>Template</span>
                    {r.step && <span className={styles.stepBadge} style={{ background: steps.find(s=>s.id===r.step)?.color || '#888' }}>{steps.find(s=>s.id===r.step)?.title}</span>}
                  </div>
                  <h4 className={styles.cardTitle}>{r.title}</h4>
                  <p className={styles.cardDesc}><GlossaryText>{r.description}</GlossaryText></p>
                  <button className={styles.openBtn} style={{ color: TYPE_COLORS.template, borderColor: TYPE_COLORS.template }} onClick={() => onOpenTemplate(r.templateId)}>
                    Open Template <IconArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>
            <MoreButton type="template" />
          </div>
        )}

        {(filterType === 'all' || filterType === 'external') && byType('external').length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupHeading} style={{ color: TYPE_COLORS.external, borderColor: TYPE_COLORS.external }}>
              External Resources ({byType('external').length})
            </h3>
            <div className={styles.grid}>
              {visible('external').map((r) => (
                <div key={r.id} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.typeBadge} style={{ background: TYPE_COLORS.external }}>External</span>
                    {r.topic && <span className={styles.topicBadge}>{r.topic}</span>}
                  </div>
                  <h4 className={styles.cardTitle}>{r.title}</h4>
                  {r.organization && <p className={styles.cardOrg}><GlossaryText>{r.organization}</GlossaryText></p>}
                  <p className={styles.cardDesc}><GlossaryText>{r.description}</GlossaryText></p>
                  {r.url && r.url !== '#' ? (
                    <a
                      className={styles.openBtn}
                      style={{ color: TYPE_COLORS.external, borderColor: TYPE_COLORS.external }}
                      href={r.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit resource <IconExternal size={12} />
                    </a>
                  ) : (
                    <span className={styles.externalNote}>Link pending — source referenced in toolkit</span>
                  )}
                </div>
              ))}
            </div>
            <MoreButton type="external" />
          </div>
        )}

        {(filterType === 'all' || filterType === 'case-study') && byType('case-study').length > 0 && (
          <div className={styles.group}>
            <h3 className={styles.groupHeading} style={{ color: TYPE_COLORS['case-study'], borderColor: TYPE_COLORS['case-study'] }}>
              Case Studies ({byType('case-study').length})
            </h3>
            <div className={styles.grid}>
              {visible('case-study').map((r) => (
                <div key={r.id} className={`${styles.card} ${styles.cardCaseStudy}`}>
                  <div className={styles.cardTop}>
                    <span className={styles.typeBadge} style={{ background: TYPE_COLORS['case-study'] }}>Case Study</span>
                    <span className={styles.comingSoon}>Coming Soon</span>
                  </div>
                  <h4 className={styles.cardTitle}>{r.title}</h4>
                  {r.location && <p className={styles.cardOrg}>{r.location} · {r.sector}</p>}
                  <p className={styles.cardDesc}><GlossaryText>{r.description}</GlossaryText></p>
                  {r.outcome && <div className={styles.outcomeTag}>Outcome: <GlossaryText>{r.outcome}</GlossaryText></div>}
                </div>
              ))}
            </div>
            <MoreButton type="case-study" />
          </div>
        )}

        {filtered.length === 0 && (
          <div className={styles.empty}>No resources match your filters. Try clearing the search or changing the filter.</div>
        )}
      </div>
    </section>
  );
}
