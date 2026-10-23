// Shared MIT Renewable Energy Clinic footer, matching the live Wix site's
// contact strip. Pairs with SiteHeader.
import mitLogo from '../assets/mit-logo.png';
import duspLogo from '../assets/dusp-logo.png';
import styles from './SiteFooter.module.css';

const WIX_SITE_URL = 'https://renewable-energy.mit.edu';
const DUSP_URL = 'https://dusp.mit.edu';

export default function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <address className={styles.cell}>
          77 Massachusetts Avenue, Room W41-5105<br />
          Cambridge, MA&nbsp; 02139-4307
        </address>
        <span className={styles.divider} aria-hidden="true" />
        <a className={styles.cell} href="mailto:renewable-energy@mit.edu">renewable-energy@mit.edu</a>
        <span className={styles.divider} aria-hidden="true" />
        <a className={styles.cell} href="tel:+16172532026">(617) 253-2026</a>
      </div>

      <hr className={styles.rule} />

      <div className={styles.logos}>
        <a href={WIX_SITE_URL}>
          <img src={mitLogo} alt="MIT Renewable Energy Clinic" className={styles.mitLogo} />
        </a>
        <a href={DUSP_URL}>
          <img src={duspLogo} alt="DUSP" className={styles.duspLogo} />
        </a>
      </div>

      <a className={styles.accessibility} href="https://accessibility.mit.edu">https://accessibility.mit.edu</a>
    </footer>
  );
}
