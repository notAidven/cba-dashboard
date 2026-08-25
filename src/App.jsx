import { useState } from 'react';
import Hero from './components/Hero';
import BeforeYouBegin from './components/BeforeYouBegin';
import StepAccordion from './components/StepAccordion';
import ResourceLibrary from './components/ResourceLibrary';
import Footer from './components/Footer';
import GlossaryModal from './components/GlossaryModal';
import TemplateModal from './components/TemplateModal';
import GlossaryText, { GlossaryLinkScope } from './components/GlossaryText';
import InfoPage from './components/InfoPage';
import { steps } from './data/dashboardContent';
import styles from './App.module.css';

// The dashboard→toolkit review asked us to stop offering Municipal/Developer role
// personalization and stick to a single audience, so this is fixed rather than user-selectable.
const ROLE = 'community';

export default function App() {
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [openStep, setOpenStep] = useState(null);
  const [activeInfoPage, setActiveInfoPage] = useState(null);

  const openInfoPage = (pageId) => {
    setActiveInfoPage(pageId);
    window.scrollTo(0, 0);
  };

  const returnToDashboard = () => {
    setActiveInfoPage(null);
    window.scrollTo(0, 0);
  };

  const returnToSection = (sectionId) => {
    setActiveInfoPage(null);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };

  return (
    <div className={styles.app}>
      {activeInfoPage ? (
        <GlossaryLinkScope scopeKey={activeInfoPage}>
          <InfoPage
            pageId={activeInfoPage}
            onBack={returnToDashboard}
            onGlossaryOpen={() => setGlossaryOpen(true)}
            onGoToSteps={() => returnToSection('steps')}
            onGoToResources={() => returnToSection('resources')}
          />
        </GlossaryLinkScope>
      ) : (
        <GlossaryLinkScope scopeKey="landing">
          <Hero
            onGlossaryOpen={() => setGlossaryOpen(true)}
            onOpenInfoPage={openInfoPage}
          />

          <BeforeYouBegin />

          <section className={styles.stepsSection} id="steps">
            <div className={styles.container}>
              <div className={styles.stepsIntro}>
                <div>
                  <p className={styles.sectionLabel}><GlossaryText>The CBA process</GlossaryText></p>
                  <h2 className={styles.sectionHeading}>Six steps to a strong agreement</h2>
                  <p className={styles.sectionSubtext}>
                    <GlossaryText>Work through each step in order. Expand a step to access professional guidance, a suggested checklist, and working templates.</GlossaryText>
                  </p>
                </div>
                <aside className={styles.glossaryHint}>
                  <span>Glossary tip</span>
                  <p>Select any blue term, such as <GlossaryText>Monitoring Committee</GlossaryText>, for a definition.</p>
                </aside>
              </div>

              <ol className={styles.processRail} aria-label="Six-step CBA process">
                {steps.map((step) => (
                  <li key={step.id} style={{ '--step-color': step.color }}>
                    <span>{step.number}</span>
                    <strong>{step.title}</strong>
                  </li>
                ))}
              </ol>

              <div className={styles.stepList}>
                {steps.map((step) => (
                  <StepAccordion
                    key={step.id}
                    step={step}
                    role={ROLE}
                    isOpen={openStep === step.id}
                    onToggle={() => setOpenStep(openStep === step.id ? null : step.id)}
                    onOpenTemplate={setActiveTemplate}
                  />
                ))}
              </div>
            </div>
          </section>

          <ResourceLibrary onOpenTemplate={setActiveTemplate} />

          <Footer onGlossaryOpen={() => setGlossaryOpen(true)} />
        </GlossaryLinkScope>
      )}

      {glossaryOpen && (
        <GlossaryModal onClose={() => setGlossaryOpen(false)} />
      )}

      {activeTemplate && (
        <TemplateModal
          templateId={activeTemplate}
          onClose={() => setActiveTemplate(null)}
        />
      )}
    </div>
  );
}
