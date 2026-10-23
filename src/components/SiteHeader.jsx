// Shared MIT Renewable Energy Clinic header, matching the one on the Geothermal
// Learning Portal (learning-portal/src/components/SiteHeader.tsx) and the live Wix site.
import mitLogo from '../assets/mit-logo.png';
import duspLogo from '../assets/dusp-logo.png';
import styles from './SiteHeader.module.css';

const WIX_SITE_URL = 'https://renewable-energy.mit.edu';
const DUSP_URL = 'https://dusp.mit.edu';

const navLinks = [
  { label: 'Home', href: WIX_SITE_URL },
  { label: 'About', href: `${WIX_SITE_URL}/about` },
  { label: 'Blogs', href: `${WIX_SITE_URL}/blog` },
  { label: 'Publications', href: `${WIX_SITE_URL}/projects` },
  {
    label: 'Research',
    href: `${WIX_SITE_URL}/services-4`,
    highlighted: true,
    dropdown: [
      { label: 'Geothermal Energy Networks', href: `${WIX_SITE_URL}/geothermal-energy-networks` },
      { label: 'CBA Toolkit', href: `${WIX_SITE_URL}/cba-toolkit` },
      { label: 'Community-Owned Solar', href: `${WIX_SITE_URL}/community-owned-solar` },
    ],
  },
];

// lucide-react's CircleChevronDown and Search, inlined since this app doesn't use lucide.
function CircleChevronDown({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="m16 10-4 4-4-4" />
    </svg>
  );
}

function Search({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="m21 21-4.3-4.3" />
      <circle cx="11" cy="11" r="8" />
    </svg>
  );
}

export default function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logos}>
          <a href={WIX_SITE_URL}>
            <img src={mitLogo} alt="MIT Renewable Energy Clinic" className={styles.logo} />
          </a>
          <div className={styles.divider} />
          <a href={DUSP_URL}>
            <img src={duspLogo} alt="DUSP" className={styles.logo} />
          </a>
        </div>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <div key={link.label} className={styles.item}>
              <a
                href={link.href}
                className={`${styles.link} ${link.highlighted ? styles.highlighted : ''}`}
              >
                {link.label}
                {link.dropdown ? <CircleChevronDown className={styles.chevron} /> : null}
              </a>

              {link.dropdown ? (
                <div className={styles.dropdown}>
                  {link.dropdown.map((item) => (
                    <a key={item.label} href={item.href} className={styles.dropdownLink}>
                      {item.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
          <a href={WIX_SITE_URL} aria-label="Search" className={styles.search}>
            <Search className={styles.searchIcon} />
          </a>
        </nav>
      </div>
    </header>
  );
}
