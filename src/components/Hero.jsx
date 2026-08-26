import { landingPage } from '../data/dashboardContent';
import { orientation } from '../data/orientation';
import GlossaryText from './GlossaryText';
import styles from './Hero.module.css';

export default function Hero({ onGlossaryOpen, onOpenOrientation }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header className={styles.hero} id="home">
      <nav className={styles.navbar} aria-label="Primary navigation">
        <button className={styles.navBrand} type="button" onClick={() => scrollTo('home')}>
          <span className={styles.navLogo}>CBA Toolkit</span>
          <span className={styles.navLogoSub}>MIT Renewable Energy Clinic</span>
        </button>
        <div className={styles.navLinks}>
          <button className={styles.navLink} onClick={onOpenOrientation}>Orientation</button>
          <button className={styles.navLink} onClick={() => scrollTo('before-you-begin')}>Before you begin</button>
          <button className={styles.navLink} onClick={() => scrollTo('steps')}>Six steps</button>
          <button className={styles.navLink} onClick={() => scrollTo('resources')}>Resources</button>
          <button className={styles.navLink} onClick={onGlossaryOpen}>Glossary</button>
        </div>
      </nav>

      {/* Title block: rules and scale, in the manner of the SIC site. */}
      <section className={styles.titleBlock} aria-labelledby="page-title">
        <p className={styles.kicker}>MIT Renewable Energy Clinic</p>
        <h1 className={styles.title} id="page-title">
          Community Benefits<br />Agreement Toolkit
        </h1>
        <p className={styles.tagline}>{landingPage.tagline}</p>
        <div className={styles.titleFoot}>
          <p className={styles.subtitle}>
            <GlossaryText>{landingPage.subtitle}</GlossaryText>
          </p>
          <div className={styles.actions}>
            <button className={styles.btnPrimary} onClick={onOpenOrientation}>
              Start with the orientation <span aria-hidden="true">→</span>
            </button>
            <button className={styles.btnSecondary} onClick={() => scrollTo('steps')}>
              Skip to the six steps
            </button>
          </div>
        </div>
      </section>

      {/* Philosophy — review comment #9 asked for this immediately below the title
          block, in a distinct colour section. */}
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

      {/* One orientation entry point, replacing the seven equal tiles. */}
      <section className={styles.orientationEntry} id="orientation-entry">
        <div className={styles.entryInner}>
          <div className={styles.entryCopy}>
            <p className={styles.entryLabel}>New to this?</p>
            <h2 className={styles.entryHeading}>Read the orientation first</h2>
            <p className={styles.entryText}>
              <GlossaryText>{orientation.standfirst}</GlossaryText>
            </p>
            <button className={styles.entryCta} onClick={onOpenOrientation}>
              Open the orientation <span aria-hidden="true">→</span>
            </button>
          </div>
          <ol className={styles.entryContents} aria-label="What the orientation covers">
            {orientation.sections.map((section) => (
              <li key={section.id}>
                <span>{section.number}</span>
                <button type="button" onClick={onOpenOrientation}>{section.title}</button>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </header>
  );
}
