/**
 * City page content for gutter service pages:
 * gutter-installation, gutter-cleaning, gutter-repair, gutter-replacement,
 * gutter-guard-installation, downspout-repair, seamless-gutter, gutter-inspection.
 */
import type { CityMetadata } from "./cityMetadata";
import { getGutterCityPageContent } from "./getGutterCityPageContent";

export interface ServiceCityContent {
  meta: { title: string; description: string };
  hero: { h1: string; sub: string; trustBullets: string[]; cta: string };
  intro: { h2: string; paragraphs: string[]; cta: string };
  costEstimator: { h2: string; intro: string; ctaBelow: string };
  mainService: {
    h2: string;
    description: string;
    localParagraphs?: string[];
    cost: string;
    whatAffects: string[];
    cta: string;
  };
  whyCall: { h2: string; paragraphs: string[] };
  localSignals: { h2: string; intro: string; bullets: string[] };
  eeat: { title: string; bullets: string[] };
  faq: { h2: string; items: { q: string; a: string }[] };
  closing: { h2: string; text: string; cta: string; sub: string };
  internalLinks: {
    otherServicesLabel: string;
    nearbyLabel: string;
    backLabel: string;
  };
}

const PHONE_DEFAULT = "(555) 123-4567";

const EEAT_BULLETS = [
  "This guide is written for homeowners comparing local gutter quotes — we focus on what actually affects your estimate.",
  "We don't charge gutter specialists for placement. The quotes you get are from licensed contractors, not pay-to-play leads.",
  "Cost ranges are based on typical project scope; your final quote depends on your home's measurements, material, and local labor rates.",
];

export type ServiceContentParams = {
  cityName: string;
  stateName: string;
  stateAbbr: string;
  nearby1: string;
  nearby2: string;
  nearby3: string;
  phone?: string;
  cityMetadata?: CityMetadata | null;
};

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
      `Many ${cityName} homes were built around ${medianYear} — gutters on older homes commonly have failing seam joints, rust, and improper pitch.`
    );
  }
  if (growthSnippet) {
    bullets.push(
      `${cityName} is ${growthSnippet} — licensed gutter specialists are in demand, so booking a quote early secures your slot.`
    );
  }
  return bullets;
}

// ─── GUTTER CLEANING ────────────────────────────────────────────────────────
function getGutterCleaningCityPageContent(params: ServiceContentParams): ServiceCityContent {
  const { cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone = PHONE_DEFAULT, cityMetadata } = params;
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const growthSnippet = cityMetadata?.growthSnippet;
  const homeownershipRate = cityMetadata?.homeownershipRate;

  const localParagraphs: string[] = [
    ...(county ? [`Gutter cleaning in ${county} is typically needed twice a year — fall after leaves drop and spring after seed pods and storm debris. Local specialists know seasonal timing for ${cityName}'s tree coverage and climate.`] : []),
    ...(medianYear ? [`Many ${cityName} homes built around ${medianYear} have original galvanized gutters or sectional aluminum with aging sealant. A cleaning visit often reveals loose hangers and failing seams before they cause water damage.`] : []),
    ...(homeownershipRate ? [`With ${homeownershipRate}% homeownership in ${cityName}, regular gutter maintenance protects a direct financial investment. Clogged gutters lead to fascia rot, foundation saturation, and basement moisture — all far costlier than annual cleaning.`] : []),
    ...(growthSnippet ? [`${cityName} is ${growthSnippet}. With more tree canopy and landscaping, cleaning frequency may be higher than average — a specialist can recommend the right schedule for your property.`] : []),
  ].filter(Boolean);
  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} gutter specialist cleans, flushes downspouts, and inspects your system in a single visit — upfront pricing before any work begins.`);

  return {
    meta: {
      title: `Gutter Cleaning in ${cityName}, ${stateAbbr} | Free Estimates from Licensed Specialists`,
      description: `Professional gutter cleaning in ${cityName}, ${stateName}. Licensed local specialists flush downspouts and inspect your system. Upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Gutter Cleaning in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} gutter specialists for cleaning, flushing, and full system inspection. Upfront pricing, no obligation.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get a Free Gutter Cleaning Quote — Call Now",
    },
    intro: {
      h2: `Professional Gutter Cleaning in ${cityName}, ${stateName}`,
      paragraphs: [
        `Professional gutter cleaning in ${cityName} includes removing all debris, flushing downspouts, and checking for loose hangers and failing seams. A $100–$250 cleaning prevents the $5,000+ repairs that follow years of neglect.`,
        county
          ? `Licensed gutter cleaning specialists in ${county} are familiar with the tree coverage and seasonal debris typical of ${cityName} properties.`
          : `A licensed ${cityName} specialist can assess your cleaning needs and recommend a maintenance schedule over the phone.`,
      ],
      cta: `Call for a Free ${cityName} Gutter Cleaning Quote`,
    },
    costEstimator: {
      h2: `Gutter Cleaning Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Gutter cleaning in ${cityName} typically runs $100–$250 for a single-story home and $150–$350 for a two-story home. Cost depends on linear footage, home height, and debris volume. Some specialists include a basic inspection with every cleaning visit.`,
      ctaBelow: `Get Your Exact ${cityName} Cleaning Quote — Call Now`,
    },
    mainService: {
      h2: `Gutter Cleaning Quote in ${cityName}, ${stateAbbr}`,
      description: `Professional gutter cleaning in ${cityName} goes beyond scooping debris — it includes flushing every downspout, checking all hangers and end caps, and identifying seam failures before they cause water intrusion. Most single-story homes take 1–2 hours. Two-story homes and homes with heavy debris volume take longer. A licensed ${cityName} specialist gives you an upfront price before any work begins.`,
      localParagraphs,
      cost: `${cityName} gutter cleaning: $100 – $350 depending on home size`,
      whatAffects: [
        "Home height — single vs two-story",
        "Linear footage of gutters",
        "Debris volume — leaves, seed pods, pine needles",
        "Downspout count and accessibility",
      ],
      cta: `Get a Gutter Cleaning Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Schedule Regular Gutter Cleaning`,
      paragraphs: [
        `A gutter cleaning quote from a licensed ${cityName} specialist takes 2 minutes over the phone. You get the price, the schedule, and a clear list of what's included — before anyone shows up at your door.`,
        `Clogged gutters are the leading cause of fascia rot, foundation oversaturation, and basement moisture in ${cityName} homes. A $150 cleaning every 6–12 months is the lowest-cost maintenance task available for protecting your home's structure.`,
        `Getting on a regular cleaning schedule means issues get caught early. Loose hangers, failing seams, and cracked end caps found during a cleaning cost $50–$150 to fix — the same issues ignored for two years can require full gutter replacement.`,
      ],
    },
    localSignals: {
      h2: `Gutter Cleaning Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed gutter cleaning specialists serve ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, cityName, [
        `All specialists are licensed under ${stateName} state requirements`,
        `Familiar with seasonal debris patterns in ${cityName}`,
        "Downspout flushing included with every cleaning",
        `Same-day and next-day availability in ${cityName}`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Gutter Cleaning FAQ — ${cityName}, ${stateName}`,
      items: [
        {
          q: `How much does gutter cleaning cost in ${cityName}, ${stateAbbr}?`,
          a: `Gutter cleaning in ${cityName} typically runs $100–$250 for a single-story home and $150–$350 for a two-story home. A licensed specialist can give you an exact quote based on your home's size and debris level.`,
        },
        {
          q: `How often should gutters be cleaned in ${cityName}?`,
          a: `Twice a year is standard for most ${cityName} homes with tree coverage — once in fall after leaves drop and once in spring. Homes under heavy pine, oak, or maple coverage may need 3–4 cleanings annually. A specialist can assess your specific property.`,
        },
        {
          q: `What's included in a professional gutter cleaning in ${cityName}?`,
          a: `A full cleaning includes removing all debris from gutters, flushing every downspout, checking all hangers and fasteners, and a visual inspection for seam failures, rust, and improper pitch. Most specialists provide a condition report after the visit.`,
        },
        {
          q: `Is the gutter cleaning quote free in ${cityName}?`,
          a: `Yes. A phone quote costs nothing. You get a real price from a licensed ${cityName} gutter specialist before scheduling.`,
        },
        {
          q: `Can I get same-day gutter cleaning in ${cityName}?`,
          a: `Same-day or next-day gutter cleaning is often available in ${cityName}, especially outside peak fall season. Call to confirm availability for your area.`,
        },
      ],
    },
    closing: {
      h2: `Schedule Gutter Cleaning in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed gutter cleaning specialist serving ${cityName} can give you an honest quote in under 5 minutes.`,
      cta: `Call for Your Free ${cityName} Gutter Cleaning Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day availability in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other gutter services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ─── GUTTER REPAIR ──────────────────────────────────────────────────────────
function getGutterRepairCityPageContent(params: ServiceContentParams): ServiceCityContent {
  const { cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone = PHONE_DEFAULT, cityMetadata } = params;
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const growthSnippet = cityMetadata?.growthSnippet;
  const homeValue = cityMetadata?.medianHomeValue;

  const localParagraphs: string[] = [
    ...(county ? [`Gutter repair specialists in ${county} know the common failure points for ${cityName}'s housing stock and climate — sagging sections, leaking seams, and loose hangers are the most frequent issues.`] : []),
    ...(medianYear ? [`${cityName} homes built around ${medianYear} often have original gutters with failing sealant at seam joints and loose hangers from decades of freeze-thaw cycles. Early repair prevents full replacement.`] : []),
    ...(homeValue ? [`With a median home value of $${Number(homeValue).toLocaleString()} in ${cityName}, addressing gutter failures before they cause fascia rot or foundation damage protects a significant asset.`] : []),
    ...(growthSnippet ? [`${cityName} is ${growthSnippet}. Licensed repair specialists are in demand — getting a quote early helps you schedule before the problem worsens.`] : []),
  ].filter(Boolean);
  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} gutter repair specialist diagnoses the full system and gives you an itemized quote before any work begins.`);

  return {
    meta: {
      title: `Gutter Repair in ${cityName}, ${stateAbbr} | Free Estimates from Licensed Specialists`,
      description: `Professional gutter repair in ${cityName}, ${stateName}. Fix leaks, sagging sections, and loose hangers. Licensed local specialists, upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Gutter Repair in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} gutter repair specialists for leaks, sagging gutters, loose hangers, and downspout problems. Upfront pricing, no obligation.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get a Free Gutter Repair Quote — Call Now",
    },
    intro: {
      h2: `Professional Gutter Repair in ${cityName}, ${stateName}`,
      paragraphs: [
        `Gutter repair in ${cityName} addresses leaking seams, sagging sections, separated hangers, and cracked end caps before they allow water to drain against your home's foundation and siding.`,
        county
          ? `Licensed gutter repair specialists in ${county} diagnose the full system — not just the obvious problem — and give you an upfront price before any work begins.`
          : `A licensed ${cityName} specialist can assess your repair needs and give you a written quote over the phone based on your description.`,
      ],
      cta: `Call for a Free ${cityName} Gutter Repair Quote`,
    },
    costEstimator: {
      h2: `Gutter Repair Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Gutter repair in ${cityName} typically runs $150–$600 depending on the number of problem areas, gutter material, and roof access. Seam resealing runs $75–$150 per section; hanger replacement runs $50–$100 per hanger; sagging section realignment runs $100–$300.`,
      ctaBelow: `Get Your Exact ${cityName} Repair Quote — Call Now`,
    },
    mainService: {
      h2: `Gutter Repair Quote in ${cityName}, ${stateAbbr}`,
      description: `Gutter repair costs in ${cityName} vary by failure type and the number of problem areas. A simple seam reseal costs $75–$150; replacing several loose hangers runs $150–$350; correcting improper pitch across a full section runs $200–$500. A licensed specialist assesses the complete system during the quote visit — partial repairs that miss underlying issues are a common source of callbacks. Getting a full diagnosis upfront saves money on repeat service calls.`,
      localParagraphs,
      cost: `${cityName} gutter repair: $150 – $600 for most residential repairs`,
      whatAffects: [
        "Type of failure — seam, hanger, pitch, end cap, downspout",
        "Number of problem areas",
        "Gutter material — aluminum, steel, vinyl, copper",
        "Roof height and access difficulty",
      ],
      cta: `Get a Gutter Repair Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Fix Gutters Before Water Damage Spreads`,
      paragraphs: [
        `A gutter repair quote from a licensed ${cityName} specialist takes under 5 minutes. You get a clear diagnosis — not just a patch — and a price before any work starts.`,
        `Leaking gutters deposit water directly against your foundation and siding. Left untreated, a $150 seam repair becomes a $3,000 fascia replacement or a $10,000+ foundation waterproofing project. Getting a repair quote is the lowest-cost action available.`,
        `A thorough diagnosis catches multiple failure points in a single visit. Many ${cityName} homeowners discover that a gutter they thought needed one repair actually has three or four issues — catching them all at once prevents repeat service calls and the cumulative water damage between visits.`,
      ],
    },
    localSignals: {
      h2: `Gutter Repair Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed gutter repair specialists serve ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, cityName, [
        `All specialists are licensed under ${stateName} state requirements`,
        `Full system diagnosis included with every repair quote`,
        "Upfront pricing — no surprise charges after work begins",
        `Same-day and next-day availability in ${cityName}`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Gutter Repair FAQ — ${cityName}, ${stateName}`,
      items: [
        {
          q: `How much does gutter repair cost in ${cityName}, ${stateAbbr}?`,
          a: `Gutter repair in ${cityName} typically runs $150–$600 for most residential repairs. Simple seam resealing starts around $75–$150; hanger replacement runs $50–$100 per hanger; sagging section correction runs $100–$300. A licensed specialist gives you an itemized quote after assessing the full system.`,
        },
        {
          q: `Should I repair or replace my gutters in ${cityName}?`,
          a: `Gutters under 15 years old with isolated issues are usually worth repairing. Systems over 20 years old with widespread seam failures, rust, or improper pitch throughout typically warrant full replacement — repeated repairs on aging systems often cost more than replacement over 3–5 years.`,
        },
        {
          q: `Is the gutter repair quote free in ${cityName}?`,
          a: `Yes. A phone quote costs nothing. A licensed ${cityName} gutter specialist can give you a range over the phone and confirm the exact price during a free on-site assessment.`,
        },
        {
          q: `Can leaking gutters cause foundation damage in ${cityName}?`,
          a: `Yes. Gutters that drain against the foundation — instead of 4+ feet away — saturate soil, crack footings, and allow water infiltration into basements and crawl spaces. Foundation waterproofing remediation in ${cityName} typically costs $5,000–$25,000+. Early gutter repair is significantly cheaper.`,
        },
        {
          q: `Can I get same-day gutter repair in ${cityName}?`,
          a: `Same-day or next-day repair is often available in ${cityName} for minor issues like seam leaks and loose hangers. Complex repairs requiring new sections may require ordering materials. Call to confirm availability.`,
        },
      ],
    },
    closing: {
      h2: `Get Your Free Gutter Repair Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed gutter repair specialist serving ${cityName}, ${stateName} can give you an honest estimate in under 5 minutes.`,
      cta: `Call for Your Free ${cityName} Gutter Repair Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day availability in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other gutter services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ─── GUTTER REPLACEMENT ─────────────────────────────────────────────────────
function getGutterReplacementCityPageContent(params: ServiceContentParams): ServiceCityContent {
  const { cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone = PHONE_DEFAULT, cityMetadata } = params;
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;

  const localParagraphs: string[] = [
    ...(county ? [`Full gutter replacement in ${county} is a one-day project for most homes. Specialists remove the old system, assess fascia condition, and install seamless aluminum custom-rolled on-site to your exact measurements.`] : []),
    ...(medianYear ? [`${cityName} homes built around ${medianYear} commonly have original gutters at or past their 20-year lifespan. Widespread seam failures and rust throughout the system indicate replacement is the more cost-effective option versus repeated repairs.`] : []),
    ...(homeValue ? [`With a median home value of $${Number(homeValue).toLocaleString()} in ${cityName}, a full gutter replacement protects long-term equity. New seamless gutters also improve curb appeal and can be a selling point.`] : []),
    ...(growthSnippet ? [`${cityName} is ${growthSnippet}. New construction and renovation activity means gutter specialists are busy — getting a replacement quote early helps you secure your installation window.`] : []),
  ].filter(Boolean);
  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} gutter replacement specialist measures your roofline, assesses fascia condition, and provides a full line-item quote before any work begins.`);

  return {
    meta: {
      title: `Gutter Replacement in ${cityName}, ${stateAbbr} | Free Estimates from Licensed Specialists`,
      description: `Full gutter replacement in ${cityName}, ${stateName}. Seamless aluminum and all materials. Licensed local specialists, upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Gutter Replacement in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} gutter replacement specialists. Seamless aluminum, steel, and copper. Full system removal and installation. Free estimates, no obligation.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get a Free Replacement Quote — Call Now",
    },
    intro: {
      h2: `Full Gutter Replacement in ${cityName}, ${stateName}`,
      paragraphs: [
        `Full gutter replacement in ${cityName} makes financial sense when your system is over 20 years old, has widespread rust or joint failures, or has improper pitch that can't be corrected by adjustment. New seamless gutters eliminate the most common leak point and typically last 20–30 years.`,
        county
          ? `Licensed gutter replacement specialists in ${county} custom-roll seamless gutters on-site to your exact roofline measurements — no pre-cut sections, no seam joints.`
          : `A licensed ${cityName} specialist measures your complete roofline and provides an itemized quote including material and labor before scheduling.`,
      ],
      cta: `Call for a Free ${cityName} Replacement Quote`,
    },
    costEstimator: {
      h2: `Gutter Replacement Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Full gutter replacement in ${cityName} typically runs $800–$3,000+ depending on linear footage, material (aluminum, steel, copper), and home height. Seamless aluminum is the most popular choice at $5–$10 per linear foot installed. Copper runs $15–$30 per linear foot. Fascia replacement, if needed, adds $6–$20 per linear foot.`,
      ctaBelow: `Get Your Exact ${cityName} Replacement Quote — Call Now`,
    },
    mainService: {
      h2: `Gutter Replacement Quote in ${cityName}, ${stateAbbr}`,
      description: `Gutter replacement costs in ${cityName} are primarily driven by linear footage, material choice, and home height. A typical single-story home with 150 linear feet of gutters runs $750–$1,500 in seamless aluminum. A two-story home with complex rooflines and 200+ linear feet runs $1,500–$3,000+. Copper systems run 3–4x aluminum pricing. A licensed specialist measures your full roofline, assesses fascia condition, and provides a complete line-item quote. Most full replacements are completed in a single day.`,
      localParagraphs,
      cost: `${cityName} gutter replacement: $800 – $3,000+ for a full system`,
      whatAffects: [
        "Total linear footage of gutters",
        "Material — aluminum, steel, copper, zinc",
        "Profile style — K-style or half-round",
        "Home height and roof access complexity",
        "Fascia condition — replacement adds cost if needed",
      ],
      cta: `Get a Gutter Replacement Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Replace Instead of Repeatedly Repairing`,
      paragraphs: [
        `A replacement quote from a licensed ${cityName} specialist includes a side-by-side comparison of repair vs replacement costs for your specific system. For gutters over 15–20 years old with multiple failure points, replacement often costs less over 5 years than the cumulative cost of repairs.`,
        `Repeated repairs on aging gutters are a false economy. Patching seams and replacing hangers on a system with improper pitch and widespread corrosion buys time — but each repair visit costs $150–$400, and the underlying problems don't get solved. A new seamless system ends the cycle.`,
        `New gutters immediately improve water management and curb appeal. Seamless aluminum in standard colors is available same-week at most ${cityName} suppliers. A specialist can schedule your replacement and complete it in a single day for most homes.`,
      ],
    },
    localSignals: {
      h2: `Gutter Replacement Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed gutter replacement specialists serve ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, cityName, [
        `All specialists are licensed under ${stateName} state requirements`,
        `Seamless gutters custom-rolled on-site to your roofline`,
        "Full removal of existing system included",
        `Most ${cityName} replacements completed in a single day`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Gutter Replacement FAQ — ${cityName}, ${stateName}`,
      items: [
        {
          q: `How much does gutter replacement cost in ${cityName}, ${stateAbbr}?`,
          a: `Gutter replacement in ${cityName} typically runs $800–$3,000+ for a full system in seamless aluminum. Cost depends on linear footage, material, and home height. A licensed specialist provides a line-item quote based on your exact roofline measurements.`,
        },
        {
          q: `When should I replace vs repair my gutters in ${cityName}?`,
          a: `Replacement makes sense when gutters are over 20 years old, have widespread rust or seam failures throughout, or have improper pitch that requires resetting the entire system. Isolated issues on gutters under 15 years old are usually worth repairing.`,
        },
        {
          q: `Are seamless gutters worth it in ${cityName}?`,
          a: `For most ${cityName} homeowners, yes. Seamless gutters cost 10–20% more than sectional gutters upfront but eliminate seam joints — the primary source of leaks. They also look cleaner and require less maintenance over their lifespan.`,
        },
        {
          q: `Is the gutter replacement quote free in ${cityName}?`,
          a: `Yes. A phone quote costs nothing. A licensed ${cityName} gutter specialist can give you a range over the phone and confirm exact pricing after measuring your roofline.`,
        },
        {
          q: `How long does gutter replacement take in ${cityName}?`,
          a: `Most full gutter replacements in ${cityName} are completed in a single day. The specialist removes the old system, assesses fascia, and installs seamless gutters custom-rolled on-site. Larger or more complex homes may require two days.`,
        },
      ],
    },
    closing: {
      h2: `Get Your Free Gutter Replacement Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed gutter replacement specialist serving ${cityName}, ${stateName} can give you an honest estimate in under 5 minutes.`,
      cta: `Call for Your Free ${cityName} Replacement Quote`,
      sub: `Call ${phone} · Available 7 days a week · Most jobs completed same-week in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other gutter services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ─── GUTTER GUARD INSTALLATION ──────────────────────────────────────────────
function getGutterGuardCityPageContent(params: ServiceContentParams): ServiceCityContent {
  const { cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone = PHONE_DEFAULT, cityMetadata } = params;
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const growthSnippet = cityMetadata?.growthSnippet;
  const homeownershipRate = cityMetadata?.homeownershipRate;

  const localParagraphs: string[] = [
    ...(county ? [`Gutter guard specialists in ${county} recommend product types based on your specific tree coverage — micro-mesh performs best under heavy pine and oak; reverse-curve works well in areas with mostly leaf debris.`] : []),
    ...(medianYear ? [`${cityName} homes built around ${medianYear} often have 5-inch K-style gutters — most micro-mesh and reverse-curve guards are compatible and can be installed without gutter replacement.`] : []),
    ...(homeownershipRate ? [`With ${homeownershipRate}% homeownership in ${cityName}, gutter guards are a popular long-term maintenance investment — eliminating most cleaning visits over the 20+ year guard lifespan.`] : []),
    ...(growthSnippet ? [`${cityName} is ${growthSnippet}. More landscaping and tree canopy in growing areas makes gutter guards a practical investment for new and existing homeowners.`] : []),
  ].filter(Boolean);
  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} gutter guard specialist recommends the right product for your tree coverage and gutter style, and installs it with a manufacturer warranty.`);

  return {
    meta: {
      title: `Gutter Guard Installation in ${cityName}, ${stateAbbr} | Free Estimates from Licensed Specialists`,
      description: `Professional gutter guard installation in ${cityName}, ${stateName}. Micro-mesh, reverse-curve, and all guard types. Licensed local specialists, upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Gutter Guard Installation in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} gutter guard specialists. Micro-mesh, reverse-curve, and foam inserts. Stop cleaning gutters for good. Free estimates, no obligation.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get a Free Gutter Guard Quote — Call Now",
    },
    intro: {
      h2: `Gutter Guard Installation in ${cityName}, ${stateName}`,
      paragraphs: [
        `Gutter guards in ${cityName} reduce cleaning frequency by 80–90% by preventing leaves, pine needles, and debris from entering your gutters. The right guard type depends on your tree coverage, gutter style, and budget.`,
        county
          ? `Licensed gutter guard specialists in ${county} assess your specific debris type and gutter condition before recommending a guard product — not every guard works equally well for every situation.`
          : `A licensed ${cityName} specialist can assess your property's needs and recommend the right guard type over the phone.`,
      ],
      cta: `Call for a Free ${cityName} Gutter Guard Quote`,
    },
    costEstimator: {
      h2: `Gutter Guard Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Gutter guard installation in ${cityName} typically runs $500–$2,500 for a full home depending on linear footage, guard type, and home height. Micro-mesh guards run $1.50–$4.50 per linear foot for material; reverse-curve runs $0.75–$2.50; foam inserts run $0.50–$1.50. Installation adds $1–$3 per linear foot for most homes.`,
      ctaBelow: `Get Your Exact ${cityName} Gutter Guard Quote — Call Now`,
    },
    mainService: {
      h2: `Gutter Guard Installation Quote in ${cityName}, ${stateAbbr}`,
      description: `Gutter guard installation costs in ${cityName} depend on guard type, linear footage, and home height. Micro-mesh is the highest-performing option — it blocks virtually all debris including pine needles — and runs $2–$6 per linear foot installed. Reverse-curve guards run $1.50–$4 per linear foot and work well for leaf debris. Foam and brush inserts are the least expensive but require periodic replacement. A licensed ${cityName} specialist assesses your tree coverage and gutter condition before recommending a product. Most installations are completed in a single day.`,
      localParagraphs,
      cost: `${cityName} gutter guard installation: $500 – $2,500 for a full home`,
      whatAffects: [
        "Guard type — micro-mesh, reverse-curve, foam, screen",
        "Linear footage of gutters",
        "Tree coverage and debris type — leaves, pine needles, seeds",
        "Home height and access complexity",
      ],
      cta: `Get a Gutter Guard Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Invest in Gutter Guards`,
      paragraphs: [
        `A gutter guard quote from a licensed ${cityName} specialist includes a product recommendation based on your actual tree coverage and debris type. Buying the wrong guard type — a common outcome of online purchases — results in a system that still clogs and still needs cleaning.`,
        `The math is straightforward for most ${cityName} homeowners. If you pay $150–$200 for cleaning twice a year, a $1,200 guard installation pays for itself in 4–5 years — and eliminates the safety risk of ladder work at height.`,
        `Quality guards come with 10–25 year manufacturer warranties. A licensed installer provides documentation and handles warranty claims. DIY installations typically void manufacturer coverage and often lead to improper fitment that gaps under wind and debris loads.`,
      ],
    },
    localSignals: {
      h2: `Gutter Guard Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed gutter guard installation specialists serve ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, cityName, [
        `All specialists are licensed under ${stateName} state requirements`,
        `Product recommendation based on your specific tree coverage`,
        "Manufacturer warranty provided with installation",
        `Most ${cityName} guard installations completed in a single day`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Gutter Guard FAQ — ${cityName}, ${stateName}`,
      items: [
        {
          q: `How much does gutter guard installation cost in ${cityName}, ${stateAbbr}?`,
          a: `Gutter guard installation in ${cityName} typically runs $500–$2,500 for a full home depending on guard type, linear footage, and home height. Micro-mesh runs $2–$6 per linear foot installed; reverse-curve runs $1.50–$4; foam inserts run $0.50–$2. A specialist gives you an exact quote based on your home.`,
        },
        {
          q: `Do gutter guards really work in ${cityName}?`,
          a: `Quality micro-mesh and reverse-curve guards reduce cleaning frequency by 80–90% for most ${cityName} homeowners. They don't eliminate cleaning entirely — even the best guards benefit from an annual inspection and flush. Low-quality screen guards and foam inserts often clog with fine debris.`,
        },
        {
          q: `What type of gutter guard is best for ${cityName} homes?`,
          a: `Micro-mesh is the best all-around performer for most ${cityName} homes, especially those with pine trees. Reverse-curve works well for primarily leaf debris. A licensed specialist assesses your specific tree coverage before recommending a product.`,
        },
        {
          q: `Is the gutter guard quote free in ${cityName}?`,
          a: `Yes. A phone quote costs nothing. You get a product recommendation and a price from a licensed ${cityName} gutter specialist before scheduling.`,
        },
        {
          q: `Can gutter guards be installed on existing gutters in ${cityName}?`,
          a: `In most cases, yes. Most micro-mesh and reverse-curve guards are compatible with standard 5-inch K-style gutters without replacement. A specialist confirms compatibility and gutter condition during the quote visit.`,
        },
      ],
    },
    closing: {
      h2: `Get Your Free Gutter Guard Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed gutter guard specialist serving ${cityName}, ${stateName} can give you an honest estimate in under 5 minutes.`,
      cta: `Call for Your Free ${cityName} Gutter Guard Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day quote in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other gutter services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ─── DOWNSPOUT REPAIR ───────────────────────────────────────────────────────
function getDownspoutRepairCityPageContent(params: ServiceContentParams): ServiceCityContent {
  const { cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone = PHONE_DEFAULT, cityMetadata } = params;
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;

  const localParagraphs: string[] = [
    ...(county ? [`Downspout repair specialists in ${county} assess discharge routing to ensure water exits at least 4 feet from your foundation — a common deficiency in older ${cityName} homes.`] : []),
    ...(medianYear ? [`Homes built around ${medianYear} in ${cityName} often have original downspouts with crimped joints and inadequate splash blocks. Rerouting or extending discharge is a common repair that prevents foundation saturation.`] : []),
    ...(homeValue ? [`With a median home value of $${Number(homeValue).toLocaleString()} in ${cityName}, ensuring downspouts discharge properly away from the foundation protects one of your most valuable assets from preventable water damage.`] : []),
    ...(growthSnippet ? [`${cityName} is ${growthSnippet}. Properly functioning downspouts are essential in growing areas where landscaping and hardscape changes can redirect water toward structures.`] : []),
  ].filter(Boolean);
  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} downspout specialist assesses your discharge points and routing, and gives you an upfront repair quote.`);

  return {
    meta: {
      title: `Downspout Repair in ${cityName}, ${stateAbbr} | Free Estimates from Licensed Specialists`,
      description: `Professional downspout repair in ${cityName}, ${stateName}. Fix leaks, clogs, and improper discharge routing. Licensed local specialists, upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Downspout Repair in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} downspout repair specialists. Fix leaks, clogs, disconnected sections, and improper foundation discharge. Free estimates, no obligation.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get a Free Downspout Repair Quote — Call Now",
    },
    intro: {
      h2: `Professional Downspout Repair in ${cityName}, ${stateName}`,
      paragraphs: [
        `Downspout problems in ${cityName} homes include clogged sections, separated joints, crimped elbows, and discharge points that deposit water too close to the foundation. Each issue directs water where it causes the most damage.`,
        county
          ? `Licensed downspout repair specialists in ${county} assess the complete drainage path — from gutter inlet to discharge point — before quoting.`
          : `A licensed ${cityName} specialist can assess your downspout issues and give you a repair estimate over the phone.`,
      ],
      cta: `Call for a Free ${cityName} Downspout Repair Quote`,
    },
    costEstimator: {
      h2: `Downspout Repair Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Downspout repair in ${cityName} typically runs $75–$400 per downspout depending on the issue. Unclogging and flushing runs $75–$125; joint repair or replacement runs $100–$200; full rerouting or extension runs $150–$400 per downspout.`,
      ctaBelow: `Get Your Exact ${cityName} Downspout Repair Quote — Call Now`,
    },
    mainService: {
      h2: `Downspout Repair Quote in ${cityName}, ${stateAbbr}`,
      description: `Downspout repair costs in ${cityName} depend on the type and number of issues. Clearing a clog runs $75–$125; replacing a crimped or damaged elbow section runs $100–$175; rerouting a downspout to discharge away from the foundation runs $150–$400. Underground drainage extensions that direct water to the street or a dry well are available for problem discharge situations and run $300–$800. A licensed ${cityName} specialist assesses all downspouts during the quote visit and provides itemized pricing.`,
      localParagraphs,
      cost: `${cityName} downspout repair: $75 – $400 per downspout`,
      whatAffects: [
        "Type of issue — clog, joint failure, improper routing",
        "Number of downspouts affected",
        "Discharge routing distance",
        "Underground drainage needs",
      ],
      cta: `Get a Downspout Repair Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Fix Downspout Problems Immediately`,
      paragraphs: [
        `A downspout repair quote from a licensed ${cityName} specialist identifies exactly where your drainage system is failing and how much it costs to fix — before the next heavy rain puts more water against your foundation.`,
        `Downspouts that discharge within 2 feet of the foundation are one of the leading causes of basement flooding and foundation cracking in ${cityName} homes. A $150 downspout extension prevents $5,000–$25,000 in waterproofing and foundation repair.`,
        `Most downspout repairs are fast — a licensed specialist completes the majority of single-downspout jobs in under an hour. Getting a quote and scheduling the repair is faster than waiting for visible water damage to force the issue.`,
      ],
    },
    localSignals: {
      h2: `Downspout Repair Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed downspout repair specialists serve ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, cityName, [
        `All specialists are licensed under ${stateName} state requirements`,
        `Full drainage path assessment included with every quote`,
        "Upfront pricing — no surprise charges after work begins",
        `Same-day availability in most ${cityName} areas`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Downspout Repair FAQ — ${cityName}, ${stateName}`,
      items: [
        {
          q: `How much does downspout repair cost in ${cityName}, ${stateAbbr}?`,
          a: `Downspout repair in ${cityName} typically runs $75–$400 per downspout depending on the issue. Simple unclogging runs $75–$125; joint or section replacement runs $100–$200; rerouting for proper discharge runs $150–$400. A licensed specialist gives you an itemized quote.`,
        },
        {
          q: `How far should downspouts discharge from the foundation in ${cityName}?`,
          a: `The standard recommendation is at least 4–6 feet from the foundation, directed away from the home. In ${stateName}, local grading and drainage codes may specify additional requirements. A licensed specialist ensures your discharge points meet code.`,
        },
        {
          q: `Can a clogged downspout cause foundation damage in ${cityName}?`,
          a: `Yes. A clogged downspout forces water to overflow at the gutter level and drop directly at the foundation, or backup into the gutter system and overflow at the fascia. Both situations saturate the soil around your foundation and can cause cracking and water infiltration.`,
        },
        {
          q: `Is the downspout repair quote free in ${cityName}?`,
          a: `Yes. A phone quote costs nothing. A licensed ${cityName} gutter specialist can give you a range over the phone and confirm pricing on-site.`,
        },
        {
          q: `Can I get same-day downspout repair in ${cityName}?`,
          a: `Same-day downspout repair is often available in ${cityName} for clogs and minor joint repairs. Rerouting or underground extension work may require scheduling a day or two out. Call to confirm availability.`,
        },
      ],
    },
    closing: {
      h2: `Get Your Free Downspout Repair Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed downspout repair specialist serving ${cityName}, ${stateName} can give you an honest estimate in under 5 minutes.`,
      cta: `Call for Your Free ${cityName} Downspout Repair Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day availability in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other gutter services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ─── SEAMLESS GUTTER ────────────────────────────────────────────────────────
function getSeamlessGutterCityPageContent(params: ServiceContentParams): ServiceCityContent {
  const { cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone = PHONE_DEFAULT, cityMetadata } = params;
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;

  const localParagraphs: string[] = [
    ...(county ? [`Seamless gutter specialists in ${county} roll gutters on-site from a continuous aluminum coil to your exact roofline measurements — eliminating seam joints and ensuring proper pitch in a single installation visit.`] : []),
    ...(medianYear ? [`Many ${cityName} homes built around ${medianYear} have original sectional gutters with multiple seam joints that are now failing. Seamless replacement eliminates these failure points permanently.`] : []),
    ...(homeValue ? [`With a median home value of $${Number(homeValue).toLocaleString()} in ${cityName}, seamless gutters are a cost-effective upgrade that improves both function and curb appeal.`] : []),
    ...(growthSnippet ? [`${cityName} is ${growthSnippet}. Seamless gutters are standard specification for new construction and renovation projects in the area.`] : []),
  ].filter(Boolean);
  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} seamless gutter specialist rolls your gutters to exact specifications on-site and installs them with proper pitch and hanger spacing in a single day.`);

  return {
    meta: {
      title: `Seamless Gutter Installation in ${cityName}, ${stateAbbr} | Free Estimates from Licensed Specialists`,
      description: `Seamless gutter installation in ${cityName}, ${stateName}. Custom-rolled on-site from aluminum, steel, or copper. Licensed local specialists, upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Seamless Gutter Installation in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} seamless gutter specialists. Custom-rolled on-site. Aluminum, steel, and copper. Eliminates seam joints and leaks. Free estimates, no obligation.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get a Free Seamless Gutter Quote — Call Now",
    },
    intro: {
      h2: `Seamless Gutter Installation in ${cityName}, ${stateName}`,
      paragraphs: [
        `Seamless gutters in ${cityName} are fabricated on-site from a continuous coil, cut to exact length for each run of your roofline. No seam joints means no joint sealant to fail, crack, or separate — the single most common source of gutter leaks.`,
        county
          ? `Licensed seamless gutter specialists in ${county} bring the rolling machine to your home and fabricate gutters to your exact measurements. Most full installations are completed in a single day.`
          : `A licensed ${cityName} specialist measures your roofline and fabricates seamless gutters on-site to your exact specifications.`,
      ],
      cta: `Call for a Free ${cityName} Seamless Gutter Quote`,
    },
    costEstimator: {
      h2: `Seamless Gutter Cost Estimator — ${cityName}, ${stateName}`,
      intro: `Seamless gutter installation in ${cityName} typically runs $700–$2,800 for a full home depending on linear footage, material, and home height. Seamless aluminum runs $4–$9 per linear foot installed; seamless steel runs $6–$12; seamless copper runs $15–$30. Downspout installation is typically included.`,
      ctaBelow: `Get Your Exact ${cityName} Seamless Gutter Quote — Call Now`,
    },
    mainService: {
      h2: `Seamless Gutter Installation Quote in ${cityName}, ${stateAbbr}`,
      description: `Seamless gutter installation in ${cityName} costs slightly more than pre-cut sectional gutters upfront, but eliminates the ongoing repair costs associated with seam joint failures. Seamless aluminum at $4–$9 per linear foot installed is the standard choice for most ${cityName} homes; copper at $15–$30 per linear foot is popular for historic and high-end properties. A specialist measures every run of your roofline and rolls the exact length needed — no splicing, no exposed joints. Most full installations are completed in a single day.`,
      localParagraphs,
      cost: `${cityName} seamless gutter installation: $700 – $2,800 for a full home`,
      whatAffects: [
        "Linear footage of each gutter run",
        "Material — aluminum, steel, copper, zinc",
        "Profile style — K-style or half-round",
        "Home height and roof complexity",
        "Downspout count and routing",
      ],
      cta: `Get a Seamless Gutter Quote in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Choose Seamless Over Sectional Gutters`,
      paragraphs: [
        `A seamless gutter quote from a licensed ${cityName} specialist includes a side-by-side comparison with sectional gutters. For most homeowners, seamless wins on long-term cost — no sealant to re-apply, no joint leaks to repair, and a longer effective lifespan.`,
        `Seam joints are where 90% of gutter leaks originate. Pre-cut sectional gutters sold at home improvement stores have joints every 10–12 feet. A 150-foot home has 12–15 seam joints that all require periodic resealing and will eventually fail. Seamless eliminates every one of them.`,
        `Seamless gutters are fabricated and installed in a single visit by a licensed contractor with a rolling machine. The job is done right, with proper pitch and hanger spacing, in a day. There's no DIY equivalent for seamless gutters — the equipment costs $15,000+.`,
      ],
    },
    localSignals: {
      h2: `Seamless Gutter Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed seamless gutter installation specialists serve ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, cityName, [
        `All specialists are licensed under ${stateName} state requirements`,
        `Gutters custom-rolled on-site to your exact measurements`,
        "Aluminum, steel, and copper available in standard and custom colors",
        `Most ${cityName} seamless installations completed same-day`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Seamless Gutter FAQ — ${cityName}, ${stateName}`,
      items: [
        {
          q: `How much do seamless gutters cost in ${cityName}, ${stateAbbr}?`,
          a: `Seamless aluminum gutters in ${cityName} typically run $4–$9 per linear foot installed, or $700–$1,800 for a typical home. Seamless copper runs $15–$30 per linear foot. A licensed specialist gives you exact pricing based on your home's measurements.`,
        },
        {
          q: `Are seamless gutters better than sectional in ${cityName}?`,
          a: `For most ${cityName} homeowners, yes. Seamless gutters eliminate seam joints — the primary source of leaks — and require less maintenance over their lifespan. The 10–20% upfront premium typically pays back within 5 years in avoided repair costs.`,
        },
        {
          q: `How long do seamless gutters last in ${cityName}?`,
          a: `Seamless aluminum gutters typically last 20–25 years in ${cityName}'s climate with annual cleaning. Seamless steel lasts 20–30 years; seamless copper can last 50+ years. Proper hanger spacing and pitch installed by a licensed contractor maximizes lifespan.`,
        },
        {
          q: `Is the seamless gutter quote free in ${cityName}?`,
          a: `Yes. A phone quote costs nothing. A licensed ${cityName} seamless gutter specialist measures your roofline and provides exact pricing — no obligation.`,
        },
        {
          q: `Can seamless gutters be installed over existing gutters in ${cityName}?`,
          a: `No. New seamless gutters require removing the existing system first to ensure proper fascia condition, hanger placement, and pitch. Removal of old gutters is typically included in the installation quote.`,
        },
      ],
    },
    closing: {
      h2: `Get Your Free Seamless Gutter Quote in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed seamless gutter specialist serving ${cityName}, ${stateName} can give you an honest estimate in under 5 minutes.`,
      cta: `Call for Your Free ${cityName} Seamless Gutter Quote`,
      sub: `Call ${phone} · Available 7 days a week · Same-day installation available in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other gutter services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ─── GUTTER INSPECTION ──────────────────────────────────────────────────────
function getGutterInspectionCityPageContent(params: ServiceContentParams): ServiceCityContent {
  const { cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone = PHONE_DEFAULT, cityMetadata } = params;
  const county = cityMetadata?.county;
  const medianYear = cityMetadata?.medianYearBuilt;
  const homeValue = cityMetadata?.medianHomeValue;
  const growthSnippet = cityMetadata?.growthSnippet;

  const localParagraphs: string[] = [
    ...(county ? [`Gutter inspection specialists in ${county} check pitch, hanger spacing, seam integrity, downspout routing, and fascia condition — a complete assessment of your drainage system in a single visit.`] : []),
    ...(medianYear ? [`${cityName} homes built around ${medianYear} are at or approaching the typical gutter replacement threshold. An inspection determines whether repair or replacement is the more cost-effective path.`] : []),
    ...(homeValue ? [`With a median home value of $${Number(homeValue).toLocaleString()} in ${cityName}, a gutter inspection before purchasing or selling a home identifies drainage issues that affect value and negotiation.`] : []),
    ...(growthSnippet ? [`${cityName} is ${growthSnippet}. Home inspections and pre-purchase gutter assessments are increasingly common as the market grows.`] : []),
  ].filter(Boolean);
  if (!localParagraphs.length) localParagraphs.push(`A licensed ${cityName} gutter inspector assesses your complete drainage system and provides a written condition report with repair or replacement recommendations.`);

  return {
    meta: {
      title: `Gutter Inspection in ${cityName}, ${stateAbbr} | Free Estimates from Licensed Specialists`,
      description: `Professional gutter inspection in ${cityName}, ${stateName}. Identify hidden damage, improper pitch, and failing fascia. Licensed local specialists, upfront pricing, no obligation.`,
    },
    hero: {
      h1: `Gutter Inspection in ${cityName}, ${stateName}`,
      sub: `Licensed ${cityName} gutter inspection specialists. Complete system assessment — pitch, hangers, seams, downspouts, and fascia. Free estimates, no obligation.`,
      trustBullets: buildTrustBullets(stateAbbr, cityName, county),
      cta: "Get a Free Gutter Inspection Quote — Call Now",
    },
    intro: {
      h2: `Professional Gutter Inspection in ${cityName}, ${stateName}`,
      paragraphs: [
        `A professional gutter inspection in ${cityName} covers pitch alignment, hanger spacing, seam integrity, end cap condition, downspout routing, and fascia health — the complete picture of whether your drainage system is doing its job.`,
        county
          ? `Licensed gutter inspectors in ${county} provide a written condition report with specific repair or replacement recommendations and itemized pricing.`
          : `A licensed ${cityName} specialist inspects your complete gutter system and explains exactly what they find before any work is recommended.`,
      ],
      cta: `Call for a Free ${cityName} Gutter Inspection`,
    },
    costEstimator: {
      h2: `Gutter Inspection Cost — ${cityName}, ${stateName}`,
      intro: `Gutter inspections in ${cityName} often come free when combined with a cleaning or repair estimate. Standalone inspection fees range from free to $150 depending on home size and the level of written documentation provided.`,
      ctaBelow: `Schedule Your ${cityName} Gutter Inspection — Call Now`,
    },
    mainService: {
      h2: `Gutter Inspection in ${cityName}, ${stateAbbr}`,
      description: `A thorough gutter inspection in ${cityName} identifies issues invisible from the ground: improper pitch that causes standing water, hidden seam failures behind gutter hangers, fascia rot behind the gutter back, and downspout joints that leak at the elbow. A licensed inspector checks every section, marks problem areas, and provides a written assessment with specific recommendations. Many ${cityName} specialists include the inspection free with a cleaning visit or repair estimate — getting a professional assessment costs less than most homeowners expect.`,
      localParagraphs,
      cost: `${cityName} gutter inspection: Free – $150 (often included with cleaning or repair estimate)`,
      whatAffects: [
        "Scope — visual only vs hands-on with written report",
        "Home size and linear footage",
        "Whether combined with cleaning or repair work",
        "Documentation level required",
      ],
      cta: `Schedule a Gutter Inspection in ${cityName} — Call Now`,
    },
    whyCall: {
      h2: `Why ${cityName} Homeowners Get a Professional Gutter Inspection`,
      paragraphs: [
        `A professional gutter inspection in ${cityName} identifies problems you can't see from a ladder: improper pitch that collects standing water, hidden seam failures, and early fascia rot behind the gutter back. Catching these issues early costs a fraction of what they cost when they escalate.`,
        `An inspection before buying or selling a home in ${cityName} gives you a clear picture of gutter system condition. Gutter repairs and replacements are negotiating points — knowing the scope and cost upfront is leverage.`,
        `An annual inspection keeps your maintenance costs predictable. A licensed ${cityName} specialist can schedule a combined cleaning and inspection visit that covers both the maintenance and the condition check in a single service call.`,
      ],
    },
    localSignals: {
      h2: `Gutter Inspection Service Areas Near ${cityName}, ${stateName}`,
      intro: `Licensed gutter inspection specialists serve ${cityName} and nearby communities including ${nearby1}, ${nearby2}, and ${nearby3}.`,
      bullets: buildLocalSignalsBullets(stateName, cityName, [
        `All specialists are licensed under ${stateName} state requirements`,
        "Written condition report with specific recommendations",
        "Often included free with cleaning or repair estimate",
        `Same-day and next-day availability in ${cityName}`,
      ], cityMetadata),
    },
    eeat: { title: "Why trust this guide", bullets: EEAT_BULLETS },
    faq: {
      h2: `Gutter Inspection FAQ — ${cityName}, ${stateName}`,
      items: [
        {
          q: `How much does a gutter inspection cost in ${cityName}, ${stateAbbr}?`,
          a: `Gutter inspections in ${cityName} often come free when combined with a cleaning or repair estimate. Standalone inspections range from free to $150. Call a licensed ${cityName} specialist to confirm what's included.`,
        },
        {
          q: `What does a gutter inspection cover in ${cityName}?`,
          a: `A professional gutter inspection in ${cityName} covers pitch alignment, hanger spacing and condition, seam integrity, end cap and mitre condition, downspout routing and discharge points, and fascia condition. A written report documents findings and recommends specific repairs or replacement.`,
        },
        {
          q: `How often should gutters be inspected in ${cityName}?`,
          a: `Annual inspections are standard for most ${cityName} homes. Homes with heavy tree coverage or gutters over 15 years old benefit from bi-annual inspections. Many specialists combine inspection with fall or spring cleaning.`,
        },
        {
          q: `Do I need a gutter inspection before selling my ${cityName} home?`,
          a: `Not required, but recommended. A pre-listing gutter inspection identifies issues before a home inspector finds them, giving you time to make repairs that improve the inspection report and reduce buyer negotiation leverage.`,
        },
        {
          q: `Can I get a same-day gutter inspection in ${cityName}?`,
          a: `Same-day and next-day gutter inspections are often available in ${cityName}. Call to confirm availability for your area and schedule a combined cleaning and inspection visit.`,
        },
      ],
    },
    closing: {
      h2: `Schedule Your Gutter Inspection in ${cityName} Today`,
      text: `No forms. No waiting. No obligation. A licensed gutter specialist serving ${cityName}, ${stateName} can inspect your system and give you honest findings in a single visit.`,
      cta: `Call for Your ${cityName} Gutter Inspection`,
      sub: `Call ${phone} · Available 7 days a week · Often free with cleaning in ${cityName}`,
    },
    internalLinks: {
      otherServicesLabel: `Other gutter services in ${cityName}:`,
      nearbyLabel: "Nearby cities:",
      backLabel: `← All cities in ${stateName}`,
    },
  };
}

// ─── DISPATCHER ─────────────────────────────────────────────────────────────
export function getServiceCityPageContent(
  service: string,
  params: ServiceContentParams
): ServiceCityContent {
  switch (service) {
    case "gutter-installation":
      return getGutterCityPageContent(
        params.cityName, params.stateName, params.stateAbbr,
        params.nearby1, params.nearby2, params.nearby3,
        params.phone, params.cityMetadata
      );
    case "gutter-cleaning":
      return getGutterCleaningCityPageContent(params);
    case "gutter-repair":
      return getGutterRepairCityPageContent(params);
    case "gutter-replacement":
      return getGutterReplacementCityPageContent(params);
    case "gutter-guard-installation":
      return getGutterGuardCityPageContent(params);
    case "downspout-repair":
      return getDownspoutRepairCityPageContent(params);
    case "seamless-gutter":
      return getSeamlessGutterCityPageContent(params);
    case "gutter-inspection":
      return getGutterInspectionCityPageContent(params);
    default:
      return getGutterCityPageContent(
        params.cityName, params.stateName, params.stateAbbr,
        params.nearby1, params.nearby2, params.nearby3,
        params.phone, params.cityMetadata
      );
  }
}
