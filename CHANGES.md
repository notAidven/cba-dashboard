# Dashboard Edits — Implementation Notes

Implements the review comments in `Dashboard_Edits__2_.pdf`. Comment numbers below match
the numbering in that document.

## New files

| File | Purpose |
| --- | --- |
| `src/components/BeforeYouBegin.jsx` / `.module.css` | The two gateway boxes shown before the six steps (comments #1, #2) |
| `src/components/ReviewDiagrams.jsx` | Lucy's two diagrams, redrawn as SVG (comments #2, #8) |
| `src/components/BenefitsBoard.jsx` / `.module.css` | Filterable benefit categories board (comments #3, #4, #5, #10) |

---

## #1 — State & local legal requirements

- New export `stateLawExamples` in `dashboardContent.js` with all seven states (NY, CT, ME, MI,
  CA, DE, MD). Each carries the requirement and the trade-off/limitation.
- New `beforeYouBegin.boxes[0]`: "Understand State & Local Legal Requirements Before You Begin",
  placed as a highly visible box **before** the six steps and linked from the top nav.
- State names render as clickable cards that open a pop-up dialog (Escape or click-outside to
  close), as requested.
- Includes the "if not required or enforceable" fallback options, the research list, the
  agency-outreach guidance, and the suggested checklist.
- Added the naming note to the end of *What is a CBA?* (`landingPage.whatIsACBA.note`).
- Step 1.1 now asks users to confirm what law already requires before treating anything as
  negotiable; Readiness Checklist gained an agency-contact item.

## #2 — Environmental review / EIA

- New `beforeYouBegin.boxes[1]`: "Environmental Review Happens on Its Own Timeline", with all
  five key points (scoping, draft review, EIA→CBA priorities, permit-based mitigation,
  uncoordinated schedules).
- Both diagrams rebuilt as clean SVG in the dashboard palette, with `<title>`/`<desc>` for screen
  readers and the original captions retained verbatim.

## #3 — Compensation

- All 13 benefit categories tagged by recipient; `benefitFilters` includes a compensation
  definition using the requested language ("direct payments to affected landowners or residents,
  impact fees to the municipality, or community benefit funds tied to the scale and duration of
  project impacts").
- Added to: Step 1.1 (things to pin down early), Step 2.5 (document what you hear), Step 3.1
  (issue identification + option development), Step 3.5 (power dynamics — valuation data).
- Priorities Worksheet: compensation added under priority benefits and commitment duration.
- Negotiation Prep Worksheet: added under interests/priorities and draft benefit concepts.

## #4 — Mitigation

- Handled through the filter buckets, plus additions to Step 1.1, Step 2.5, Step 3.1 (both
  phases), Step 3.5, and both worksheets — each distinguishing short-term construction
  mitigation from long-term operational mitigation.

## #5 — Short-term vs. long-term throughout

- "Impact time horizon" is the first filter bucket on the benefits board.
- Threaded through Steps 1, 2, 3; new **Step 5.3** "Establish Accountability and Follow-Through
  Mechanisms" and **Step 6.4** "Match Accountability Structures to the Time Horizon".
- Priorities Worksheet: separate short-term and long-term impact and commitment fields.
- Glossary: added *Short-Term Impact* and *Long-Term Impact*.

## #6 — Legal liability / SLAPP

- New **Step 1.5** "Know Your Legal Protections for Participating" — given its own section rather
  than buried in the capacity section, per the note about placing it somewhere central.
- Covers anti-SLAPP statutes, the by-state variation, the distinction between signatory
  obligations and individual participation, the Massachusetts c. 231 § 59H example with a link to
  the statute, and an explicit not-legal-advice caveat.

## #7 — Process costs

- Step 1.3: cost note (legal, technical, facilitation, translation, outreach) plus funding
  sources, with both intervenor-funding links. Framed as illustrations, not promises.
- Step 1.4: facilitation costs plus MOPC, NY CDRC, California EMC, CBI, and the Udall Institute.
- Step 2.1 and 2.2: engagement cost anticipation and funding checklist item.
- Step 3.1: cost-of-analysis item in issue identification.
- Readiness Checklist: funding items under organizational capacity and external support.

## #8 — Diagrams, colour coding, appendices

- Diagrams redrawn (above). Existing per-step colour system retained and extended to the new
  boxes and filter chips.
- Resource Library additions: WRI framework database, Sabin Center CBA database, and a
  placeholder card for the clinic's own tracker.

## #9 — Mission statement and title

- New `landingPage.mission`, rendered as a distinct tinted section directly below the title
  block. The philosophy lead is bold, as requested.
- Tagline added: "Ensuring Shared Benefits, Not Burdens."
- Writing style deliberately left as-is; only the requested content was added.

## #10 — In-kind benefits

- New `landingPage.creativeBenefits` with the caption and all five options, rendered beneath the
  benefits board.
- The three principles (NIMBY/fairness, maximizing benefits, more than a technical manual) appear
  in the mission block.

---

## Additional resource

Added at your request, to both the Resource Library and the bibliography:
*From promise to practice: What makes community benefits agreements enforceable?*
(*Energy Research & Social Science*) —
https://www.sciencedirect.com/science/article/pii/S2214629626003142

---

## Open items needing your input

1. **Photos (#8).** The four example photos in the PDF are third-party stock images, so they were
   not embedded. Supply images the clinic has rights to and they can be dropped in.
2. **Own database (#8).** The Resource Library card for the clinic's tracker points at `#` and is
   marked coming-soon. Replace the `url` on `rl-e18` once Sanjana's tracker has a public address.
3. **Sample finished agreements (#8).** An appendix showing one or two completed CBAs still needs
   source documents.
4. **Legal review (#6).** The SLAPP language is written to be defensible and carries a caveat, but
   it should be reviewed by counsel before publication.

## Build & deploy

```bash
npm install
npm run dev      # local preview
npm run lint     # oxlint — currently clean
npm run build    # outputs to dist/
```

`vite.config.js` keeps `base: "/cba-dashboard/"`. The `gh-pages` branch is the contents of
`dist/` at the repo root; the accompanying gh-pages zip has already been regenerated from this
build.
