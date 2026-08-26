import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { beforeYouBegin, stateLawExamples } from '../data/dashboardContent';
import { TimelineDiagram, FeedbackLoopDiagram } from './ReviewDiagrams';
import { IconClose } from './Icons';
import GlossaryText from './GlossaryText';
import styles from './BeforeYouBegin.module.css';

const DIAGRAMS = {
  timeline: TimelineDiagram,
  feedback: FeedbackLoopDiagram,
};

function StateModal({ example, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} role="presentation" onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="state-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className={styles.modalClose} onClick={onClose} aria-label="Close">
          <IconClose />
        </button>
        <p className={styles.modalKicker}>State requirement</p>
        <h3 className={styles.modalTitle} id="state-modal-title">{example.state}</h3>
        <p className={styles.modalBody}><GlossaryText>{example.body}</GlossaryText></p>
        <div className={styles.modalTradeoff}>
          <span>What to watch for</span>
          <p><GlossaryText>{example.tradeoff}</GlossaryText></p>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function LegalBox({ box }) {
  const [openState, setOpenState] = useState(null);
  const active = stateLawExamples.find((s) => s.id === openState);

  return (
    <>
      <div className={styles.subBlock}>
        <p className={styles.subHeading}>{box.examplesHeading}</p>
        <p className={styles.subNote}>{box.examplesNote}</p>
        <div className={styles.stateGrid}>
          {stateLawExamples.map((example) => (
            <button
              key={example.id}
              type="button"
              className={styles.stateChip}
              onClick={() => setOpenState(example.id)}
              aria-haspopup="dialog"
            >
              <span className={styles.stateName}>{example.state}</span>
              <span className={styles.stateSummary}>{example.summary}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.subBlock}>
        <p className={styles.subHeading}>{box.fallback.heading}</p>
        <p className={styles.subNote}>{box.fallback.intro}</p>
        <ul className={styles.bulletList}>
          {box.fallback.items.map((item) => (
            <li key={item}><GlossaryText>{item}</GlossaryText></li>
          ))}
        </ul>
      </div>

      <div className={styles.twoUp}>
        <div className={styles.subBlock}>
          <p className={styles.subHeading}>{box.research.heading}</p>
          <ul className={styles.bulletList}>
            {box.research.items.map((item) => (
              <li key={item}><GlossaryText>{item}</GlossaryText></li>
            ))}
          </ul>
        </div>
        <div className={styles.subBlock}>
          <p className={styles.subHeading}>{box.outreach.heading}</p>
          <p className={styles.subNote}>{box.outreach.intro}</p>
          <ul className={styles.bulletList}>
            {box.outreach.items.map((item) => (
              <li key={item}><GlossaryText>{item}</GlossaryText></li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.checklistBlock}>
        <p className={styles.checklistHeading}>{box.checklist.heading}</p>
        <ul className={styles.checklistItems}>
          {box.checklist.items.map((item) => (
            <li key={item}>
              <span className={styles.checkBoxMark} aria-hidden="true" />
              <GlossaryText>{item}</GlossaryText>
            </li>
          ))}
        </ul>
      </div>

      {active && <StateModal example={active} onClose={() => setOpenState(null)} />}
    </>
  );
}

function ReviewBox({ box }) {
  return (
    <>
      <div className={styles.subBlock}>
        <p className={styles.subHeading}>{box.keyPointsHeading}</p>
        <ul className={styles.keyPoints}>
          {box.keyPoints.map((point) => (
            <li key={point.title}>
              {/* Bold lead-ins read as headings — glossary links stay in the detail line. */}
              <strong>{point.title}</strong>
              <span><GlossaryText>{point.detail}</GlossaryText></span>
            </li>
          ))}
        </ul>
      </div>

      {box.diagrams.map((diagram) => {
        const Diagram = DIAGRAMS[diagram.id];
        if (!Diagram) return null;
        return (
          <figure key={diagram.id} className={styles.figure}>
            <figcaption className={styles.figureTitle}>{diagram.title}</figcaption>
            <div className={styles.figureCanvas}>
              <Diagram />
            </div>
            <figcaption className={styles.figureCaption}>
              <GlossaryText>{diagram.caption}</GlossaryText>
            </figcaption>
          </figure>
        );
      })}
    </>
  );
}

export default function BeforeYouBegin() {
  return (
    <section className={styles.section} id="before-you-begin">
      <div className={styles.container}>
        <div className={styles.intro}>
          <p className={styles.label}>{beforeYouBegin.label}</p>
          <h2 className={styles.heading}>{beforeYouBegin.heading}</h2>
          <p className={styles.introText}><GlossaryText>{beforeYouBegin.intro}</GlossaryText></p>
        </div>

        <div className={styles.boxStack}>
          {beforeYouBegin.boxes.map((box) => (
            <article
              key={box.id}
              className={styles.box}
              style={{ '--box-color': box.color, '--box-tint': box.tint }}
            >
              <header className={styles.boxHeader}>
                <span className={styles.boxNumber}>{box.number}</span>
                <h3 className={styles.boxTitle}>{box.title}</h3>
              </header>

              <p className={styles.boxLead}><GlossaryText>{box.lead}</GlossaryText></p>
              {box.body.map((paragraph) => (
                <p key={paragraph} className={styles.boxBody}>
                  <GlossaryText>{paragraph}</GlossaryText>
                </p>
              ))}

              {box.id === 'legal-requirements' ? <LegalBox box={box} /> : <ReviewBox box={box} />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
