import { landingPage } from '../data/dashboardContent';
import { infoPages } from '../data/infoPages';
import { IconArrowDown } from './Icons';
import GlossaryText from './GlossaryText';
import styles from './Hero.module.css';

export default function Hero({ onGlossaryOpen, onOpenInfoPage }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <header className={styles.hero} id="home">
      <nav className={styles.navbar} aria-label="Primary navigation">
        <button className={styles.navBrand} type="button" onClick={() => scrollTo('home')}>
          <span className={styles.navMark}>CBA</span>
          <span className={styles.navBrandText}>
            <span className={styles.navLogo}>CBA Toolkit</span>
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
              Community Benefits Agreement<br />
              Toolkit
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
            <p className={styles.sectionLabel}>Toolkit orientation</p>
            <h2 className={styles.sectionHeading} id="directory-heading">Start with the question you need answered</h2>
            <p className={styles.sectionDescription}>
              Seven short topics, in order. Each one opens a focused page — read straight through, or jump to the one you need.
            </p>
            <p className={styles.glossaryNote}>
              Blue terms such as <GlossaryText>Community Benefits Agreement</GlossaryText> open a definition when selected.
            </p>
          </div>

          <ol className={styles.orientationList}>
            {infoPages.map((page) => (
              <li key={page.id} className={styles.orientationRow} style={{ '--card-color': page.color }}>
                <span className={styles.orientationNumber}>{page.number}</span>
                <div className={styles.orientationBody}>
                  <button
                    type="button"
                    className={styles.orientationTitle}
                    onClick={() => onOpenInfoPage(page.id)}
                  >
                    {page.title}
                  </button>
                  <p className={styles.orientationSummary}>{page.summary}</p>
                  <button
                    type="button"
                    className={styles.orientationAction}
                    onClick={() => onOpenInfoPage(page.id)}
                  >
                    Read this topic <span aria-hidden="true">→</span>
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </header>
  );
}
