import { landingPage } from '../data/dashboardContent';
import { infoPages } from '../data/infoPages';
import { IconArrowDown } from './Icons';
import GlossaryText from './GlossaryText';
import styles from './Hero.module.css';

const ROLES = [
  { id: 'community', label: 'Community / EJ Advocate' },
  { id: 'municipal', label: 'Municipal Official' },
  { id: 'developer', label: 'Developer' },
];

export default function Hero({ role, onRoleChange, onGlossaryOpen, onOpenInfoPage }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header className={styles.hero} id="home">
      <nav className={styles.navbar} aria-label="Primary navigation">
        <button className={styles.navBrand} type="button" onClick={() => scrollTo('home')}>
          <span className={styles.navMark}>CBA</span>
          <span className={styles.navBrandText}>
            <span className={styles.navLogo}>CBA Dashboard</span>
            <span className={styles.navLogoSub}>MIT Renewable Energy Clinic</span>
          </span>
        </button>
        <div className={styles.navLinks}>
          <button className={styles.navLink} onClick={() => scrollTo('before-you-begin')}>Before you begin</button>
          <button className={styles.navLink} onClick={() => scrollTo('steps')}>Six steps</button>
          <button className={styles.navLink} onClick={() => scrollTo('resources')}>Resources</button>
          <button className={styles.navLink} onClick={onGlossaryOpen}>Glossary</button>
        </div>
      </nav>

      <section className={styles.heroBanner} aria-labelledby="page-title">
        <div className={styles.heroBannerInner}>
          <div className={styles.heroCopy}>
            <span className={styles.heroKicker}>MIT Renewable Energy Clinic · Community development toolkit</span>
            <h1 className={styles.heroTitle} id="page-title">
              <GlossaryText>Community Benefits Agreement</GlossaryText><br />
              Dashboard
            </h1>
            <p className={styles.heroTagline}>{landingPage.tagline}</p>
            <p className={styles.heroSubtitle}>
              <GlossaryText>{landingPage.subtitle}</GlossaryText>
            </p>
            <div className={styles.heroActions}>
              <button className={styles.btnPrimary} onClick={() => scrollTo('overview-topics')}>
                Explore the overview <IconArrowDown />
              </button>
              <button className={styles.btnSecondary} onClick={() => scrollTo('steps')}>
                Begin the six steps
              </button>
            </div>
          </div>

          <aside className={styles.heroNote}>
            <span className={styles.heroNoteLabel}>Choose your starting point</span>
            <p>Select an overview card for focused guidance, or move directly into the working six-step process.</p>
          </aside>
        </div>
      </section>

      <section className={styles.mission} aria-labelledby="mission-heading">
        <div className={styles.missionInner}>
          <div className={styles.missionIntro}>
            <p className={styles.missionLabel}>{landingPage.mission.label}</p>
            <h2 className={styles.missionHeading} id="mission-heading">
              {landingPage.mission.heading}
            </h2>
          </div>
          <div className={styles.missionCopy}>
            <p className={styles.missionLead}>
              <GlossaryText>{landingPage.mission.lead}</GlossaryText>
            </p>
            {landingPage.mission.body.map((paragraph) => (
              <p key={paragraph} className={styles.missionBody}>
                <GlossaryText>{paragraph}</GlossaryText>
              </p>
            ))}
            <ul className={styles.missionPrinciples}>
              {landingPage.mission.principles.map((principle) => (
                <li key={principle}><GlossaryText>{principle}</GlossaryText></li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className={styles.content}>
        <section className={styles.directory} id="overview-topics" aria-labelledby="directory-heading">
          <div className={styles.sectionIntro}>
            <p className={styles.sectionLabel}>Dashboard orientation</p>
            <h2 className={styles.sectionHeading} id="directory-heading">Start with the question you need answered</h2>
            <p className={styles.sectionDescription}>
              Each topic opens a focused page, so you can understand the fundamentals without searching through the full dashboard.
            </p>
          </div>

          <div className={styles.cardGrid}>
            {infoPages.map((page) => (
              <button
                type="button"
                key={page.id}
                className={`${styles.overviewCard} ${page.wide ? styles.wideCard : ''}`}
                style={{ '--card-color': page.color, '--card-tint': page.tint }}
                onClick={() => onOpenInfoPage(page.id)}
              >
                <span className={styles.cardTopline}>
                  <span>Orientation {page.number}</span>
                  <span aria-hidden="true">↗</span>
                </span>
                <span className={styles.cardTitle}>{page.title}</span>
                <span className={styles.cardSummary}>{page.summary}</span>
                <span className={styles.cardAction}>Open topic <span aria-hidden="true">→</span></span>
              </button>
            ))}
          </div>
        </section>

        <section className={styles.workSetup} aria-labelledby="role-heading">
          <div className={styles.roleIntro}>
            <p className={styles.sectionLabel}>Configure your workflow</p>
            <h2 className={styles.sectionHeading}>Set the dashboard to your role</h2>
            <p className={styles.sectionDescription}>
              Your selection changes the suggested checklist inside every step while keeping the shared guidance and resources visible.
            </p>
            <p className={styles.glossaryNote}>
              Blue terms such as <GlossaryText>Community Benefits Agreement</GlossaryText> open a definition when selected.
            </p>
          </div>

          <aside className={styles.roleBlock} aria-labelledby="role-heading">
            <p className={styles.roleLabel}>Personalize your checklist</p>
            <h2 className={styles.roleHeading} id="role-heading">Select your role</h2>
            <div className={styles.roleToggle} aria-label="Dashboard role">
              {ROLES.map((roleOption) => (
                <button
                  key={roleOption.id}
                  className={role === roleOption.id ? styles.roleActive : styles.roleBtn}
                  onClick={() => onRoleChange(roleOption.id)}
                  aria-pressed={role === roleOption.id}
                >
                  {roleOption.label}
                </button>
              ))}
            </div>
            <button className={styles.roleStart} onClick={() => scrollTo('steps')}>
              Start with Step 1: Prepare <span aria-hidden="true">→</span>
            </button>
          </aside>
        </section>
      </div>
    </header>
  );
}
