import { useId, useState } from 'react';
import styles from './Reveal.module.css';

/**
 * Lightweight inline expander for supporting detail.
 *
 * The review asked for more evidence and depth, but all of it visible at once
 * made the pages overwhelming. Detail stays on the page and stays findable —
 * it just isn't all open at the same time.
 */
export default function Reveal({ label, openLabel, count, tone = 'default', defaultOpen = false, children }) {
  const [open, setOpen] = useState(defaultOpen);
  const id = useId();

  return (
    <div className={`${styles.wrap} ${styles[tone] || ''} ${open ? styles.isOpen : ''}`}>
      <button
        type="button"
        className={styles.toggle}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={id}
      >
        <span className={styles.chevron} aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
        <span className={styles.label}>{open && openLabel ? openLabel : label}</span>
        {count != null && !open && <span className={styles.count}>{count}</span>}
      </button>

      {open && <div className={styles.body} id={id}>{children}</div>}
    </div>
  );
}
