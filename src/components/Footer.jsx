import { useState } from 'react';
import { bibliography } from '../data/dashboardContent';
import GlossaryText from './GlossaryText';
import styles from './Footer.module.css';

export default function Footer({ onGlossaryOpen }) {
  const [bibOpen, setBibOpen] = useState(false);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <span className={styles.brandName}>CBA Dashboard</span>
            <span className={styles.brandSub}>MIT Renewable Energy Clinic</span>
            <p className={styles.brandDesc}>
              <GlossaryText>A step-by-step toolkit for negotiating, drafting, and enforcing Community Benefits Agreements.</GlossaryText>{' '}
              <GlossaryText>Built for community organizers, municipal officials, and local advocates.</GlossaryText>
            </p>
          </div>
          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <span className={styles.linkGroupLabel}>Resources</span>
              <button className={styles.footerLink} onClick={onGlossaryOpen}>Glossary</button>
              <button className={styles.footerLink} onClick={() => setBibOpen(!bibOpen)}>
                Bibliography & Acknowledgments {bibOpen ? '▲' : '▼'}
              </button>
            </div>
            <div className={styles.linkGroup}>
              <span className={styles.linkGroupLabel}>Support</span>
              <button className={styles.footerLink} onClick={() => alert('Help documentation coming soon.')}>Help</button>
              <button className={styles.footerLink} onClick={() => alert('Feedback form coming soon.')}>Feedback</button>
            </div>
          </div>
        </div>

        {bibOpen && (
          <div className={styles.bibliography}>
            <h3 className={styles.bibTitle}>Bibliography & Sources</h3>
            <p className={styles.bibNote}>
              This dashboard draws on the following sources. All content has been synthesized and adapted for practical use.
            </p>
            <ol className={styles.bibList}>
              {bibliography.map((entry, i) => (
                <li key={i} className={styles.bibItem}>
                  <span><GlossaryText>{entry.citation}</GlossaryText></span>
                  {entry.url && (
                    <a
                      href={entry.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.bibUrl}
                    >
                      {entry.url}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className={styles.bottomRow}>
          <span className={styles.copyright}>© 2025 MIT Renewable Energy Clinic · CBA Dashboard. Not legal advice.</span>
          <span className={styles.version}>v0.1 — Design review prototype</span>
        </div>
      </div>
    </footer>
  );
}
