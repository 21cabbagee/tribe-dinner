export const UPCOMING_SALONS = [
  {
    id: "salon-sf-ai",
    title: "AI Infrastructure & Agentic Compute Salon",
    metro: "San Francisco",
    neighborhood: "SoMa Private Speakeasy",
    date: "Thursday, Nov 12 • 7:30 PM",
    seatPrice: 350,
    totalSeats: 8,
    confirmedGuests: 7,
    vibe: "Michelin-curated 5-course tasting + cellar pairings",
    curator: "Elena Rostova (Series B AI Founder & GP)",
    tableFocus: "Autonomous agent governance, sub-3ms inference latency, and enterprise KYA token scoping.",
    attendeeProfiles: [
      { name: "Dev Lead @ VectorHQ", tag: "$8M ARR" },
      { name: "Founder @ AutonomousEdge", tag: "$14M ARR" },
      { name: "Partner @ Foundry Capital", tag: "$120M AUM" },
      { name: "Chief Architect @ AgentHost", tag: "Ex-Anthropic" },
    ],
    status: "1_SEAT_REMAINING"
  },
  {
    id: "salon-nyc-fintech",
    title: "Cross-Border Rails & Regulated Fintech Dinner",
    metro: "New York City",
    neighborhood: "SoHo Heritage Loft",
    date: "Wednesday, Nov 18 • 8:00 PM",
    seatPrice: 400,
    totalSeats: 8,
    confirmedGuests: 6,
    vibe: "Private omakase chef experience",
    curator: "Marcus Vance (Ex-Stripe Risk & Payouts Lead)",
    tableFocus: "W-8BEN automation, chargeback defense, and unbundling legacy global payroll giants.",
    attendeeProfiles: [
      { name: "CEO @ GlobalLedger", tag: "$12M ARR" },
      { name: "VP Ops @ RemitFlow", tag: "$40M Vol" },
      { name: "Head of Risk @ Adyen Alumni", tag: "Fintech Angel" },
    ],
    status: "2_SEATS_REMAINING"
  },
  {
    id: "salon-austin-saas",
    title: "Service-as-a-Software & Outcome Pricing Mastermind",
    metro: "Austin",
    neighborhood: "Downtown Private Vault",
    date: "Tuesday, Nov 24 • 7:00 PM",
    seatPrice: 275,
    totalSeats: 8,
    confirmedGuests: 5,
    vibe: "Prime dry-aged steakhouse private room",
    curator: "Julian Sterling (B2B Agency Operator, $4M ARR)",
    tableFocus: "Replacing $50/mo SaaS seats with $2,500/mo automated labor deliverables.",
    attendeeProfiles: [
      { name: "Managing Dir @ ScaleBoutique", tag: "$3.5M ARR" },
      { name: "Founder @ SpecStudio", tag: "85% Margins" },
    ],
    status: "3_SEATS_REMAINING"
  }
];

export const MATCHING_CRITERIA_QUESTIONS = {
  roles: ["Founder / Co-Founder", "VP Engineering / CTO", "Venture Capital Partner", "Head of Growth / Revenue"],
  stages: ["Bootstrapped ($500k - $2M ARR)", "Series A ($2M - $8M ARR)", "Series B+ ($8M - $30M ARR)", "High-Growth Agency ($1M - $5M ARR)"],
  topics: [
    "Autonomous Agent Infrastructure & FinOps",
    "Service-as-a-Software Unbundling",
    "High-Ticket Physical Outbound & Attention Sprints",
    "Regulated Data & Cross-Border Compliance"
  ]
};
