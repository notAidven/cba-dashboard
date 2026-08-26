// ============================================================
// ORIENTATION — one long-form page, replacing the seven cards.
//
// Review notes this answers:
//   "Get rid of the cards in this orientation step and instead have 1-2
//    evidence-based paragraphs explaining in detail what each orientation
//    card promises to explain."
//   "The 7 orientation topics could be one editorial page with breaks or a
//    numbered list as opposed to equal tiles."
//
// Every claim that is not definitional carries a `source`, keyed to an entry
// in `bibliography` (see dashboardContent.js) so the reader can chase it.
// ============================================================

import communityMeeting from '../assets/photos/community-meeting.jpg';
import prioritiesWorkshop from '../assets/photos/priorities-workshop.jpg';
import solarInstall from '../assets/photos/solar-install.jpg';

export const orientation = {
  eyebrow: 'Orientation',
  title: 'Start here',
  standfirst:
    'What a CBA is, what it can and can\u2019t do, what goes in one, and how to use the rest of this toolkit. About fifteen minutes.',
  note:
    'Sections are numbered so you can skim, but they are written to be read in order. Blue terms open a definition.',

  sections: [
    // ---------------------------------------------------------
    {
      id: 'fairness',
      photo: { src: communityMeeting, alt: 'Residents, officials, and a project team seated together at a facilitated community meeting.', caption: 'Engagement works when it happens early enough that the answers can still change.' },
      color: '#A31F34',
      tint: '#FFF4F4',
      number: '01',
      title: 'Where we stand',
      standfirst:
        'The principles behind this toolkit.',
      band: 'peach',
      blocks: [
        {
          type: 'creed',
          text:
            'Every infrastructure or renewable energy project should be evaluated through a public-interest and fairness lens. Even when a project provides major regional benefits — cleaner energy, lower costs, improved resilience — it can still impose short- and long-term burdens on nearby residents who did not choose to be affected.',
        },
        {
          type: 'prose',
          paragraphs: [
            'Fairness means recognizing those impacts and ensuring that the communities who bear them are not left worse off. When a project generates large long-term gains, a small portion of those gains should be used to offset the costs felt by the local community. This is the basic principle of energy justice: those bearing the burden should also receive a fair share of the benefits, and be appropriately compensated for their losses. In practice the share involved is very small relative to the lifetime revenue of a utility-scale facility.',
            'The public also has a right to know about proposed projects early — before approvals are issued and before construction begins — and to participate at a stage when design, location, technology choice, construction plans, and community benefits can still be shaped. State siting law, environmental review requirements, and public-notice regulations exist to protect that right. Engagement that begins after a permit is issued is consultation about a decision that has already been made.',
          ],
        },
        {
          type: 'principles',
          heading: 'What we believe',
          items: [
            'It is not selfishness that motivates community concerns. NIMBY is a dismissal, not an analysis. The underlying demand is to be treated fairly.',
            'Projects should be judged not only on whether they clear the minimum environmental and regulatory bar, but on whether they maximize community benefit where that is possible.',
            'This is more than a technical manual. Those who bear a project’s burdens should share in its gains.',
          ],
        },
        {
          type: 'evidence',
          text:
            'The deliberative case for this approach — that structured negotiation produces better and more legitimate outcomes than opposition after the fact — is developed at length in the community benefits literature and in the wider practice of environmental dispute resolution.',
          sources: [
            'Baxamusa (2008), Empowering Communities through Deliberation',
            'Bacow & Wheeler (1984), Environmental Dispute Resolution',
            'Susskind, McKearnan & Thomas-Larmer (1999), The Consensus Building Handbook',
          ],
        },
      ],
    },

    // ---------------------------------------------------------
    {
      id: 'what-is',
      color: '#1D5E8C',
      tint: '#EEF3F8',
      number: '02',
      title: 'What a CBA is',
      standfirst:
        'A binding contract. In a growing number of states, a legal requirement.',
      band: 'none',
      blocks: [
        {
          type: 'prose',
          lead: true,
          paragraphs: [
            'A Community Benefits Agreement is a legally binding contract between a developer and a community coalition — or, in many energy cases, a municipality — setting out specific benefits the developer must deliver in exchange for community support or non-opposition. It is negotiated before a project is approved and signed by all parties, which is what gives the community a formal role in shaping how the development affects the area rather than a comment slot after the fact.',
            'The distinction that matters is enforceability. Statements made at a public hearing about local hiring, mitigation funding, or construction hours carry no legal weight and can be quietly dropped once approvals are secured. The same commitments written into a signed agreement come with defined remedies: notice-and-cure periods, monitoring obligations, reporting requirements, and in stronger agreements, financial security or a right to sue for breach. Foundational work on CBAs is explicit that the label alone guarantees nothing — what determines whether an agreement functions as a contract is the specificity of its commitments and the machinery attached to them.',
          ],
        },
        {
          type: 'evidence',
          text:
            'The definitional criteria separating an enforceable CBA from a non-binding pledge — identifiable parties, specific and measurable commitments, consideration, and a remedy — are set out in the standard reference work, and revisited in the legal scholarship on whether CBAs hold up as contracts.',
          sources: [
            'Gross (2007), Community Benefits Agreements: Definitions, Values, and Legal Enforceability',
            'Gross, LeRoy & Janis-Aparicio (2005), Making Development Projects Accountable',
            'Stephan (2022), Contracting with Communities: An Analysis of the Enforceability of Community Benefits Agreements',
          ],
        },
        {
          type: 'callout',
          tone: 'note',
          heading: 'It may not be called a CBA',
          body:
            'Several states require a functionally similar instrument under a different name — a Host Community Agreement, a Development Agreement, or an Impact Mitigation Agreement. These can carry the same force and sometimes more, because they are tied directly to permitting. This toolkit applies to both required and voluntary agreements. Confirming which instrument applies to your project is the first task in Before you begin, immediately below this page.',
        },
        {
          type: 'prose',
          collapse: true,
          collapseLabel: 'How this fits with permits',
          paragraphs: [
            'A CBA sits in a particular place relative to public law. Environmental review and siting conditions set a floor: the minimum a project must do to be permitted at all. A CBA operates above that floor. Understanding which protections you already have by right — and therefore do not need to trade for — is what keeps a negotiation from spending its leverage buying something the law already requires.',
          ],
        },
      ],
    },

    // ---------------------------------------------------------
    {
      id: 'can-cannot',
      color: '#8A6A1F',
      tint: '#FAF6EC',
      number: '03',
      title: 'What the research shows',
      standfirst:
        'The record is mixed. Knowing where agreements fall apart is how you build one that holds.',
      band: 'sand',
      blocks: [
        {
          type: 'prose',
          lead: true,
          paragraphs: [
            'A well-drafted agreement can create legally enforceable obligations, tie benefits to specific and measurable timelines, reduce late-stage conflict by giving both sides a written reference point, and sustain a relationship after the ribbon-cutting through monitoring committees and reporting. Reviews of local government experience with CBAs find that where agreements were specific and monitoring was institutionalized, they did change what projects delivered.',
            'The same literature is candid about failure modes. Studies of implementation find that outcomes vary widely, and that variation tracks the strength of the agreement’s monitoring and enforcement provisions far more than the ambition of its benefit list. Agreements with impressive headline commitments and no named enforcer, no reporting cadence, and no remedy have repeatedly underdelivered. A CBA cannot compensate for a negotiation that was itself lopsided; it records the balance of power that produced it.',
          ],
        },
        {
          type: 'evidence',
          text:
            'On what agreements actually delivered, and on the gap between drafting and implementation, the most directly relevant empirical work examines Los Angeles agreements, reviews the local-government evidence base, and questions how far the benefits reach the intended communities.',
          sources: [
            'Marantz (2015), What Do Community Benefits Agreements Deliver? Evidence From Los Angeles',
            'Wolf-Powers (2010), Community Benefits Agreements and Local Government: A Review of Recent Evidence',
            'De Barbieri (2017), Do Community Benefits Agreements Benefit Communities?',
          ],
        },
        {
          type: 'twoColumn',
          columns: [
            {
              tone: 'positive',
              heading: 'What a CBA can do',
              items: [
                'Create legally enforceable obligations that hold a developer to specific commitments.',
                'Make benefits specific, measurable, and tied to dates rather than intentions.',
                'Reduce conflict during construction and operation by giving both sides one agreed reference document.',
                'Sustain accountability past approval through monitoring committees and reporting requirements.',
                'Carry obligations across a change of ownership, where a successor clause is included.',
              ],
            },
            {
              tone: 'caution',
              heading: 'What a CBA cannot do',
              items: [
                'Substitute for meaningful engagement. It formalizes what engagement produces; it cannot manufacture it.',
                'Produce equitable outcomes from an inequitable negotiation. Asymmetry in information and expertise carries straight into the text.',
                'Function as protection when commitments are vague. “Best efforts” and “to the extent feasible” are not obligations.',
                'Survive the collapse of the body meant to monitor it, unless that body is durable and independent.',
                'Deliver anything the community cannot afford to police over the project’s operating life.',
              ],
            },
          ],
        },
        {
          type: 'caseNote',
          heading: 'Two cases worth knowing',
          cases: [
            {
              label: 'Detroit',
              body:
                'A city-level community benefits ordinance moved enforcement from a single negotiated contract to an institutional requirement applying across projects — a structural answer to the problem of coalitions that dissolve. Early assessments examine both what the ordinance achieved and where its thresholds and processes fell short.',
              source: 'Berglund (2021), Early Lessons From Detroit’s Community Benefits Ordinance',
            },
            {
              label: 'Hunters Point',
              body:
                'A widely cited cautionary case. Oversight weakened after the organization holding the community side of the agreement dissolved, leaving commitments without an effective monitor. The lesson generalizes: name a monitoring body that will outlive the campaign that created it.',
              source: 'Jacobs (2010), UC Berkeley Labor Center',
            },
          ],
        },
        {
          type: 'callout',
          tone: 'caution',
          heading: 'The developer holds the data',
          body:
            'Developers usually control the underlying data — impact modelling, revenue projections, valuation of harms — and often the technical vocabulary of the negotiation as well. Detailed study of that imbalance, and of the strategies communities used to close it, is the single most practically useful body of work for anyone about to sit down at the table. Step 3 of this toolkit treats it directly.',
          source: 'Farley (2024), Disrupting the knowledge and power imbalance in CBA negotiations: Lessons from Aggie Square',
        },
      ],
    },

    // ---------------------------------------------------------
    {
      id: 'why',
      photo: { src: prioritiesWorkshop, alt: 'Participants working over a shared map and materials at a community priorities workshop.', caption: 'Setting priorities together, before the negotiation, is what Step 1 of this toolkit is for.' },
      color: '#3D6B4A',
      tint: '#EEF4EF',
      number: '04',
      title: 'Why communities want one',
      standfirst:
        'Five reasons, and what each one depends on.',
      band: 'none',
      blocks: [
        {
          type: 'reasons',
          items: [
            {
              number: 1,
              title: 'Enforceable commitments',
              hook:
                'Turns hearing-room assurances into contract terms with a remedy attached.',
              body:
                'A CBA converts verbal assurances made during permitting into contract terms. Without one, a developer’s stated intention to hire locally or fund mitigation is unenforceable and frequently abandoned once approvals are in hand. With one, the same commitment carries a remedy. Recent documentary analysis of 72 agreements across renewable energy, infrastructure, and real estate — paired with practitioner interviews — examines precisely what separates the agreements that get enforced from those that do not.',
              condition:
                'Depends on: specific language, a named enforcing party, and a defined remedy. Aspirational phrasing is not enforceable in practice.',
              source: 'From promise to practice: What makes community benefits agreements enforceable? (2026), Energy Research & Social Science',
            },
            {
              number: 2,
              title: 'Fewer fights later',
              hook:
                'Settles expectations before positions harden, so later disputes get looked up rather than re-fought.',
              body:
                'Projects that skip meaningful engagement generate opposition late, when it is most expensive for everyone — at permitting appeals, board hearings, or during construction. Negotiating expectations in advance gives both sides a shared written reference, so disputes get resolved by consulting the agreement rather than relitigating the original fight. This is the core finding of decades of environmental dispute resolution practice, well predating CBAs as a named instrument.',
              condition:
                'Depends on: starting before positions harden, and on the developer treating the process as more than a public-relations exercise.',
              source: 'Bacow & Wheeler (1984); McGuire (1986); Holznagel (1991) on mediation in facility siting',
            },
            {
              number: 3,
              title: 'More than the legal minimum',
              hook:
                'Permits set a minimum. A CBA is what directs a share of the upside to the people carrying the costs.',
              body:
                'Environmental review and siting permits establish the minimum a project must do. They are not designed to direct a share of a project’s upside to the specific residents who carry its costs. A CBA is the instrument that does that work, which is why it matters most where regional benefits are large and locally concentrated harms are borne by a small number of people.',
              condition:
                'Depends on: knowing what the regulatory floor already guarantees, so that leverage is not spent buying it twice.',
              source: 'Baxamusa (2008); Fang (2023) on institutionalizing community control',
            },
            {
              number: 4,
              title: 'A relationship that lasts',
              hook:
                'Creates standing structures — a monitoring committee, a reporting cadence — that outlast the approval fight.',
              body:
                'Negotiating an agreement typically produces standing structures — a monitoring committee, a reporting cadence, a named point of contact. Those structures are what keep a developer and a community in contact through the operating life of a facility, rather than only during the pre-approval push for support. They are also, on the evidence, the component most often omitted and most predictive of whether commitments are honoured.',
              condition:
                'Depends on: a monitoring body with independent standing and funding, not one dependent on a single organization’s survival.',
              source: 'Berglund (2021); Jacobs (2010)',
            },
            {
              number: 5,
              title: 'It survives a sale',
              hook:
                'Obligations can be written to survive a sale, a refinancing, or a change of corporate control.',
              body:
                'Energy and infrastructure projects change ownership routinely. The developer that made commitments during permitting is often not the entity operating the facility a decade later. Because a CBA is a contract attached to the project, its obligations can be written to survive a sale, a refinancing, or a change in corporate control in a way an informal understanding never does.',
              condition:
                'Depends on: an explicit successor clause. Without one, this protection is assumed rather than held.',
              source: 'Cascadden, Gunton & Rutherford (2021), Best practices for Impact Benefit Agreements',
            },
          ],
        },
      ],
    },

    // ---------------------------------------------------------
    {
      id: 'benefits',
      photo: { src: solarInstall, alt: 'A worker fastening panels during a rooftop solar installation.', caption: 'Local hiring and apprenticeship pipelines turn construction work into durable local careers.' },
      color: '#6B4E8C',
      tint: '#F3F0F7',
      number: '05',
      title: 'What goes in an agreement',
      standfirst:
        'Thirteen benefit categories. Filter them by timing, type, and who receives them.',
      band: 'green',
      blocks: [
        {
          type: 'prose',
          lead: true,
          paragraphs: [
            'Three distinctions do most of the analytical work in a CBA, and the filters below are built around them: when the impact lands, whether the benefit mitigates or compensates, and who receives it.',
          ],
        },
        {
          type: 'prose',
          collapse: true,
          collapseLabel: 'More on each',
          paragraphs: [
            'The first is time horizon. Short-term impacts are construction-phase — traffic, dust, noise, road damage, temporary loss of access — intense but bounded. Long-term impacts run through operation and sometimes decommissioning, and can persist for decades. They call for different commitments, different monitoring, and different durations of obligation, and conflating them is the most common drafting error.',
            'The second is the difference between mitigation and compensation. Mitigation reduces or removes an impact at its source: buffers, routing, groundwater protection, habitat restoration, hour restrictions. Compensation pays for what cannot be avoided — direct payments to affected landowners or residents, impact fees to the municipality, or a community benefit fund scaled to the severity and duration of the harm. Environmental mitigation is, in many projects, the most consequential part of the agreement, and much of it can be secured through permit conditions rather than the CBA itself.',
            'The third is simply who receives the benefit: an individual landowner, residents generally, the municipality, or a community organization. Benefits routed to different recipients need different delivery and different accountability.',
          ],
        },
        { type: 'benefitsBoard' },
        { type: 'creativeBenefits' },
      ],
    },

    // ---------------------------------------------------------
    {
      id: 'using',
      color: '#9E3B2E',
      tint: '#FBF1EF',
      number: '06',
      title: 'Who this is for',
      standfirst: 'Written for community advocates, plus how to use the rest of the toolkit.',
      band: 'none',
      blocks: [
        {
          type: 'prose',
          lead: true,
          paragraphs: [
            'This toolkit is written for community organizers and environmental justice advocates — people building a coalition, working out what to ask for, and preparing to negotiate with a counterparty that has more resources and better information. Where guidance would differ by role, it is written for that reader.',
          ],
        },
        {
          type: 'prose',
          collapse: true,
          collapseLabel: 'Other roles at the table',
          paragraphs: [
            'Municipal officials and local government staff will find the legal-requirements and drafting material directly applicable, since in many states the municipality is the required signatory. Developers and their consultants can use it to understand what a well-prepared community will arrive expecting. Researchers will find the sources behind every section in the bibliography.',
          ],
        },
        {
          type: 'howTo',
          heading: 'How to use this toolkit',
          steps: [
            {
              label: 'Begin with Before you begin',
              body:
                'Confirm what your state, county, and municipality already require, and whether the instrument that applies to your project is a CBA at all. This is genuinely first — it determines what is negotiable.',
            },
            {
              label: 'Find out where environmental review stands',
              body:
                'The EIA or EIR runs on a fixed statutory schedule that will not adjust to your negotiation. Scoping is the highest-leverage moment in that process and it comes early.',
            },
            {
              label: 'Work the six steps in order',
              body:
                'Prepare, engage, negotiate, draft, monitor, enforce. Each opens to guidance, a suggested checklist you can tick off, and the templates that belong to that stage.',
            },
            {
              label: 'Fill in templates and save them as PDFs',
              body:
                'Every template opens as a working form. Complete it on screen and use Download as PDF to keep a copy — nothing is stored by this site.',
            },
            {
              label: 'Use the Resource Library as an appendix',
              body:
                'Templates, external sources, and case studies in one filterable place, including the WRI and Sabin Center databases of existing agreements for benchmarking.',
            },
          ],
        },
      ],
    },
  ],
};
