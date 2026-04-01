import type { ServiceSlug } from "./data";
import stateMetadataJson from "../data/state_metadata.json";

interface StateMetadata {
  cityCount: number;
  pctPre1980: number | null;
  avgMedianYear: number | null;
  avgHomeownership: number | null;
  topCities: { name: string; population: number }[];
}
const stateMetadataMap = stateMetadataJson as Record<string, StateMetadata>;

export interface StatePageContent {
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSub: string;
  trustBullets: string[];
  intro: {
    h2: string;
    paragraphs: string[];
    ctaText: string;
  };
  why: {
    h2: string;
    points: { h3: string; text: string }[];
  };
  services: {
    h2: string;
    intro: string;
    items: { slug: ServiceSlug; title: string; description: string; costRange: string }[];
  };
  cityIntro: {
    h2: string;
    paragraph: string;
    ctaText: string;
  };
  faq: {
    h2: string;
    items: { q: string; a: string }[];
  };
  closing: {
    h2: string;
    text: string;
    ctaText: string;
  };
  internalLinks: {
    otherStatesLabel: string;
    viewAllStatesLabel: string;
    otherServicesLabel: string;
  };
}

interface ServiceMeta {
  description: string;
  costRange: string;
  faqRepairReplace: string | null;
  faqFrequency: string | null;
  heroSub: (label: string, stateName: string) => string;
  introP1: (label: string, stateName: string) => string;
  whyPoint1: (label: string, stateName: string, stateAbbr: string) => { h3: string; text: string };
  whyPoint2: () => { h3: string; text: string };
  whyPoint3: (stateName: string) => { h3: string; text: string };
}

const SERVICE_META: Record<string, ServiceMeta> = {
  "gutter-installation": {
    description:
      "New gutter installation cost depends on linear footage, material (aluminum $4–$9/ft, steel $6–$12/ft, copper $15–$30/ft), profile style, and home height. A licensed installer measures your roofline, recommends the right size and style for your rainfall, and provides an itemized quote before any work begins.",
    costRange: "$600 – $2,400",
    faqRepairReplace: null,
    faqFrequency: "New gutters typically last 20–30 years with proper maintenance. Annual cleaning and periodic inspections are all that's needed.",
    heroSub: (label, stateName) =>
      `Licensed ${stateName} gutter specialists for new installation — aluminum, seamless, and copper. Protect your foundation and siding from water damage. Free estimates, no obligation.`,
    introP1: (label, stateName) =>
      `New gutter installation in ${stateName} protects your foundation, siding, and landscaping from water damage that compounds with every rain event. Licensed local specialists measure your roofline, recommend the right size and material for your climate, and give you a line-item quote — no forms, no obligation.`,
    whyPoint1: (label, stateName, stateAbbr) => ({
      h3: "Get the right size — not just any gutter",
      text: `Most homes need 5-inch or 6-inch K-style gutters, but the right choice depends on your roof pitch and ${stateName}'s rainfall intensity. An undersized gutter overflows during heavy rain; an oversized one looks wrong and costs more. A licensed ${stateAbbr} specialist sizes your system correctly the first time.`,
    }),
    whyPoint2: () => ({
      h3: "Seamless vs sectional — the decision that affects 20 years of maintenance",
      text: `Sectional gutters have seam joints every 10–12 feet — each one a future leak point. Seamless gutters, rolled on-site to exact length, eliminate every seam joint. The 10–20% upfront premium pays back within 5 years in avoided repairs for most homeowners.`,
    }),
    whyPoint3: (stateName) => ({
      h3: `Licensed ${stateName} installers only`,
      text: `All specialists connected through this page are licensed and insured under ${stateName} state requirements. A licensed installer ensures proper pitch (1/4 inch per 10 feet toward downspouts) and correct hanger spacing — the two details that determine how long your gutters last.`,
    }),
  },
  "gutter-cleaning": {
    description:
      "Professional gutter cleaning includes removing all debris, flushing every downspout, checking hangers and seam integrity, and a basic condition report. Most single-story homes take 1–2 hours. Homes with heavy pine or oak coverage may need 3–4 cleanings per year.",
    costRange: "$100 – $350",
    faqRepairReplace: null,
    faqFrequency:
      "Most homes need cleaning twice a year — fall after leaf drop and spring after seed pods. Homes under heavy pine, oak, or maple coverage may need 3–4 cleanings annually.",
    heroSub: (label, stateName) =>
      `Licensed ${stateName} gutter cleaning specialists — debris removal, downspout flushing, and system inspection in one visit. Prevent fascia rot and foundation flooding. Free estimates, no obligation.`,
    introP1: (label, stateName) =>
      `Professional gutter cleaning in ${stateName} goes beyond scooping leaves — it includes flushing every downspout, checking hangers and seams, and a condition report that catches small problems before they become expensive ones. The $100–$350 cost prevents the $5,000–$25,000 in foundation and fascia damage that follows years of neglect.`,
    whyPoint1: (label, stateName, stateAbbr) => ({
      h3: "Downspout flushing matters as much as debris removal",
      text: `A clogged downspout backs water up into the gutter, causing overflow at the fascia and foundation saturation. Professional cleaning in ${stateName} always includes flushing every downspout — not just clearing visible debris from the gutter trough. Ask any specialist you call to confirm downspouts are included.`,
    }),
    whyPoint2: () => ({
      h3: "A cleaning visit catches problems worth hundreds to fix now — thousands later",
      text: `A loose hanger costs $50–$100 to fix during a cleaning visit. The same hanger, left unaddressed, causes a section to sag, collect standing water, pull the fascia board away from the house, and eventually require replacement of 20+ feet of gutter and fascia repair costing $400–$800.`,
    }),
    whyPoint3: (stateName) => ({
      h3: `Licensed ${stateName} gutter cleaners — not landscapers with ladders`,
      text: `All specialists connected through this page are licensed and insured gutter contractors in ${stateName}. A licensed specialist knows what to look for beyond the obvious debris — pitch alignment, seam integrity, and downspout sizing — and documents what they find.`,
    }),
  },
  "gutter-repair": {
    description:
      "Gutter repair addresses leaking seams ($75–$150 per section), sagging sections ($100–$300), loose or missing hangers ($50–$100 each), cracked end caps, and separated downspout joints. A licensed specialist diagnoses the complete system — not just the visible failure — before quoting.",
    costRange: "$150 – $600",
    faqRepairReplace:
      "Gutters under 15 years old with isolated seam failures or loose hangers are worth repairing. Systems over 20 years old with rust throughout, widespread pitch problems, or more than 4–5 failure points typically cost more to repair repeatedly than to replace with seamless aluminum.",
    faqFrequency: null,
    heroSub: (label, stateName) =>
      `Licensed ${stateName} gutter repair specialists — leaking seams, sagging sections, loose hangers, and downspout failures. Full system diagnosis included. Free estimates, no obligation.`,
    introP1: (label, stateName) =>
      `Gutter repair in ${stateName} addresses the specific failures that allow water to drain against your home's foundation and siding instead of away from it. Leaking seams, sagging sections, and separated hangers are the most common culprits — and each one costs a fraction to fix now compared to the foundation and fascia damage that follows if left alone.`,
    whyPoint1: (label, stateName, stateAbbr) => ({
      h3: "Get a full diagnosis — not just a patch",
      text: `Patching a visible seam without checking the rest of the system is how homeowners end up calling a contractor back three times in two years. A licensed ${stateAbbr} gutter specialist inspects every section, every hanger, and every downspout connection during the quote visit — the full picture costs nothing extra and saves on repeat service calls.`,
    }),
    whyPoint2: () => ({
      h3: "A $150 repair today vs a $10,000 problem next year",
      text: `A leaking seam deposits water at the fascia board and foundation continuously with every rain. Left unrepaired, the fascia rots ($400–$1,200 to replace), the soffit follows ($600–$2,000), and the foundation eventually develops cracks or water infiltration ($5,000–$25,000 to remediate). The math on early repair is not close.`,
    }),
    whyPoint3: (stateName) => ({
      h3: `Licensed ${stateName} gutter repair contractors`,
      text: `All specialists connected through this page are licensed and insured under ${stateName} state requirements. A licensed specialist provides a written quote before starting, uses properly rated sealant and replacement hardware, and stands behind the work with a labor warranty.`,
    }),
  },
  "gutter-replacement": {
    description:
      "Full gutter replacement makes financial sense when systems are over 20 years old, have widespread rust or joint failures, or have improper pitch across multiple sections. New seamless aluminum ($4–$9/ft installed) eliminates seam joints entirely and typically lasts 20–25 years. Most full replacements are completed in a single day.",
    costRange: "$800 – $3,000+",
    faqRepairReplace:
      "If your gutters are over 20 years old and have multiple failure points throughout — rust, widespread seam failures, sagging pitch that can't be corrected without resetting all hangers — replacement costs less over 5 years than repeated repairs. Isolated issues on gutters under 15 years old are worth repairing.",
    faqFrequency:
      "Seamless aluminum gutters last 20–25 years; steel lasts 20–30 years; copper lasts 50+ years. Proper installation with correct pitch and hanger spacing maximizes lifespan.",
    heroSub: (label, stateName) =>
      `Licensed ${stateName} gutter replacement specialists — seamless aluminum, steel, and copper. Custom-rolled on-site, completed in one day. Eliminate leaks for 20+ years. Free estimates, no obligation.`,
    introP1: (label, stateName) =>
      `Full gutter replacement in ${stateName} is the right call when your system has more failure points than repair can economically address — widespread seam failures, rust throughout, or improper pitch across multiple sections. New seamless gutters, rolled on-site to your exact roofline, eliminate every seam joint and typically last 20–25 years without major maintenance.`,
    whyPoint1: (label, stateName, stateAbbr) => ({
      h3: "Seamless gutters are rolled to your exact roofline on-site",
      text: `A licensed ${stateAbbr} gutter specialist brings a rolling machine to your home and fabricates gutters to the exact length of each run — no pre-cut sections, no splicing, no exposed joints. The result fits your roofline perfectly with correct pitch built in from the start.`,
    }),
    whyPoint2: () => ({
      h3: "Replacement ends the repair cycle — and the cumulative cost",
      text: `Three repair visits at $200–$400 each over two years adds up to $600–$1,200 spent on a system that still fails. A full seamless replacement at $800–$2,400 ends the cycle, comes with a material warranty, and requires nothing but annual cleaning for the next 20+ years.`,
    }),
    whyPoint3: (stateName) => ({
      h3: `Licensed ${stateName} replacement contractors`,
      text: `All specialists connected through this page are licensed and insured under ${stateName} state requirements. A licensed installer assesses fascia condition before hanging new gutters — installing over damaged fascia is the most common mistake DIYers and unlicensed contractors make, and it leads to premature failure.`,
    }),
  },
  "gutter-guard-installation": {
    description:
      "Gutter guards reduce cleaning frequency by 80–90% by blocking leaves, pine needles, and debris from entering the gutter trough. Micro-mesh ($2–$6/ft installed) is the highest-performing type and handles fine debris; reverse-curve ($1.50–$4/ft) works well for primarily leaf debris. Guard selection depends on your specific tree coverage — the wrong type still clogs.",
    costRange: "$500 – $2,500",
    faqRepairReplace: null,
    faqFrequency:
      "Quality gutter guards reduce cleaning to once a year or less for most homes. Even the best guards benefit from an annual inspection and flush — fine debris like pollen and granules accumulate over time.",
    heroSub: (label, stateName) =>
      `Licensed ${stateName} gutter guard installation specialists — micro-mesh, reverse-curve, and all types. Stop cleaning gutters every year. Manufacturer warranty included. Free estimates, no obligation.`,
    introP1: (label, stateName) =>
      `Gutter guards in ${stateName} reduce cleaning frequency by 80–90% and eliminate the safety risk of seasonal ladder work. The key is matching the guard type to your specific tree coverage — a micro-mesh guard handles pine needles and fine debris that destroys cheaper screen and foam products. A licensed ${stateName} specialist assesses your property before recommending a product.`,
    whyPoint1: (label, stateName, stateAbbr) => ({
      h3: "The wrong guard type still clogs — get a site assessment first",
      text: `Foam inserts and basic screen guards are ineffective for pine needles, seed pods, and fine debris — the most common debris types in heavily treed ${stateName} neighborhoods. A licensed ${stateAbbr} specialist assesses your actual debris type and recommends the guard that performs for your property, not the one with the highest margin.`,
    }),
    whyPoint2: () => ({
      h3: "The math: guards pay for themselves in 4–6 years for most homeowners",
      text: `Two professional cleanings per year at $150–$200 each adds up to $300–$400 annually. A quality micro-mesh guard installation at $1,200–$1,800 pays for itself in 4–6 years — and eliminates the safety risk of bi-annual ladder work for the remaining 15+ years of the guard's lifespan.`,
    }),
    whyPoint3: (stateName) => ({
      h3: `Licensed ${stateName} guard installers — manufacturer warranty included`,
      text: `All specialists connected through this page are licensed and insured under ${stateName} state requirements. A licensed installer provides manufacturer warranty documentation, ensures proper fitment that doesn't gap under wind or debris loads, and installs without voiding your gutter warranty.`,
    }),
  },
  "downspout-repair": {
    description:
      "Downspout failures — clogs, separated joints, crimped elbows, and improper discharge routing — deposit water directly against the foundation instead of 4–6 feet away. Repair costs: unclogging $75–$150, joint repair $100–$200, rerouting for proper discharge $150–$400, underground drainage extension $300–$800.",
    costRange: "$75 – $400",
    faqRepairReplace: null,
    faqFrequency: null,
    heroSub: (label, stateName) =>
      `Licensed ${stateName} downspout repair specialists — clogs, separated joints, improper discharge, and underground extensions. Protect your foundation from water damage. Free estimates, no obligation.`,
    introP1: (label, stateName) =>
      `Downspout repair in ${stateName} addresses the part of your drainage system that most homeowners ignore until foundation damage forces the issue. A clogged, separated, or improperly routed downspout deposits water at your foundation with every rain — the same water that causes $5,000–$25,000 in foundation cracking, basement flooding, and soil erosion when left unaddressed.`,
    whyPoint1: (label, stateName, stateAbbr) => ({
      h3: "Downspouts must discharge 4–6 feet from the foundation — most don't",
      text: `Standard builder-grade downspout installations often terminate 1–2 feet from the foundation with a splash block that quickly fills with soil. A licensed ${stateAbbr} specialist extends or reroutes your discharge to the required 4–6 feet minimum — a $150–$400 repair that prevents foundation remediation costs that routinely reach $10,000+.`,
    }),
    whyPoint2: () => ({
      h3: "A $75 downspout unclogging vs a $15,000 foundation repair",
      text: `A clogged downspout backs water up into the gutter, causing overflow at the fascia, foundation saturation, and basement moisture infiltration. The progression from clogged downspout to visible foundation cracking can take as little as one heavy-rain season. A 15-minute service call at $75–$150 resets the clock.`,
    }),
    whyPoint3: (stateName) => ({
      h3: `Licensed ${stateName} drainage specialists`,
      text: `All specialists connected through this page are licensed and insured under ${stateName} state requirements. A licensed specialist assesses the complete drainage path — from gutter inlet to final discharge point — and ensures your downspouts meet local drainage codes before closing out the job.`,
    }),
  },
  "seamless-gutter": {
    description:
      "Seamless gutters are fabricated on-site from a continuous aluminum, steel, or copper coil — no pre-cut sections, no seam joints. Seam joints are the source of 90% of gutter leaks; eliminating them is the single most impactful upgrade available. Aluminum runs $4–$9/ft installed; steel $6–$12/ft; copper $15–$30/ft.",
    costRange: "$700 – $2,800",
    faqRepairReplace: null,
    faqFrequency:
      "Seamless aluminum gutters last 20–25 years with annual cleaning. Seamless steel lasts 20–30 years; copper lasts 50+ years. Proper pitch and hanger spacing installed by a licensed contractor maximizes lifespan.",
    heroSub: (label, stateName) =>
      `Licensed ${stateName} seamless gutter specialists — custom-rolled on-site, zero seam joints, 20+ year lifespan. Aluminum, steel, and copper. Free estimates, no obligation.`,
    introP1: (label, stateName) =>
      `Seamless gutters in ${stateName} are fabricated on-site from a continuous coil, cut to the exact length of each run on your roofline. No pre-cut sections means no seam joints — the source of 90% of gutter leaks. The result is a system that fits your home perfectly, drains properly from day one, and requires nothing but annual cleaning for 20+ years.`,
    whyPoint1: (label, stateName, stateAbbr) => ({
      h3: "On-site fabrication means exact fit — no gaps, no crimping",
      text: `A licensed ${stateAbbr} seamless gutter specialist brings the rolling machine to your home. Each run is measured and rolled to exact length before installation — no field cuts, no splicing, no sections left slightly short or long that throw off pitch. The fit is perfect because the gutter was made for your specific roofline.`,
    }),
    whyPoint2: () => ({
      h3: "Seam joints are where gutters fail — seamless eliminates every one",
      text: `Pre-cut sectional gutters have joints every 10–12 feet, each sealed with lap sealant that hardens, cracks, and separates within 5–10 years. A 150-foot home has 12–15 of these joints, all eventually requiring resealing. Seamless gutters have zero joints — the only connection points are the end caps, outlets, and mitre corners, which a licensed installer seals properly and inspects annually during cleaning.`,
    }),
    whyPoint3: (stateName) => ({
      h3: `Seamless gutters require a licensed contractor with rolling equipment`,
      text: `There is no DIY equivalent for seamless gutters — the rolling equipment costs $10,000–$20,000 and requires trained operation. All specialists connected through this page are licensed and insured ${stateName} contractors who bring the rolling machine to your home, fabricate your gutters on-site, and install them with proper pitch and hanger spacing in a single visit.`,
    }),
  },
  "gutter-inspection": {
    description:
      "A professional gutter inspection covers pitch alignment, hanger spacing, seam integrity, end cap and mitre condition, downspout routing, discharge points, and fascia health. Issues invisible from the ground — hidden seam failures behind hangers, early fascia rot, incorrect pitch — are identified before they escalate. Often included free with cleaning.",
    costRange: "Free – $150",
    faqRepairReplace: null,
    faqFrequency:
      "Annual inspections are standard for most homes. Gutters over 15 years old benefit from bi-annual inspections. Many specialists combine inspection with fall cleaning in a single service call.",
    heroSub: (label, stateName) =>
      `Licensed ${stateName} gutter inspection specialists — pitch, hangers, seams, downspouts, and fascia. Complete system assessment, written condition report. Often free with cleaning. No obligation.`,
    introP1: (label, stateName) =>
      `A professional gutter inspection in ${stateName} reveals what ground-level visual checks miss: improper pitch collecting standing water, hidden seam failures behind hanger straps, early fascia rot behind the gutter back, and downspout discharge points depositing water against the foundation. Catching these issues in an inspection costs a fraction of what they cost once water damage compounds.`,
    whyPoint1: (label, stateName, stateAbbr) => ({
      h3: "Issues invisible from the ground — found before they cost thousands",
      text: `Gutter pitch failures, hidden seam leaks, and early fascia rot are all invisible from street level and often invisible from a ladder without hands-on probing. A licensed ${stateAbbr} inspector physically checks each section, tests downspout flow, and probes fascia for soft spots — the complete picture of your system's actual condition.`,
    }),
    whyPoint2: () => ({
      h3: "A $0–$150 inspection vs discovering the problem through water damage",
      text: `The alternative to a proactive inspection is discovering problems through ceiling stains, basement moisture, foundation cracks, or visible fascia rot — at which point the simple repair has already become a $500–$5,000 remediation job. An annual inspection, often combined free with cleaning, resets your awareness of the system's condition every year.`,
    }),
    whyPoint3: (stateName) => ({
      h3: `Licensed ${stateName} inspectors — written report included`,
      text: `All specialists connected through this page are licensed and insured gutter contractors in ${stateName}. A licensed inspector provides a written condition report with specific findings and repair or replacement recommendations — not a verbal summary forgotten before the truck leaves the driveway.`,
    }),
  },
};

const GUTTER_LABELS: Record<string, string> = {
  "gutter-installation": "Gutter Installation",
  "gutter-cleaning": "Gutter Cleaning",
  "gutter-repair": "Gutter Repair",
  "gutter-replacement": "Gutter Replacement",
  "gutter-guard-installation": "Gutter Guard Installation",
  "downspout-repair": "Downspout Repair",
  "seamless-gutter": "Seamless Gutter",
  "gutter-inspection": "Gutter Inspection",
};

export function getStatePageContent(
  serviceSlug: string,
  serviceLabel: string,
  stateName: string,
  stateAbbr: string,
  stateSlug: string
): StatePageContent {
  const meta = stateMetadataMap[stateSlug] ?? null;
  const pctPre1980 = meta?.pctPre1980 ?? null;
  const avgHomeownership = meta?.avgHomeownership ?? null;
  const topCities = meta?.topCities?.slice(0, 3).map((c) => c.name) ?? [];
  const cityCount = meta?.cityCount ?? null;
  const svcMeta = SERVICE_META[serviceSlug] ?? SERVICE_META["gutter-installation"];
  const label = GUTTER_LABELS[serviceSlug] ?? serviceLabel;

  const introParagraphs: string[] = [
    svcMeta.introP1(label, stateName),
  ];
  if (pctPre1980 !== null && pctPre1980 > 30) {
    introParagraphs.push(
      `${Math.round(pctPre1980)}% of homes in ${stateName} were built before 1980. Gutters on these homes commonly have galvanized steel that has corroded, failed sealant at every seam joint, and 4-inch downspouts that can't handle modern rainfall volumes. A specialist familiar with ${stateName}'s older housing stock can tell you in 5 minutes whether repair, upgrade, or full replacement makes the most financial sense for your specific system.`
    );
  }
  if (avgHomeownership !== null && avgHomeownership > 60) {
    introParagraphs.push(
      `With a homeownership rate near ${Math.round(avgHomeownership)}% across ${stateName}, the financial case for proper gutter maintenance is direct: foundation damage, fascia rot, and basement water infiltration — all preventable with a functioning gutter system — cost $5,000–$25,000+ to remediate once they develop. A free quote takes 5 minutes.`
    );
  }

  const whyPoints = [
    svcMeta.whyPoint1(label, stateName, stateAbbr),
    svcMeta.whyPoint2(),
    svcMeta.whyPoint3(stateName),
  ];

  const faqItems: { q: string; a: string }[] = [
    {
      q: `How much does ${label.toLowerCase()} cost in ${stateName}?`,
      a: `${svcMeta.costRange} is the typical range in ${stateName}. ${svcMeta.description} A licensed ${stateName} specialist gives you a project-specific quote at no cost.`,
    },
    {
      q: `Is the ${label.toLowerCase()} quote free in ${stateName}?`,
      a: `Yes. A phone quote costs nothing — no inspection fee, no obligation. You get a real estimate from a licensed ${stateName} gutter specialist before any work is scheduled.`,
    },
    ...(svcMeta.faqRepairReplace
      ? [{
          q: `How do I know if I need ${label.toLowerCase()} or a full replacement?`,
          a: svcMeta.faqRepairReplace,
        }]
      : []),
    {
      q: `Do gutter contractors need a license in ${stateName}?`,
      a: `${stateName} requires contractors performing exterior home improvements to carry a valid contractor's license and general liability insurance. Always verify license status before hiring. All specialists connected through this page are licensed and insured in ${stateName}.`,
    },
    ...(svcMeta.faqFrequency
      ? [{
          q: serviceSlug === "gutter-cleaning"
            ? `How often should gutters be cleaned in ${stateName}?`
            : serviceSlug === "gutter-inspection"
            ? `How often should gutters be inspected in ${stateName}?`
            : `How long do gutters last in ${stateName}?`,
          a: svcMeta.faqFrequency,
        }]
      : []),
    {
      q: `Can I get same-day ${label.toLowerCase()} service in ${stateName}?`,
      a: `Same-day and next-day availability varies by service type and season. Cleaning, minor repairs, and inspections are often available same-day or next-day in most ${stateName} areas. Installation and full replacement typically require scheduling 3–7 business days out. Call to confirm availability in your city.`,
    },
  ];

  return {
    metaTitle: `${label} in ${stateName} — ${svcMeta.costRange} | Free Quotes, Licensed Specialists`,
    metaDescription: `Free ${label.toLowerCase()} quotes in ${stateName}. ${svcMeta.costRange} typical cost. Licensed local gutter specialists${cityCount ? ` in ${cityCount}+ cities` : ""}. Upfront pricing, no obligation.`,
    heroTitle: `Free ${label} Quote in ${stateName}`,
    heroSub: svcMeta.heroSub(label, stateName),
    trustBullets: [
      `Licensed & insured gutter contractors in ${stateName}`,
      "Free estimates — no inspection fee, no obligation",
      "Upfront pricing before any work begins",
      "Same-day availability in most areas",
      ...(cityCount ? [`Serving ${cityCount}+ cities across ${stateName}`] : []),
    ],
    intro: {
      h2: `${label} in ${stateName} — What to Know Before You Call`,
      paragraphs: introParagraphs,
      ctaText: `Get a Free ${label} Quote in ${stateName}`,
    },
    why: {
      h2: `Why ${stateName} Homeowners Get a Gutter Quote Before Committing`,
      points: whyPoints,
    },
    services: {
      h2: `All Gutter Services in ${stateName}`,
      intro: `Licensed ${stateName} gutter specialists handle every service from routine cleaning to full seamless replacement. Each service below includes typical cost ranges and what affects your quote.`,
      items: Object.entries(SERVICE_META).map(([slug, data]) => ({
        slug: slug as ServiceSlug,
        title: GUTTER_LABELS[slug] ?? slug,
        description: data.description,
        costRange: data.costRange,
      })),
    },
    cityIntro: {
      h2: `Find a ${label} Specialist Near You in ${stateName}`,
      paragraph: topCities.length
        ? `Licensed gutter specialists serve every major city and county in ${stateName} — including ${topCities.join(", ")}${cityCount ? `, and ${cityCount} more cities` : ""} statewide. Select your city for local pricing and same-day availability.`
        : `Licensed gutter specialists serve all major cities and counties across ${stateName}. Select your city for local pricing and same-day availability.`,
      ctaText: `Find a ${label} Specialist in Your City`,
    },
    faq: {
      h2: `${label} FAQ — ${stateName}`,
      items: faqItems,
    },
    closing: {
      h2: `Get Your Free ${label} Quote in ${stateName} Today`,
      text: `No forms. No waiting. No commitment. A licensed ${label.toLowerCase()} specialist serving ${stateName} gives you an honest, project-specific estimate in under 5 minutes — and tells you exactly what your system needs before any work is scheduled.`,
      ctaText: `Call for a Free ${label} Quote in ${stateName}`,
    },
    internalLinks: {
      otherStatesLabel: "Gutter services in other states:",
      viewAllStatesLabel: "View all states",
      otherServicesLabel: "Other gutter services:",
    },
  };
}
