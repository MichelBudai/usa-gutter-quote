import type { CityMetadata } from "./cityMetadata";
import type { ServiceCityContent } from "./cityServiceContentGutter";

const PHONE_DEFAULT = "(555) 123-4567";

const EEAT_BULLETS = [
  "This guide is written for homeowners comparing local gutter quotes — we focus on what actually affects your estimate, not what sounds impressive.",
  "We don't charge gutter specialists for placement or prioritize them by fee. Every contractor connected through this page is licensed and insured in your state.",
  "Cost ranges reflect real installed prices for your region — not national averages or manufacturer retail pricing. Your exact quote depends on your home's linear footage, material, and roof access.",
];

function buildTrustBullets(stateAbbr: string, cityName: string, county?: string): string[] {
  const bullets = [
    `Licensed & insured gutter contractors in ${stateAbbr}`,
    "Free estimates — no inspection fee, no obligation",
    `Same-day availability in ${cityName}`,
    "Upfront pricing before any work begins",
  ];
  if (county) bullets.push(`Serving ${cityName} and ${county} County`);
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
    bullets.unshift(`Serving ${cityName} and ${county} County — licensed under ${stateName} state contractor requirements.`);
  }
  if (medianYear) {
    bullets.push(
      `Many ${cityName} homes were built around ${medianYear} — gutters on homes of this age commonly have failing seam sealant, corroded hangers, and undersized downspouts that need evaluation.`
    );
  }
  if (growthSnippet) {
    bullets.push(
      `${cityName} is ${growthSnippet} — licensed gutter contractors are in high demand, so booking a quote early secures your installation or service window.`
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
  const medianGrossRent = cityMetadata?.medianGrossRent;

  const introParagraphs: string[] = [
    `Get a free gutter installation quote in ${cityName}, ${stateName}. Licensed local specialists measure your roofline, recommend the right material and size for your home and local rainfall, and provide a line-item quote — no forms, no inspection fee, no obligation.`,
  ];
  if (county && growthSnippet) {
    introParagraphs.push(
      `${cityName} is ${growthSnippet}. Gutter specialists in ${county} County know local drainage requirements, typical roof pitches, and the material preferences of ${cityName} homeowners — a phone quote takes under 5 minutes and gives you a real number before you commit to anything.`
    );
  } else if (county) {
    introParagraphs.push(
      `In ${county} County, licensed gutter contractors work ${cityName} properties regularly and know the local drainage codes, seasonal debris patterns, and housing stock characteristics that affect your quote. A 5-minute call gets you a project-specific estimate.`
    );
  } else if (growthSnippet) {
    introParagraphs.push(
      `${cityName} is ${growthSnippet}. A licensed local gutter specialist who knows the area can give you an honest installation estimate over the phone — sized correctly for your roofline and local rainfall conditions.`
    );
  } else {
    introParagraphs.push(
      `A licensed ${cityName} gutter specialist assesses your home's drainage needs, recommends the right gutter size and material, and gives you a written quote — before any work is scheduled or any fee is charged.`
    );
  }

  const localParagraphs: string[] = [];
  if (county) {
    localParagraphs.push(
      `Gutter installation in ${county} County is subject to ${stateName} contractor licensing requirements. Local specialists know the drainage grade standards and inspection expectations for ${cityName} properties — and carry the insurance your project requires.`
    );
  }
  if (medianYear) {
    localParagraphs.push(
      `With a median build year of ${medianYear}, many ${cityName} homes have original gutter systems that are at or past their typical 20-year service life. Seam joint failures, corroded hangers, and 4-inch downspouts that can't handle heavy rain events are common findings on homes of this age. A licensed specialist assesses whether repair or seamless replacement is the more cost-effective path for your specific system.`
    );
  }
  if (homeValue) {
    localParagraphs.push(
      `With a median home value of $${Number(homeValue).toLocaleString()} in ${cityName}, a properly functioning gutter system is direct protection for a significant asset. Foundation damage from failed gutters costs $5,000–$25,000+ to remediate — far more than the $600–$2,400 a full seamless installation costs upfront.`
    );
  }
  if (growthSnippet) {
    localParagraphs.push(
      `As ${growthSnippet}, ${cityName}'s active construction and renovation market keeps licensed gutter contractors busy. Booking a quote early — especially for installation and full replacement — ensures you get the service window you need before the season peaks.`
    );
  }
  if (homeownershipRate) {
    localParagraphs.push(
      `With a homeownership rate of ${homeownershipRate}% in ${cityName}, gutter installation is a common owner-driven investment — homeowners who maintain their drainage system protect their home's structure and long-term resale value.`
    );
  }
  if (!localParagraphs.length) {
    localParagraphs.push(
      `A licensed ${cityName} gutter specialist gives you a detailed installation quote based on your home's actual measurements — not a per-foot estimate from a website. The difference matters: every roofline is different, and correct sizing and pitch are what determine how long your gutters last.`
    );
  }

  return {
    meta: {
      title: `Gutter Installation in ${cityName}, ${stateAbbr} — $600–$2,400 | Free Quotes, Licensed Specialists`,
      description: `Free gutter installation quote in ${cityName}, ${stateName}. Seamless aluminum $600–$2,400. Licensed local specialists for installation, cleaning, repair, guards, and replacement. Upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Free Gutter Installation Quote in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} gutter specialists for installation, cleaning, repair, replacement, and guards. Seamless aluminum from $600. Honest estimates, no commitment.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get Your Free Gutter Quote — Call Now",
    },
    intro: {
      h2: `Gutter Installation in ${cityName}, ${stateName} — What It Costs and What to Ask`,
      paragraphs: introParagraphs,
      cta: `Call for a Free ${cityName} Gutter Installation Quote`,
    },
    costEstimator: {
      h2: `Gutter Installation Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Gutter installation costs in ${cityName} vary by linear footage, material, and home height. A single-story home with 150 linear feet of seamless aluminum typically runs $750–$1,350. A two-story home with 200+ feet and a complex roofline runs $1,400–$2,400+. Use this estimator to get a ballpark — then call for an exact quote based on your specific roofline measurements.`,
      ctaBelow: `Get Your Exact ${cityName} Gutter Quote — Call Now`,
    },
    mainService: {
      h2: `Gutter Installation Quote in ${cityName}, ${stateAbbr}`,
      description: `Gutter installation in ${cityName} is priced by linear footage, material, gutter profile, and home height. Seamless aluminum — the most popular choice — runs $4–$9 per linear foot installed; seamless steel runs $6–$12; copper runs $15–$30. A standard single-story ranch home (120–160 linear feet) typically lands at $700–$1,400 in aluminum. A two-story home with a complex roofline and 200+ feet of gutter runs $1,400–$2,600+. The difference between a $700 and a $1,400 quote isn't just material — it's pitch precision, hanger spacing, and downspout sizing, all of which determine how long the system lasts. A licensed ${cityName} specialist measures your roofline, recommends the correct gutter size for your roof pitch and local rainfall, and provides a line-item quote before scheduling anything.`,
      localParagraphs,
      cost: `${cityName} gutter installation: $600 – $2,400 for a complete seamless system`,
      whatAffects: [
        "Total linear footage — measured along every eave that needs a gutter",
        "Material — aluminum (most common), steel, copper",
        "Profile and size — 5-inch vs 6-inch K-style, half-round",
        "Home height — single vs two-story affects labor time and equipment needs",
        "Downspout count, size, and discharge routing",
        "Existing gutter removal if replacing an old system",
      ],
      cta: `Get a Gutter Installation Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Call for a Gutter Quote Before Buying Materials`,
      paragraphs: [
        `A 5-minute call to a licensed ${cityName} gutter specialist gets you a real installation budget — sized correctly for your roofline, your roof pitch, and ${stateName}'s rainfall conditions. The right gutter size prevents overflow during heavy rain; the wrong size is just an expensive decoration that fails when you need it most.${county ? ` Specialists in ${county} County know the local drainage grade requirements and can confirm your system will pass inspection.` : ""}`,
        `It keeps you from overpaying or getting under-delivered. The most common gutter mistake in ${cityName} is hiring a contractor who uses undersized 4-inch gutters or incorrectly spaced hangers to cut costs. A licensed specialist explains exactly what hanger spacing, gutter size, and downspout count your home needs — so you can hold any contractor to the same standard.${medianGrossRent ? ` In ${cityName}, where median rent is $${medianGrossRent.toLocaleString()}/month, rental property owners especially need properly installed gutters — water damage from failed drainage is one of the most common and costly habitability issues.` : ""}`,
        `Acting before a storm season starts saves money and guarantees availability. New gutters prevent the foundation oversaturation, fascia rot, and basement moisture that develop over multiple rain seasons without proper drainage. Waiting until visible damage forces the issue means paying for gutter installation AND the water damage repair — costs that stack quickly past $5,000.`,
      ],
    },
    localSignals: {
      h2: `Gutter Installation Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed gutter installation specialists serve ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(
        stateName,
        stateAbbr,
        cityName,
        [
          `All contractors are licensed and insured under ${stateName} state requirements`,
          `Familiar with ${cityName}-area rainfall patterns, roof styles, and drainage codes`,
          "Seamless gutters custom-rolled on-site to your exact roofline",
          `Same-day and next-day quotes available in ${cityName}`,
        ],
        cityMetadata
      ),
    },
    eeat: { title: "About this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Gutter Installation FAQ — ${cityName}, ${stateName}`,
      items: [
        {
          q: `How much does gutter installation cost in ${cityName}, ${stateAbbr}?`,
          a: `Gutter installation in ${cityName} typically runs $600–$2,400 for a complete seamless system. A single-story home with 150 linear feet of seamless aluminum costs $700–$1,350; a two-story home with 200+ feet runs $1,400–$2,400+. Material upgrades to steel or copper cost more. A licensed ${cityName} specialist gives you a line-item quote based on your exact roofline measurements.`,
        },
        {
          q: `Are seamless gutters worth it in ${cityName}?`,
          a: `For most ${cityName} homeowners, yes. Seamless gutters cost 10–20% more than pre-cut sectional gutters but eliminate seam joints — the primary source of leaks. They last longer, require less maintenance, and look cleaner. The premium pays back in avoided repairs within 5–7 years for most homes.`,
        },
        {
          q: `What size gutters does my ${cityName} home need?`,
          a: `Most ${cityName} homes use 5-inch K-style gutters with 3×4-inch downspouts. Homes with steep roofs, large roof areas, or heavy rainfall exposure benefit from 6-inch gutters with 4-inch round downspouts for greater capacity. A licensed specialist calculates the right size based on your roof pitch and square footage.`,
        },
        {
          q: `Is the gutter installation quote free in ${cityName}?`,
          a: `Yes. A phone quote costs nothing — no inspection fee, no obligation. A licensed ${cityName} gutter specialist provides a written estimate based on your home's specific measurements before any work is scheduled.`,
        },
        {
          q: `How long does gutter installation take in ${cityName}?`,
          a: `Most full gutter installations in ${cityName} are completed in a single day. A standard single-story home takes 4–6 hours; a two-story home with a complex roofline may take a full 8-hour day. The installer removes old gutters (if applicable), assesses fascia condition, and fabricates and installs the new seamless gutters on-site.`,
        },
      ],
    },
    closing: {
      h2: `Get Your Free Gutter Installation Quote in ${cityName} Today`,
      text: `No forms. No waiting. No commitment. A licensed gutter installation specialist serving ${cityName}, ${stateName} gives you an honest, line-item estimate in under 5 minutes — and tells you exactly what your home's drainage system needs before any work is scheduled.`,
      cta: `Call for Your Free ${cityName} Gutter Installation Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day quotes in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other gutter services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}
