import { useState } from 'react';
import styles from './Disclosure.module.css';

// Collapsible "Learn more" panel. Starts closed so the page reads clean;
// expands in place to reveal reference content.
export default function Disclosure({ title, defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`${styles.panel} ${open ? styles.panelOpen : ''}`}>
      <button
        type="button"
        className={styles.header}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
      >
        <span className={styles.title}>{title}</span>
        <span className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>
      {open && <div className={styles.body}>{children}</div>}
    </div>
  );
}
