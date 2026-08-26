// Professional redraws of the two hand-drawn EIA/CBA diagrams (Comment #2, #8).
// Palette matches the toolkit: environmental review = blue, CBA = MIT red.

const ENV = '#1D5E8C';
const CBA = '#A31F34';
const INK = '#0F0F0F';
const MUTED = '#727272';

export function TimelineDiagram() {
  const milestones = [
    'Pre-application /\nsite selection',
    'Application\nfiling',
    'Environmental\nreview',
    'CBA\nnegotiation',
    'Decision',
  ];

  // x positions for the five shared milestone columns
  const colStart = 60;
  const colWidth = 152;

  return (
    <svg
      viewBox="0 0 900 400"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="timeline-diagram-title timeline-diagram-desc"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <title id="timeline-diagram-title">
        Environmental review and CBA negotiation on a shared project timeline
      </title>
      <desc id="timeline-diagram-desc">
        Two parallel tracks run left to right. The upper track shows environmental review moving
        from screening and assessments through scoping, draft review, and final statement. The
        lower track shows CBA work moving from coalition-building through community priorities and
        negotiation. Both converge on a consolidated permit and final agreement at the right.
      </desc>

      {/* ---------- Environmental review track ---------- */}
      <text x="16" y="46" fill={ENV} fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
        Environmental
      </text>
      <text x="16" y="62" fill={ENV} fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
        review (EIA/EIS)
      </text>

      <line x1="132" y1="56" x2="700" y2="56" stroke={ENV} strokeWidth="2" />
      {[212, 364, 516, 668].map((x) => (
        <line key={x} x1={x} y1="46" x2={x} y2="66" stroke={ENV} strokeWidth="2" />
      ))}

      <text x="150" y="42" fill={ENV} fontFamily="Archivo, Helvetica Neue, Arial, sans-serif" fontSize="11" fontWeight="600" letterSpacing="0.01em">
        Screening &amp; assessments
      </text>
      <text x="382" y="42" fill={ENV} fontFamily="Archivo, Helvetica Neue, Arial, sans-serif" fontSize="11" fontWeight="600" letterSpacing="0.01em">
        Scoping · draft review · final EIS
      </text>

      {/* curve down to the consolidated permit box */}
      <path d="M 700 56 Q 800 56 800 130" fill="none" stroke={ENV} strokeWidth="2" />
      <path d="M 796 124 L 800 134 L 804 124 Z" fill={ENV} />

      {/* ---------- Shared milestones ---------- */}
      {milestones.map((label, i) => {
        const x = colStart + i * colWidth;
        return (
          <g key={label}>
            {i > 0 && (
              <line
                x1={x - 10}
                y1="168"
                x2={x - 10}
                y2="212"
                stroke="rgba(61,43,31,.28)"
                strokeWidth="1.5"
              />
            )}
            {label.split('\n').map((line, li) => (
              <text
                key={line}
                x={x + 62}
                y={186 + li * 15}
                fill={INK}
                fontFamily="Archivo, Helvetica Neue, Arial, sans-serif"
                fontSize="11.5"
                fontWeight="600"
                letterSpacing="0.01em"
                textAnchor="middle"
              >
                {line}
              </text>
            ))}
          </g>
        );
      })}

      {/* ---------- CBA negotiation track ---------- */}
      <text x="16" y="316" fill={CBA} fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
        CBA
      </text>
      <text x="16" y="332" fill={CBA} fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="700">
        negotiation
      </text>

      <line x1="132" y1="326" x2="700" y2="326" stroke={CBA} strokeWidth="2" />
      {[212, 364, 516, 668].map((x) => (
        <line key={x} x1={x} y1="316" x2={x} y2="336" stroke={CBA} strokeWidth="2" />
      ))}

      {/* emphasis band over the active negotiation window */}
      <rect x="364" y="321" width="152" height="10" rx="0" fill={CBA} opacity="0.18" />

      <text x="228" y="313" fill={CBA} fontFamily="Archivo, Helvetica Neue, Arial, sans-serif" fontSize="11" fontWeight="600" letterSpacing="0.01em">
        COALITION-BUILDING
      </text>
      <text x="382" y="313" fill={CBA} fontFamily="Archivo, Helvetica Neue, Arial, sans-serif" fontSize="11" fontWeight="600" letterSpacing="0.01em">
        COMMUNITY PRIORITIES
      </text>
      <text x="228" y="356" fill={CBA} fontFamily="IBM Plex Sans, sans-serif" fontSize="11" fontStyle="italic">
        (or shift these earlier if possible)
      </text>

      <path d="M 700 326 Q 800 326 800 250" fill="none" stroke={CBA} strokeWidth="2" />
      <path d="M 796 256 L 800 246 L 804 256 Z" fill={CBA} />

      {/* ---------- Transition marker ---------- */}
      <line
        x1="288"
        y1="70"
        x2="288"
        y2="312"
        stroke={MUTED}
        strokeWidth="1.5"
        strokeDasharray="6 6"
      />

      {/* ---------- Convergence box ---------- */}
      <rect
        x="716"
        y="152"
        width="168"
        height="76"
        rx="0"
        fill="#FFFFFF"
        stroke={INK}
        strokeWidth="1.5"
      />
      <text x="800" y="182" fill={INK} fontFamily="Archivo, Helvetica Neue, Arial, sans-serif" fontSize="11.5" fontWeight="700" letterSpacing="0.01em" textAnchor="middle">
        Consolidated permit
      </text>
      <text x="800" y="200" fill={INK} fontFamily="Archivo, Helvetica Neue, Arial, sans-serif" fontSize="11.5" fontWeight="700" letterSpacing="0.01em" textAnchor="middle">
        / final agreement
      </text>
    </svg>
  );
}

export function FeedbackLoopDiagram() {
  // Circle geometry: centre (310, 230), radius 130, band width 34.
  // Left arc = environmental review flowing upward; right arc = CBA negotiation
  // flowing back down. Arrowheads are drawn as polygons so they do not scale
  // with stroke-width the way SVG markers do.
  return (
    <svg
      viewBox="0 0 620 470"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="feedback-diagram-title feedback-diagram-desc"
      style={{ width: '100%', height: 'auto', display: 'block' }}
    >
      <title id="feedback-diagram-title">
        Environmental review and CBA negotiation as a feedback loop
      </title>
      <desc id="feedback-diagram-desc">
        Two thick curved arrows form a circle. The left arrow, labelled environmental review, flows
        upward and delivers a technical foundation into CBA negotiation. The right arrow, labelled
        CBA negotiation, flows downward and returns mitigation and operationalization to
        environmental review. At the centre sits cumulative impact analysis, which both processes
        feed.
      </desc>

      {/* Left band: environmental review flowing upward */}
      <path
        d="M 265.5 352.2 A 130 130 0 0 1 265.5 107.8"
        fill="none"
        stroke={ENV}
        strokeWidth="34"
        opacity="0.28"
      />
      <polygon
        points="-10,-17 -10,17 20,0"
        fill={ENV}
        opacity="0.42"
        transform="translate(262 110) rotate(-20)"
      />

      {/* Right band: CBA negotiation flowing back down */}
      <path
        d="M 354.5 107.8 A 130 130 0 0 1 354.5 352.2"
        fill="none"
        stroke={CBA}
        strokeWidth="34"
        opacity="0.28"
      />
      <polygon
        points="-10,-17 -10,17 20,0"
        fill={CBA}
        opacity="0.42"
        transform="translate(358 350) rotate(160)"
      />

      {/* Outer process labels */}
      <text
        x="150"
        y="222"
        fill={ENV}
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="0.07em"
        textAnchor="end"
      >
        ENVIRONMENTAL
      </text>
      <text
        x="150"
        y="241"
        fill={ENV}
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="0.07em"
        textAnchor="end"
      >
        REVIEW
      </text>

      <text
        x="470"
        y="222"
        fill={CBA}
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="0.07em"
        textAnchor="start"
      >
        CBA
      </text>
      <text
        x="470"
        y="241"
        fill={CBA}
        fontFamily="IBM Plex Sans, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="0.07em"
        textAnchor="start"
      >
        NEGOTIATION
      </text>

      {/* What each side hands to the other, placed where the arrow lands */}
      <text x="310" y="150" fill={ENV} fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">
        technical
      </text>
      <text x="310" y="168" fill={ENV} fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">
        foundation
      </text>

      <text x="310" y="298" fill={CBA} fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">
        mitigation &amp;
      </text>
      <text x="310" y="316" fill={CBA} fontFamily="IBM Plex Sans, sans-serif" fontSize="13" fontWeight="600" textAnchor="middle">
        operationalization
      </text>

      {/* Centre: cumulative impact analysis */}
      <rect x="214" y="196" width="192" height="68" rx="34" fill="#E4E4E4" opacity="0.8" />
      <text x="310" y="225" fill={INK} fontFamily="IBM Plex Serif, Georgia, serif" fontSize="16" fontWeight="700" textAnchor="middle">
        cumulative impact
      </text>
      <text x="310" y="247" fill={INK} fontFamily="IBM Plex Serif, Georgia, serif" fontSize="16" fontWeight="700" textAnchor="middle">
        analysis
      </text>
    </svg>
  );
}
