import { useState } from 'react';
import { IconDoc } from './Icons';
import GlossaryText from './GlossaryText';
import styles from './StepAccordion.module.css';

const ROLE_LABELS = {
  community: 'Community / EJ',
  municipal: 'Municipal',
  developer: 'Developer',
};

export default function StepAccordion({ step, role, isOpen, onToggle, onOpenTemplate }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [expandedGuidance, setExpandedGuidance] = useState(null);

  const toggleCheck = (key) => setCheckedItems(prev => ({ ...prev, [key]: !prev[key] }));

  return (
    <div className={styles.accordion} style={{ '--step-color': step.color }}>
      <button
        className={`${styles.header} ${isOpen ? styles.headerOpen : ''}`}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className={styles.headerLeft}>
          <div className={styles.accentBar} style={{ background: step.color }} />
          <span className={styles.stepBadge} style={{ background: step.color }}>
            {step.number}
          </span>
          <div className={styles.headerText}>
            <span className={styles.stepTitle}>{step.title}</span>
            <span className={styles.stepSubtitle}>{step.subtitle}</span>
          </div>
        </div>
        <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}>▾</span>
      </button>

      {isOpen && (
        <div className={styles.body}>
          <p className={styles.description}><GlossaryText>{step.description}</GlossaryText></p>

          {step.templates?.length > 0 && (
            <div className={styles.templateRow}>
              <span className={styles.templateLabel}>Templates:</span>
              {step.templates.map((tid) => (
                <button
                  key={tid}
                  className={styles.templateBtn}
                  style={{ borderColor: step.color, color: step.color }}
                  onClick={() => onOpenTemplate(tid)}
                >
                  <IconDoc /> {formatTemplateName(tid)}
                </button>
              ))}
            </div>
          )}

          <div className={styles.guidanceList}>
            {step.guidance.map((g, gi) => (
              <div key={gi} className={styles.guidanceItem}>
                <button
                  className={styles.guidanceHeader}
                  onClick={() => setExpandedGuidance(expandedGuidance === gi ? null : gi)}
                  aria-expanded={expandedGuidance === gi}
                >
                  <span>{g.title}</span>
                  <span className={`${styles.guidanceChevron} ${expandedGuidance === gi ? styles.open : ''}`}>›</span>
                </button>

                {expandedGuidance === gi && (
                  <div className={styles.guidanceBody}>
                    <p className={styles.guidanceDesc}><GlossaryText>{g.body}</GlossaryText></p>

                    {g.phases && Array.isArray(g.phases) && g.phases[0]?.duration && (
                      <div className={styles.phasesTable}>
                        {g.phases.map((ph, pi) => (
                          <div key={pi} className={styles.phaseRow}>
                            <div className={styles.phaseLabel}>{ph.phase}</div>
                            <div className={styles.phaseDuration}>{ph.duration}</div>
                            <div className={styles.phaseDesc}><GlossaryText>{ph.description}</GlossaryText></div>
                          </div>
                        ))}
                      </div>
                    )}

                    {g.phases && Array.isArray(g.phases) && g.phases[0]?.items && (
                      <div className={styles.meetingPhases}>
                        {g.phases.map((ph, pi) => (
                          <div key={pi} className={styles.meetingPhase}>
                            <strong>{ph.phase}</strong>
                            <ul>{ph.items.map((item) => <li key={item}><GlossaryText>{item}</GlossaryText></li>)}</ul>
                          </div>
                        ))}
                      </div>
                    )}

                    {g.templateId && (
                      <button
                        className={styles.inlineTemplateBtn}
                        style={{ borderColor: step.color, color: step.color }}
                        onClick={() => onOpenTemplate(g.templateId)}
                      >
                        <IconDoc /> Open {formatTemplateName(g.templateId)}
                      </button>
                    )}

                    {g.checklist?.[role] && (
                      <div className={styles.checklistSection}>
                        <div className={styles.checklistHeader}>
                          <span className={styles.checklistRoleTag} style={{ background: step.color }}>
                            {ROLE_LABELS[role]}
                          </span>
                          <span className={styles.checklistLabel}>Suggested Checklist</span>
                        </div>
                        <ul className={styles.checklist}>
                          {g.checklist[role].map((item, ci) => {
                            const key = `${gi}-${ci}`;
                            const textId = `check-${step.id}-${gi}-${ci}`;
                            return (
                              <li key={item} className={styles.checkItem}>
                                <input
                                  type="checkbox"
                                  id={key}
                                  checked={!!checkedItems[key]}
                                  onChange={() => toggleCheck(key)}
                                  className={styles.checkbox}
                                  aria-labelledby={textId}
                                />
                                <div
                                  id={textId}
                                  className={checkedItems[key] ? styles.checkedLabel : styles.checkLabel}
                                >
                                  <GlossaryText>{item}</GlossaryText>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function formatTemplateName(id) {
  const names = {
    'priorities-worksheet': 'Priorities Worksheet',
    'readiness-checklist': 'Readiness Checklist',
    'engagement-plan': 'Engagement Plan',
    'negotiation-prep-worksheet': 'Negotiation Prep Worksheet',
    'cba-structure-template': 'CBA Structure Template',
    'enforcement-checklist': 'Enforcement Checklist',
    'reporting-form': 'Reporting Form',
  };
  return names[id] || id;
}
