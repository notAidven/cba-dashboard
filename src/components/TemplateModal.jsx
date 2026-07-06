import { templates, steps } from '../data/dashboardContent';
import { IconClose } from './Icons';
import styles from './Modal.module.css';
import tStyles from './TemplateModal.module.css';

export default function TemplateModal({ templateId, onClose }) {
  const tmpl = templates[templateId];
  if (!tmpl) return null;
  const step = steps.find((s) => s.id === tmpl.step);

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={`${styles.modal} ${styles.modalWide}`}>
        <div className={styles.modalHeader}>
          <div>
            {step && (
              <span className={tStyles.stepTag} style={{ background: step.color }}>
                Step {step.number}: {step.title}
              </span>
            )}
            <h2 className={styles.modalTitle}>{tmpl.title}</h2>
            <p className={styles.modalSubtitle}>{tmpl.description}</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close"><IconClose size={18} /></button>
        </div>

        <div className={styles.modalBody}>
          <div className={tStyles.note}>
            This template is for planning and reference. Fill it in digitally or print for workshops.
          </div>

          {tmpl.sections.map((section, si) => (
            <div key={si} className={tStyles.section}>
              <h3 className={tStyles.sectionTitle}>{section.title}</h3>
              {section.description && (
                <p className={tStyles.sectionDesc}>{section.description}</p>
              )}

              {/* Fields */}
              {section.fields && section.fields.map((field, fi) => (
                <div key={fi} className={tStyles.field}>
                  <label className={tStyles.fieldLabel}>{field.label}</label>
                  {field.type === 'textarea' && (
                    <textarea className={tStyles.textarea} rows={3} placeholder="Enter your response..." />
                  )}
                  {field.type === 'text' && (
                    <input className={tStyles.input} type="text" placeholder="..." />
                  )}
                  {field.type === 'select' && (
                    <select className={tStyles.select}>
                      <option value="">Select...</option>
                      {field.options?.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  )}
                  {field.type === 'certification' && (
                    <div className={tStyles.certBox}>{field.label}</div>
                  )}
                  {field.type === 'signature' && (
                    <div className={tStyles.signatureLine} />
                  )}
                </div>
              ))}

              {/* Checklist */}
              {section.type === 'checklist' && section.items && (
                <ul className={tStyles.checklist}>
                  {section.items.map((item, ii) => (
                    <li key={ii} className={tStyles.checkItem}>
                      <input type="checkbox" className={tStyles.checkbox} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Checkbox-list with ranks */}
              {section.type === 'checkbox-list' && section.items && (
                <div>
                  <ul className={tStyles.checklist}>
                    {section.items.map((item, ii) => (
                      <li key={ii} className={tStyles.checkItem}>
                        <input type="checkbox" className={tStyles.checkbox} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  {section.followUp && (
                    <div className={tStyles.field} style={{ marginTop: 12 }}>
                      <label className={tStyles.fieldLabel}>{section.followUp}</label>
                      {section.rankFields?.map((rf, ri) => (
                        <div key={ri} className={tStyles.rankRow}>
                          <span className={tStyles.rankLabel}>{rf}</span>
                          <input className={tStyles.input} type="text" placeholder="..." />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Table */}
              {section.type === 'table' && (
                <div className={tStyles.tableWrapper}>
                  <table className={tStyles.table}>
                    <thead>
                      <tr>
                        {section.columns.map((col) => (
                          <th key={col}>{col}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {(section.exampleRows || Array.from({ length: section.rows || 4 }, () => Array(section.columns.length).fill(''))).map((row, ri) => (
                        <tr key={ri}>
                          {section.columns.map((col, ci) => (
                            <td key={ci}>
                              {typeof row[ci] === 'string' && row[ci]
                                ? <span className={tStyles.exampleText}>{row[ci]}</span>
                                : <input className={tStyles.tableInput} type="text" placeholder="..." />
                              }
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Definitions list */}
              {section.type === 'definitions-list' && section.exampleTerms && (
                <div className={tStyles.definitionsList}>
                  {section.exampleTerms.map((term, ti) => (
                    <div key={ti} className={tStyles.definitionRow}>
                      <span className={tStyles.definitionText}>{term}</span>
                    </div>
                  ))}
                  <div className={tStyles.addMore}>+ Add additional definitions as needed</div>
                </div>
              )}

              {/* Benefits table */}
              {section.type === 'benefits-table' && (
                <div className={tStyles.tableWrapper}>
                  <table className={tStyles.table}>
                    <thead>
                      <tr>
                        {section.columns.map((col) => <th key={col}>{col}</th>)}
                      </tr>
                    </thead>
                    <tbody>
                      {section.exampleRows.map((row, ri) => (
                        <tr key={ri}>
                          {row.map((cell, ci) => (
                            <td key={ci}><span className={tStyles.exampleText}>{cell}</span></td>
                          ))}
                        </tr>
                      ))}
                      {[1,2].map((n) => (
                        <tr key={`empty-${n}`}>
                          {section.columns.map((_, ci) => (
                            <td key={ci}><input className={tStyles.tableInput} type="text" placeholder="..." /></td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Stages */}
              {section.stages && (
                <ol className={tStyles.stageList}>
                  {section.stages.map((s, si) => (
                    <li key={si}>{s}</li>
                  ))}
                </ol>
              )}

              {/* Signatures */}
              {section.type === 'signatures' && section.parties && (
                <div className={tStyles.signatures}>
                  {section.parties.map((party, pi) => (
                    <div key={pi} className={tStyles.sigRow}>
                      <div className={tStyles.sigLine} />
                      <span className={tStyles.sigLabel}>{party}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Attachments list */}
              {section.type === 'attachments-list' && section.items && (
                <ul className={tStyles.checklist}>
                  {section.items.map((item, ii) => (
                    <li key={ii} className={tStyles.checkItem}>
                      <input type="checkbox" className={tStyles.checkbox} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Scoring matrix */}
              {section.type === 'scoring-matrix' && (
                <div className={tStyles.tableWrapper}>
                  <table className={tStyles.table}>
                    <thead>
                      <tr>
                        <th>Priority</th>
                        {section.dimensions.map((d) => <th key={d}>{d}</th>)}
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.exampleRows.map((row, ri) => (
                        <tr key={ri}>
                          <td><span className={tStyles.exampleText}>{row}</span></td>
                          {section.dimensions.map((_, di) => (
                            <td key={di}><input className={tStyles.tableInput} type="number" min="1" max="5" placeholder="1-5" /></td>
                          ))}
                          <td><input className={tStyles.tableInput} type="text" placeholder="—" /></td>
                        </tr>
                      ))}
                      <tr>
                        <td><input className={tStyles.tableInput} type="text" placeholder="Add priority..." /></td>
                        {section.dimensions.map((_, di) => (
                          <td key={di}><input className={tStyles.tableInput} type="number" min="1" max="5" /></td>
                        ))}
                        <td><input className={tStyles.tableInput} type="text" /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
