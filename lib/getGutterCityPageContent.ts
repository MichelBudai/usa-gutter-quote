import type { CityMetadata } from "./cityMetadata";
import type { ServiceCityContent } from "./cityServiceContentGutter";

const PHONE_DEFAULT = "(555) 123-4567";

const EEAT_BULLETS = [
  "This guide is written for homeowners comparing local gutter quotes — we focus on what actually affects your estimate.",
  "We don't charge gutter specialists for placement. The quotes you get are from licensed contractors, not pay-to-play leads.",
  "Cost ranges are based on typical project scope in your region; your final quote depends on your home's linear footage, material, and local labor rates.",
];

function buildTrustBullets(stateAbbr: string, cityName: string, county?: string): string[] {
  const bullets = [
    `Licensed & insured in ${stateAbbr}`,
    "Free estimates, no obligation",
    `Same-day availability in ${cityName}`,
    "Upfront pricing before any work begins",
  ];
  if (county) bullets.push(`Serving ${cityName} and ${county}`);
  return bullets;
}

function buildLocalSignalsBullets(
  stateName: string,
  stateAbbr: string,
  cityName: string,
  baseBullets: string[],
  cityMetadata?: CityMetadata | null
): string[] {
  const bullets = [...baseBullets];
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const growthSnippet = cityMetadata?.growthSnippet;
  if (county) {
    bullets.unshift(`Serving ${cityName} and ${county} — licensed under ${stateName} state requirements.`);
  }
  if (medianYear) {
    bullets.push(
      `Many ${cityName} homes were built in the ${medianYear} era — gutters on older homes commonly have failing seam joints and undersized downspouts that need attention.`
    );
  }
  if (growthSnippet) {
    bullets.push(
      `${cityName} is ${growthSnippet}, so licensed gutter specialists are in high demand — getting a quote early helps secure a slot.`
    );
  }
  return bullets;
}

export function getGutterCityPageContent(
  cityName: string,
  stateName: string,
  stateAbbr: string,
  nearby1: string,
  nearby2: string,
  nearby3: string,
  phone: string = PHONE_DEFAULT,
  cityMetadata?: CityMetadata | null
): ServiceCityContent {
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;
  const homeownershipRate = cityMetadata?.homeownershipRate;

  const introParagraphs: string[] = [];
  introParagraphs.push(
    `Get a free gutter installation quote in ${cityName}, ${stateName}. This page connects you with licensed local specialists for all gutter services — installation, cleaning, repair, replacement, guards, and more. Free estimates, no obligation.`
  );
  if (county || growthSnippet) {
    introParagraphs.push(
      county && growthSnippet
        ? `${cityName} is ${growthSnippet}. Gutter specialists in ${county} are familiar with local rainfall patterns, roof styles, and the drainage requirements of your area.`
        : county
          ? `In ${county}, licensed gutter specialists work the area regularly and know local drainage conditions, typical roof pitches, and material preferences. A phone quote takes under 5 minutes.`
          : `${cityName} is ${growthSnippet}. Get a real gutter estimate from a licensed specialist who serves your area.`
    );
  } else {
    introParagraphs.push(
      `A licensed gutter specialist who serves ${cityName} can assess your home's drainage needs and give you an honest estimate over the phone in under 5 minutes.`
    );
  }

  const localParagraphs: string[] = [
    ...(county
      ? [`Gutter installation and repair in ${county} follows ${stateName} contractor licensing requirements. Local specialists know the drainage codes and inspection standards for your area.`]
      : []),
    ...(medianYear
      ? [`With a median build year of ${medianYear}, many ${cityName} homes have original gutters that are well past their 20-year lifespan. Seam failures, rust, and improper pitch are common — a specialist can assess whether repair or replacement makes more financial sense.`]
      : []),
    ...(homeValue
      ? [`With a median home value of $${Number(homeValue).toLocaleString()} in ${cityName}, a properly functioning gutter system protects a significant asset. Foundation damage from failed gutters can cost $5,000–$25,000+ to remediate.`]
      : []),
    ...(growthSnippet
      ? [`As ${growthSnippet}, ${cityName}'s new construction and renovation activity keeps licensed gutter specialists busy. Booking a quote early ensures you get the installation window you need.`]
      : []),
  ].filter(Boolean);
  if (!localParagraphs.length) {
    localParagraphs.push(`A licensed ${cityName} gutter specialist can give you a detailed quote for installation, repair, or replacement tailored to your home.`);
  }

  return {
    meta: {
      title: `Gutter Installation Quote in ${cityName}, ${stateAbbr} | Free Estimates from Licensed Local Specialists`,
      description: `Free gutter installation quote in ${cityName}, ${stateName}. Licensed local specialists for installation, cleaning, repair, guards, and seamless gutters. Upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Free Gutter Installation Quote in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} gutter specialists for installation, cleaning, repair, replacement, and guards. Honest estimates, no commitment.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get Your Free Gutter Quote — Call Now",
    },
    intro: {
      h2: `Get a Real Gutter Estimate in ${cityName}, ${stateName}`,
      paragraphs: introParagraphs,
      cta: `Call for a Free ${cityName} Gutter Quote`,
    },
    costEstimator: {
      h2: `Gutter Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Use this tool for a ballpark before you call. Gutter installation costs in ${cityName} vary by linear footage, material, and home height — typically $600–$2,400 for a full system. Cleaning runs $100–$250; repair runs $150–$600; gutter guards run $500–$2,500. Your exact quote depends on your home's specific measurements and needs.`,
      ctaBelow: `Get Your Exact ${cityName} Gutter Quote — Call Now`,
    },
    mainService: {
      h2: `Gutter Installation Quote in ${cityName}, ${stateAbbr}`,
      description: `Gutter installation costs in ${cityName} depend on your home's linear footage, the gutter material (aluminum, steel, copper), profile style (K-style or half-round), and roof height. A standard ranch home typically runs $600–$1,400; a two-story home with complex rooflines runs $1,200–$2,400 or more. Seamless gutters cost slightly more upfront but eliminate seam joints — the most common leak point — and typically last 20+ years. A licensed ${cityName} gutter specialist measures your roofline and provides a line-item quote before any work begins.`,
      localParagraphs,
      cost: `${cityName} gutter installation: $600 – $2,400 for a full system`,
      whatAffects: [
        "Linear footage of gutters needed",
        "Gutter material — aluminum, steel, vinyl, copper",
        "Profile style — K-style (most common) vs half-round",
        `Home height and roof access complexity`,
        "Downspout count and routing",
      ],
      cta: `Get a Gutter Installation Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Get a Gutter Quote First`,
      paragraphs: [
        `A phone quote from a licensed ${cityName} gutter specialist gives you a realistic installation budget before any work starts. Gutter costs${county ? ` in ${county}` : ""} vary significantly by home size, material, and roof complexity. A 5-minute call gets you a number — and a material recommendation — that reflects your specific home.`,
        `It filters out the wrong contractors fast. Any ${cityName} specialist who won't give you a range over the phone before charging an inspection fee is worth avoiding. Reputable gutter contractors are used to giving ballpark estimates; a free quote call tells you immediately who's worth your time.`,
        `Getting gutters repaired or replaced before water damage compounds saves money. Foundation damage, fascia rot, and basement moisture issues all become significantly more expensive the longer failing gutters go unaddressed. A functioning gutter system is one of the most cost-effective home maintenance investments available.`,
      ],
    },
    localSignals: {
      h2: `Gutter Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed gutter specialists available for quotes in ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(
        stateName,
        stateAbbr,
        cityName,
        [
          `All specialists are licensed under ${stateName} state requirements`,
          `Familiar with ${cityName}-area rainfall patterns, roof styles, and local drainage codes`,
          "Upfront pricing — no surprise fees after work begins",
          `Same-day and next-day availability in ${cityName} and surrounding ${stateAbbr} areas`,
        ],
        cityMetadata
      ),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Gutter Installation FAQ — ${cityName}, ${stateName}`,
      items: [
        {
          q: `How much does gutter installation cost in ${cityName}, ${stateAbbr}?`,
          a: `Gutter installation in ${cityName} typically runs $600–$2,400 for a full system depending on linear footage, material, and home height. Seamless aluminum is the most popular choice at $4–$9 per linear foot installed. A licensed ${cityName} specialist can give you a line-item quote based on your specific roofline.`,
        },
        {
          q: `Is the gutter quote in ${cityName} free?`,
          a: `Yes. A phone quote costs nothing. No obligation, no inspection fee. You get a real estimate from a licensed ${cityName} gutter specialist before any work begins.`,
        },
        {
          q: `How long do gutters last in ${cityName}?`,
          a: `Aluminum gutters typically last 20 years; galvanized steel lasts 20–25 years; copper lasts 50+ years. Seamless gutters last longer than sectional gutters because they have no seam joints to fail. ${medianYear ? `Many ${cityName} homes built around ${medianYear} are due for evaluation.` : "Homes older than 20 years are due for an inspection."}`,
        },
        {
          q: `Do gutter contractors need a license in ${cityName}?`,
          a: `Yes. ${stateName} requires contractors performing exterior improvements to carry a valid contractor's license and general liability insurance. All specialists connected through this page are licensed and insured in ${stateName}.`,
        },
        {
          q: `Are seamless gutters worth it in ${cityName}?`,
          a: `Seamless gutters cost 10–20% more than sectional gutters upfront but eliminate seam joints — the primary source of leaks. For most ${cityName} homeowners, the reduced maintenance and longer lifespan make seamless gutters the better long-term value. A specialist can give you a side-by-side comparison.`,
        },
      ],
    },
    closing: {
      h2: `Get Your Free Gutter Installation Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed gutter specialist serving ${cityName}, ${stateName} can give you an honest installation estimate in under 5 minutes.`,
      cta: `Call for Your Free ${cityName} Gutter Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day quote in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other gutter services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}
