# Dashboard Edits — Implementation Notes

Implements the review comments in `DashboardEdits.html#cmnt_ref1.pdf` (numbered comments
#1–#10 plus the "Additional Comments" section). Comment numbers below match that document.

---

## Round 3 — Reduce on-screen text

The review asked for more evidence and depth; having all of it open at once made the
pages overwhelming. Nothing was deleted — supporting detail moved behind inline
expanders, so it stays on the page and stays findable.

| Page | Before | After |
| --- | --- | --- |
| Landing | 2,848 words · ~13.3 screens | **1,593 words · ~8.1 screens** (−44%) |
| Orientation | 3,315 words · ~13.7 screens | **2,217 words · ~11.1 screens** (−33%) |

- **New** `src/components/Reveal.jsx` / `.module.css` — a small inline expander with a
  count badge and proper `aria-expanded` / `aria-controls` wiring.
- **Resource Library** shows 6 cards per group with "Show all N" (18 visible instead of
  41). A group that a filter or search has already narrowed opens in full automatically.
- **Before you begin** keeps each box's lead and state chips; the fallback options,
  research and outreach lists, checklist, and the two diagrams sit behind expanders.
- **Orientation**: evidence blocks, case notes, in-kind options, and the denser second
  paragraphs are collapsed. The five reasons in §04 now show a one-line hook each, with
  the argument, condition, and source one click away.
- **Landing philosophy block** keeps its lead statement; the remaining paragraphs and the
  three principles are behind one expander.

---

## Round 2 — Additional Comments

Addresses the *Additional Comments* section and the Aug 28 discussion notes.

**Design principle for this round:** the dashboard's existing visual language is kept.
From the SIC site we take **only the colour palette and mood** — MIT red `#A31F34`,
near-black ink `#0F0F0F`, link blue `#0094F0`, hairline `#E4E4E4`, and its pastel accent
tints. Typography (Inter), rounded surfaces, soft elevation, the dark hero, and the card
layouts all stay as they were. Nothing is restyled unless the review asks for it.

### One orientation page, not seven

> *"Get rid of the cards in this orientation step and instead have 1-2 evidence-based
> paragraphs explaining in detail what each orientation card promises to explain."*
> *"The 7 orientation topics could be one editorial page with breaks or a numbered list."*

- **New** `src/data/orientation.js` — the orientation as one document in six numbered
  sections: why fairness is the frame; what a CBA is; what the evidence says it can and
  cannot do; why communities pursue one; what can be in an agreement; who it is for and
  how to use the toolkit.
- **New** `src/components/Orientation.jsx` / `.module.css` — one page with a sticky
  contents rail, styled in the dashboard's own idiom.
- Every non-definitional claim carries a `source` keyed to the existing `bibliography`
  (Gross 2007; Marantz 2015; Wolf-Powers 2010; De Barbieri 2017; Berglund 2021; Farley
  2024; Jacobs 2010; Cascadden et al. 2021; *From promise to practice* 2026). Section 04
  also states, for each of the five reasons, the condition it depends on — answering the
  note that those bullets had "no evidence to support them".
- The landing page keeps its numbered list (already not tiles); each row now opens the
  single page at that section rather than a separate page.
- **Removed** `InfoPage.jsx` / `.module.css`, `infoPages.js`, and the six now-dead
  `landingPage` blocks the cards used. That copy lives in `orientation.js`; a pointer
  comment marks this in `dashboardContent.js`.

### Colour and mood from the SIC site

> *"More visually consistent with the existing renewable energy clinic and/or SIC site,
> especially in terms of colour scheme."*

- Palette only. Step and benefit accents retuned to the same institutional register
  (red / green / violet / blue / ochre / rust) for the colour-coding in comment #8.
- Diagram palette follows: environmental review in blue, CBA in MIT red.

### Photos (comment #8)

> *"Add more diagrams or even photos when possible. It will make the whole dashboard
> feel easier to use."*

Four photos from the review folder, resized and re-encoded (2.1 MB → 1.1 MB), in
`src/assets/photos/`:

| Photo | Placement |
| --- | --- |
| Block Island Wind Farm site visit | Hero banner |
| Facilitated community meeting | Orientation §01, fairness |
| Community priorities workshop | Orientation §04, why communities pursue one |
| Rooftop solar installation | Orientation §05, what can be in an agreement |

Lucy's two hand-drawn diagrams remain as the SVG redraws (comment #8: "a slightly more
professional looking version").

**Outstanding:** these four photos need image credits before the site is published.

### Mono uppercase labels

> *"The serif headers and sans serif display + mono uppercase descriptive parts are a
> little hard to follow visually."*

- Removed from the SVG diagram labels, which were the remaining mono/all-caps text.

### Role selector

> *"Remove the role selector and distinguish the roles within the six steps."*
> *"We should just stick to community advocate."*

- Gone; `ROLE` is fixed to `community`. Orientation §06 is written for the community
  advocate and says plainly where everyone else fits.

### Templates as downloadable PDFs

> *"The 'open template' buttons should ideally go to a pdf that can be downloaded."*

- `TemplateModal` renders through a portal to `document.body` so print rules can hide the
  app and leave only the form. The previous approach used `visibility: hidden`, which
  kept the page's layout and produced pages of blank space before the form.
- Print stylesheet: field rules survive on paper, placeholders are suppressed, sections
  avoid breaking across pages, and glossary links print as plain black text.

### Glossary link semantics

> *"Link each term once per page, in body copy only, not in headings."*

- Already once-per-page via `GlossaryLinkScope`; this round removed the remaining links
  from headings (resource card titles) and bold lead-ins.

### Resource Library filters (Aug 28 notes)

- Kept the original card layout — it is more readable than a condensed list — with the
  existing type filters (templates / external sources / case studies), step filter, and
  free-text search.

### Fixes

- Hidden filter tooltips were `visibility: hidden` while absolutely positioned, so they
  still counted toward document scroll width and pushed the page sideways at 390px.
  Now `display: none` until hover/focus.

### Naming

- "Dashboard" → "Toolkit" throughout, per the upfront note.

---

## Round 1 — Comments #1–#10

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

## Additional Comments (the unnumbered page at the end of the PDF)

The final page of the PDF has three unnumbered sections — Content/Evidence, User
interface/accessibility, and Visuals — that weren't covered by #1–#10 above. This pass addresses
them.

### Renamed "dashboard" → "toolkit"

Every user-facing string that called this a "dashboard" (nav brand, page title, hero heading,
footer, resource library copy, info-page copy) now says "toolkit," per the note that "dashboard"
suggests a spatial display or live-changing state that this tool doesn't have. Internal code
identifiers (`dashboardContent.js`, component names, CSS class names) were left alone — renaming
those is a pure refactor with no user-facing effect and added risk for no benefit.

### Orientation cards → numbered editorial list

The seven orientation topics were a grid of equal-weight tiles. They're now a single numbered
list (`Hero.jsx`'s `orientationList`) — number, title, one-sentence teaser, "Read this topic" —
so the topics read as an ordered sequence rather than seven identical things to compare.

Inside the topic pages, the two other card grids called out in the review were converted the same
way: "Why Might You Want One?" (`InfoPage.jsx`'s `ReasonsContent`) and "Who This Toolkit Is For"
(`AudienceContent`) are now numbered/bordered lists instead of card grids, and the five "Why"
items were expanded from one sentence each into a fuller paragraph of reasoning. **These are not
sourced citations** — we don't have access to the clinic's literature library from here. Swap in
real citations where you have them; the reasoning itself is grounded in mechanisms already
documented elsewhere in the toolkit (EIA/CBA relationship, enforcement mechanisms, SLAPP
protections), not invented.

### Role selector cut to Community Advocate only

Per your confirmation, the three-role picker (Community/EJ, Municipal, Developer) is gone. `role`
is now a fixed constant in `App.jsx` (`ROLE = 'community'`) rather than a piece of state, so there
is no selector floating above the six steps, and every step's checklist always shows the
community-advocate items. The Municipal/Developer checklist data in `dashboardContent.js` was
left in place rather than deleted — it's inert now, and stripping ~1,500 lines of content data
felt like more risk than the ask called for. Say the word and it can be removed properly.

### "Open Template" → downloadable PDF

Each template modal now has a "Download as PDF" button (`TemplateModal.jsx`). It calls the
browser's native print dialog, scoped via print CSS to just the template content — the same
mechanism `Cmd/Ctrl+P` would trigger, but labeled for what a user actually wants to do with it.
Because it prints the live DOM, whatever the user has typed into the fields is included; choosing
"Save as PDF" as the print destination is how the file is saved, which is now stated directly in
the modal's instructional note. This is a real capability using the browser's built-in
print-to-PDF, not a new server-side export pipeline — building one of those would be a much larger
addition than this review asked for.

### Glossary link semantics

Terms now link only once per page (`GlossaryText.jsx`'s new `GlossaryLinkScope`, keyed to the
current view — the landing page, or whichever info page is open) instead of every time they
appear. Every heading that previously ran through `GlossaryText` (the toolkit `<h1>`, info-page
`<h1>`/`<h2>`, template modal `<h2>`/`<h3>`) now renders plain, so linking is body-copy only, per
the request.

### Visual system: MIT Science Impact Collaborative-aligned palette and a single typeface

The color tokens in `index.css` moved from the previous warm terracotta/cream palette to an
MIT-red/near-black/neutral-gray one (pulled from `scienceimpact.mit.edu`'s theme CSS: `#A31F34`
red, near-black text, white/light-gray surfaces). The three-typeface system (serif headers + sans
body + mono uppercase labels) was collapsed to a single sans family (Inter) across headings, body,
and labels — that mix was called out as hard to follow, and hierarchy is now carried by weight and
size instead of typeface. **Inter is a stand-in for MIT's GT America**, which is a licensed
commercial typeface we don't have rights to embed here; swap the `@import` and `--font-*` tokens
in `src/index.css` if the clinic has a GT America license. The step/benefit category color-coding
(civic-blue, sage, rose, lavender, teal, gold) was kept, since that's the color system comment #8
asked for, just desaturated slightly to sit better with the new neutrals.

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
5. **Real citations for the evidence-based rewrites.** The "Why Might You Want One?" and "Who
   This Toolkit Is For" paragraphs were expanded with grounded reasoning, not sourced literature —
   swap in citations from the clinic's library where you have them.
6. **GT America license.** The typeface is currently Inter (see Visuals, above) as a stand-in for
   MIT's GT America, which requires a commercial license this repo doesn't have.
7. **Municipal/Developer checklist content.** Left in `dashboardContent.js` but now unreachable
   from the UI since the role selector was removed — flag if you'd like it deleted outright.

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
