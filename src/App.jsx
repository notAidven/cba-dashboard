import { useState } from 'react';
import Hero from './components/Hero';
import BeforeYouBegin from './components/BeforeYouBegin';
import StepAccordion from './components/StepAccordion';
import ResourceLibrary from './components/ResourceLibrary';
import Footer from './components/Footer';
import GlossaryModal from './components/GlossaryModal';
import TemplateModal from './components/TemplateModal';
import GlossaryText, { GlossaryLinkScope } from './components/GlossaryText';
import Orientation from './components/Orientation';
import { steps } from './data/dashboardContent';
import styles from './App.module.css';

// The review asked us to drop Municipal/Developer role personalization and write for a
// single audience — the community advocate — so this is fixed rather than user-selectable.
const ROLE = 'community';

export default function App() {
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [openStep, setOpenStep] = useState(null);
  const [showOrientation, setShowOrientation] = useState(false);
  const [orientationSection, setOrientationSection] = useState(null);

  // Called bare from nav/CTAs, or with a section id from the contents list on the
  // landing page, which opens the page scrolled to that section.
  const openOrientation = (sectionId) => {
    setOrientationSection(typeof sectionId === 'string' ? sectionId : null);
    setShowOrientation(true);
    window.scrollTo(0, 0);
  };

  const returnToToolkit = () => {
    setShowOrientation(false);
    window.scrollTo(0, 0);
  };

  const returnToSection = (sectionId) => {
    setShowOrientation(false);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      });
    });
  };

  return (
    <div className={styles.app}>
      {showOrientation ? (
        <GlossaryLinkScope scopeKey="orientation">
          <Orientation
            initialSection={orientationSection}
            onBack={returnToToolkit}
            onGlossaryOpen={() => setGlossaryOpen(true)}
            onGoToSteps={() => returnToSection('steps')}
            onGoToResources={() => returnToSection('resources')}
          />
        </GlossaryLinkScope>
      ) : (
        <GlossaryLinkScope scopeKey="landing">
          <Hero onGlossaryOpen={() => setGlossaryOpen(true)} onOpenOrientation={openOrientation} />

          <BeforeYouBegin />

          <section className={styles.stepsSection} id="steps">
            <div className={styles.container}>
              <div className={styles.stepsIntro}>
                <div>
                  <p className={styles.sectionLabel}>The CBA process</p>
                  <h2 className={styles.sectionHeading}>Six steps to a strong agreement</h2>
                  <p className={styles.sectionSubtext}>
                    <GlossaryText>Work through each step in order. Expand a step for guidance, a suggested checklist you can tick off, and the working templates that belong to that stage.</GlossaryText>
                  </p>
                </div>
                <aside className={styles.glossaryHint}>
                  <span>Glossary</span>
                  {/* Don't name a term here — it may already be linked further up the
                      page, and each term is only linked once per page. */}
                  <p>Terms shown in blue open a definition. Each one is linked the first time it appears on a page; the full glossary is in the top bar.</p>
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

          <Footer onGlossaryOpen={() => setGlossaryOpen(true)} onOpenOrientation={openOrientation} />
        </GlossaryLinkScope>
      )}

      {glossaryOpen && <GlossaryModal onClose={() => setGlossaryOpen(false)} />}

      {activeTemplate && (
        <TemplateModal templateId={activeTemplate} onClose={() => setActiveTemplate(null)} />
      )}
    </div>
  );
}
