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

const SERVICE_STATE_DESCRIPTIONS: Record<
  string,
  { description: string; costRange: string }
> = {
  "gutter-installation": {
    description:
      "New gutter installation protects your home's foundation, siding, and landscaping from water damage. Cost depends on linear footage, gutter material (aluminum, steel, copper), style (K-style vs half-round), and labor rates in your area. A licensed installer measures your roofline and provides an itemized quote before any work begins.",
    costRange: "$600 – $2,400",
  },
  "gutter-cleaning": {
    description:
      "Clogged gutters cause water to back up under shingles, saturate fascia boards, and pool around foundations. Professional cleaning includes flushing downspouts and a system inspection. Most homes need cleaning once or twice per year depending on tree coverage.",
    costRange: "$100 – $250",
  },
  "gutter-repair": {
    description:
      "Leaking seams, sagging sections, and separated hangers allow water to drain against your home instead of away from it. Repair costs depend on the number of problem areas, gutter material, and roof access difficulty. A specialist diagnoses the full system before quoting.",
    costRange: "$150 – $600",
  },
  "gutter-replacement": {
    description:
      "Gutters older than 20 years often have widespread joint failures, rust, and improper pitch that can't be fully corrected by repair. Full replacement with seamless aluminum eliminates most leak points. Cost depends on linear footage, home height, and material choice.",
    costRange: "$800 – $3,000+",
  },
  "gutter-guard-installation": {
    description:
      "Gutter guards reduce cleaning frequency by 80–90% and prevent clogs from leaves, pine needles, and debris. Guard type — micro-mesh, reverse curve, foam insert — affects price and performance. A specialist recommends the right product for your tree coverage and gutter style.",
    costRange: "$500 – $2,500",
  },
  "downspout-repair": {
    description:
      "Damaged or disconnected downspouts deposit water directly against your foundation. Repair or rerouting ensures water discharges at least 4 feet from the home. A specialist assesses downspout size, slope, and discharge point before quoting.",
    costRange: "$75 – $400",
  },
  "seamless-gutter": {
    description:
      "Seamless gutters are fabricated on-site from a continuous coil, eliminating seam joints — the most common leak point. Available in aluminum, steel, and copper. A specialist measures and rolls your gutters to exact length during the installation visit.",
    costRange: "$700 – $2,800",
  },
  "gutter-inspection": {
    description:
      "A full gutter inspection identifies hidden damage, improper pitch, undersized downspouts, and failing fascia before problems escalate. Many specialists offer free inspections when combined with cleaning or a repair estimate.",
    costRange: "Free – $150",
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
  const svc = SERVICE_STATE_DESCRIPTIONS[serviceSlug] ?? SERVICE_STATE_DESCRIPTIONS["gutter-installation"];
  const label = GUTTER_LABELS[serviceSlug] ?? serviceLabel;

  const introParagraphs: string[] = [
    `Get a free ${label.toLowerCase()} quote in ${stateName}. Licensed local specialists serve every major city and county — upfront pricing, no obligation.`,
  ];
  if (pctPre1980 !== null && pctPre1980 > 30) {
    introParagraphs.push(
      `${Math.round(pctPre1980)}% of homes in ${stateName} were built before 1980. Older gutters often have galvanized steel that rusts, failing sealant at seam joints, and undersized downspouts that can't handle modern rainfall volumes. A specialist familiar with ${stateName}'s housing stock can assess what your system actually needs.`
    );
  }
  if (avgHomeownership !== null && avgHomeownership > 60) {
    introParagraphs.push(
      `With a homeownership rate near ${Math.round(avgHomeownership)}% across ${stateName}, protecting your home's value through proper water management is a sound investment. A functioning gutter system prevents foundation damage, siding rot, and basement flooding — issues that cost far more to fix than preventive maintenance.`
    );
  }

  return {
    metaTitle: `${label} in ${stateName} | Free Quotes from Licensed Local Specialists`,
    metaDescription: `Free ${label.toLowerCase()} quotes in ${stateName}. Licensed local gutter specialists${cityCount ? ` in ${cityCount}+ cities` : ""}. Upfront pricing, no obligation.`,
    heroTitle: `Free ${label} Quote in ${stateName}`,
    heroSub: `Licensed ${stateName} gutter specialists for ${label.toLowerCase()} and all gutter services. Free estimates, no obligation.`,
    trustBullets: [
      `Licensed & insured in ${stateName}`,
      "Free estimates, no obligation",
      "Upfront pricing before work begins",
      "Same-day availability in most areas",
      ...(cityCount ? [`Service in ${cityCount}+ cities across ${stateName}`] : []),
    ],
    intro: {
      h2: `${label} Quotes in ${stateName}`,
      paragraphs: introParagraphs,
      ctaText: `Get a Free ${label} Quote in ${stateName}`,
    },
    why: {
      h2: `Why ${stateName} Homeowners Get a Gutter Quote First`,
      points: [
        {
          h3: "Know your cost before any commitment",
          text: `${label} costs in ${stateName} vary by home size, linear footage, material, and local labor rates. A free phone quote from a licensed ${stateName} specialist gives you a realistic number before you schedule anything.`,
        },
        {
          h3: "Prevent costly water damage",
          text: `Failing gutters allow water to pool against foundations, saturate fascia boards, and erode landscaping. Addressing the issue early prevents repair costs that routinely exceed $5,000–$15,000 in foundation and basement remediation.`,
        },
        {
          h3: `Licensed ${stateName} specialists only`,
          text: `All specialists connected through this page are licensed and insured under ${stateName} state requirements. You get honest quotes from contractors accountable to state licensing boards.`,
        },
      ],
    },
    services: {
      h2: `Gutter Services in ${stateName}`,
      intro: `Licensed ${stateName} specialists handle all gutter needs — from routine cleaning to full seamless replacement. Select a service to see pricing and local availability.`,
      items: Object.entries(SERVICE_STATE_DESCRIPTIONS).map(([slug, data]) => ({
        slug: slug as ServiceSlug,
        title: GUTTER_LABELS[slug] ?? slug,
        description: data.description,
        costRange: data.costRange,
      })),
    },
    cityIntro: {
      h2: `${label} Near You in ${stateName}`,
      paragraph: topCities.length
        ? `Licensed gutter specialists serve ${stateName} statewide, including ${topCities.join(", ")}, and ${cityCount ? cityCount + " other cities" : "all major cities"} across the state.`
        : `Licensed gutter specialists serve all major cities across ${stateName}.`,
      ctaText: `Find a ${label} Specialist Near You`,
    },
    faq: {
      h2: `${label} FAQ — ${stateName}`,
      items: [
        {
          q: `How much does ${label.toLowerCase()} cost in ${stateName}?`,
          a: `${svc.costRange} is a typical range in ${stateName}. ${svc.description} A free phone quote from a licensed specialist gives you a project-specific number.`,
        },
        {
          q: `Is the ${label.toLowerCase()} quote free in ${stateName}?`,
          a: `Yes. A phone quote costs nothing. You get a real estimate from a licensed ${stateName} gutter specialist before any work or inspection fee is required.`,
        },
        {
          q: `How do I know if I need ${label.toLowerCase()} or a full replacement?`,
          a: `A licensed gutter specialist can assess this over the phone and confirm during a free on-site inspection. Gutters under 15 years old with isolated issues usually qualify for repair; older systems with widespread joint failures or rust typically warrant replacement.`,
        },
        {
          q: `Do gutter contractors need a license in ${stateName}?`,
          a: `${stateName} requires contractors performing exterior improvements to carry a valid contractor's license and general liability insurance. All specialists connected through this page meet ${stateName} state requirements.`,
        },
        {
          q: `How often should gutters be cleaned in ${stateName}?`,
          a: `Most ${stateName} homes with significant tree coverage need cleaning twice per year — fall after leaf drop and spring after seed pods. Homes with minimal tree coverage may only need annual cleaning. A specialist can assess your specific situation.`,
        },
        {
          q: `Can I get same-day gutter service in ${stateName}?`,
          a: `Same-day availability depends on the service type and season. Gutter cleaning and minor repairs are often available same-day or next-day. New installation and full replacement typically require scheduling 3–7 business days out. Call to confirm availability in your area.`,
        },
      ],
    },
    closing: {
      h2: `Get Your Free ${label} Quote in ${stateName} Today`,
      text: `No forms. No waiting. No obligation. A licensed gutter specialist serving ${stateName} can give you an honest estimate in under 5 minutes.`,
      ctaText: `Call for a Free ${label} Quote in ${stateName}`,
    },
    internalLinks: {
      otherStatesLabel: "Gutter services in other states:",
      viewAllStatesLabel: "View all states",
      otherServicesLabel: "Other gutter services:",
    },
  };
}
