import { useEffect } from 'react';
import { landingPage } from '../data/dashboardContent';
import { getInfoPage } from '../data/infoPages';
import GlossaryText from './GlossaryText';
import styles from './InfoPage.module.css';

function DefinitionContent() {
  return (
    <div className={styles.proseStack}>
      {landingPage.whatIsACBA.body.split('\n\n').map((paragraph, index) => (
        <p key={paragraph} className={index === 0 ? styles.leadParagraph : undefined}>
          <GlossaryText>{paragraph}</GlossaryText>
        </p>
      ))}
      <aside className={styles.keyPoint}>
        <span>Key distinction</span>
        <p>
          <GlossaryText>A CBA turns negotiated commitments into an enforceable agreement signed by the participating parties.</GlossaryText>
        </p>
      </aside>
    </div>
  );
}

function ExpectationList({ items, tone }) {
  return (
    <ol className={styles.expectationList}>
      {items.map((item, index) => (
        <li key={item} className={styles.expectationItem}>
          <span className={styles.itemNumber}>{String(index + 1).padStart(2, '0')}</span>
          <div>
            <span className={`${styles.itemMarker} ${styles[tone]}`} aria-hidden="true" />
            <p><GlossaryText>{item}</GlossaryText></p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function ReasonsContent() {
  return (
    <div className={styles.reasonGrid}>
      {landingPage.whyYouMightWantOne.items.map((item) => (
        <article key={item.number} className={styles.reasonCard}>
          <span>{String(item.number).padStart(2, '0')}</span>
          <h2>{item.title}</h2>
          <p><GlossaryText>{item.description}</GlossaryText></p>
        </article>
      ))}
    </div>
  );
}

function BenefitsContent() {
  return (
    <div className={styles.benefitGrid}>
      {landingPage.benefitCategories.map((category) => (
        <article key={category.label} className={styles.benefitCard}>
          <h2>{category.label}</h2>
          <p><GlossaryText>{category.tooltip}</GlossaryText></p>
        </article>
      ))}
    </div>
  );
}

function AudienceContent() {
  return (
    <div className={styles.proseStack}>
      <p className={styles.leadParagraph}><GlossaryText>{landingPage.whoThisIsFor.body}</GlossaryText></p>
      <div className={styles.audienceGrid}>
        {landingPage.whoThisIsFor.primary.map((audience) => (
          <article key={audience.role} className={styles.audienceCard}>
            <h2><GlossaryText>{audience.role}</GlossaryText></h2>
            <p><GlossaryText>{audience.description}</GlossaryText></p>
          </article>
        ))}
      </div>
      <aside className={styles.secondaryAudience}>
        <h2>Also useful for</h2>
        <ul>
          {landingPage.whoThisIsFor.secondary.map((audience) => (
            <li key={audience}><GlossaryText>{audience}</GlossaryText></li>
          ))}
        </ul>
      </aside>
    </div>
  );
}

function HowToContent({ onGoToSteps }) {
  return (
    <div className={styles.proseStack}>
      <p className={styles.leadParagraph}><GlossaryText>{landingPage.howToUse.body}</GlossaryText></p>
      <ol className={styles.howToList}>
        {landingPage.howToUse.steps.map((step, index) => (
          <li key={step}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p><GlossaryText>{step}</GlossaryText></p>
          </li>
        ))}
      </ol>
      <button type="button" className={styles.inlineAction} onClick={onGoToSteps}>
        Begin with Step 1: Prepare <span aria-hidden="true">→</span>
      </button>
    </div>
  );
}

function PageContent({ pageId, onGoToSteps }) {
  switch (pageId) {
    case 'what-is':
      return <DefinitionContent />;
    case 'can-do':
      return <ExpectationList items={landingPage.whatCBACanDo.items} tone="positive" />;
    case 'cannot-do':
      return <ExpectationList items={landingPage.whatCBACannotDo.items} tone="caution" />;
    case 'why-want':
      return <ReasonsContent />;
    case 'benefit-categories':
      return <BenefitsContent />;
    case 'who-for':
      return <AudienceContent />;
    case 'how-to':
      return <HowToContent onGoToSteps={onGoToSteps} />;
    default:
      return null;
  }
}

export default function InfoPage({ pageId, onBack, onGlossaryOpen, onGoToSteps, onGoToResources }) {
  const page = getInfoPage(pageId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pageId]);

  if (!page) return null;

  return (
    <div className={styles.page} style={{ '--page-color': page.color, '--page-tint': page.tint }}>
      <nav className={styles.navbar} aria-label="Information page navigation">
        <button type="button" className={styles.brand} onClick={onBack}>
          <span className={styles.brandMark}>CBA</span>
          <span>
            <strong>CBA Dashboard</strong>
            <small>MIT Renewable Energy Clinic</small>
          </span>
        </button>
        <div className={styles.navActions}>
          <button type="button" onClick={onGoToSteps}>Six steps</button>
          <button type="button" onClick={onGoToResources}>Resources</button>
          <button type="button" onClick={onGlossaryOpen}>Glossary</button>
        </div>
      </nav>

      <header className={styles.pageHeader}>
        <div className={styles.headerInner}>
          <button type="button" className={styles.backButton} onClick={onBack}>
            <span aria-hidden="true">←</span> All overview topics
          </button>
          <div className={styles.titleRow}>
            <span className={styles.pageNumber}>{page.number}</span>
            <div>
              <p className={styles.eyebrow}>Dashboard orientation</p>
              <h1><GlossaryText>{page.title}</GlossaryText></h1>
              <p className={styles.pageSummary}><GlossaryText>{page.summary}</GlossaryText></p>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <PageContent pageId={pageId} onGoToSteps={onGoToSteps} />
      </main>

      <footer className={styles.pageFooter}>
        <div>
          <p>Continue exploring the dashboard</p>
          <span>Return to the overview or move into the working six-step process.</span>
        </div>
        <div className={styles.footerActions}>
          <button type="button" className={styles.secondaryButton} onClick={onBack}>Overview topics</button>
          <button type="button" className={styles.primaryButton} onClick={onGoToSteps}>Go to the six steps</button>
        </div>
      </footer>
    </div>
  );
}
