// Inline SVG icons — replaces Unicode/emoji glyphs so rendering is identical
// across platforms (no iOS-native emoji). All icons inherit `currentColor`.

const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.75,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

export function IconDoc({ size = 14, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h6" />
    </svg>
  );
}

export function IconDatabase({ size = 28, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </svg>
  );
}

export function IconCheck({ size = 14, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.5} aria-hidden="true">
      <path d="M5 12.5 10 17.5 19 6.5" />
    </svg>
  );
}

export function IconCross({ size = 14, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2.5} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconClose({ size = 16, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base} strokeWidth={2} aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function IconArrowRight({ size = 14, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function IconArrowDown({ size = 14, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M12 5v14M6 13l6 6 6-6" />
    </svg>
  );
}

export function IconExternal({ size = 12, className }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 24 24" {...base} aria-hidden="true">
      <path d="M14 4h6v6" />
      <path d="M20 4 11 13" />
      <path d="M19 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
    </svg>
  );
}
