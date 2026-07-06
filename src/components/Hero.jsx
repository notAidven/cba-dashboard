import { useState } from 'react';
import { landingPage } from '../data/dashboardContent';
import { IconCheck, IconCross, IconArrowDown } from './Icons';
import Disclosure from './Disclosure';
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

        {/* Lead — the one thing a newcomer needs first (always visible) */}
        <div className={styles.introLead}>
          <p className={styles.sectionLabel}>Start Here</p>
          <h2 className={styles.leadHeading}>{landingPage.whatIsACBA.heading}</h2>
          {landingPage.whatIsACBA.body.split('\n\n').map((para, i) => (
            <p key={i} className={styles.leadBody}>{para}</p>
          ))}
        </div>

        {/* Pick a role, then start (always visible) */}
        <div className={styles.roleBlock}>
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
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={() => scrollTo('steps')}>
              Start with Step 1: Prepare <IconArrowDown />
            </button>
            <button className={styles.btnOutline} onClick={onGlossaryOpen}>
              Open Glossary
            </button>
          </div>
        </div>

        {/* Reference material — collapsed by default so the page reads clean */}
        <div className={styles.learnMore}>
          <p className={styles.sectionLabel}>Learn More About CBAs</p>
          <div className={styles.panelStack}>

            <Disclosure title="What a CBA can — and can't — do">
              <div className={styles.twoCol}>
                <div>
                  <h4 className={styles.panelHeading}>{landingPage.whatCBACanDo.heading}</h4>
                  <ul className={styles.checkList}>
                    {landingPage.whatCBACanDo.items.map((item, i) => (
                      <li key={i}><span className={styles.check}><IconCheck /></span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className={styles.panelHeading}>{landingPage.whatCBACannotDo.heading}</h4>
                  <ul className={styles.crossList}>
                    {landingPage.whatCBACannotDo.items.map((item, i) => (
                      <li key={i}><span className={styles.cross}><IconCross /></span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Disclosure>

            <Disclosure title="Common benefit categories">
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
            </Disclosure>

            <Disclosure title="Who this dashboard is for">
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
            </Disclosure>

            <Disclosure title="How to use this dashboard">
              <p className={styles.sectionDesc}>{landingPage.howToUse.body}</p>
              <ol className={styles.howToList}>
                {landingPage.howToUse.steps.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ol>
            </Disclosure>

          </div>
        </div>

      </div>
    </header>
  );
}
