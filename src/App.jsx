import { useState } from 'react';
import Hero from './components/Hero';
import StepAccordion from './components/StepAccordion';
import ResourceLibrary from './components/ResourceLibrary';
import Footer from './components/Footer';
import GlossaryModal from './components/GlossaryModal';
import TemplateModal from './components/TemplateModal';
import { steps } from './data/dashboardContent';
import styles from './App.module.css';

export default function App() {
  const [role, setRole] = useState('community');
  const [glossaryOpen, setGlossaryOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(null);
  const [openStep, setOpenStep] = useState(null);

  return (
    <div className={styles.app}>
      <Hero
        role={role}
        onRoleChange={setRole}
        onGlossaryOpen={() => setGlossaryOpen(true)}
      />

      <section className={styles.stepsSection} id="steps">
        <div className={styles.container}>
          <p className={styles.sectionLabel}>The CBA Process</p>
          <h2 className={styles.sectionHeading}>Six Steps to a Strong Agreement</h2>
          <p className={styles.sectionSubtext}>
            Work through each step in order. Click to expand a step and access its guidance, checklists, and templates.
          </p>
          <div className={styles.stepList}>
            {steps.map((step) => (
              <StepAccordion
                key={step.id}
                step={step}
                role={role}
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
