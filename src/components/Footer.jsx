import { useState } from 'react';
import { bibliography } from '../data/dashboardContent';
import GlossaryText from './GlossaryText';
import styles from './Footer.module.css';

export default function Footer({ onGlossaryOpen, onOpenOrientation }) {
  const [bibOpen, setBibOpen] = useState(false);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <div className={styles.brand}>
            <span className={styles.brandName}>CBA Toolkit</span>
            <span className={styles.brandSub}>MIT Renewable Energy Clinic</span>
            <p className={styles.brandDesc}>
              <GlossaryText>
                A step-by-step toolkit for negotiating, drafting, monitoring, and enforcing
                Community Benefits Agreements. Written for community organizers and
                environmental justice advocates.
              </GlossaryText>
            </p>
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            <div className={styles.linkGroup}>
              <span className={styles.linkGroupLabel}>Toolkit</span>
              <button className={styles.footerLink} onClick={onOpenOrientation}>Orientation</button>
              <button className={styles.footerLink} onClick={() => scrollTo('before-you-begin')}>Before you begin</button>
              <button className={styles.footerLink} onClick={() => scrollTo('steps')}>Six steps</button>
              <button className={styles.footerLink} onClick={() => scrollTo('resources')}>Resource Library</button>
            </div>
            <div className={styles.linkGroup}>
              <span className={styles.linkGroupLabel}>Reference</span>
              <button className={styles.footerLink} onClick={onGlossaryOpen}>Glossary</button>
              <button
                className={styles.footerLink}
                onClick={() => setBibOpen(!bibOpen)}
                aria-expanded={bibOpen}
              >
                Bibliography {bibOpen ? '−' : '+'}
              </button>
              <a
                className={styles.footerLink}
                href="https://scienceimpact.mit.edu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT Science Impact Collaborative ↗
              </a>
            </div>
          </nav>
        </div>

        {bibOpen && (
          <div className={styles.bibliography}>
            <h3 className={styles.bibTitle}>Bibliography and sources</h3>
            <p className={styles.bibNote}>
              This toolkit draws on the following sources. Content has been synthesized and
              adapted for practical use; the underlying work is cited here so it can be read
              directly.
            </p>
            <ol className={styles.bibList}>
              {bibliography.map((entry) => (
                <li key={entry.citation} className={styles.bibItem}>
                  <span>{entry.citation}</span>
                  {entry.url && (
                    <a href={entry.url} target="_blank" rel="noopener noreferrer" className={styles.bibUrl}>
                      {entry.url}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className={styles.bottomRow}>
          <span className={styles.copyright}>
            © 2026 MIT Renewable Energy Clinic · CBA Toolkit. This is guidance, not legal advice.
          </span>
          <span className={styles.version}>v0.2 — design review prototype</span>
        </div>
      </div>
    </footer>
  );
}
