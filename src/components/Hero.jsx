import { useState } from 'react';
import { landingPage } from '../data/dashboardContent';
import styles from './Hero.module.css';

const ROLES = [
  { id: 'community', label: 'Community / EJ Advocate' },
  { id: 'municipal', label: 'Municipal Official' },
  { id: 'developer', label: 'Developer' },
];

export default function Hero({ role, onRoleChange, onGlossaryOpen }) {
  const [tooltipId, setTooltipId] = useState(null);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header className={styles.hero}>
      {/* ── Sticky navbar ── */}
      <nav className={styles.navbar}>
        <div className={styles.navBrand}>
          <span className={styles.navLogo}>CBA Dashboard</span>
          <span className={styles.navDivider} />
          <span className={styles.navLogoSub}>MIT Renewable Energy Clinic</span>
        </div>
        <div className={styles.navLinks}>
          <button className={styles.navLink} onClick={() => scrollTo('steps')}>Steps</button>
          <button className={styles.navLink} onClick={() => scrollTo('resources')}>Resources</button>
          <button className={styles.navLink} onClick={onGlossaryOpen}>Glossary</button>
          <button className={styles.navBtn} onClick={() => scrollTo('resources')}>CBA Database →</button>
        </div>
      </nav>

      {/* ── Photo / title strip ── */}
      <div className={styles.photoStrip}>
        <div className={styles.photoStripInner}>
          <div className={styles.photoStripText}>
            <span className={styles.photoStripLabel}>MIT Renewable Energy Clinic · CBA Toolkit</span>
            <h1 className={styles.photoStripTitle}>{landingPage.title}</h1>
            <p className={styles.photoStripSub}>{landingPage.subtitle}</p>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className={styles.content}>

        {/* Intro cards */}
        <div className={styles.introSection}>
          <div className={styles.introCards}>
            <div className={styles.card}>
              <h3 className={styles.cardHeading}>{landingPage.whatIsACBA.heading}</h3>
              {landingPage.whatIsACBA.body.split('\n\n').map((para, i) => (
                <p key={i} className={styles.cardBody}>{para}</p>
              ))}
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardHeading}>{landingPage.whatCBACanDo.heading}</h3>
              <ul className={styles.checkList}>
                {landingPage.whatCBACanDo.items.map((item, i) => (
                  <li key={i}><span className={styles.check}>✓</span>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.card}>
              <h3 className={styles.cardHeading}>{landingPage.whatCBACannotDo.heading}</h3>
              <ul className={styles.crossList}>
                {landingPage.whatCBACannotDo.items.map((item, i) => (
                  <li key={i}><span className={styles.cross}>✗</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Benefit categories */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Benefit Categories</p>
          <h2 className={styles.sectionTitle}>Common Benefit Categories</h2>
          <p className={styles.sectionDesc}>Hover any category to see examples of what communities have negotiated.</p>
          <div className={styles.chips}>
            {landingPage.benefitCategories.map((cat) => (
              <div
                key={cat.label}
                className={styles.chipWrapper}
                onMouseEnter={() => setTooltipId(cat.label)}
                onMouseLeave={() => setTooltipId(null)}
              >
                <span className={styles.chip}>{cat.label}</span>
                {tooltipId === cat.label && (
                  <div className={styles.tooltip}>{cat.tooltip}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Who this is for */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Audiences</p>
          <h2 className={styles.sectionTitle}>{landingPage.whoThisIsFor.heading}</h2>
          <p className={styles.sectionDesc}>{landingPage.whoThisIsFor.body}</p>
          <div className={styles.audienceCards}>
            {landingPage.whoThisIsFor.primary.map((a) => (
              <div key={a.role} className={styles.audienceCard}>
                <strong>{a.role}</strong>
                <p>{a.description}</p>
              </div>
            ))}
          </div>
          <p className={styles.secondaryAudience}>
            <strong>Also useful for: </strong>{landingPage.whoThisIsFor.secondary.join(' · ')}.
          </p>
        </div>

        {/* Role selector */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Your Role</p>
          <h2 className={styles.sectionTitle}>Select Your Role</h2>
          <p className={styles.sectionDesc}>
            Checklist items in each step are filtered to your role. Switch at any time — your selections are preserved.
          </p>
          <div className={styles.roleToggle}>
            {ROLES.map((r) => (
              <button
                key={r.id}
                className={role === r.id ? styles.roleActive : styles.roleBtn}
                onClick={() => onRoleChange(r.id)}
              >
                {r.label}
              </button>
            ))}
          </div>
        </div>

        {/* How to use */}
        <div className={styles.section}>
          <p className={styles.sectionLabel}>Getting Started</p>
          <h2 className={styles.sectionTitle}>{landingPage.howToUse.heading}</h2>
          <p className={styles.sectionDesc}>{landingPage.howToUse.body}</p>
          <ol className={styles.howToList}>
            {landingPage.howToUse.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('steps')}>
              Start with Step 1: Prepare ↓
            </button>
            <button className={styles.btnOutline} onClick={onGlossaryOpen}>
              Open Glossary
            </button>
            <button className={styles.btnOutline} onClick={() => scrollTo('resources')}>
              Resource Library ↓
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}
