// ============================================================
// CBA Dashboard — All content sourced from PDF
// "Dashboard Content for Pass-off (1).pdf"
// Entries marked // TODO: are placeholders pending real content
// ============================================================

// ---------- LANDING PAGE ----------
// NOTE: the seven orientation cards (what a CBA is / can do / cannot do / why you
// might want one / who it is for / how to use it) were replaced by the single
// long-form orientation page. That copy now lives in src/data/orientation.js —
// edit it there, not here.


export const landingPage = {
  title: "Community Benefits Agreement Toolkit",
  tagline: "Ensuring Shared Benefits, Not Burdens",
  subtitle:
    "A step-by-step toolkit to help communities, municipalities, and developers negotiate, draft, and enforce Community Benefits Agreements.",

  // ---------- MISSION / PHILOSOPHY (Comment #9, #10) ----------
  mission: {
    label: "Our philosophy",
    heading: "Every project deserves a public-interest and fairness lens",
    lead:
      "Every infrastructure or renewable energy project should be evaluated through a public-interest and fairness lens. Even when a project provides major regional benefits, such as cleaner energy, lower costs, or improved resilience, it can still impose short- and long-term burdens on nearby residents who did not choose to be affected.",
    body: [
      "Fairness means recognizing those impacts and ensuring that the communities who bear them are not left worse off. When a project generates large long-term gains, a small portion of those gains should be used to offset the costs felt by the local community. This is a basic principle of energy justice: those bearing the burden should also receive a fair share of the benefits and be appropriately compensated for their losses.",
      "The public also has a right to know about proposed projects early — before approvals are issued and before construction begins — and to participate at a stage when design, location, technology choices, construction plans, and community benefits can still be shaped. State laws, environmental review requirements, and public-notice regulations protect this right.",
    ],
    principles: [
      "It is not selfishness (NIMBY) that motivates community concerns — it is a desire to be treated fairly.",
      "Projects should be judged not just on meeting minimally acceptable environmental standards, but on maximizing community benefits wherever possible.",
      "This toolkit is more than a technical manual. It stands for the principle that those who bear a project's burdens should share in its gains.",
    ],
  },





  // Each category is tagged across three dimensions so the benefits board can be
  // filtered by impact time horizon, benefit type, and recipient. (Comments #3, #4, #5)
  benefitCategories: [
    {
      label: "Childcare",
      tooltip: "On-site childcare facilities or subsidized childcare slots for local families",
      horizon: ["long-term"],
      type: ["other"],
      recipient: ["residents"],
    },
    {
      label: "Community Investment",
      tooltip: "Community investment funds, grants to local nonprofits, or infrastructure contributions",
      horizon: ["long-term"],
      type: ["compensation", "other"],
      recipient: ["community-orgs", "residents", "municipality"],
    },
    {
      label: "Direct Finances",
      tooltip: "Host community payments, annual fees, or one-time payments to the municipality",
      horizon: ["short-term", "long-term"],
      type: ["compensation"],
      recipient: ["municipality"],
    },
    {
      label: "Education",
      tooltip: "Scholarships, STEM programs, school partnerships, or workforce training for youth",
      horizon: ["long-term"],
      type: ["other"],
      recipient: ["residents", "community-orgs"],
    },
    {
      label: "Environment & Sustainability",
      tooltip: "Environmental mitigation, habitat restoration, stormwater management, or carbon offsets",
      horizon: ["long-term"],
      type: ["mitigation"],
      recipient: ["municipality", "community-orgs", "residents"],
    },
    {
      label: "Affordable Housing",
      tooltip: "Below-market-rate units, anti-displacement protections, or housing trust fund contributions",
      horizon: ["long-term"],
      type: ["mitigation", "compensation"],
      recipient: ["residents"],
    },
    {
      label: "Landowner Protections",
      tooltip: "Compensation, easement protections, or reclamation bonds for adjacent landowners",
      horizon: ["short-term", "long-term"],
      type: ["compensation", "mitigation"],
      recipient: ["landowners"],
    },
    {
      label: "Local Business",
      tooltip: "Procurement preferences, vendor contracts, or business incubation for local firms",
      horizon: ["short-term", "long-term"],
      type: ["other"],
      recipient: ["community-orgs", "residents"],
    },
    {
      label: "Local Hiring & Wages",
      tooltip:
        "Local hire requirements (e.g., 30% of jobs to residents within 5 miles), prevailing wage requirements",
      horizon: ["short-term", "long-term"],
      type: ["compensation", "other"],
      recipient: ["residents"],
    },
    {
      label: "Safety",
      tooltip: "Traffic safety plans, emergency response protocols, or lighting improvements",
      horizon: ["short-term", "long-term"],
      type: ["mitigation"],
      recipient: ["residents", "municipality"],
    },
    {
      label: "Specialized / Project-Specific",
      tooltip: "Benefits unique to the project type, such as cable burial for offshore wind or road repair for heavy construction",
      horizon: ["short-term", "long-term"],
      type: ["mitigation", "compensation", "other"],
      recipient: ["municipality", "landowners", "residents", "community-orgs"],
    },
    {
      label: "Traffic / Transportation",
      tooltip: "Road improvements, transit contributions, or traffic management plans",
      horizon: ["short-term", "long-term"],
      type: ["mitigation"],
      recipient: ["municipality", "residents"],
    },
    {
      label: "Waste Collection",
      tooltip: "Waste management plans, recycling programs, or community cleanup funds",
      horizon: ["short-term", "long-term"],
      type: ["mitigation", "other"],
      recipient: ["municipality", "residents"],
    },
  ],

  // ---------- BENEFIT FILTER BUCKETS (Comment #3, #4, #5) ----------
  // Hovering a filter reveals its definition. Selecting filters emphasizes the
  // applicable benefit categories and fades the rest into the background.
  benefitFilters: [
    {
      id: "horizon",
      label: "Impact time horizon",
      hint: "How long the impact — and the commitment that answers it — is expected to last.",
      options: [
        {
          id: "short-term",
          label: "Short-term",
          definition:
            "Impacts and commitments tied to the construction phase: traffic and truck routing, dust and noise, road damage, staging areas, temporary loss of access, and construction-period employment. These are usually intense but time-limited.",
        },
        {
          id: "long-term",
          label: "Long-term",
          definition:
            "Impacts and commitments that persist through project operation and sometimes decommissioning: viewshed and noise from operating equipment, groundwater and habitat effects, property value changes, ongoing payments, and long-term monitoring. These may last for decades.",
        },
      ],
    },
    {
      id: "type",
      label: "Benefit type",
      hint: "What the commitment is actually doing — preventing harm, paying for it, or adding value.",
      options: [
        {
          id: "mitigation",
          label: "Mitigation",
          definition:
            "Measures that avoid, reduce, or remedy an impact at its source rather than paying for it after the fact. Short-term mitigation addresses construction impacts (dust suppression, truck routing, work-hour limits, road repair). Long-term mitigation addresses operational and environmental harms (noise buffers, groundwater protections, habitat restoration, decommissioning bonds, ongoing monitoring). Environmental mitigation is often the single most important part of a CBA.",
        },
        {
          id: "compensation",
          label: "Compensation",
          definition:
            "Payment for impacts that cannot be fully avoided or mitigated. Compensation can include direct payments to affected landowners or residents, impact fees to the municipality, or community benefit funds tied to the scale and duration of project impacts. Amounts are typically benchmarked against appraised losses, comparable agreements, or a share of project revenue.",
        },
        {
          id: "other",
          label: "Other / value-added",
          definition:
            "Commitments that go beyond preventing or paying for harm to create new local value — workforce pipelines, education programs, local procurement, co-ownership, and reduced energy costs. These are where a fair process can move from 'made whole' to 'better off'.",
        },
      ],
    },
    {
      id: "recipient",
      label: "Recipient",
      hint: "Who actually receives the benefit or payment.",
      options: [
        {
          id: "landowners",
          label: "Individual landowners",
          definition:
            "Owners of parcels hosting or directly adjacent to project infrastructure, who may receive easement payments, setback protections, property value guarantees, or reclamation bonds.",
        },
        {
          id: "residents",
          label: "Residents",
          definition:
            "Households in the affected area, whether or not they own land — including renters. Benefits may reach them as reduced energy bills, hiring preferences, health protections, or direct payments.",
        },
        {
          id: "municipality",
          label: "Municipality",
          definition:
            "The town, city, or county government, which may receive host community payments, impact fees, infrastructure contributions, or funding for the staff capacity needed to monitor the agreement.",
        },
        {
          id: "community-orgs",
          label: "Community organizations",
          definition:
            "Nonprofits, community foundations, land trusts, or coalitions that administer funds and programs on the community's behalf. Routing money through a neutral organization can protect it from political shifts and ensure it is paid out as intended.",
        },
      ],
    },
  ],

  // ---------- IN-KIND / CREATIVE BENEFITS (Comment #10) ----------
  creativeBenefits: {
    heading: "Look beyond financial compensation",
    // Short form shown by default; the full caption is kept for reference.
    shortCaption:
      "Community benefits go beyond money. A fair process also looks for in-kind options that expand opportunity, reduce burdens, and let communities share in a project's long-term gains.",
    caption:
      "We aim to maximize value for all stakeholders. Community benefits extend beyond financial compensation to include in-kind contributions such as reduced energy costs, shared ownership models, and access to land or infrastructure. A fair CBA process looks beyond mitigation and compensation to identify creative, public-interest solutions that expand opportunity, reduce burdens, and ensure that communities share in the project's long-term gains. Beyond the common benefits outlined above, additional creative options may include:",
    items: [
      {
        label: "Reduced monthly energy bills",
        detail: "Discounted rates or bill credits for residents of the community where the energy is produced.",
      },
      {
        label: "Community co-ownership or profit-sharing",
        detail: "An equity stake or revenue share that gives residents a claim on long-term project profits.",
      },
      {
        label: "Agricultural use of land",
        detail: "Grazing, pollinator habitat, or agrivoltaic food production on land beneath and between solar panels.",
      },
      {
        label: "Local hiring pipelines and apprenticeships",
        detail: "Training and placement programs that turn construction jobs into durable local careers.",
      },
      {
        label: "Access to project infrastructure",
        detail: "Community use of new roads, broadband, substations, docks, or grid interconnection built for the project.",
      },
    ],
  },


};

// ============================================================
// BEFORE YOU BEGIN — two gateway boxes shown ahead of the six steps
// (Comment #1: state & local legal requirements)
// (Comment #2: environmental review timeline)
// ============================================================

export const stateLawExamples = [
  {
    id: "ny",
    state: "New York",
    summary: "Host community benefits required as a condition of state siting approval.",
    body: "New York's Accelerated Renewable Energy Growth and Community Benefit Act requires developers of large-scale renewable energy facilities to provide host community benefits as a condition of state siting approval through the Office of Renewable Energy Siting.",
    tradeoff:
      "While this centralized process speeds up permitting, local governments can find the benefit formulas opaque and have limited influence over fund distribution.",
  },
  {
    id: "ct",
    state: "Connecticut",
    summary: "CBAs mandated above 5 MW; workforce plans required above 2 MW.",
    body: "Connecticut mandates CBAs for renewable energy projects over five megawatts, and projects above two megawatts must submit workforce plans with local hiring and apprenticeship goals.",
    tradeoff:
      "These rules promote equitable participation, but smaller towns may lack the resources or leverage to negotiate strong agreements and track enforcement.",
  },
  {
    id: "me",
    state: "Maine",
    summary: "Fixed per-turbine community benefit payments for offshore wind.",
    body: "Offshore wind developers are required to provide a community benefits package worth at least $4,000 per turbine annually, with similar expectations for other renewables.",
    tradeoff:
      "The fixed payment model offers predictability but can overlook non-financial priorities like fisheries protection or coastal access improvements.",
  },
  {
    id: "mi",
    state: "Michigan",
    summary: "Expedited state permitting for projects that include CBAs.",
    body: "Under Public Act 233, large wind, solar, and storage projects can qualify for expedited state permitting if they include CBAs or comparable benefit commitments.",
    tradeoff:
      "The framework integrates community benefits into state review, but fast approvals could dilute local influence over agreement details.",
  },
  {
    id: "ca",
    state: "California",
    summary: "Voluntary CBAs tied to a faster permitting pathway.",
    body: "AB 205 allows renewable developers to pursue faster permitting when they incorporate CBAs or other benefit mechanisms.",
    tradeoff: "Since participation is voluntary, outcomes are variable.",
  },
  {
    id: "de",
    state: "Delaware",
    summary: "Negotiated CBAs required as part of project approval.",
    body: "2024 siting rules require developers to negotiate CBAs or similar arrangements with host communities as part of project approval.",
    tradeoff: "This strengthens local input but exposes capacity gaps in smaller communities.",
  },
  {
    id: "md",
    state: "Maryland",
    summary: "Early community engagement and formalized benefits required.",
    body: "2024 legislation requires renewable developers to engage communities early and formalize benefits through CBAs.",
    tradeoff:
      "Implementation is still developing and could result in lasting improvements or just one-time payments.",
  },
];

export const beforeYouBegin = {
  label: "Before you begin",
  heading: "Start with the law, not the template",
  intro:
    "Two things are already in motion before any CBA conversation starts: what your state and local government require of the developer, and the environmental review clock. Both shape what you can negotiate. Work through these before filling out any template in this toolkit.",
  boxes: [
    {
      id: "legal-requirements",
      number: "01",
      color: "#A31F34",
      tint: "#FFF4F4",
      title: "Understand State & Local Legal Requirements Before You Begin",
      lead:
        "Before any CBA discussion begins, communities and municipalities must understand what state, county, and local laws require — and don't require.",
      body: [
        "In many states, developers are legally required to negotiate Host Community Agreements, Development Agreements, or Impact Mitigation Agreements. These may function like CBAs even if they are not called \"CBAs,\" and in some cases they may limit or shape what can be negotiated. In other states, CBAs may be voluntary, or certain types of benefits may not be enforceable through a contract.",
      ],
      examplesHeading: "State approaches vary widely",
      examplesNote: "Select a state to see how its requirements work and where they fall short.",
      fallback: {
        heading: "If the agreement you want is not required or not fully enforceable under state law",
        intro: "Communities still have several options:",
        items: [
          "Use the CBA as a voluntary agreement to document commitments and create public accountability.",
          "Tie certain commitments to local permits or approvals, which may provide stronger enforceability than a standalone CBA.",
          "Use MOUs or \"good-neighbor agreements\" when contract enforceability is limited.",
          "Work with state agencies to incorporate mitigation or monitoring requirements into state permits or environmental review conditions.",
        ],
      },
      research: {
        heading: "Begin by researching",
        items: [
          "State siting laws and permitting requirements",
          "Whether host agreements or impact mitigation agreements are required",
          "What benefits or mitigation measures are already mandated",
          "Whether municipalities have authority to negotiate additional benefits",
          "Whether state agencies (energy siting boards, environmental agencies, utility regulators) must be involved",
        ],
      },
      outreach: {
        heading: "Contact agencies before you draft anything",
        intro:
          "Early outreach is essential. Communities should contact relevant state and local agencies before filling out templates or drafting benefit lists. These agencies can clarify:",
        items: [
          "What the developer must do by law",
          "What timelines apply",
          "What parts of the project are negotiable",
          "How CBAs or host agreements interact with permitting",
        ],
      },
      checklist: {
        heading: "Suggested checklist",
        items: [
          "Identify all required state, county, and municipal approvals",
          "Determine whether a CBA, HCA, or similar contract is required",
          "Contact relevant state agencies (energy siting, environmental review, utility regulators)",
          "Review state statutes on community benefits, mitigation, or siting",
          "Map out which benefits are legally required vs. negotiable",
        ],
      },
    },
    {
      id: "environmental-review",
      number: "02",
      color: "#1D5E8C",
      tint: "#EEF3F8",
      title: "Environmental Review Happens on Its Own Timeline",
      lead:
        "Most states require an Environmental Impact Assessment (EIA) or Environmental Impact Report (EIR) for new facilities. Some projects also trigger federal NEPA review, which runs in parallel. These processes have legally fixed schedules that do not adjust to community needs or CBA negotiations.",
      body: [
        "Environmental review is one of the most important sources of data, impact analysis, and mitigation requirements that communities can use in CBA negotiations.",
      ],
      keyPointsHeading: "Key points",
      keyPoints: [
        {
          title: "Scoping is your first and best opportunity to influence what gets studied.",
          detail:
            "Communities should submit scoping comments identifying the impacts they want analyzed — noise, groundwater, traffic, EJ impacts, health risks, and cumulative effects.",
        },
        {
          title: "Draft EIA/EIR review is essential.",
          detail:
            "Even though the timeline is set by the agency, communities should review the draft and submit comments that highlight missing data, underestimated impacts, or mitigation needs.",
        },
        {
          title: "EIA findings directly inform CBA priorities.",
          detail:
            "Use the EIA to identify short-term construction impacts, long-term operational impacts, environmental risks that require mitigation, monitoring needs, and impacts that may require compensation.",
        },
        {
          title: "Some mitigation can be required through permits, not the CBA.",
          detail:
            "Understanding what will be handled through environmental review helps communities focus CBA negotiations on benefits that are not already mandated.",
        },
        {
          title: "CBA negotiations and EIA review will overlap, but they are not coordinated.",
          detail:
            "Communities should plan for the fact that environmental review will move forward on its own schedule, and that they will not get to set or align it with the negotiation calendar.",
        },
      ],
      diagrams: [
        {
          id: "timeline",
          title: "Aligning the two timelines",
          caption:
            "This diagram shows how environmental review processes (EIA/EIS) and CBA negotiations align along a typical project timeline, from pre-application and site selection through permitting, environmental review, and final agreement. The middle row represents the shared milestones where both processes overlap, such as application filing and environmental review. The dotted line marks the transition point where community engagement and coalition-building can begin to influence project design and benefit negotiations, illustrating how parallel tracks of regulatory review and CBA development can converge into a coordinated decision process.",
        },
        {
          id: "feedback",
          title: "How the two processes feed each other",
          caption:
            "This diagram illustrates how technical findings from environmental review — impact assessments, design elevations, and mitigation requirements — inform the choices made during CBA negotiation. Those negotiated mitigation and compensation measures then feed back into the environmental review process, refining project design and compliance strategies. Together, both processes contribute to a joint cumulative impact analysis, integrating regulatory and community perspectives on long-term environmental and social outcomes.",
        },
      ],
    },
  ],
};

// ---------- STEPS ----------

export const steps = [
  {
    id: "prepare",
    number: 1,
    title: "Prepare",
    color: "#A31F34", // step 1 — MIT red
    subtitle: "What communities and municipalities should do before any negotiation begins",
    description:
      "Strong CBAs begin before the negotiation table. This step helps you understand the project context, identify community priorities, assess your capacity, and decide whether to bring in outside support.",
    guidance: [
      {
        title: "1. Understand the Project Context & What the Developer Needs",
        body: "Before engaging in negotiations, understand what the developer is proposing, what approvals they need, and what leverage the community holds. Developers often need zoning variances, permits, or community support letters — each represents a potential negotiation point.",
        pinDown: {
          heading: "Things to pin down early",
          items: [
            "Clarify which impacts are short-term (construction-phase) and which are long-term (operational or environmental), since each requires different mitigation and benefit commitments.",
            "Identify which environmental impacts require mitigation, whether short-term construction impacts or long-term operational harms that may persist for decades.",
            "Identify which impacts may require compensation, either to individual landowners and residents (easements, noise or traffic impacts) or to the municipality (impact fees, infrastructure contributions).",
            "Confirm what state, county, and municipal law already requires the developer to do, so you know which benefits are mandated and which are genuinely negotiable.",
          ],
        },
        checklist: {
          community: [
            "Research the developer's track record and previous CBA compliance",
            "Identify what permits or approvals the developer needs from the municipality",
            "Map community assets and concerns that could be affected by the project",
            "Separate short-term construction impacts from long-term operational impacts in your mapping",
            "Understand the project timeline and when community leverage is highest",
            "Gather information about similar projects and their community benefit outcomes",
          ],
          municipal: [
            "Review which municipal approvals the developer requires (zoning, permitting, etc.)",
            "Identify which department or staff will coordinate the CBA process",
            "Assess whether existing municipal ordinances govern CBAs for this project type",
            "Document what information the developer has already submitted publicly",
            "Identify any state or federal requirements that apply (e.g., MA cumulative impact analysis)",
          ],
          developer: [
            "Prepare a project overview document summarizing your proposal and approvals needed",
            "Identify your internal team members who will participate in the CBA process",
            "Review your legal obligations and any applicable ordinances",
            "Understand the community's key concerns before engagement begins",
            "Be prepared to share project timeline and key decision points",
          ],
        },
      },
      {
        title: "2. Define Community Priorities Early",
        body: "Use the Priorities Worksheet to identify and rank the benefits that matter most to your community before sitting down at the negotiating table. Knowing your priorities — and which are essential vs. negotiable — prevents you from being outmaneuvered.",
        templateId: "priorities-worksheet",
        checklist: {
          community: [
            "Complete the Priorities Worksheet with input from a broad cross-section of residents",
            "Distinguish between essential priorities and negotiable ones",
            "Identify which benefit categories are most relevant to your community's needs",
            "Document how you gathered community input on priorities",
          ],
          municipal: [
            "Review community priorities submissions and cross-reference with municipal planning goals",
            "Identify whether municipal interests align with or diverge from community priorities",
            "Document the municipality's own non-negotiable conditions",
            "Consult with relevant departments (housing, transportation, environment) on their priorities",
          ],
          developer: [
            "Review the community's Priorities Worksheet before negotiation begins",
            "Identify which community priorities you can realistically accommodate",
            "Prepare a benefits menu showing what you can offer in each category",
          ],
        },
      },
      {
        title: "3. Assess Your Capacity & Identify Support Needs",
        body: "A CBA negotiation can take months and requires legal, technical, and organizational capacity. Use the Readiness Checklist to identify gaps before negotiations begin — not during them.",
        templateId: "readiness-checklist",
        notes: [
          {
            title: "Participation has real costs — plan for them early",
            body: "Participating effectively in a CBA process often involves costs, including legal review, technical analysis, facilitation, translation, and community outreach. These costs vary widely by project size and community capacity. Communities should identify early which expenses they may incur and what external funding sources are available.",
            items: [
              "State intervenor funding programs, where they exist",
              "Municipal support, including staff time or shared consultants",
              "Philanthropic and community foundation grants",
              "Developer contributions administered through a neutral community foundation or non-profit, so funds are paid out independently",
            ],
            caveat: "Cost ranges cited anywhere in this toolkit are illustrations drawn from comparable projects, not promises or quotes.",
            links: [
              {
                label: "Massachusetts Intervenor Support Grant Program",
                url: "https://www.mass.gov/info-details/intervenor-support-grant-program",
              },
              {
                label: "New York: Guide to Intervenor Funding (Tug Hill Commission)",
                url: "https://www.tughill.org/wp-content/uploads/2016/11/Guide-to-Intervenor-Funding-2-14-13.pdf",
              },
            ],
          },
        ],
        checklist: {
          community: [
            "Complete the Readiness Checklist to identify gaps in your coalition's capacity",
            "Identify whether you have or need legal support (community lawyering clinic, legal aid, etc.)",
            "Assess your coalition's ability to sustain participation over a multi-month negotiation",
            "Identify trusted technical advisors (planners, environmental consultants) to support the process",
            "Determine if you need translation or accessibility support for community members",
            "Identify potential funding sources for participation costs (e.g., state intervenor funding, municipal support, philanthropic grants, or developer contributions administered through a neutral community foundation)",
          ],
          municipal: [
            "Assess whether municipal staff have bandwidth and expertise to manage the CBA process",
            "Identify whether outside legal counsel or a facilitator is needed",
            "Confirm that monitoring and reporting infrastructure exists or can be built",
            "Review your municipality's capacity to enforce CBA obligations after signing",
            "Identify peer municipalities with CBA experience to consult",
          ],
          developer: [
            "Identify internal capacity to engage in a good-faith, months-long negotiation process",
            "Assess whether you have a community liaison or need to hire one",
            "Clarify internal decision-making authority so negotiators can make binding commitments",
          ],
        },
      },
      {
        title: "4. Consider Bringing in a Neutral Facilitator or Mediator",
        body: "A neutral facilitator is not a mediator hired by the developer — they are an independent professional who manages the process fairly. A facilitator can help bridge communication gaps, manage power imbalances, and keep negotiations on track.",
        notes: [
          {
            title: "Where to find facilitators — and who pays",
            body: "Neutral facilitation may involve costs, which can sometimes be covered through state technical assistance programs or developer-funded community foundations. Several states maintain public rosters of trained, low-cost mediators.",
            links: [
              {
                label: "Massachusetts Office of Public Collaboration (MOPC)",
                description: "Statewide roster of trained public mediators and facilitators specializing in community and environmental conflict resolution.",
                url: "https://www.umb.edu/mopc/",
              },
              {
                label: "New York Community Dispute Resolution Centers (CDRC)",
                description: "Free or low-cost mediation and facilitation in all 62 counties, coordinated by the New York State Dispute Resolution Association.",
                url: "https://ww2.nycourts.gov/ip/adr/cdrcp.shtml",
              },
              {
                label: "California Environmental Mediation Center (EMC)",
                description: "Mediation and collaborative process design for environmental and land-use projects statewide.",
                url: "https://www.envmediationcenter.org/",
              },
              {
                label: "Consensus Building Institute (CBI)",
                description: "National technical assistance and mediator referrals for complex multi-stakeholder projects.",
                url: "https://www.cbi.org/",
              },
              {
                label: "U.S. Institute for Environmental Conflict Resolution",
                description: "Federal center offering assessment, facilitation, and mediator referrals for environmental disputes.",
                url: "https://www.udall.gov/OurPrograms/Institute/Institute.aspx",
              },
            ],
          },
        ],
        checklist: {
          community: [
            "Discuss with your coalition whether a neutral facilitator would help or limit your power",
            "If pursuing a facilitator, agree on a selection process that gives community a meaningful vote",
            "Clarify in advance who pays the facilitator and whether payment affects neutrality",
            "Identify community members who can serve as 'process watchers' alongside any facilitator",
            "Document what roles the facilitator will and will not play (e.g., not drafting the CBA)",
          ],
          municipal: [
            "Assess whether the municipality should take a role in selecting and funding the facilitator",
            "Review the facilitator's conflict-of-interest disclosures before engagement",
            "Clarify whether the facilitator will report to all parties equally",
            "Identify whether existing dispute resolution frameworks apply",
            "Document the facilitator's scope of work in a written agreement",
          ],
          developer: [
            "Agree to a transparent facilitator selection process with all parties",
            "Disclose any prior relationships with proposed facilitators",
            "Commit to treating the facilitator as neutral, not as your representative",
          ],
        },
      },
      {
        title: "5. Know Your Legal Protections for Participating",
        body: "Residents sometimes hesitate to speak at hearings or join a coalition because they worry about being sued. Understanding the protections that exist — and their limits — helps people participate with confidence.",
        notes: [
          {
            title: "Note on legal liability and SLAPP protections",
            body: "Community members who participate in public meetings, comment processes, or CBA-related engagement are generally protected under state and federal free-speech laws when expressing views on matters of public concern. In the past, some developers have attempted to use SLAPP lawsuits (Strategic Lawsuits Against Public Participation) to intimidate or silence community activists. Many states now have anti-SLAPP statutes that allow courts to quickly dismiss these suits and, in some cases, require the developer to pay the defendant's legal fees.",
            items: [
              "The scope of these protections varies significantly by state — there is no single national standard.",
              "CBAs themselves are legal contracts that may create obligations for the organizations or municipalities that sign them.",
              "Individual residents typically do not incur personal liability simply for participating in engagement processes, offering input, or serving on advisory groups.",
            ],
            caveat: "This is general information, not legal advice. Communities should seek advice from a licensed attorney in their state if they have concerns about potential exposure or if a developer threatens litigation.",
            example: {
              label: "Illustrative example — Massachusetts",
              body: "Massachusetts provides strong protections against SLAPP suits under Mass. General Laws Chapter 231, Section 59H, which allows defendants to file a special motion to dismiss if they are sued for exercising their right to petition or participate in public processes. If the motion succeeds, courts must dismiss the case and award the defendant attorney's fees and costs, making it one of the more robust anti-SLAPP frameworks in the country.",
              linkLabel: "Read Mass. General Laws c. 231 § 59H",
              url: "https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleII/Chapter231/Section59H",
            },
          },
        ],
        checklist: {
          community: [
            "Find out whether your state has an anti-SLAPP statute and what it covers",
            "Reassure participants that public comment and advisory service rarely create personal liability",
            "Identify an attorney who can be contacted quickly if a developer threatens litigation",
            "Clarify which entity will actually sign the CBA and therefore carry contractual obligations",
            "Document threats or intimidation in writing as they occur",
          ],
          municipal: [
            "Confirm with municipal counsel what liability the municipality assumes by signing a CBA",
            "Make clear publicly that residents may comment at hearings without fear of retaliation",
            "Review whether your state's anti-SLAPP statute covers participants in municipal processes",
            "Keep official records of public comment so participation is documented and protected",
          ],
          developer: [
            "Commit in writing not to pursue litigation against residents for participating in public processes",
            "Instruct counsel that intimidation tactics undermine the legitimacy of the agreement",
            "Clarify which community entity has capacity to sign and be bound by the agreement",
          ],
        },
      },
    ],
    templates: ["priorities-worksheet", "readiness-checklist"],
  },

  {
    id: "engage",
    number: 2,
    title: "Engage",
    color: "#3D6B4A", // step 2 — green
    subtitle: "How to build meaningful, inclusive, and effective community engagement before negotiations begin",
    description:
      "Engagement is not a checkbox — it is the foundation of a legitimate CBA. This step guides you through building continuous, inclusive, and documented community engagement that shapes the negotiation.",
    guidance: [
      {
        title: "1. Start Engagement Early and Make It Continuous",
        body: "Meaningful engagement cannot begin after a developer has filed permits. Start as early as possible — ideally at the project announcement stage — and maintain engagement throughout the entire CBA process. Engagement should surface concerns about both short-term construction impacts and long-term operational impacts, since these shape different types of commitments.",
        notes: [
          {
            title: "Budget for inclusive engagement",
            body: "Communities should anticipate the costs of inclusive engagement — translation, childcare, stipends, meeting space, and logistics — and identify funding sources early rather than scaling back participation when money runs short.",
          },
        ],
        checklist: {
          community: [
            "Launch community outreach before the developer submits permit applications",
            "Establish regular community update meetings (e.g., monthly) with consistent formats",
            "Ask separately about construction-phase concerns and long-term operational concerns",
            "Create feedback loops so community input visibly shapes what you bring to the table",
          ],
          municipal: [
            "Require early community notification as part of the development application process",
            "Build CBA engagement timelines into project approval schedules",
            "Track and document all community engagement activities for the public record",
          ],
          developer: [
            "Begin community outreach before submitting permit applications, not after",
            "Commit to ongoing (not one-time) engagement throughout the project lifecycle",
            "Designate a community liaison who will attend all engagement events",
          ],
        },
      },
      {
        title: "2. Make Engagement Inclusive and Accessible",
        body: "An engagement process that only reaches well-resourced, English-speaking residents is not meaningful engagement. Design your process to reach those most affected.",
        checklist: {
          community: [
            "Offer meetings in multiple languages with professional interpretation, not just bilingual staff",
            "Hold meetings at multiple times and locations accessible by public transit",
            "Provide childcare and food at community meetings to reduce barriers to participation",
            "Partner with trusted community organizations that have relationships in underrepresented communities",
            "Identify funding for engagement supports (translation, childcare, food, stipends), which may be available through state programs or developer-funded community foundations",
          ],
          municipal: [
            "Require developers to submit accessibility plans as part of the engagement process",
            "Set minimum standards for language access and ADA compliance at all CBA-related meetings",
            "Track demographic data on who is participating in engagement activities",
            "Create mechanisms for community members who cannot attend meetings to submit input",
          ],
          developer: [
            "Budget explicitly for translation, interpretation, childcare, and accessibility accommodations",
            "Do not rely solely on digital outreach — use door-to-door, community boards, and faith networks",
            "Report publicly on the demographics of who participated in your engagement process",
          ],
        },
      },
      {
        title: "3. Map the Community and Identify Who Needs to Be at the Table",
        body: "Use a stakeholder map to identify all groups affected by the project — including those who are less visible or organized. Every major constituency should have a meaningful opportunity to shape the CBA.",
        checklist: {
          community: [
            "Create a stakeholder map that includes renters, homeowners, workers, students, seniors, and EJ communities",
            "Actively recruit representation from groups that have historically been excluded from planning processes",
          ],
          municipal: [
            "Review the developer's stakeholder map and identify any gaps",
            "Ensure tribal nations and indigenous communities are identified and engaged where applicable",
          ],
          developer: [
            "Submit a stakeholder map to the municipality showing all identified affected groups",
            "Document your outreach efforts to each identified stakeholder group",
          ],
        },
      },
      {
        title: "4. Create a Clear, Transparent Engagement Plan",
        body: "An Engagement Plan documents how community input will be collected, how decisions will be made, and how feedback will be incorporated. It creates accountability for both the community and the developer.",
        templateId: "engagement-plan",
        checklist: {
          community: [
            "Develop an Engagement Plan using the template before negotiations begin",
            "Share the Engagement Plan publicly so all community members can track the process",
            "Include clear timelines showing when input will be collected and when decisions will be made",
            "Build in explicit decision points where community feedback changes the negotiating position",
          ],
          municipal: [
            "Review and approve the Engagement Plan as part of the development application process",
            "Require the developer to report on engagement plan compliance at regular intervals",
            "Incorporate the engagement timeline into the project approval schedule",
            "Make the Engagement Plan publicly available on the municipal website",
          ],
          developer: [
            "Submit a completed Engagement Plan to the municipality for review and public comment",
            "Update the Engagement Plan if the project timeline or scope changes significantly",
            "Report publicly on whether engagement plan milestones were met",
          ],
        },
      },
      {
        title: "5. Document What You Hear and Show How It Shapes the Project",
        body: "Community members will disengage if they feel their input disappears into a void. Document all engagement activities and publish regular summaries showing how feedback has (or has not) changed the negotiating position or project design.",
        pinDown: {
          heading: "In practice, this means",
          items: [
            "Categorizing feedback into short-term impacts (construction disruptions) and long-term impacts (environmental, health, or quality-of-life effects).",
            "Identifying concerns about environmental impacts that require mitigation, including construction-phase disruptions and long-term risks such as noise, groundwater contamination, or habitat loss.",
            "Noting concerns about impacts that may warrant compensation, such as property value changes, noise, traffic, or loss of use.",
          ],
        },
        checklist: {
          community: [
            "Keep meeting notes, surveys, and all engagement artifacts in a shared repository",
            "Publish regular public summaries of what you heard and how it changed your position",
            "Be transparent when community input could not be accommodated and explain why",
            "Create a feedback form or hotline for community members to submit concerns between meetings",
          ],
          municipal: [
            "Require the developer to submit engagement summaries at each project milestone",
            "Post all engagement documentation on the municipal website",
            "Create a public portal where community members can track engagement status",
            "Include engagement documentation in the final CBA approval package",
          ],
          developer: [
            "Publish a written summary of all engagement activities and key themes heard",
            "Show explicitly how community input changed the project design or benefits offered",
            "Acknowledge and explain any community concerns you were unable to address",
          ],
        },
      },
    ],
    templates: ["engagement-plan"],
  },

  {
    id: "negotiate",
    number: 3,
    title: "Negotiate",
    color: "#6B4E8C", // step 3 — violet
    subtitle: "Designing a fair, transparent, and enforceable negotiation process",
    description:
      "Good negotiation is structured, documented, and fair. This step provides timelines, facilitation guidance, power-dynamics tools, and a preparation worksheet to help all parties negotiate effectively.",
    guidance: [
      {
        title: "1. Sample Negotiation Timelines",
        body: "CBA negotiations typically unfold in five phases. Timeline ranges vary based on project complexity, capacity, and the number of issues to negotiate.",
        phases: [
          {
            phase: "Pre-Negotiation",
            duration: "2–6 weeks",
            description: "Stakeholder mapping, coalition building, priority setting, facilitator selection",
          },
          {
            phase: "Issue Identification",
            duration: "2–8 weeks",
            description: "All parties share their interests and concerns; agenda for negotiation is set",
            detail: [
              "Identify both short- and long-term mitigation measures for traffic, noise, and ecological impacts",
              "Identify compensation needs for short-term construction impacts and long-term operational impacts, and discuss potential valuation methods",
              "Identify the expected costs of technical analysis, legal review, or facilitation needed to evaluate issues, using illustrative ranges based on similar projects",
            ],
          },
          {
            phase: "Option Development",
            duration: "4–12 weeks",
            description: "Parties generate and evaluate benefit options for each priority area",
            detail: [
              "Evaluate options separately for short-term and long-term impacts so commitments match the duration and severity of each impact",
              "Evaluate mitigation options using environmental review findings, technical studies, and comparable projects to determine what level of mitigation is feasible and necessary",
              "Evaluate compensation options such as direct payments, easements, impact fees, or community benefit funds, using comparable agreements or impact valuations as benchmarks",
            ],
          },
          {
            phase: "Drafting & Closure",
            duration: "2–6 weeks",
            description: "Tentative agreements are drafted into CBA language; final review and sign-off",
          },
          {
            phase: "Implementation Planning",
            duration: "1–4 weeks",
            description: "Monitoring committee structure, reporting timelines, and enforcement protocols are finalized",
          },
        ],
        checklist: {
          community: [
            "Agree on a negotiation timeline before the first session begins",
            "Identify which coalition members will serve as lead negotiators and what authority they have",
            "Set internal coalition decision-making rules (e.g., consensus vs. majority)",
          ],
          municipal: [
            "Establish a clear negotiation timeline tied to the permitting schedule",
            "Identify which staff or officials have authority to bind the municipality to CBA commitments",
            "Set a public meeting schedule so residents can track negotiation progress",
          ],
          developer: [
            "Commit to the negotiation timeline in writing before the first session",
            "Identify your lead negotiator and confirm they have authority to make binding commitments",
            "Agree to not pursue permit approvals while CBA negotiations are pending",
          ],
        },
      },
      {
        title: "2. Guidance on Neutral Facilitation",
        body: "A neutral facilitator manages the process, not the outcome. Their role is to ensure all voices are heard, keep discussions productive, and help parties move from positions to interests.",
        checklist: {
          community: [
            "Vet facilitator candidates using criteria that all parties agree on in advance",
            "Confirm the facilitator has no financial relationship with the developer",
            "Reserve the right to replace a facilitator if the community loses confidence in their neutrality",
          ],
          municipal: [
            "Consider whether a municipal staffer or outside professional is better positioned to facilitate",
            "Document all facilitation fees and who paid them, and make this public",
            "Evaluate the facilitator's performance at key milestones",
          ],
          developer: [
            "Agree not to communicate privately with the facilitator without informing all parties",
            "Provide the facilitator with all project information they request in a timely manner",
            "Do not use the facilitator as a messenger to community groups outside formal sessions",
          ],
        },
      },
      {
        title: "3. Meeting Facilitation Guides",
        body: "Each negotiation session should be structured with a clear agenda, ground rules, and a documentation plan.",
        phases: [
          {
            phase: "Before Each Meeting",
            items: [
              "Distribute the agenda and any materials at least 48 hours in advance",
              "Review prior session notes and confirm action items were completed",
              "Identify any new information or changed circumstances that should be shared",
            ],
          },
          {
            phase: "During Each Meeting",
            items: [
              "Review and confirm ground rules at the start of each session",
              "Use a shared visual (whiteboard, shared doc) to document points of agreement and disagreement in real time",
              "Pause regularly to confirm understanding and check for emerging consensus",
            ],
          },
          {
            phase: "After Each Meeting",
            items: [
              "Circulate a written summary within 48 hours, including action items and owners",
              "Post the summary publicly if agreed upon by all parties",
              "Update the shared negotiation tracker showing which issues are resolved, open, or deferred",
            ],
          },
        ],
        checklist: {
          community: [
            "Assign a note-taker to each session who is separate from the lead negotiator",
            "Review session summaries and flag any mischaracterizations within 24 hours",
            "Maintain your own internal session logs in addition to shared summaries",
          ],
          municipal: [
            "Require that all session summaries are posted to the municipal website within 5 business days",
            "Maintain a public-facing tracker showing the status of each CBA issue under negotiation",
            "Ensure at least one elected official receives regular briefings on negotiation progress",
          ],
          developer: [
            "Distribute materials before each session, not at the start of the meeting",
            "Respond to session summaries promptly and flag any inaccuracies",
            "Bring decision-makers (not just staff) to sessions where final commitments are expected",
          ],
        },
      },
      {
        title: "4. Negotiation Preparation Worksheet",
        body: "Use this worksheet before each negotiation session to organize your interests, constraints, and fallback positions. Knowing your BATNA (Best Alternative to a Negotiated Agreement) is essential.",
        templateId: "negotiation-prep-worksheet",
        checklist: {
          community: [
            "Complete the Negotiation Prep Worksheet before each session, not just the first one",
            "Identify your BATNA: what is your best alternative if no agreement is reached?",
            "Decide in advance which concessions you are willing to make and which are off the table",
          ],
          municipal: [
            "Complete the worksheet from the municipality's perspective, noting legal constraints",
            "Identify which municipal interests are non-negotiable vs. flexible",
            "Review the developer's publicly stated positions before each session",
          ],
          developer: [
            "Complete the worksheet to understand community interests before each session",
            "Be prepared to share your own constraints openly to build trust",
            "Identify creative options that meet community needs without exceeding project budget",
          ],
        },
      },
      {
        title: "5. Understanding Power Dynamics",
        body: "Most CBA negotiations involve significant power imbalances. Developers typically have more resources, legal counsel, and political connections than community groups. Recognizing and addressing these imbalances is essential to a fair process. Developers also tend to frame impacts narrowly, so communities should specifically request data that distinguishes short-term construction impacts from long-term operational harms.",
        pinDown: {
          heading: "Strategies to rebalance power",
          items: [
            "Communities may need expert support to estimate fair compensation for impacts, since developers often control valuation data. Bringing in neutral technical experts can help level the playing field.",
            "Communities may need technical support to understand environmental impacts and evaluate whether proposed mitigation measures are adequate, since developers often control the underlying data.",
            "Request that impact data be broken out by phase — construction versus operation — rather than presented as a single aggregate figure.",
          ],
        },
        checklist: {
          community: [
            "Map the power dynamics before negotiations: who has leverage, who has less, and why",
            "Build your coalition broadly so you represent a larger and more credible constituency",
            "Seek legal support early — do not wait until you need it urgently",
          ],
          municipal: [
            "Use municipal leverage (permitting, zoning, occupancy) fairly and transparently",
            "Do not allow developer relationships to compromise your role as a neutral party",
            "Proactively share information with community groups that the developer has already shared with you",
          ],
          developer: [
            "Acknowledge your structural advantages and take steps to level the playing field",
            "Offer to fund independent technical consultants for the community if they cannot afford them",
            "Do not use your legal team to intimidate community negotiators",
          ],
        },
      },
    ],
    templates: ["negotiation-prep-worksheet"],
  },

  {
    id: "draft",
    number: 4,
    title: "Draft",
    color: "#1D5E8C", // step 4 — blue
    subtitle: "Translate negotiated commitments into clear, enforceable, durable language",
    description:
      "A CBA is only as strong as its language. This step provides a structure template, model clauses, an example benefits menu, and a guide to the most common drafting mistakes.",
    guidance: [
      {
        title: "1. CBA Structure Template",
        body: "A complete CBA typically includes eight core sections. Use the CBA Structure Template to ensure nothing is missed.",
        templateId: "cba-structure-template",
        sections: [
          "A. Preamble — parties, project description, community context",
          "B. Definitions — key terms defined precisely to avoid future disputes",
          "C. Benefit Commitments — each benefit, its metric, timeline, and responsible party",
          "D. Implementation & Monitoring — who tracks what, how often, and through what process",
          "E. Dispute Resolution — informal resolution → notice and cure → mediation → arbitration/litigation",
          "F. Enforcement — remedies available, who can enforce, and under what conditions",
          "G. Term, Amendments & Termination — duration, how changes are made, and exit conditions",
          "H. Signatures — all parties with authority to bind their organizations",
        ],
        checklist: {
          community: [
            "Use the CBA Structure Template to ensure all critical sections are included",
            "Review each benefit commitment for specificity: is there a metric, a timeline, and a responsible party?",
            "Confirm that the dispute resolution pathway is clear and accessible without expensive litigation",
          ],
          municipal: [
            "Verify that the CBA is consistent with all applicable municipal ordinances and state law",
            "Ensure the municipality's enforcement role is clearly defined in Sections D–F",
            "Confirm that the CBA does not conflict with existing development agreements or permits",
          ],
          developer: [
            "Confirm that all commitments in the CBA were actually negotiated and agreed upon",
            "Ensure your legal team reviews Section F (Enforcement) before signing",
            "Identify any commitments that depend on third parties and add appropriate contingency language",
          ],
        },
      },
      {
        title: "2. Menu of Example Benefits",
        body: "Use this menu to identify specific, enforceable benefit language across major categories. Examples are drawn from real CBAs.",
        examples: [
          {
            category: "Workforce & Economic",
            items: [
              "Local hire requirement: 30% of construction jobs go to residents within a defined area",
              "Prevailing wage guarantee for all project workers",
              "Local business procurement preference for contracts over $50,000",
              "First source hiring agreement with local workforce development organizations",
            ],
          },
          {
            category: "Environmental & Mitigation",
            items: [
              "Vegetation and wildlife habitat buffer zones with maintenance schedules",
              "Stormwater management plan reviewed by independent engineer",
              "Construction-period dust, noise, and vibration monitoring with public reporting",
              "Decommissioning bond covering full site restoration costs",
            ],
          },
          {
            category: "Community Investment",
            items: [
              "Annual community investment fund payment (e.g., $X per MW of capacity)",
              "Capital grants to local nonprofits serving affected neighborhoods",
              "Infrastructure improvements (roads, sidewalks, broadband) near project site",
            ],
          },
          {
            category: "Education",
            items: [
              "Annual scholarships for residents in the project's host municipality",
              "STEM curriculum partnerships with local schools",
              "Apprenticeship program slots reserved for local young adults",
            ],
          },
          {
            category: "Direct Financial Benefits",
            items: [
              "Host community annual payment indexed to inflation",
              "Reduced utility rates or credits for low-income residents near project",
              "Property value protection fund for adjacent landowners",
            ],
          },
          {
            category: "Housing",
            items: [
              "Affordable unit set-aside (e.g., 20% of units at 80% AMI or below)",
              "Anti-displacement protections for renters within a defined area",
              "Housing trust fund contribution tied to project construction value",
            ],
          },
          {
            category: "Project-Specific / Localized",
            items: [
              "Cable burial or rerouting for offshore wind projects affecting fishing grounds",
              "Road repair fund for construction vehicle routes",
              "Community liaison officer with dedicated contact information and response timeline",
            ],
          },
        ],
        checklist: {
          community: [
            "Review the benefits menu and identify at least 3–5 specific, measurable commitments to prioritize",
            "For each priority benefit, draft language that includes: what, how much, by when, measured how, and enforced by whom",
            "Circulate draft benefit language to community members for input before finalizing",
            "Do not accept vague commitments like 'best efforts' or 'will consider' — require specific timelines and metrics",
          ],
          municipal: [
            "Review all proposed benefits for enforceability under state and local law",
            "Flag any benefit language that appears vague or unenforceable before the CBA is finalized",
            "Confirm that monitoring requirements are realistic given municipal staff capacity",
            "Ensure that all financial commitments are indexed to a benchmark (e.g., CPI) if multi-year",
          ],
          developer: [
            "Do not offer benefits you cannot deliver — review all commitments with finance and operations",
            "Propose specific language rather than broad concepts — it protects you and builds trust",
            "Identify and disclose any commitments that depend on third-party performance",
          ],
        },
      },
      {
        title: "3. Model Clauses",
        body: "These model clauses can be adapted for use in any CBA. Always review with legal counsel before adopting.",
        clauses: [
          {
            name: "Benefit Delivery Clause",
            example:
              "Developer shall [deliver specific benefit] no later than [date or project milestone], as verified by [monitoring party]. Failure to deliver by this date shall constitute a breach subject to Section F (Enforcement).",
          },
          {
            name: "Reporting Clause",
            example:
              "Developer shall submit a written Compliance Report to the Monitoring Committee within 30 days of each [annual anniversary / project phase completion], including documentation of all benefit deliveries and any delays or non-compliance.",
          },
          {
            name: "Monitoring Committee Clause",
            example:
              "The parties shall establish a Monitoring Committee consisting of [X] community representatives, [X] municipal representatives, and [X] developer representatives. The Committee shall meet no less than [quarterly] and shall have the authority to [review reports, request documentation, issue findings].",
          },
          {
            name: "Notice and Cure Clause",
            example:
              "In the event of a breach, the non-breaching party shall provide written notice to the Developer. The Developer shall have [30] days to cure the breach. If the breach is not cured within [30] days, the non-breaching party may pursue the remedies set forth in Section F.",
          },
          {
            name: "Enforcement Clause",
            example:
              "In the event of a material breach that remains uncured after the notice and cure period, the aggrieved party may seek specific performance, liquidated damages, or injunctive relief in a court of competent jurisdiction. Prevailing party attorney fees shall be recoverable.",
          },
          {
            name: "Successor Clause",
            example:
              "This Agreement shall be binding upon and inure to the benefit of the parties and their respective successors, assigns, and transferees. Any transfer of project ownership shall not affect the obligations set forth herein without prior written consent of [community coalition] and [municipality].",
          },
        ],
        checklist: {
          community: [
            "Confirm each benefit commitment has a corresponding enforcement clause",
            "Ensure the successor clause is included — developer ownership can change",
            "Verify that community coalition representatives are explicitly named as parties with enforcement rights",
          ],
          municipal: [
            "Review all model clauses with the municipal attorney before adoption",
            "Ensure enforcement provisions are consistent with local ordinance authority",
            "Confirm monitoring committee composition gives the municipality meaningful participation",
          ],
          developer: [
            "Review all model clauses with your legal team",
            "Clarify any ambiguous terms before signing — disputes later are more expensive than clarity now",
            "Ensure that liquidated damages amounts are proportionate and financially feasible",
          ],
        },
      },
      {
        title: "4. Common Drafting Mistakes",
        body: "These are the most frequent mistakes in CBA drafting, drawn from case studies of enforcement failures.",
        mistakes: [
          {
            mistake: "Vague language",
            example: "'Developer will make best efforts to hire locally' → no metric, no enforcement",
            fix: "Specify: '30% of construction workers must reside within 15 miles of the project site'",
          },
          {
            mistake: "Missing timelines",
            example: "'Developer will establish a monitoring committee after project completion'",
            fix: "Specify: 'Monitoring committee will be established within 60 days of CBA execution'",
          },
          {
            mistake: "No monitoring structure",
            example: "Benefits promised but no one assigned to verify delivery",
            fix: "Require a Monitoring Committee with defined authority, composition, and meeting schedule",
          },
          {
            mistake: "No successor clause",
            example: "Developer sells project; new owner claims CBA doesn't apply to them",
            fix: "Include a successor clause binding all future owners to CBA obligations",
          },
          {
            mistake: "Overreliance on goodwill",
            example: "Community accepted verbal assurances in lieu of written commitments",
            fix: "If it is not in the signed document, it does not exist legally",
          },
          {
            mistake: "Overly complex language",
            example: "Community members cannot understand what they actually secured",
            fix: "Include a plain-language summary as an exhibit; simplify wherever possible",
          },
          {
            mistake: "No amendment procedure",
            example: "Circumstances change but neither party knows how to modify the CBA",
            fix: "Include an amendment clause requiring written consent from all parties",
          },
        ],
        checklist: {
          community: [
            "Review the final draft against each common mistake before signing",
            "Have a non-lawyer community member read the CBA and identify anything they cannot understand",
            "Confirm a plain-language summary will be prepared and shared with the broader community",
          ],
          municipal: [
            "Conduct a final legal review specifically checking for enforceability gaps",
            "Confirm all key terms are defined in the Definitions section",
            "Verify that the dispute resolution pathway is realistic for community groups to use",
          ],
          developer: [
            "Avoid vague commitments — they expose you to future disputes more than specific ones",
            "Ensure all commitments are reviewed by your operations team, not just legal",
            "Do not sign a CBA you cannot operationally fulfill",
          ],
        },
      },
    ],
    templates: ["cba-structure-template", "enforcement-checklist"],
  },

  {
    id: "monitor",
    number: 5,
    title: "Monitor",
    color: "#8A6A1F", // step 5 — ochre
    subtitle: "Ensure commitments are implemented, tracked, and publicly accountable",
    description:
      "A signed CBA is not the finish line — it is the beginning. This step establishes monitoring frameworks, committee structures, and reporting tools to ensure every commitment is tracked and enforced.",
    guidance: [
      {
        title: "1. Monitoring Frameworks",
        body: "Five types of monitoring structures are used in CBAs, each with different strengths and weaknesses.",
        frameworks: [
          {
            type: "Developer Self-Reporting",
            description: "Developer submits regular compliance reports to all parties",
            strengths: "Low cost, easy to implement",
            weaknesses: "Depends on developer honesty; no independent verification",
          },
          {
            type: "Joint Monitoring Committee",
            description: "Committee with representatives from all parties reviews reports and conducts site visits",
            strengths: "Shared accountability, community voice in verification",
            weaknesses: "Requires sustained community capacity; decisions can be slow",
          },
          {
            type: "Third-Party / Independent",
            description: "Independent auditor or consultant verifies compliance on agreed schedule",
            strengths: "Highest credibility; insulated from party conflict",
            weaknesses: "Most expensive; requires upfront funding commitment",
          },
          {
            type: "Public Agency",
            description: "Municipal department or state agency tracks compliance as part of permit conditions",
            strengths: "Backed by government authority; no separate funding needed",
            weaknesses: "Can be slow; depends on agency capacity and political will",
          },
          {
            type: "Hybrid Models",
            description: "Combines elements of the above — e.g., developer self-reports + third-party audit every 2 years",
            strengths: "Balances cost and credibility",
            weaknesses: "Requires clear protocols for when different mechanisms apply",
          },
        ],
        checklist: {
          community: [
            "Select a monitoring framework before the CBA is signed, not after",
            "Ensure the monitoring structure is written into the CBA, not left as a future decision",
            "Identify community members who will participate in the monitoring committee and confirm their availability",
            "Request that monitoring reports be made publicly available, not just shared with signatories",
          ],
          municipal: [
            "Confirm which municipal department will coordinate CBA monitoring and what resources they have",
            "Build CBA monitoring requirements into the project permit as a condition of approval",
            "Establish a public-facing dashboard or page where monitoring reports are posted",
            "Set a monitoring schedule in the CBA: quarterly reports, annual reviews, and a mid-term audit",
          ],
          developer: [
            "Agree to the monitoring framework in writing before the CBA is signed",
            "Fund third-party monitoring if community groups cannot afford it independently",
            "Assign an internal CBA compliance officer who will own reporting obligations",
          ],
        },
      },
      {
        title: "2. Monitoring Committee Structure",
        body: "A well-designed monitoring committee is the backbone of CBA accountability. Define its composition, roles, authority, and meeting schedule in the CBA itself.",
        structure: {
          composition: "Typically 3–5 community representatives, 1–2 municipal representatives, 1–2 developer representatives. Community should hold at least 50% of seats.",
          roles: [
            "Chair (community-elected) — facilitates meetings, sets agenda, reports to signatories",
            "Municipal liaison — tracks compliance against permit conditions",
            "Developer liaison — presents reports and responds to findings",
            "Independent monitor (where applicable) — conducts site visits and audits",
          ],
          responsibilities: [
            "Review developer compliance reports",
            "Request additional documentation where reports are incomplete",
            "Conduct or authorize site visits",
            "Issue written findings to all parties",
            "Escalate unresolved issues to the dispute resolution process",
          ],
          meetingFrequency: "At minimum quarterly; monthly during construction or high-activity periods",
          authority: "Committee findings should be treated as formal notices triggering the notice-and-cure period if non-compliance is identified",
        },
        checklist: {
          community: [
            "Elect committee members through a democratic process within your coalition",
            "Train community members on what to look for in compliance reports",
            "Set term limits and succession plans so committee membership is sustainable",
            "Document all committee decisions and share them publicly",
          ],
          municipal: [
            "Assign a staff member as the municipal liaison to the monitoring committee",
            "Provide the committee with access to relevant permits and planning documents",
            "Include committee findings in any public reporting on the project",
            "Build the committee's role into the project's regulatory framework where possible",
          ],
          developer: [
            "Provide complete, accurate reports on schedule — late or incomplete reports damage trust",
            "Respond to committee requests for documentation within 10 business days",
            "Attend monitoring committee meetings with decision-making authority, not just staff observers",
          ],
        },
      },
      {
        title: "3. Establish Accountability and Follow-Through Mechanisms",
        body: "Monitoring committees, annual reporting, and third-party audits are essential for ensuring that long-term commitments are implemented. Short-term construction impacts can be tracked through immediate mitigation measures, but long-term benefits and risks require sustained oversight to ensure follow-through, to make necessary changes, and to maintain trust.",
        pinDown: {
          heading: "Match the mechanism to the time horizon",
          items: [
            "Short-term: rapid-response mitigation tracking during construction — complaint hotlines, weekly site walks, dust and noise monitoring, and immediate corrective action.",
            "Long-term: standing committees, annual public reporting, and periodic third-party audits that survive staff turnover and ownership changes.",
            "Without mechanisms tuned to each horizon, benefits risk fading once the project is built and attention moves on.",
          ],
        },
        checklist: {
          community: [
            "Confirm the CBA names distinct tracking mechanisms for construction-phase and operational-phase commitments",
            "Set a schedule for annual public reporting that does not depend on any single staff member or volunteer",
            "Identify who is responsible for triggering a third-party audit and under what conditions",
            "Plan for leadership succession so oversight continues over the full life of the agreement",
          ],
          municipal: [
            "Tie long-term monitoring obligations to permit conditions so they survive changes in political leadership",
            "Publish annual compliance summaries alongside other municipal reporting",
            "Budget for the staff time required to sustain oversight for the full agreement term",
            "Establish a clear process for amending monitoring arrangements as conditions change",
          ],
          developer: [
            "Fund long-term monitoring for the full term of the agreement, not just the construction period",
            "Establish rapid-response procedures for construction-phase complaints with defined response times",
            "Commit to annual public reporting even after construction is complete",
          ],
        },
      },
    ],
    templates: ["reporting-form"],
  },

  {
    id: "enforce",
    number: 6,
    title: "Enforce",
    color: "#9E3B2E", // step 6 — rust
    subtitle: "Activate the tools that ensure commitments are delivered and know when to escalate",
    description:
      "Enforcement is the test of whether a CBA was real or just paper. This step walks through the enforcement pathway, real case examples of successful enforcement, and guidance on when and how to seek legal support.",
    guidance: [
      {
        title: "1. Enforcement Pathways",
        body: "CBAs typically provide a graduated enforcement pathway. Start with the least adversarial option and escalate only when lower-level mechanisms fail.",
        pathways: [
          {
            stage: "Stage 1: Informal Resolution",
            description:
              "Direct conversation between parties. Ideal for minor delays or miscommunications. Faster, lower-cost, and relationship-preserving.",
            triggers: "First missed deadline, minor reporting delay, ambiguous clause interpretation",
          },
          {
            stage: "Stage 2: Notice and Cure",
            description:
              "Formal written notice of breach. Developer has a specified period (typically 30–60 days) to cure the violation. Puts the breach on the record.",
            triggers: "Repeated delays, failure to report, partial benefit delivery",
          },
          {
            stage: "Stage 3: Mediation or Arbitration",
            description:
              "Neutral third party helps resolve disputes without litigation. Less expensive and faster than court. Can be binding or non-binding.",
            triggers: "Notice-and-cure period expires without resolution; parties disagree on CBA interpretation",
          },
          {
            stage: "Stage 4: Legal Enforcement",
            description:
              "Court action seeking specific performance, liquidated damages, or injunctive relief. Most powerful but most expensive and time-consuming.",
            triggers: "Material breach; developer refuses to engage; benefit at risk of disappearing permanently",
          },
        ],
        checklist: {
          community: [
            "Document all instances of non-compliance from the first occurrence, not just after escalation",
            "Follow the CBA's enforcement pathway in order — skipping steps can weaken your legal position",
            "Consult legal counsel before sending a formal notice-and-cure letter",
            "Maintain a compliance log showing all communications, reports, and responses",
            "Coordinate with your municipal partners before escalating to legal action",
          ],
          municipal: [
            "Use municipal leverage (occupancy certificates, permit renewals) as enforcement tools when appropriate",
            "Establish a formal protocol for how the municipality responds to community enforcement requests",
            "Consider whether the municipality should be a co-signatory with direct enforcement rights",
            "Document all municipal actions related to enforcement for the public record",
            "Coordinate with the state attorney general or relevant agency if a public interest violation occurs",
          ],
          developer: [
            "Cure known violations before formal notice is sent — proactive compliance preserves relationships",
            "Respond to all informal resolution requests within agreed timelines",
            "Do not use legal resources to delay enforcement of legitimate community rights",
          ],
        },
      },
      {
        title: "2. Examples of Successful Enforcement",
        body: "Real-world cases show which enforcement mechanisms actually work and why.",
        cases: [
          {
            name: "Block Island Wind Farm (Rhode Island)",
            mechanisms: ["Clear reimbursement clause for infrastructure damage", "Dedicated community liaison", "Strong reporting requirements"],
            outcome: "Developer paid cable repair costs without litigation after exposed undersea cable damaged fishing operations.",
            whyItWorked: "Specific language + clear accountability → informal resolution succeeded.",
          },
          {
            name: "Calverton Solar Energy Center (New York)",
            mechanisms: ["CBA embedded in municipal approval process", "Town withheld certificate of occupancy"],
            outcome: "Developer completed outstanding landscaping and community payments to receive final permits.",
            whyItWorked: "Municipal leverage + regulatory enforcement.",
          },
          {
            name: "Detroit Community Benefits Ordinance (Michigan)",
            mechanisms: ["City authority to impose penalties", "Public reporting requirements"],
            outcome: "Multiple projects corrected non-compliance after public reporting and administrative pressure.",
            whyItWorked: "Institutionalized enforcement + political accountability.",
          },
          {
            name: "NECEC (Maine)",
            mechanisms: ["Third-party fund administration", "Clear payment schedules"],
            outcome: "Benefits continued even as the project faced legal and political challenges.",
            whyItWorked: "Independent administration insulated benefits from project volatility.",
          },
          {
            name: "Hunters Point Shipyard (San Francisco) — cautionary example",
            mechanisms: [],
            missingMechanisms: ["Stable oversight body", "Independent authority", "Long-term community capacity"],
            outcome: "Oversight collapsed after ACORN dissolved; enforcement weakened significantly.",
            lesson: "Monitoring bodies must be durable and independent. Community capacity is not a given over a multi-decade project.",
          },
        ],
        checklist: {
          community: [
            "Review these case examples and those in the resource library to identify which enforcement tools fit your project",
            "Note which mechanisms worked best and adapt them to your local context",
            "Use cautionary examples to strengthen your monitoring structure before problems arise",
          ],
          municipal: [
            "Consider embedding CBA compliance in permit conditions so municipal enforcement authority is clear",
            "Review the Detroit model for ordinance-based accountability structures",
            "Ensure the CBA monitoring body is institutionally durable — not dependent on any single organization",
          ],
          developer: [
            "Understand that enforcement actions are more costly than proactive compliance",
            "Review case studies to understand what triggers formal enforcement in similar projects",
            "Invest in the monitoring infrastructure — it protects you as much as the community",
          ],
        },
      },
      {
        title: "3. When to Seek Legal Support",
        body: "Legal support is not only for litigation. It is often most valuable early, when issues are still fixable.",
        seekLegalWhen: [
          "A developer repeatedly misses reporting deadlines",
          "Notice-and-cure periods expire without resolution",
          "The developer disputes the meaning of a clause",
          "Ownership changes and successor obligations are unclear",
          "A monitoring committee needs help interpreting data",
          "A municipality is unsure how to enforce a condition",
          "A community coalition lacks capacity to evaluate compliance",
          "A project enters bankruptcy, restructuring, or sale",
        ],
        seekImmediatelyWhen: [
          "A developer refuses to comply",
          "A benefit is at risk of disappearing (e.g., payment, mitigation measure)",
          "Environmental or health harms are occurring",
          "A developer challenges the CBA's enforceability",
        ],
        legalResources: {
          communityFacing: [
            "Community Lawyering Clinics (various universities) — many law schools offer free or low-cost support for community coalitions",
            "Local Legal Aid Organizations — often assist with contract interpretation and administrative enforcement",
            "Environmental Justice Clinics (e.g., Vermont Law School, UCLA, Berkeley) — support EJ-related CBA issues",
          ],
          municipalFacing: [
            "ICLEI USA — guidance on climate-related agreements",
            "Urban Sustainability Directors Network (USDN) — peer support and templates",
            "National League of Cities (NLC) — municipal legal resources",
            "American Planning Association (APA) — guidance on development agreements",
          ],
          renewableEnergySpecific: [
            "Energy Justice Network — community support for energy project agreements",
            "Institute for Local Self-Reliance (ILSR) — technical and policy support",
            "State consumer advocate offices — often review utility-scale project agreements",
          ],
        },
        checklist: {
          community: [
            "Contact a legal clinic or municipal attorney as soon as repeated non-compliance occurs",
            "Gather all relevant documentation before meeting with counsel",
            "Ask legal advisors to confirm successor obligations and enforcement options annually",
          ],
          municipal: [
            "Reach out to listed organizations for guidance specific to your project type or jurisdiction",
            "Keep contact details and service descriptions updated in a shared resource library",
            "Bookmark municipal and renewable-energy resources for quick access during enforcement",
          ],
          developer: [
            "Use peer networks like USDN and NLC to learn how other communities have resolved similar issues",
            "Engage proactively with legal support organizations — don't wait until formal enforcement begins",
            "Consult your own legal counsel at the first sign of a compliance dispute",
          ],
        },
      },
      {
        title: "4. Match Accountability Structures to the Time Horizon",
        body: "Accountability structures should match the time horizon of the impact: short-term monitoring for construction-phase disruptions, and long-term committees and reporting for operational and environmental effects. Without these mechanisms, benefits risk fading once the project is built.",
        pinDown: {
          heading: "Two horizons, two enforcement postures",
          items: [
            "Short-term construction disruptions need fast, low-formality escalation — a named contact, a defined response window, and the ability to halt work that violates agreed conditions.",
            "Long-term operational and environmental effects need durable institutions — a funded committee, scheduled reporting, and remedies that survive ownership changes and staff turnover.",
            "Check that your enforcement clauses actually reach both. Agreements often specify remedies for construction breaches in detail while leaving twenty-year commitments with no practical trigger.",
          ],
        },
        checklist: {
          community: [
            "Confirm your CBA has usable enforcement triggers for both construction-phase and operational-phase breaches",
            "Test the escalation path once during construction so weaknesses surface while attention is high",
            "Schedule a standing annual review of long-term commitments, independent of any complaint",
            "Ensure the successor clause carries enforcement rights forward if the project is sold",
          ],
          municipal: [
            "Attach short-term construction conditions to permits where breach can stop work",
            "Calendar long-term compliance reviews so they are not dependent on individual staff memory",
            "Confirm the municipality retains standing to enforce operational commitments decades out",
            "Review whether enforcement remedies remain adequate as the project changes hands",
          ],
          developer: [
            "Maintain a responsive point of contact during construction with a published response window",
            "Keep long-term reporting obligations funded and staffed after the construction team demobilizes",
            "Disclose ownership changes promptly and confirm successor acceptance of all obligations",
          ],
        },
      },
    ],
    templates: ["enforcement-checklist"],
  },
];

// ---------- TEMPLATES ----------

export const templates = {
  "priorities-worksheet": {
    id: "priorities-worksheet",
    title: "Community Priorities Worksheet",
    step: "prepare",
    description: "Use this worksheet to identify and rank your community's CBA priorities before negotiations begin.",
    sections: [
      {
        title: "Section 1: Community Needs Assessment",
        fields: [
          { label: "Project Name / Description", type: "text" },
          { label: "Municipality / Location", type: "text" },
          { label: "Date", type: "text" },
          { label: "Completed By", type: "text" },
          {
            label: "What are the top 3–5 challenges your community currently faces that this project could address?",
            type: "textarea",
          },
          {
            label: "Which populations in your community are most affected by this project?",
            type: "textarea",
          },
          {
            label: "Short-term impacts (construction): what disruptions do you expect while the project is being built?",
            type: "textarea",
          },
          {
            label: "Long-term impacts (operations / environment): what effects may persist for years or decades?",
            type: "textarea",
          },
        ],
      },
      {
        title: "Section 2: Priority Benefits",
        description: "Check all categories your community wants to prioritize, then rank your top 5.",
        type: "checkbox-list",
        items: [
          "Local Hiring & Wage Requirements",
          "Affordable Housing",
          "Environmental Mitigation (short-term and long-term)",
          "Compensation for Impacts (to landowners, residents, or the municipality)",
          "Community Investment Fund",
          "Education & Workforce Development",
          "Transportation & Traffic Improvements",
          "Safety & Emergency Response",
          "Direct Financial Payments to Municipality",
          "Local Business Procurement",
          "Childcare",
          "Landowner Protections",
          "Waste Collection & Site Cleanup",
          "Reduced Energy Costs / Co-Ownership / In-Kind Benefits",
          "Specialized / Project-Specific Benefits",
        ],
        followUp: "Rank your top 5 priorities (1 = most important):",
        rankFields: ["Priority 1", "Priority 2", "Priority 3", "Priority 4", "Priority 5"],
      },
      {
        title: "Section 3: Commitment Duration",
        fields: [
          { label: "How long should the CBA remain in effect?", type: "select", options: ["Duration of construction only", "Duration of operation (e.g., 20 years)", "Permanent / in perpetuity", "Custom duration"] },
          { label: "If custom, specify:", type: "text" },
          { label: "Are any benefits needed before construction begins?", type: "textarea" },
          { label: "Short-term commitments (construction phase) — what must be delivered and by when?", type: "textarea" },
          { label: "Long-term commitments (operational phase) — what must continue, and for how long?", type: "textarea" },
          { label: "Long-term compensation or impact payments — who receives them, how often, and how are they adjusted over time?", type: "textarea" },
          { label: "Long-term environmental monitoring and mitigation — who monitors, how often, and who pays?", type: "textarea" },
        ],
      },
      {
        title: "Section 4: Negotiation Priorities — Essential vs. Negotiable",
        description: "For each of your top priorities, indicate whether it is essential (non-negotiable) or negotiable.",
        type: "table",
        columns: ["Priority / Benefit", "Essential", "Negotiable", "Notes"],
        rows: 5,
      },
      {
        title: "Section 5: Defining Success",
        fields: [
          { label: "How will your community know if the CBA was successful? What outcomes would you celebrate?", type: "textarea" },
          { label: "What would failure look like?", type: "textarea" },
        ],
      },
      {
        title: "Optional: Scoring Matrix",
        description: "Score each priority on a 1–5 scale across three dimensions to help rank competing priorities.",
        type: "scoring-matrix",
        dimensions: ["Community Impact (1–5)", "Feasibility (1–5)", "Enforceability (1–5)"],
        exampleRows: ["Local Hiring", "Affordable Housing", "Environmental Mitigation"],
      },
    ],
  },

  "readiness-checklist": {
    id: "readiness-checklist",
    title: "Coalition Readiness Checklist",
    step: "prepare",
    description: "Use this checklist to assess your coalition's capacity to negotiate and monitor a CBA.",
    sections: [
      {
        title: "Section 1: Legal and Technical Support",
        type: "checklist",
        items: [
          "We have identified a legal advisor or community lawyering clinic we can consult",
          "We have access to at least one technical expert (planner, environmental consultant) who can review project documents",
          "We understand which permits and approvals the developer needs and which we can influence",
          "We have reviewed any applicable state or local CBA ordinances",
          "We have a plan for obtaining independent review of any developer-provided technical information",
        ],
      },
      {
        title: "Section 2: Organizational Capacity",
        type: "checklist",
        items: [
          "Our coalition has at least 3 people who can commit regular time to the CBA process",
          "We have a clear internal decision-making process (consensus, majority vote, etc.)",
          "We have a designated lead negotiator who has authority to speak for the coalition",
          "We have a communications plan for keeping the broader community informed",
          "We have a process for onboarding new coalition members",
          "We have funding to support legal, technical, or facilitation needs",
        ],
      },
      {
        title: "Section 3: Monitoring and Accountability",
        type: "checklist",
        items: [
          "We have identified community members willing to serve on a monitoring committee after signing",
          "We understand what monitoring and reporting the CBA should require",
          "We have a plan for how monitoring committee members will be trained",
          "We have a system for tracking and documenting developer compliance",
          "We have identified what enforcement actions are available to us if the developer fails to comply",
        ],
      },
      {
        title: "Section 4: External Support and Partnerships",
        type: "checklist",
        items: [
          "We have connected with at least one peer organization that has negotiated a CBA",
          "We have identified any state or federal agencies that may have jurisdiction over this project",
          "We have identified elected officials who are allies in this process",
          "We have reviewed relevant case studies from the Resource Library",
          "We have identified any media partners who can support public accountability",
          "We have identified potential funding sources (state intervenor funding, municipal support, philanthropic grants, developer-funded community foundations)",
          "We have contacted the relevant state and local agencies with land-use or siting authority",
        ],
      },
      {
        title: "Section 5: Action Plan",
        fields: [
          { label: "Our biggest capacity gap right now is:", type: "textarea" },
          { label: "We will address this gap by (action + timeline):", type: "textarea" },
          { label: "We are ready to begin negotiations by (target date):", type: "text" },
          { label: "Next steps before our first negotiation session:", type: "textarea" },
        ],
      },
    ],
  },

  "engagement-plan": {
    id: "engagement-plan",
    title: "Community Engagement Plan Template",
    step: "engage",
    description: "Use this template to document how, when, and who will be engaged throughout the CBA process.",
    sections: [
      {
        title: "Section 1: Engagement Goals",
        fields: [
          { label: "Project Name", type: "text" },
          { label: "Engagement Plan Version / Date", type: "text" },
          { label: "What are the primary goals of your community engagement process?", type: "textarea" },
          { label: "How will you know if engagement was meaningful and inclusive?", type: "textarea" },
          { label: "Which communities or populations must be represented for engagement to be legitimate?", type: "textarea" },
        ],
      },
      {
        title: "Section 2: Outreach Strategies",
        description: "List the specific outreach methods you will use and which communities each targets.",
        type: "table",
        columns: ["Outreach Method", "Target Community / Group", "Responsible Party", "Timeline"],
        exampleRows: [
          ["Door-to-door canvassing", "Adjacent neighborhood residents", "Coalition members", "Weeks 1–3"],
          ["Community meeting at library", "General public", "Coalition + municipal staff", "Week 4"],
          ["Online survey (bilingual)", "Spanish-speaking residents", "Coalition communications lead", "Ongoing"],
          ["Faith community outreach", "EJ populations", "Partner organizations", "Weeks 2–5"],
        ],
      },
      {
        title: "Section 3: Accessibility and Inclusion",
        type: "checklist",
        items: [
          "Meetings will be held at ADA-accessible locations",
          "Translation and interpretation will be provided in: [list languages]",
          "Childcare will be available at community meetings",
          "Meetings will be offered at multiple times (evenings + weekends)",
          "Virtual participation option will be available for those who cannot attend in person",
          "Materials will be available in plain language",
          "Community members without internet access have an alternative way to participate",
        ],
      },
      {
        title: "Section 4: Timeline and Milestones",
        type: "table",
        columns: ["Milestone", "Target Date", "Responsible Party", "Status"],
        exampleRows: [
          ["Stakeholder mapping complete", "", "", ""],
          ["First community meeting held", "", "", ""],
          ["Draft priorities document circulated", "", "", ""],
          ["Engagement plan shared publicly", "", "", ""],
          ["Final community input summary published", "", "", ""],
          ["Negotiation begins", "", "", ""],
        ],
      },
    ],
  },

  "negotiation-prep-worksheet": {
    id: "negotiation-prep-worksheet",
    title: "Negotiation Preparation Worksheet",
    step: "negotiate",
    description: "Complete this worksheet before each negotiation session to clarify your interests, constraints, and strategy.",
    sections: [
      {
        title: "Section A: Interests and Priorities",
        fields: [
          { label: "Our organization / coalition represents:", type: "text" },
          { label: "Our core interests in this negotiation (what we ultimately need, not just what we're asking for):", type: "textarea" },
          { label: "Our top 3 priority benefits in this session:", type: "textarea" },
          { label: "Identify which impacts are short-term vs. long-term and what commitments are needed for each:", type: "textarea" },
          { label: "Identify required mitigation measures for short-term construction impacts and long-term operational impacts:", type: "textarea" },
          { label: "Identify which impacts require compensation and who should receive it (landowners, residents, or the municipality):", type: "textarea" },
          { label: "Our BATNA (Best Alternative to a Negotiated Agreement — what we will do if no agreement is reached):", type: "textarea" },
        ],
      },
      {
        title: "Section B: Constraints and Opportunities",
        fields: [
          { label: "What constraints do we face? (time, capacity, legal, political)", type: "textarea" },
          { label: "What leverage do we have?", type: "textarea" },
          { label: "What does the other party need from us? (approvals, support, non-opposition)", type: "textarea" },
          { label: "What opportunities exist for creative solutions?", type: "textarea" },
        ],
      },
      {
        title: "Section C: Information Needs",
        fields: [
          { label: "What information do we still need before this session?", type: "textarea" },
          { label: "What information have we requested and not yet received?", type: "textarea" },
          { label: "What questions do we plan to ask in this session?", type: "textarea" },
        ],
      },
      {
        title: "Section D: Draft Benefit Concepts",
        type: "table",
        columns: ["Benefit Category", "Our Opening Ask", "Acceptable Outcome", "Dealbreaker"],
        rows: 6,
        description: "Fill in this table for each major benefit category you plan to discuss.",
        followUp: "Then work through each of the following:",
        prompts: [
          "Potential mitigation measures (noise buffers, groundwater protections, habitat restoration, traffic management, long-term monitoring)",
          "Potential compensation mechanisms (direct payments, easements, impact fees, community funds)",
          "Short-term mitigation measures and long-term monitoring or mitigation strategies",
          "In-kind and creative options (reduced energy bills, co-ownership, agricultural land use, apprenticeships, infrastructure access)",
        ],
      },
      {
        title: "Section E: Enforcement Preferences",
        fields: [
          { label: "Which monitoring mechanism do we prefer for this project?", type: "select", options: ["Joint Monitoring Committee", "Third-party independent monitor", "Public agency oversight", "Developer self-reporting", "Hybrid model"] },
          { label: "What enforcement tools are most important to us?", type: "textarea" },
          { label: "Are there specific remedies (liquidated damages, specific performance) we want included?", type: "textarea" },
        ],
      },
      {
        title: "Section F: Preparation Checklist",
        type: "checklist",
        items: [
          "I have reviewed the notes from our last session",
          "I have confirmed action items from the last session were completed",
          "I have reviewed the draft agenda for this session",
          "I have consulted with coalition members about our position on today's issues",
          "I have confirmed who has authority to make commitments in today's session",
          "I have identified our walk-away point for each issue on the agenda",
          "I have briefed our note-taker on what to document",
        ],
      },
    ],
  },

  "cba-structure-template": {
    id: "cba-structure-template",
    title: "CBA Structure Template",
    step: "draft",
    description: "A complete CBA structure template with all required sections. Adapt for your project.",
    sections: [
      {
        title: "Preamble",
        description: "Introduces the parties, the project, and the purpose of the agreement.",
        fields: [
          { label: "This Community Benefits Agreement ('Agreement') is entered into as of [DATE] by and between:", type: "text" },
          { label: "Developer Name and Entity Type", type: "text" },
          { label: "Community Coalition / Municipality Name", type: "text" },
          { label: "Project Name and Description", type: "textarea" },
          { label: "Project Location", type: "text" },
          { label: "Purpose of the Agreement (2–3 sentences):", type: "textarea" },
        ],
      },
      {
        title: "Section 1: Definitions",
        description: "Define all key terms used throughout the agreement. Ambiguous terms are the most common source of enforcement disputes.",
        type: "definitions-list",
        exampleTerms: [
          "Agreement — This Community Benefits Agreement and all exhibits",
          "Developer — [entity name] and its successors, assigns, and affiliates",
          "Community Coalition — [organization name(s)] representing the community",
          "Monitoring Committee — the joint body established under Section 4",
          "Compliance Report — the written report described in Section 4.2",
          "Notice and Cure Period — the [30]-day period described in Section 6",
          "Material Breach — a failure to deliver a core benefit commitment after the notice and cure period",
        ],
      },
      {
        title: "Section 2: Benefit Commitments",
        description: "This is the core of the CBA. Each benefit must have a metric, timeline, responsible party, and verification method.",
        type: "benefits-table",
        columns: ["Benefit Description", "Specific Metric / Amount", "Delivery Timeline", "Responsible Party", "Verification Method"],
        exampleRows: [
          ["Local hire requirement", "30% of construction workers from within 15 miles", "Throughout construction phase", "Developer / general contractor", "Monthly payroll reports to Monitoring Committee"],
          ["Community investment fund", "$X per MW of capacity annually", "Within 60 days of commercial operation", "Developer", "Annual payment receipts to Municipality"],
          ["Environmental monitoring", "Quarterly air and noise monitoring reports", "Quarterly during construction", "Independent consultant", "Reports posted publicly on project website"],
        ],
      },
      {
        title: "Section 3: Implementation and Monitoring",
        fields: [
          { label: "Monitoring Committee Composition:", type: "textarea" },
          { label: "Committee Meeting Schedule:", type: "text" },
          { label: "Reporting Requirements (frequency, format, distribution):", type: "textarea" },
          { label: "Site Visit Protocol:", type: "textarea" },
          { label: "Dispute Resolution Process (Stages 1–4):", type: "textarea" },
        ],
      },
      {
        title: "Section 4: Dispute Resolution",
        description: "A four-stage pathway from informal resolution to legal enforcement.",
        stages: [
          "Stage 1 — Informal Resolution: parties meet within 10 business days of a written request",
          "Stage 2 — Notice and Cure: formal written notice; [30]-day cure period",
          "Stage 3 — Mediation: neutral mediator selected by mutual agreement within 30 days",
          "Stage 4 — Legal Enforcement: court action; prevailing party may recover attorney fees",
        ],
      },
      {
        title: "Section 5: Enforcement",
        fields: [
          { label: "Who has the right to enforce this Agreement:", type: "textarea" },
          { label: "Available remedies:", type: "textarea" },
          { label: "Liquidated damages amounts (if applicable):", type: "textarea" },
          { label: "Performance bond requirements (if applicable):", type: "textarea" },
        ],
      },
      {
        title: "Section 6: Term, Amendments, and Termination",
        fields: [
          { label: "Agreement Term:", type: "text" },
          { label: "Amendment Process:", type: "textarea" },
          { label: "Termination Conditions:", type: "textarea" },
          { label: "Successor Clause:", type: "textarea" },
        ],
      },
      {
        title: "Section 7: Signatures",
        description: "All parties must sign. Confirm each signatory has legal authority to bind their organization.",
        type: "signatures",
        parties: ["Developer (authorized representative)", "Community Coalition (authorized representative)", "Municipality (authorized representative)", "Witness / Notary (if required by state law)"],
      },
    ],
  },

  "enforcement-checklist": {
    id: "enforcement-checklist",
    title: "Enforcement Checklist",
    step: "draft",
    description: "Use this checklist to verify your CBA has the enforcement mechanisms needed to protect community commitments.",
    sections: [
      {
        title: "Section 1: Clarity and Specificity",
        type: "checklist",
        items: [
          "Every benefit commitment has a specific metric (not 'best efforts' or 'reasonable efforts')",
          "Every commitment has a delivery date or milestone trigger",
          "Every commitment names a responsible party",
          "All key terms are defined in the Definitions section",
          "Vague terms like 'timely,' 'adequate,' and 'reasonable' have been replaced with specific standards",
        ],
      },
      {
        title: "Section 2: Monitoring and Oversight",
        type: "checklist",
        items: [
          "A monitoring committee is established with named members or a selection process",
          "The committee has authority to request documentation and conduct site visits",
          "Reporting requirements (frequency, format, distribution) are specified in writing",
          "Reports are required to be made publicly available",
          "An independent monitoring mechanism (third-party auditor or public agency) is included for major commitments",
        ],
      },
      {
        title: "Section 3: Dispute Resolution",
        type: "checklist",
        items: [
          "A four-stage dispute resolution pathway is included",
          "The notice-and-cure period length is specified (recommend 30–60 days)",
          "Mediation or arbitration is specified as Stage 3, with a process for selecting a neutral",
          "Community organizations are explicitly named as parties with standing to invoke dispute resolution",
          "The Agreement specifies which state's law governs and which court has jurisdiction",
        ],
      },
      {
        title: "Section 4: Legal Enforceability",
        type: "checklist",
        items: [
          "The Agreement has been reviewed by legal counsel for community or municipality",
          "The Agreement specifies who can enforce it and in what court or forum",
          "Available remedies are explicitly listed (specific performance, damages, injunction)",
          "A prevailing-party attorney fees clause is included",
          "The Agreement has been reviewed against applicable state and local law",
        ],
      },
      {
        title: "Section 5: Documentation and Transparency",
        type: "checklist",
        items: [
          "A plain-language summary of key commitments has been prepared",
          "All compliance reports will be posted publicly (website, municipal portal, etc.)",
          "The Agreement itself is publicly available",
          "Community members know where to find compliance information and how to report concerns",
          "A record of all negotiations and decisions leading to the Agreement is preserved",
        ],
      },
      {
        title: "Section 6: Follow-Up",
        fields: [
          { label: "Remaining enforcement gaps we need to address before signing:", type: "textarea" },
          { label: "Legal review completed by:", type: "text" },
          { label: "Date of final review:", type: "text" },
          { label: "Known risks or areas of concern:", type: "textarea" },
        ],
      },
    ],
  },

  "reporting-form": {
    id: "reporting-form",
    title: "CBA Compliance Reporting Form",
    step: "monitor",
    description: "Use this form for periodic compliance reporting by the developer to the Monitoring Committee.",
    sections: [
      {
        title: "Section 1: Project Information",
        fields: [
          { label: "Project Name", type: "text" },
          { label: "Developer / Reporting Entity", type: "text" },
          { label: "Reporting Period (e.g., Q1 2025)", type: "text" },
          { label: "Date of Report", type: "text" },
          { label: "Report Prepared By", type: "text" },
          { label: "Current Project Phase", type: "select", options: ["Pre-construction", "Construction", "Commissioning", "Operations", "Decommissioning"] },
        ],
      },
      {
        title: "Section 2: Summary of Commitments",
        type: "table",
        description: "For each CBA commitment, indicate status and provide brief notes.",
        columns: ["Benefit Commitment", "Status", "Evidence / Documentation", "Notes / Explanation if Delayed"],
        statusOptions: ["On Track", "Completed", "Delayed", "Not Yet Due", "Non-Compliant"],
      },
      {
        title: "Section 3: Quantitative Metrics",
        type: "table",
        description: "Report on measurable commitments with specific data.",
        columns: ["Metric", "CBA Target", "This Period", "Cumulative to Date", "Notes"],
        exampleRows: [
          ["Local hire %", "30%", "", "", ""],
          ["Community fund payment ($)", "Per agreement", "", "", ""],
          ["Environmental monitoring reports submitted", "Quarterly", "", "", ""],
        ],
      },
      {
        title: "Section 4: Community Engagement and Feedback",
        fields: [
          { label: "Community engagement activities conducted this period:", type: "textarea" },
          { label: "Community concerns or complaints received:", type: "textarea" },
          { label: "How complaints were addressed:", type: "textarea" },
        ],
      },
      {
        title: "Section 5: Compliance Verification",
        fields: [
          { label: "Were there any non-compliance issues this period?", type: "select", options: ["No", "Yes — minor (see notes)", "Yes — material (see notes)"] },
          { label: "If yes, describe the non-compliance and corrective action taken or planned:", type: "textarea" },
          { label: "Is any benefit commitment at risk of future non-compliance?", type: "textarea" },
        ],
      },
      {
        title: "Section 6: Attachments",
        type: "attachments-list",
        items: [
          "Payroll / local hire data",
          "Payment receipts for financial commitments",
          "Environmental monitoring reports",
          "Community engagement logs",
          "Any third-party audit or verification reports",
        ],
      },
      {
        title: "Section 7: Certification",
        fields: [
          { label: "I certify that the information in this report is accurate and complete to the best of my knowledge.", type: "certification" },
          { label: "Signature of Authorized Representative", type: "signature" },
          { label: "Title", type: "text" },
          { label: "Date", type: "text" },
        ],
      },
    ],
  },
};

// ---------- RESOURCE LIBRARY ----------

export const resources = [
  // Templates (linked to real modal content above)
  { id: "rl-t1", type: "template", title: "Community Priorities Worksheet", step: "prepare", templateId: "priorities-worksheet", description: "Identify and rank community priorities before negotiations begin." },
  { id: "rl-t2", type: "template", title: "Coalition Readiness Checklist", step: "prepare", templateId: "readiness-checklist", description: "Assess your coalition's capacity to negotiate and monitor a CBA." },
  { id: "rl-t3", type: "template", title: "Community Engagement Plan", step: "engage", templateId: "engagement-plan", description: "Document how, when, and who will be engaged throughout the CBA process." },
  { id: "rl-t4", type: "template", title: "Negotiation Preparation Worksheet", step: "negotiate", templateId: "negotiation-prep-worksheet", description: "Clarify your interests, constraints, and strategy before each negotiation session." },
  { id: "rl-t5", type: "template", title: "CBA Structure Template", step: "draft", templateId: "cba-structure-template", description: "Complete CBA structure with all required sections for drafting." },
  { id: "rl-t6", type: "template", title: "Enforcement Checklist", step: "draft", templateId: "enforcement-checklist", description: "Verify your CBA has the enforcement mechanisms needed to protect community commitments." },
  { id: "rl-t7", type: "template", title: "CBA Compliance Reporting Form", step: "monitor", templateId: "reporting-form", description: "Periodic compliance reporting form for developer to Monitoring Committee." },

  // External Resources
  { id: "rl-e1", type: "external", title: "Massachusetts CBP/CBA Guidelines", organization: "Commonwealth of Massachusetts", topic: "State Requirements", description: "Official Massachusetts guidance on Community Benefit Plans and CBAs for energy projects requiring state permits.", url: "https://www.mass.gov/info-details/community-benefit-plans-and-agreements" },
  { id: "rl-e2", type: "external", title: "J40 Playbook — Community Benefits Implementation", organization: "DOE / Justice40", topic: "Federal Policy", description: "Justice40 implementation guide for community benefits in federally funded energy projects.", url: "https://www.energy.gov/infrastructure/about-community-benefits-plans" },
  { id: "rl-e3", type: "external", title: "Best Practices for Community Benefits Agreements", organization: "Various", topic: "Best Practices", description: "Compiled best practices from CBA practitioners across the United States.", url: "#" },
  { id: "rl-e4", type: "external", title: "Building Public Support for Clean Energy Projects", organization: "Energy Research", topic: "Community Engagement", description: "Research and guidance on building community support for utility-scale clean energy development.", url: "#" },
  { id: "rl-e5", type: "external", title: "State Requirements for Renewable Energy CBAs", organization: "Various States", topic: "State Requirements", description: "Summary of state-level CBA requirements for renewable energy projects across the US.", url: "#" },
  { id: "rl-e6", type: "external", title: "Community Benefits Tools for California Clean Energy", organization: "California", topic: "State Requirements", description: "California-specific tools and requirements for community benefits in clean energy projects.", url: "https://www.law.berkeley.edu/research/clee/research/law-of-the-sea-institute/california-offshore-wind/community-benefits-agreements-resources/" },
  { id: "rl-e7", type: "external", title: "Responsible Development in Appalachia", organization: "Appalachian Research", topic: "Regional Case Study", description: "Guidance on responsible energy development practices in Appalachian communities.", url: "https://reimagineappalachia.org/community-benefits/" },
  { id: "rl-e8", type: "external", title: "Community Benefits in Southwestern Pennsylvania", organization: "Pennsylvania Research", topic: "Regional Case Study", description: "Case studies and best practices from CBA processes in southwestern Pennsylvania.", url: "#" },
  { id: "rl-e9", type: "external", title: "Community Benefits — Fair Shake Environmental Legal Services", organization: "Fair Shake", topic: "Legal Support", description: "Legal support resources for communities negotiating CBAs with energy developers.", url: "https://www.fairshake-els.org/community-benefits" },
  { id: "rl-e10", type: "external", title: "Advocacy Tools for Protecting Public Health Resources", organization: "Dismantling Injustice", topic: "Environmental Justice", description: "Advocacy toolkit focused on protecting public health in community benefit negotiations.", url: "#" },
  { id: "rl-e11", type: "external", title: "Common Challenges in Negotiating CBAs", organization: "Research Compilation", topic: "Negotiation", description: "Synthesis of common challenges and how practitioners have addressed them.", url: "#" },
  { id: "rl-e12", type: "external", title: "Delivering Community Benefits Through Economic Development", organization: "Economic Research", topic: "Implementation", description: "Research on how community benefits are delivered through economic development projects.", url: "#" },
  { id: "rl-e13", type: "external", title: "Community Benefits: Practical Tools for Proactive Development", organization: "Practitioner Guide", topic: "Best Practices", description: "Practical toolkit for developers seeking to proactively engage with community benefit processes.", url: "#" },
  { id: "rl-e14", type: "external", title: "Community Benefits Timeline", organization: "Toolkit Reference", topic: "Process Guidance", description: "A visual timeline tool for planning and tracking the CBA negotiation process.", url: "#" },
  { id: "rl-e15", type: "external", title: "DOE Community Benefits Guide", organization: "U.S. Department of Energy", topic: "Federal Policy", description: "DOE guidance on community benefit plans for federally funded energy projects.", url: "https://www.energy.gov/topics/community-benefit-plans" },

  // Databases of existing agreements and frameworks (Comment #8)
  { id: "rl-e16", type: "external", title: "Database of Community Benefits Frameworks Across the US", organization: "World Resources Institute", topic: "Database", description: "Searchable database of community benefits frameworks and requirements across US states and localities.", url: "https://www.wri.org/data/database-community-benefits-frameworks-across-us" },
  { id: "rl-e17", type: "external", title: "Community Benefits Agreements Database", organization: "Sabin Center for Climate Change Law, Columbia University", topic: "Database", description: "Collection of executed CBAs for energy and infrastructure projects, useful for benchmarking benefit terms and enforcement language.", url: "https://climate.law.columbia.edu/content/community-benefits-agreements-database" },
  { id: "rl-e18", type: "external", title: "MIT Renewable Energy Clinic CBA Tracker", organization: "MIT Renewable Energy Clinic", topic: "Database", description: "Our own tracker of CBA agreements, in development. Will provide side-by-side comparison of benefit terms, monitoring structures, and enforcement outcomes.", url: "#", status: "coming-soon" },

  // Research
  { id: "rl-e19", type: "external", title: "From Promise to Practice: What Makes Community Benefits Agreements Enforceable?", organization: "Energy Research & Social Science", topic: "Research", description: "Documentary analysis of 72 CBAs for renewable energy, infrastructure, and real estate projects, with practitioner interviews, examining what actually drives enforcement, monitoring, and contestation over time.", url: "https://www.sciencedirect.com/science/article/pii/S2214629626003142" },

  // Environmental review
  { id: "rl-e20", type: "external", title: "NEPA Citizen's Guide to Environmental Review", organization: "Council on Environmental Quality", topic: "Environmental Review", description: "Plain-language guide to how federal environmental review works and where the public can comment during scoping and draft review.", url: "https://ceq.doe.gov/get-involved/citizens_guide_to_nepa.html" },

  // Participation funding (Comment #7)
  { id: "rl-e21", type: "external", title: "Massachusetts Intervenor Support Grant Program", organization: "Commonwealth of Massachusetts", topic: "Funding Support", description: "State grant program helping communities fund technical and legal review during energy facility siting proceedings.", url: "https://www.mass.gov/info-details/intervenor-support-grant-program" },
  { id: "rl-e22", type: "external", title: "Guide to Intervenor Funding", organization: "Tug Hill Commission (New York)", topic: "Funding Support", description: "Practical guide to how intervenor funding works in New York siting proceedings and how communities can access it.", url: "https://www.tughill.org/wp-content/uploads/2016/11/Guide-to-Intervenor-Funding-2-14-13.pdf" },

  // Facilitation and mediation rosters (Comment #7)
  { id: "rl-e23", type: "external", title: "Massachusetts Office of Public Collaboration", organization: "UMass Boston", topic: "Facilitation", description: "Statewide roster of trained public mediators and facilitators specializing in community and environmental conflict resolution.", url: "https://www.umb.edu/mopc/" },
  { id: "rl-e24", type: "external", title: "Community Dispute Resolution Centers Program", organization: "New York State Unified Court System", topic: "Facilitation", description: "Free or low-cost mediation and facilitation services available in all 62 New York counties.", url: "https://ww2.nycourts.gov/ip/adr/cdrcp.shtml" },
  { id: "rl-e25", type: "external", title: "Consensus Building Institute", organization: "CBI", topic: "Facilitation", description: "National technical assistance, process design, and mediator referrals for complex multi-stakeholder negotiations.", url: "https://www.cbi.org/" },

  // Legal protections (Comment #6)
  { id: "rl-e26", type: "external", title: "Massachusetts Anti-SLAPP Statute (c. 231 § 59H)", organization: "Massachusetts General Laws", topic: "Legal Protections", description: "The statute allowing defendants sued for exercising their right to petition to file a special motion to dismiss, with attorney's fees awarded if successful.", url: "https://malegislature.gov/Laws/GeneralLaws/PartIII/TitleII/Chapter231/Section59H" },
  { id: "rl-e27", type: "external", title: "State Anti-SLAPP Laws — Overview", organization: "Reporters Committee for Freedom of the Press", topic: "Legal Protections", description: "State-by-state guide to anti-SLAPP protections, useful for understanding what shields public participation in your jurisdiction.", url: "https://www.rcfp.org/resources/anti-slapp-legal-guide/" },

  // Case Studies
  { id: "rl-c1", type: "case-study", title: "Block Island Wind Farm CBA", location: "Rhode Island", sector: "Offshore Wind", outcome: "Successful enforcement", status: "coming-soon", description: "First U.S. offshore wind farm. CBA included reimbursement clause for infrastructure damage; developer paid cable repair costs without litigation." },
  { id: "rl-c2", type: "case-study", title: "Calverton Solar Energy Center", location: "New York", sector: "Solar", outcome: "Successful enforcement", status: "coming-soon", description: "CBA embedded in municipal approval process; town withheld certificate of occupancy until developer completed outstanding commitments." },
  { id: "rl-c3", type: "case-study", title: "Detroit Community Benefits Ordinance", location: "Michigan", sector: "Multiple", outcome: "Successful enforcement", status: "coming-soon", description: "City-level ordinance creating institutionalized enforcement; multiple projects corrected non-compliance after public reporting." },
  { id: "rl-c4", type: "case-study", title: "NECEC Transmission Project", location: "Maine", sector: "Transmission", outcome: "Partial success", status: "coming-soon", description: "Third-party fund administration insulated benefit payments from project's legal and political challenges." },
  { id: "rl-c5", type: "case-study", title: "Hunters Point Shipyard (Cautionary)", location: "San Francisco, CA", sector: "Mixed-Use Development", outcome: "Enforcement failure", status: "coming-soon", description: "Cautionary example: oversight collapsed after ACORN dissolved; enforcement weakened. Lesson: monitoring bodies must be durable and independent." },
  { id: "rl-c6", type: "case-study", title: "Offshore Wind CBAs in California", location: "California", sector: "Offshore Wind", outcome: "In Progress", status: "coming-soon", description: "Emerging case study on offshore wind CBA development in California waters. Content coming soon." },
  { id: "rl-c7", type: "case-study", title: "Aggie Square Development", location: "Sacramento, CA", sector: "Mixed-Use Development", outcome: "Cautionary", status: "coming-soon", description: "Case study on power imbalances in CBA negotiations. Content coming soon." },
];

// ---------- GLOSSARY ----------

export const glossary = [
  { term: "Anti-SLAPP Statute", definition: "A state law allowing courts to quickly dismiss lawsuits filed to intimidate people for exercising their right to petition or speak on matters of public concern. Many statutes also require the losing plaintiff to pay the defendant's legal fees. Scope varies significantly by state." },
  { term: "Coalition", definition: "A group of community organizations, residents, or advocates that collectively represent local interests in CBA negotiations." },
  { term: "Community Benefits Agreement (CBA)", definition: "A legally binding contract between a developer and a community coalition or municipality that outlines specific benefits the developer must deliver." },
  { term: "Community Benefit Plan (CBP)", definition: "A non-binding plan required in some federal funding applications (e.g., DOE) that outlines how a project will engage and benefit local communities." },
  { term: "Community Investment Fund", definition: "A pool of money contributed by the developer to support local programs, infrastructure, or services." },
  { term: "Compensation", definition: "Payment for project impacts that cannot be fully avoided or mitigated. Compensation can include direct payments to affected landowners or residents, impact fees to the municipality, or community benefit funds tied to the scale and duration of project impacts." },
  { term: "Cumulative Impact Analysis (CIA)", definition: "An assessment of cumulative environmental and social burdens required for certain energy infrastructure projects under Massachusetts state law." },
  { term: "Developer", definition: "The company or entity proposing and constructing a project subject to community review or permitting." },
  { term: "Dispute Resolution", definition: "The process for addressing non-compliance or disagreements, often through mediation or arbitration." },
  { term: "Engagement Plan", definition: "A document outlining how the community will be informed, consulted, and involved throughout the project." },
  { term: "Environmental Impact Assessment (EIA)", definition: "A study of a proposed project's likely environmental effects, required by most states before a new facility can be approved. Also called an Environmental Impact Report (EIR) or, at the federal level, an Environmental Impact Statement (EIS). It runs on a legally fixed schedule that does not adjust to CBA negotiations." },
  { term: "Environmental Justice (EJ) Principles", definition: "Principles ensuring meaningful involvement and equitable distribution of environmental benefits and burdens regardless of race, income, or other protected characteristics." },
  { term: "Host Community Agreement", definition: "A related contract between a municipality and developer outlining payments or benefits tied to project operation. In several states this is the legally required instrument even where it is not called a CBA." },
  { term: "Impact Fee", definition: "A payment from a developer to a municipality to offset the public costs a project creates, such as road wear, emergency service demand, or infrastructure upgrades." },
  { term: "Intervenor Funding", definition: "Money made available — usually by a state program or through developer contributions — to help communities pay for the legal and technical expertise needed to participate meaningfully in siting or permitting proceedings." },
  { term: "Joint Fact-Finding", definition: "A collaborative process where all parties gather and verify project data together to reduce information gaps." },
  { term: "Key Stakeholders", definition: "Residents, community groups, local officials, EJ communities, tribes, and others within or near the project area who may be affected." },
  { term: "Local Hire", definition: "A requirement that a certain percentage of jobs go to residents within a defined geographic area." },
  { term: "Long-Term Impact", definition: "An effect that persists through project operation and sometimes decommissioning — viewshed and operational noise, groundwater and habitat effects, property value changes — potentially lasting decades." },
  { term: "Meaningful Engagement", definition: "Early, continuous, accessible, culturally competent engagement that informs decision-making." },
  { term: "Mitigation", definition: "Measures that avoid, reduce, or remedy an impact at its source rather than paying for it afterward. Short-term mitigation addresses construction impacts; long-term mitigation addresses operational and environmental harms through buffers, protections, restoration, and ongoing monitoring." },
  { term: "Monitoring Committee", definition: "A group established to track compliance with CBA terms, review reports, and issue findings." },
  { term: "Municipality", definition: "A local government body (city, town, or county) responsible for land-use decisions, permitting, and enforcement." },
  { term: "NEPA", definition: "The National Environmental Policy Act, the federal law requiring environmental review of projects with federal funding, permits, or land. Federal NEPA review can run in parallel with a state EIA process." },
  { term: "Neutral Facilitator", definition: "An independent professional who manages meetings, ensures balanced participation, and helps translate interests into agreements." },
  { term: "Notice and Cure Period", definition: "The timeframe given to a developer to fix a breach before enforcement actions begin." },
  { term: "Performance Bond", definition: "A financial guarantee that funds enforcement or remediation if the developer fails to meet commitments." },
  { term: "Scoping", definition: "The early phase of environmental review that determines which impacts will be studied. This is a community's first and best opportunity to influence what the assessment actually examines." },
  { term: "Short-Term Impact", definition: "An effect tied to the construction phase — traffic and truck routing, dust and noise, road damage, staging areas, temporary loss of access. Usually intense but time-limited." },
  { term: "SLAPP Lawsuit", definition: "A Strategic Lawsuit Against Public Participation: litigation filed to intimidate or silence people for speaking out on matters of public concern rather than to win on the merits." },
  { term: "Stakeholder Map", definition: "A visual or written inventory of groups and individuals affected by or involved in a project." },
  { term: "Successor Clause", definition: "A provision ensuring that CBA obligations continue if project ownership changes." },
  { term: "Termination Clause", definition: "Defines conditions under which the agreement may end before its scheduled duration." },
];

// ---------- BIBLIOGRAPHY ----------

export const bibliography = [
  { citation: "Bacow, L. S., & Wheeler, M. (1984). Environmental dispute resolution. Plenum press." },
  { citation: "Baxamusa, M. H. (2008). Empowering Communities through Deliberation The Model of Community Benefits Agreements. Journal of Planning Education and Research, 27(3), 261–276.", url: "https://doi.org/10.1177/0739456X07308448" },
  { citation: "Been, V. (2010). Community Benefits Agreements: A New Local Government Tool or Another Variation on the Exactions Theme?" },
  { citation: "Belongie, N., & Silverman, R. M. (2018). Model CBAs and Community Benefits Ordinances as Tools for Negotiating Equitable Development: Three Critical Cases. Journal of Community Practice, 26(3), 308–327.", url: "https://doi.org/10.1080/10705422.2018.1476427" },
  { citation: "Berglund, L. (2021). Early Lessons From Detroit's Community Benefits Ordinance. Journal of the American Planning Association, 87(2), 254–265.", url: "https://doi.org/10.1080/01944363.2020.1823243" },
  { citation: "Brungard, E., & Fraser, C. (2025). Community Benefits Snapshot: Block Island Wind Farm Community Benefits Agreement.", url: "https://www.wri.org/snapshots/community-benefits-snapshot-block-island-wind-farm-community-benefits-agreement" },
  { citation: "Cascadden, M., Gunton, T., & Rutherford, M. (2021). Best practices for Impact Benefit Agreements. Resources Policy, 70, 101921.", url: "https://doi.org/10.1016/j.resourpol.2020.101921" },
  { citation: "Civiletti, D., & Nigro, Q. (2023, August 2). Riverhead's largest solar plant operated without town's official OK for eight months. Riverhead Local.", url: "https://riverheadlocal.com/2023/08/02/riverheads-largest-solar-plant-operated-without-towns-official-ok-for-eight-months/" },
  { citation: "Clarke, C. (2016). Community Benefits Agreements: To The Extent Possible. University of Baltimore Journal of Land and Development, 6(1).", url: "https://scholarworks.law.ubalt.edu/ubjld/vol6/iss1/5" },
  { citation: "De Barbieri, E. W. (2017). Do Community Benefits Agreements Benefit Communities? SSRN Electronic Journal.", url: "https://doi.org/10.2139/ssrn.3028688" },
  { citation: "Fang, R. (2023). Institutionalizing community control: A community benefits ordinance for los angeles. Journal of Affordable Housing & Community Development Law, 32(2).", url: "https://www.proquest.com/docview/2878438025" },
  { citation: "From promise to practice: What makes community benefits agreements enforceable? (2026). Energy Research & Social Science. Documentary analysis of 72 CBAs across renewable energy, infrastructure, and real estate projects, with practitioner interviews.", url: "https://www.sciencedirect.com/science/article/pii/S2214629626003142" },
  { citation: "Farley, B. (2024). Disrupting the knowledge and power imbalance in Community Benefits Agreement negotiations: Lessons from the Aggie Square development in Sacramento, California. Journal of Urban Affairs, 46(10), 2169–2184.", url: "https://doi.org/10.1080/07352166.2022.2155527" },
  { citation: "Faulkner, T. (2020, February 17). Senate Commission Wants Answers Regarding Exposed Block Island Wind Farm Cables. ecoRI News.", url: "https://ecori.org/2020-2-17-senate-commission-wants-answer-on-exposed-block-island-wind-cable/" },
  { citation: "Gross, J. (2007). Community Benefits Agreements: Definitions, Values, and Legal Enforceability. Journal of Affordable Housing & Community Development Law, 17(1–2), 35–58." },
  { citation: "Gross, J., LeRoy, G., & Janis-Aparicio, M. (2005). Community Benefits Agreements: Making Development Projects Accountable. Good Jobs First and the California Partnership for Working Families." },
  { citation: "Holznagel, B. (1991). Use of Environmental Mediation when Siting Hazardous Waste Facilities. National Law School Journal, 3(1).", url: "https://repository.nls.ac.in/nlsj/vol3/iss1/24" },
  { citation: "Jacobs, K. (2010, May 1). Raising The Bar: The Hunters Point Shipyard and Candlestick Point Development Community Benefits Agreement. UC Berkeley Labor Center.", url: "https://laborcenter.berkeley.edu/raising-the-bar-the-hunters-point-shipyard-and-candlestick-point-development-community-benefits-agreement/" },
  { citation: "Marantz, N. J. (2015). What Do Community Benefits Agreements Deliver? Evidence From Los Angeles. Journal of the American Planning Association, 81(4), 251–267.", url: "https://doi.org/10.1080/01944363.2015.1092093" },
  { citation: "McGuire, J. (1986). The Dilemma of Public Participation in Facility Siting Decisions and the Mediation Alternative. Seton Hall Journal of Legislation and Public Policy, 9(2).", url: "https://scholarship.shu.edu/shlj/vol9/iss2/8" },
  { citation: "Musil, T. A. (2012). The Sleeping Giant: Community Benefit Agreements and Urban Development. The Urban Lawyer, 44(4), 827–851." },
  { citation: "Stephan. (2022). Contracting with Communities: An Analysis of the Enforceability of Community Benefits Agreements. Minnesota Journal of Law & Inequality.", url: "https://doi.org/10.24926/25730037.646" },
  { citation: "Susskind, L., & Cruikshank, J. L. (2006). Breaking Robert's rules: The new way to run your meeting, build consensus, and get results. Oxford University Press." },
  { citation: "Susskind, L., McKearnan, S., & Thomas-Larmer, J. (1999). The Consensus Building Handbook: A Comprehensive Guide to Reaching Agreement. SAGE Publications, Inc.", url: "https://doi.org/10.4135/9781452231389" },
  { citation: "Wolf-Powers, L. (2010). Community Benefits Agreements and Local Government: A Review of Recent Evidence. Journal of the American Planning Association, 76(2), 141–159.", url: "https://doi.org/10.1080/01944443609034909923" },
];

// ---------- STEP COLOR MAP ----------

export const stepColors = {
  prepare: "#A31F34",
  engage: "#3D6B4A",
  negotiate: "#6B4E8C",
  draft: "#1D5E8C",
  monitor: "#8A6A1F",
  enforce: "#9E3B2E",
};
