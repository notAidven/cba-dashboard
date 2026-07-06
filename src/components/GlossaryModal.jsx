import { useState } from 'react';
import { glossary } from '../data/dashboardContent';
import { IconClose } from './Icons';
import styles from './Modal.module.css';

export default function GlossaryModal({ onClose }) {
  const [search, setSearch] = useState('');
  const filtered = glossary.filter(
    (g) =>
      !search ||
      g.term.toLowerCase().includes(search.toLowerCase()) ||
      g.definition.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={styles.overlay} onClick={(e) => e.target === e.currentTarget && onClose()}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <div>
            <h2 className={styles.modalTitle}>Glossary</h2>
            <p className={styles.modalSubtitle}>{glossary.length} terms defined</p>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close"><IconClose size={18} /></button>
        </div>

        <div className={styles.modalSearch}>
          <input
            className={styles.search}
            type="text"
            placeholder="Search glossary..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
          />
        </div>

        <div className={styles.modalBody}>
          {filtered.length === 0 && (
            <p className={styles.empty}>No terms match your search.</p>
          )}
          <dl className={styles.glossaryList}>
            {filtered.map((g) => (
              <div key={g.term} className={styles.glossaryItem}>
                <dt className={styles.glossaryTerm}>{g.term}</dt>
                <dd className={styles.glossaryDef}>{g.definition}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
