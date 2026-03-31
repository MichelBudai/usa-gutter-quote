import type { CityMetadata } from "./cityMetadata";

export interface ServiceCityContent {
  meta: { title: string; description: string };
  hero: { h1: string; sub: string; trustBullets: string[]; cta: string };
  intro: { h2: string; paragraphs: string[]; cta: string };
  costEstimator: { h2: string; intro: string; ctaBelow: string };
  mainService: { h2: string; description: string; localParagraphs?: string[]; cost: string; whatAffects: string[]; cta: string };
  whyCall: { h2: string; paragraphs: string[] };
  localSignals: { h2: string; intro: string; bullets: string[] };
  eeat: { title: string; bullets: string[] };
  faq: { h2: string; items: { q: string; a: string }[] };
  closing: { h2: string; text: string; cta: string; sub: string };
  internalLinks: { otherServicesLabel: string; nearbyLabel: string; backLabel: string };
}

export type ServiceContentParams = {
  cityName: string; stateName: string; stateAbbr: string;
  nearby1: string; nearby2: string; nearby3: string;
  phone?: string; cityMetadata?: CityMetadata | null;
};

const PHONE = "(855) 356-4443";

function trust(stateAbbr: string, cityName: string, county?: string): string[] {
  const b = [`Licensed & insured in ${stateAbbr}`, "Complete installed price quoted", "Free estimate, no obligation", "Material + labor included"];
  if (county) b.push(`Serving ${cityName} and ${county}`);
  return b;
}

function sigs(stateName: string, cityName: string, base: string[], m?: CityMetadata | null): string[] {
  const b = [...base];
  if (m?.county) b.unshift(`Serving ${cityName} and ${m.county} — licensed under ${stateName} requirements.`);
  if (m?.medianYearBuilt) b.push(`Many ${cityName} homes built around ${m.medianYearBuilt} have original hardwood floors under carpet — often worth uncovering and refinishing.`);
  if (m?.medianHomeValue) b.push(`For a home valued at $${m.medianHomeValue.toLocaleString()} in ${cityName}, new flooring is one of the highest-ROI home improvement investments.`);
  return b;
}

const EEAT = [
  "This guide is written for homeowners comparing flooring quotes — we focus on what affects your total installed cost.",
  "We don't charge flooring contractors for placement. Quotes come from licensed local contractors, not pay-to-play leads.",
  "Cost ranges are for complete installed pricing — material, labor, underlayment, and subfloor prep included.",
];

// ── 1. Flooring Quote ───────────────────────────────────────────────────────
export function getFlooringQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: { title: `Flooring Quote in ${cityName}, ${stateAbbr} | Complete Installed Price | Licensed`, description: `Free flooring quote in ${cityName}, ${stateName}. Hardwood, LVP, tile, carpet & laminate. Complete installed price — material + labor. Licensed contractors. No obligation.` },
    hero: { h1: `Free Flooring Quote in ${cityName}, ${stateName} — All Materials`, sub: `Licensed ${cityName} flooring contractors for hardwood, LVP, tile, carpet, and laminate. Complete installed price quoted — material, labor, and removal included.`, trustBullets: trust(stateAbbr, cityName, m?.county), cta: "Get Your Free Flooring Quote — Call Now" },
    intro: { h2: `Get a Complete Flooring Quote in ${cityName}, ${stateName}`, paragraphs: [`A complete flooring quote in ${cityName} includes material, underlayment, labor, subfloor preparation, and old floor removal — giving you the real installed cost, not just the material price.`, `Licensed flooring contractors in ${cityName} assess your subfloor condition, measure your space accurately, and recommend the best material for your specific use case and budget.`], cta: `Call for a Free ${cityName} Flooring Quote` },
    costEstimator: { h2: `Flooring Cost Estimator — ${cityName}, ${stateName}`, intro: `Flooring in ${cityName}: carpet $3–$8/sq ft installed; laminate $3–$8/sq ft; luxury vinyl plank $3–$10/sq ft; tile $5–$18/sq ft; hardwood $6–$20/sq ft. For a 1,000 sq ft home: carpet $3,000–$8,000; LVP $3,000–$10,000; hardwood $6,000–$20,000.`, ctaBelow: `Get Your Exact ${cityName} Flooring Quote — Call Now` },
    mainService: {
      h2: `Flooring Installation in ${cityName}, ${stateAbbr} — What's Included`,
      description: `A complete flooring quote in ${cityName} covers: material selection and supply, underlayment or padding as required, subfloor inspection and preparation (leveling, repairs, moisture testing), removal and disposal of old flooring, installation, and finishing (transitions, trim, thresholds). The subfloor assessment is critical — an uneven or wet subfloor that isn't addressed before installation causes flooring failure within months. A licensed ${cityName} flooring contractor includes subfloor assessment in every quote.`,
      localParagraphs: [m?.medianYearBuilt ? `Many ${cityName} homes built around ${m.medianYearBuilt} may have original hardwood floors under carpet — worth having a contractor check before installing over or replacing.` : ""].filter(Boolean) as string[],
      cost: `Flooring in ${cityName}: $3 – $20/sq ft installed (material + labor)`,
      whatAffects: ["Flooring material type and brand", "Square footage and room complexity", "Subfloor condition — level, dry, and solid required", "Whether old flooring removal is included"],
      cta: `Get a Flooring Quote in ${cityName} — Call Now`,
    },
    whyCall: { h2: `Why ${cityName} Homeowners Get a Flooring Quote First`, paragraphs: [`Material price is only part of the cost. Labor, underlayment, subfloor prep, and old floor removal often cost as much as the material. A complete installed quote from a licensed ${cityName} contractor shows the real total.`, `Subfloor problems are common and expensive if missed. Moisture, unevenness, and soft spots must be corrected before new flooring — a cost that online calculators never account for.`, `New flooring is the highest-ROI home improvement for resale. Buyers notice flooring immediately — it affects offers more than most other renovations.`] },
    localSignals: { h2: `Flooring Service Areas Near ${cityName}, ${stateName}`, intro: `Licensed flooring contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`, bullets: sigs(stateName, cityName, [`Licensed & insured flooring contractors`, "All materials — hardwood, LVP, tile, carpet, laminate", "Subfloor assessment included in every quote", `Serving ${cityName} and surrounding ${stateAbbr} areas`], m) },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: { h2: `Flooring Quote FAQ — ${cityName}, ${stateName}`, items: [
      { q: `How much does flooring cost in ${cityName}?`, a: `Flooring in ${cityName}: carpet $3–$8/sq ft; LVP $3–$10/sq ft; laminate $3–$8/sq ft; tile $5–$18/sq ft; hardwood $6–$20/sq ft installed. A licensed contractor gives you the exact installed price for your space.` },
      { q: `What is the best flooring for ${cityName} homes?`, a: `Luxury vinyl plank (LVP) is the most versatile — waterproof, durable, and works in any room. Hardwood adds the most value. Tile is best for wet areas. A licensed contractor recommends the best option for your specific situation.` },
      { q: `Does the flooring quote include removal of old flooring in ${cityName}?`, a: `Some contractors include it, others price it separately at $1–$4/sq ft. Always confirm what is included. A complete quote should specify whether removal is included.` },
      { q: `How long does flooring installation take in ${cityName}?`, a: `Most residential jobs: 1–3 days. Tile: 2–4 days including cure time. Hardwood refinishing: 3–5 days. Large homes may take longer.` },
    ]},
    closing: { h2: `Get Your Free Flooring Quote in ${cityName} Today`, text: `No forms. No waiting. No obligation. A licensed flooring contractor in ${cityName} measures your space and gives you a complete installed price.`, cta: `Call for Your Free ${cityName} Flooring Quote`, sub: `Call ${phone} · Available 7 days a week` },
    internalLinks: { otherServicesLabel: `Other flooring services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 2. Hardwood Flooring ────────────────────────────────────────────────────
export function getHardwoodFlooringQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: { title: `Hardwood Flooring in ${cityName}, ${stateAbbr} | Installed Price | Licensed`, description: `Free hardwood flooring quote in ${cityName}, ${stateName}. Solid & engineered hardwood installed. Subfloor assessment included. Licensed contractors. No obligation.` },
    hero: { h1: `Hardwood Flooring in ${cityName}, ${stateName} — Free Quote`, sub: `Solid and engineered hardwood flooring installation in ${cityName}. Complete installed price — material, labor, and subfloor assessment included.`, trustBullets: trust(stateAbbr, cityName, m?.county), cta: "Get Your Free Hardwood Quote — Call Now" },
    intro: { h2: `Hardwood Flooring Installation in ${cityName}`, paragraphs: [`Hardwood flooring adds more property value than any other flooring type — and lasts 50–100 years when properly installed and maintained.`, `A free hardwood flooring quote in ${cityName} includes solid vs. engineered options, species selection, subfloor assessment, and complete installed pricing.`], cta: `Call for a Hardwood Flooring Quote in ${cityName}` },
    costEstimator: { h2: `Hardwood Flooring Cost — ${cityName}`, intro: `Hardwood flooring in ${cityName}: engineered hardwood $6–$14/sq ft installed; solid hardwood $8–$20/sq ft installed. Species affect cost: oak $6–$12; maple $8–$14; hickory $8–$14; exotic species $12–$22+. For a 1,000 sq ft home: $6,000–$20,000 installed.`, ctaBelow: `Get Your Exact Hardwood Quote in ${cityName}` },
    mainService: {
      h2: `Hardwood Flooring in ${cityName}, ${stateAbbr}`,
      description: `Hardwood flooring installation in ${cityName} involves choosing between solid hardwood (3/4" thick, can be refinished 5–7 times over its lifetime) and engineered hardwood (plywood core with hardwood veneer — more stable in humidity fluctuations, can be refinished 1–3 times). The subfloor must be level within 3/16" over 10 feet and moisture content within 2–4% of the hardwood. Improper subfloor moisture causes cupping, crowning, and gapping — the most common hardwood flooring failures. A licensed ${cityName} flooring contractor tests moisture and prepares the subfloor before installation.`,
      localParagraphs: [m?.medianYearBuilt ? `Many ${cityName} homes built around ${m.medianYearBuilt} have original hardwood floors under carpet — worth uncovering and refinishing before considering new installation.` : ""].filter(Boolean) as string[],
      cost: `Hardwood flooring in ${cityName}: $6 – $20/sq ft installed`,
      whatAffects: ["Solid vs. engineered hardwood", "Wood species and grade", "Plank width — wide plank costs more", "Subfloor moisture and leveling required"],
      cta: `Get a Hardwood Flooring Quote in ${cityName} — Call Now`,
    },
    whyCall: { h2: `Why Hardwood Flooring Adds Value in ${cityName}`, paragraphs: [`Hardwood flooring returns 70–80% of its cost in home resale value — the highest ROI of any flooring type. In competitive ${cityName} real estate, homes with hardwood sell faster and for more.`, `Original hardwood floors under carpet. Homes built before 1980 often have original hardwood under carpet — uncovering and refinishing it ($3–$6/sq ft) is far less expensive than new installation ($8–$20/sq ft).`, `Hardwood lasts 50–100 years. LVP and laminate last 15–25 years. Over a lifetime, hardwood installed once often costs less than replacing cheaper flooring every 20 years.`] },
    localSignals: { h2: `Hardwood Flooring Service Areas Near ${cityName}`, intro: `Licensed hardwood flooring contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`, bullets: sigs(stateName, cityName, [`Solid and engineered hardwood specialists`, "Moisture testing and subfloor prep included", "Species and grade guidance provided", `Serving ${cityName} and surrounding areas`], m) },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: { h2: `Hardwood Flooring FAQ — ${cityName}`, items: [
      { q: `How much does hardwood flooring cost in ${cityName}?`, a: `Hardwood flooring in ${cityName}: engineered $6–$14/sq ft installed; solid $8–$20/sq ft installed. A licensed contractor gives you an exact quote for your specific species and space.` },
      { q: `Solid vs. engineered hardwood in ${cityName} — which is better?`, a: `Solid hardwood can be refinished more times but is more sensitive to moisture. Engineered is more stable in humidity fluctuations. A licensed ${cityName} contractor recommends based on your subfloor and location in the home.` },
      { q: `How long does hardwood installation take in ${cityName}?`, a: `Hardwood installation: 2–4 days. Site-finished hardwood (sanded and finished on-site) adds 1–2 days for finish cure time.` },
      { q: `Can hardwood be installed over a concrete slab in ${cityName}?`, a: `Engineered hardwood can be glued or floated over concrete. Solid hardwood requires a plywood subfloor over concrete. Moisture testing is critical for both.` },
    ]},
    closing: { h2: `Get Your Free Hardwood Flooring Quote in ${cityName}`, text: `No forms. No waiting. No obligation. A licensed flooring contractor in ${cityName} assesses your subfloor and gives you a complete hardwood installation quote.`, cta: `Call for Your Hardwood Flooring Quote in ${cityName}`, sub: `Call ${phone} · Available 7 days a week` },
    internalLinks: { otherServicesLabel: `Other flooring services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 3. Laminate Flooring ────────────────────────────────────────────────────
export function getLaminateFlooringQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: { title: `Laminate Flooring in ${cityName}, ${stateAbbr} | Free Quote | Licensed Contractors`, description: `Free laminate flooring quote in ${cityName}, ${stateName}. Looks like hardwood at lower cost. Waterproof options available. Licensed contractors. No obligation.` },
    hero: { h1: `Laminate Flooring in ${cityName}, ${stateName} — Free Quote`, sub: `Durable laminate flooring — looks like hardwood at a fraction of the cost. Waterproof options available. Licensed ${cityName} contractors.`, trustBullets: trust(stateAbbr, cityName, m?.county), cta: "Get Your Free Laminate Quote — Call Now" },
    intro: { h2: `Laminate Flooring Installation in ${cityName}`, paragraphs: [`Laminate flooring in ${cityName} offers the look of hardwood at $3–$8/sq ft installed — about half the cost of hardwood. Modern laminate is highly realistic, durable, and available in waterproof versions.`, `A free laminate flooring quote in ${cityName} includes material selection, subfloor assessment, and complete installed pricing.`], cta: `Call for a Laminate Flooring Quote in ${cityName}` },
    costEstimator: { h2: `Laminate Flooring Cost — ${cityName}`, intro: `Laminate flooring in ${cityName}: standard laminate $3–$6/sq ft installed; premium/thick (12mm) $5–$8/sq ft; waterproof laminate $4–$8/sq ft. For a 1,000 sq ft home: $3,000–$8,000 installed. Much less expensive than hardwood for a similar look.`, ctaBelow: `Get Your Laminate Flooring Quote in ${cityName}` },
    mainService: {
      h2: `Laminate Flooring in ${cityName}, ${stateAbbr}`,
      description: `Laminate flooring is a floating floor system — interlocking planks that click together over an underlayment, without glue or nails. The photographic layer creates a realistic wood, tile, or stone look. Thickness matters: 8mm is entry-level; 10–12mm provides better sound absorption and a more solid feel underfoot. AC rating (wear layer durability) matters for traffic level. Waterproof laminate uses a sealed core — standard laminate swells when wet. A licensed ${cityName} flooring contractor recommends the right thickness, AC rating, and waterproof spec for your specific rooms and usage.`,
      localParagraphs: [],
      cost: `Laminate flooring in ${cityName}: $3 – $8/sq ft installed`,
      whatAffects: ["Thickness (8mm vs. 10mm vs. 12mm)", "AC rating — traffic level", "Waterproof vs. standard core", "Underlayment included or separate"],
      cta: `Get a Laminate Flooring Quote in ${cityName} — Call Now`,
    },
    whyCall: { h2: `Why Laminate Flooring Is Popular in ${cityName}`, paragraphs: [`Laminate costs 50–70% less than hardwood for a similar look. For homeowners who want the hardwood aesthetic without the hardwood price, laminate is the most cost-effective option.`, `Modern laminate is extremely realistic. Digital printing technology creates surface textures and patterns that are difficult to distinguish from real wood at a glance.`, `Laminate is DIY-friendly but professional installation is faster and includes subfloor prep and leveling — critical for laminate that lasts.`] },
    localSignals: { h2: `Laminate Flooring Service Areas Near ${cityName}`, intro: `Licensed laminate flooring contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`, bullets: sigs(stateName, cityName, [`Waterproof and standard laminate options`, "Subfloor leveling included where needed", "Brand selection guidance provided", `Serving ${cityName} and surrounding areas`], m) },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: { h2: `Laminate Flooring FAQ — ${cityName}`, items: [
      { q: `How much does laminate flooring cost in ${cityName}?`, a: `Laminate in ${cityName}: $3–$8/sq ft installed. Premium thick laminate (12mm waterproof) at the high end. A licensed contractor gives you an exact quote.` },
      { q: `Is laminate flooring waterproof in ${cityName}?`, a: `Standard laminate is NOT waterproof — it swells when wet. Waterproof laminate (sealed core) is available and recommended for kitchens and bathrooms.` },
      { q: `How long does laminate flooring last in ${cityName}?`, a: `Quality laminate (AC4–AC5 rated) lasts 15–25 years. It cannot be refinished like hardwood — replacement is required at end of life.` },
      { q: `Can laminate be installed in bathrooms in ${cityName}?`, a: `Only waterproof laminate (sealed core) should be installed in bathrooms. Standard laminate will swell and fail in wet areas.` },
    ]},
    closing: { h2: `Get Your Free Laminate Flooring Quote in ${cityName}`, text: `No forms. No waiting. No obligation. A licensed contractor in ${cityName} gives you a complete laminate installation quote.`, cta: `Call for Your Laminate Flooring Quote in ${cityName}`, sub: `Call ${phone} · Available 7 days a week` },
    internalLinks: { otherServicesLabel: `Other flooring services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 4. Tile Flooring ────────────────────────────────────────────────────────
export function getTileFlooringQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: { title: `Tile Flooring in ${cityName}, ${stateAbbr} | Ceramic, Porcelain & Stone | Free Quote`, description: `Free tile flooring quote in ${cityName}, ${stateName}. Ceramic, porcelain & natural stone installation. Complete price — materials, setting, grout. Licensed contractors.` },
    hero: { h1: `Tile Flooring in ${cityName}, ${stateName} — Free Quote`, sub: `Ceramic, porcelain, and natural stone tile installation. Licensed ${cityName} tile contractors. Complete price — tile, setting materials, grout, and labor.`, trustBullets: trust(stateAbbr, cityName, m?.county), cta: "Get Your Free Tile Quote — Call Now" },
    intro: { h2: `Tile Flooring Installation in ${cityName}`, paragraphs: [`Tile flooring in ${cityName} — ceramic, porcelain, or natural stone — is the most durable flooring option available and ideal for kitchens, bathrooms, entryways, and any area with moisture.`, `A complete tile flooring quote in ${cityName} includes tile material, setting mortar, grout, backer board (if needed), and labor for a true installed price.`], cta: `Call for a Tile Flooring Quote in ${cityName}` },
    costEstimator: { h2: `Tile Flooring Cost — ${cityName}`, intro: `Tile flooring in ${cityName}: ceramic tile $5–$12/sq ft installed; porcelain tile $7–$16/sq ft; natural stone (travertine, marble) $10–$25/sq ft; large format tile (24x24") adds $2–$4/sq ft for additional leveling. Heated floor installation adds $8–$15/sq ft.`, ctaBelow: `Get Your Exact Tile Flooring Quote in ${cityName}` },
    mainService: {
      h2: `Tile Flooring in ${cityName}, ${stateAbbr}`,
      description: `Tile flooring installation in ${cityName} requires a solid, level subfloor — tile cracks over a subfloor that flexes. Wood subfloors require cement backer board installation before tile. The installation process: subfloor preparation, layout planning (pattern and starting point), mortar application and tile setting, tile cutting for edges and obstacles, grout application, grout sealing, and transition installation. Large format tiles (18x18" and larger) require flatter subfloors and more precise installation — adding cost but creating a more contemporary, seamless appearance. A licensed ${cityName} tile contractor gives you exact pricing for your specific tile choice and room.`,
      localParagraphs: [],
      cost: `Tile flooring in ${cityName}: $5 – $25/sq ft installed (varies by tile type)`,
      whatAffects: ["Tile type — ceramic vs. porcelain vs. natural stone", "Tile size — large format requires more prep", "Pattern complexity — diagonal or herringbone adds labor cost", "Whether backer board installation is needed"],
      cta: `Get a Tile Flooring Quote in ${cityName} — Call Now`,
    },
    whyCall: { h2: `Why Tile Flooring Is the Right Choice for ${cityName} Areas`, paragraphs: [`Tile is the only flooring that is truly waterproof and can handle standing water. For kitchens, bathrooms, laundry rooms, and mudrooms, tile is the most durable long-term choice.`, `Tile lasts 50–100 years. No other flooring material matches tile's longevity. A properly installed tile floor will outlast carpet (10–15 years), LVP (15–25 years), and even hardwood (50 years).`, `Heated tile floors are a growing trend. In-floor radiant heating under tile provides the most comfortable and energy-efficient floor heating available.`] },
    localSignals: { h2: `Tile Flooring Service Areas Near ${cityName}`, intro: `Licensed tile flooring contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`, bullets: sigs(stateName, cityName, [`Ceramic, porcelain, and natural stone tile`, "Backer board installation included where needed", "Heated floor installation available", `Serving ${cityName} and surrounding areas`], m) },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: { h2: `Tile Flooring FAQ — ${cityName}`, items: [
      { q: `How much does tile flooring cost in ${cityName}?`, a: `Tile installation in ${cityName}: ceramic $5–$12/sq ft; porcelain $7–$16/sq ft; natural stone $10–$25/sq ft installed. A licensed contractor gives you an exact quote for your specific tile.` },
      { q: `How long does tile installation take in ${cityName}?`, a: `Tile installation: 2–4 days for most rooms, plus 24–48 hours grout cure time before foot traffic. Large rooms or complex patterns take longer.` },
      { q: `What is the difference between ceramic and porcelain tile?`, a: `Porcelain is denser, harder, and less porous than ceramic — better for high-traffic and outdoor areas. Ceramic is less expensive and easier to cut — fine for most residential applications.` },
      { q: `Can I install tile over existing tile in ${cityName}?`, a: `Sometimes, if the existing tile is solidly bonded and the height difference is acceptable. A licensed contractor assesses whether the existing tile can support a new layer.` },
    ]},
    closing: { h2: `Get Your Free Tile Flooring Quote in ${cityName}`, text: `No forms. No waiting. No obligation. A licensed tile contractor in ${cityName} gives you a complete installation quote.`, cta: `Call for Your Tile Flooring Quote in ${cityName}`, sub: `Call ${phone} · Available 7 days a week` },
    internalLinks: { otherServicesLabel: `Other flooring services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 5. Carpet Installation ──────────────────────────────────────────────────
export function getCarpetInstallationQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: { title: `Carpet Installation in ${cityName}, ${stateAbbr} | Free Quote | Licensed Contractors`, description: `Free carpet installation quote in ${cityName}, ${stateName}. Padding, tack strips & furniture moving included. Same-day or next-day installation available. No obligation.` },
    hero: { h1: `Carpet Installation in ${cityName}, ${stateName} — Free Quote`, sub: `Licensed ${cityName} carpet installers. Padding and tack strips included. Furniture moving available. Same-day or next-day installation in many cases.`, trustBullets: trust(stateAbbr, cityName, m?.county), cta: "Get Your Free Carpet Quote — Call Now" },
    intro: { h2: `Carpet Installation in ${cityName} — Complete Price`, paragraphs: [`Carpet installation in ${cityName} includes carpet material, padding, tack strips, and installation labor — giving you the true installed cost per square foot.`, `Licensed carpet installers in ${cityName} offer same-day or next-day installation in many cases — the fastest flooring installation option available.`], cta: `Call for a Carpet Installation Quote in ${cityName}` },
    costEstimator: { h2: `Carpet Installation Cost — ${cityName}`, intro: `Carpet installation in ${cityName}: builder grade $3–$5/sq ft installed; mid-grade residential $4–$7/sq ft; premium (thick pile, stain-resistant) $6–$10/sq ft. Bedroom (200 sq ft): $600–$2,000 installed. Whole home (2,000 sq ft): $6,000–$20,000 installed. Padding quality significantly affects feel and durability.`, ctaBelow: `Get Your Exact Carpet Quote in ${cityName}` },
    mainService: {
      h2: `Carpet Installation in ${cityName}, ${stateAbbr}`,
      description: `Carpet installation in ${cityName} includes: tack strip installation around the perimeter, padding installation (the single most important factor in carpet feel and longevity), carpet seaming for large rooms, stretching to eliminate wrinkles and waves, trimming at edges and transitions, and furniture moving as needed. Padding quality matters as much as carpet quality — a cheap carpet over quality padding feels better and lasts longer than premium carpet over thin padding. A licensed ${cityName} carpet installer helps you choose the right carpet and padding combination for your usage and budget.`,
      localParagraphs: [],
      cost: `Carpet installation in ${cityName}: $3 – $10/sq ft installed`,
      whatAffects: ["Carpet fiber type — nylon, polyester, or wool", "Pile height and density", "Padding thickness and density", "Number of rooms and seam requirements"],
      cta: `Get a Carpet Installation Quote in ${cityName} — Call Now`,
    },
    whyCall: { h2: `Why Carpet Is Still Popular in ${cityName} Bedrooms`, paragraphs: [`Carpet is the warmest and quietest flooring underfoot — important for bedrooms and living areas. On cold ${cityName} mornings, carpet is far more comfortable than hard flooring.`, `Carpet is the most affordable flooring option per square foot. For bedrooms and secondary rooms where moisture is not a concern, carpet provides the best value.`, `Same-day or next-day installation. Licensed carpet installers can often complete a whole-home carpet installation in one day — faster than any other flooring type.`] },
    localSignals: { h2: `Carpet Installation Service Areas Near ${cityName}`, intro: `Licensed carpet installers in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`, bullets: sigs(stateName, cityName, [`Premium padding options available`, "Furniture moving included", "Same-day installation available", `Serving ${cityName} and surrounding areas`], m) },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: { h2: `Carpet Installation FAQ — ${cityName}`, items: [
      { q: `How much does carpet installation cost in ${cityName}?`, a: `Carpet installation in ${cityName}: $3–$10/sq ft installed including padding. A licensed installer gives you an exact quote for your specific carpet choice and space.` },
      { q: `How long does carpet installation take in ${cityName}?`, a: `Most bedroom or whole-home carpet installations take 1 day. Large homes or complex layouts may take 2 days.` },
      { q: `What carpet padding should I choose in ${cityName}?`, a: `6–8 lb rebond padding at 7/16"–1/2" thickness is the residential standard. Thicker, denser padding provides better cushion and extends carpet life by 20–30%.` },
      { q: `Can carpet be installed over hardwood floors in ${cityName}?`, a: `Yes. Tack strips are nailed around the perimeter and padding and carpet installed over the hardwood — which can be uncovered later if desired.` },
    ]},
    closing: { h2: `Get Your Free Carpet Installation Quote in ${cityName}`, text: `No forms. No waiting. No obligation. A licensed carpet installer in ${cityName} gives you a complete quote with same-day availability options.`, cta: `Call for Your Carpet Installation Quote in ${cityName}`, sub: `Call ${phone} · Available 7 days a week` },
    internalLinks: { otherServicesLabel: `Other flooring services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 6. Vinyl Flooring ───────────────────────────────────────────────────────
export function getVinylFlooringQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: { title: `Vinyl Flooring in ${cityName}, ${stateAbbr} | LVP & Sheet Vinyl | Free Quote`, description: `Free vinyl flooring quote in ${cityName}, ${stateName}. Luxury vinyl plank (LVP) & sheet vinyl. 100% waterproof, pet-friendly. Licensed contractors. No obligation.` },
    hero: { h1: `Vinyl Flooring in ${cityName}, ${stateName} — Free Quote`, sub: `Luxury vinyl plank (LVP) and sheet vinyl installation. 100% waterproof, pet-friendly, scratch-resistant. Licensed ${cityName} flooring contractors.`, trustBullets: trust(stateAbbr, cityName, m?.county), cta: "Get Your Free Vinyl Flooring Quote — Call Now" },
    intro: { h2: `Vinyl Flooring Installation in ${cityName} — LVP & Sheet Vinyl`, paragraphs: [`Luxury vinyl plank (LVP) is the fastest-growing flooring category in the US — 100% waterproof, extremely durable, realistic wood appearance, and installed at $3–$10/sq ft.`, `A free vinyl flooring quote in ${cityName} covers LVP, luxury vinyl tile (LVT), and sheet vinyl options with complete installed pricing.`], cta: `Call for a Vinyl Flooring Quote in ${cityName}` },
    costEstimator: { h2: `Vinyl Flooring Cost — ${cityName}`, intro: `Vinyl flooring in ${cityName}: sheet vinyl $2–$5/sq ft installed; standard LVP (4–6mm) $3–$6/sq ft; premium LVP (8mm+) $5–$10/sq ft; luxury LVP (12mm SPC) $6–$12/sq ft. For a 1,000 sq ft home: $3,000–$10,000 installed.`, ctaBelow: `Get Your Exact Vinyl Flooring Quote in ${cityName}` },
    mainService: {
      h2: `Vinyl Flooring in ${cityName}, ${stateAbbr} — LVP Options`,
      description: `Luxury vinyl plank (LVP) in ${cityName} comes in two main core types: WPC (Wood Plastic Composite) — softer underfoot, better sound dampening; and SPC (Stone Plastic Composite) — harder, more rigid, better for uneven subfloors. Wear layer thickness determines durability: 6 mil for light residential; 12 mil for active family homes; 20+ mil for commercial or heavy use. LVP installs as a floating floor over most existing hard surfaces without removal — often the lowest-cost installation option. A licensed ${cityName} flooring contractor recommends the right thickness, core type, and wear layer for your usage.`,
      localParagraphs: [],
      cost: `Vinyl flooring in ${cityName}: $2 – $12/sq ft installed`,
      whatAffects: ["Core type — WPC vs. SPC", "Wear layer thickness", "Plank width and length", "Whether existing flooring needs removal"],
      cta: `Get a Vinyl Flooring Quote in ${cityName} — Call Now`,
    },
    whyCall: { h2: `Why LVP Is the #1 Flooring Choice in ${cityName}`, paragraphs: [`100% waterproof. LVP can handle flooding, pet accidents, spills, and wet mopping — making it ideal for kitchens, bathrooms, basements, and anywhere moisture is a concern.`, `LVP installs over most existing floors. In many cases, LVP can be floated over existing tile or vinyl without removal — saving $1–$3/sq ft in demo costs.`, `The realistic appearance has become indistinguishable from hardwood for most homeowners. Premium LVP with embossed texture rivals the look of real wood at half the cost.`] },
    localSignals: { h2: `Vinyl Flooring Service Areas Near ${cityName}`, intro: `Licensed vinyl flooring contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`, bullets: sigs(stateName, cityName, [`LVP, LVT, and sheet vinyl options`, "WPC and SPC core options available", "Installation over existing floors in many cases", `Serving ${cityName} and surrounding areas`], m) },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: { h2: `Vinyl Flooring FAQ — ${cityName}`, items: [
      { q: `How much does LVP flooring cost in ${cityName}?`, a: `LVP in ${cityName}: $3–$12/sq ft installed depending on thickness and quality. Sheet vinyl: $2–$5/sq ft. A licensed contractor gives you an exact quote.` },
      { q: `What is the difference between WPC and SPC vinyl?`, a: `WPC (Wood Plastic Composite) is softer and warmer underfoot. SPC (Stone Plastic Composite) is harder and more rigid — better for uneven subfloors and commercial use.` },
      { q: `Can LVP be installed in basements in ${cityName}?`, a: `Yes. LVP is 100% waterproof and ideal for below-grade installations where moisture is a concern. It is the #1 choice for basements.` },
      { q: `Can LVP be installed over existing tile or vinyl in ${cityName}?`, a: `In most cases, yes — if the existing floor is flat and solidly bonded. A licensed contractor assesses whether removal is needed.` },
    ]},
    closing: { h2: `Get Your Free Vinyl Flooring Quote in ${cityName}`, text: `No forms. No waiting. No obligation. A licensed contractor in ${cityName} recommends the right LVP option and gives you a complete installed quote.`, cta: `Call for Your Vinyl Flooring Quote in ${cityName}`, sub: `Call ${phone} · Available 7 days a week` },
    internalLinks: { otherServicesLabel: `Other flooring services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 7. Floor Refinishing ────────────────────────────────────────────────────
export function getFloorRefinishingQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: { title: `Floor Refinishing in ${cityName}, ${stateAbbr} | Hardwood Sanding & Staining | Free Quote`, description: `Free hardwood floor refinishing quote in ${cityName}, ${stateName}. Sanding, staining & polyurethane. Restore original hardwood for $3–$8/sq ft vs. $8–$20 replacement. No obligation.` },
    hero: { h1: `Hardwood Floor Refinishing in ${cityName}, ${stateName} — Free Quote`, sub: `Restore original hardwood floors to like-new condition. Sanding, staining, and polyurethane finishing at $3–$8/sq ft — fraction of replacement cost.`, trustBullets: trust(stateAbbr, cityName, m?.county), cta: "Get Your Free Refinishing Quote — Call Now" },
    intro: { h2: `Hardwood Floor Refinishing in ${cityName} — Restore vs. Replace`, paragraphs: [`Hardwood floor refinishing in ${cityName} — sanding, staining, and polyurethane coating — costs $3–$8/sq ft vs. $8–$20/sq ft for new hardwood installation.`, `Most hardwood floors can be refinished 5–7 times over their lifetime. Refinishing restores original hardwood to better-than-new condition in 3–5 days.`], cta: `Call for a Floor Refinishing Quote in ${cityName}` },
    costEstimator: { h2: `Floor Refinishing Cost — ${cityName}`, intro: `Hardwood refinishing in ${cityName}: screen and recoat (light scuff + new topcoat) $1.50–$3/sq ft; full sand and refinish $3–$6/sq ft; sand, stain, and finish $4–$8/sq ft. For a 1,000 sq ft home: $3,000–$8,000. Compare to $8,000–$20,000 for new hardwood installation.`, ctaBelow: `Get Your Exact Refinishing Quote in ${cityName}` },
    mainService: {
      h2: `Hardwood Floor Refinishing in ${cityName}, ${stateAbbr}`,
      description: `Hardwood floor refinishing in ${cityName} includes: furniture removal (or staging), sanding with 3–4 grit progressions (rough to fine), edging and hand-scraping in corners, optional stain application (color change available), polyurethane or oil finish application (2–3 coats), and final buffing. The result is a factory-fresh appearance. Dustless sanding systems minimize cleanup and allow faster re-occupancy. Most ${cityName} homeowners can return to their floors in 24–48 hours after the final coat. A licensed refinishing contractor assesses wood thickness (must have 3/32" above tongue) to confirm refinishing is viable.`,
      localParagraphs: [m?.medianYearBuilt ? `${cityName} homes built around ${m.medianYearBuilt} likely have original hardwood floors that may be dull, scratched, or covered with carpet — excellent candidates for refinishing.` : ""].filter(Boolean) as string[],
      cost: `Floor refinishing in ${cityName}: $3 – $8/sq ft`,
      whatAffects: ["Whether screen-and-recoat or full sand is needed", "Stain color change — adds cost", "Finish type — polyurethane vs. oil-based", "Floor condition and number of previous refinishes"],
      cta: `Get a Floor Refinishing Quote in ${cityName} — Call Now`,
    },
    whyCall: { h2: `Why Refinishing is Better Than Replacing in ${cityName}`, paragraphs: [`Refinishing costs 60–80% less than replacement. For a 1,000 sq ft home, refinishing at $4,000–$8,000 vs. replacement at $10,000–$20,000 — the savings are significant.`, `Change the stain color completely. Refinishing allows changing from orange-toned 1990s stains to modern gray or espresso tones — completely transforming the look of original hardwood.`, `Original hardwood has more character. Old-growth hardwood installed before 1970 has tighter grain and higher density than modern hardwood — worth preserving rather than replacing.`] },
    localSignals: { h2: `Floor Refinishing Service Areas Near ${cityName}`, intro: `Licensed hardwood floor refinishing contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`, bullets: sigs(stateName, cityName, [`Dustless sanding systems available`, "Stain color change available", "Oil and polyurethane finish options", `Serving ${cityName} and surrounding areas`], m) },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: { h2: `Floor Refinishing FAQ — ${cityName}`, items: [
      { q: `How much does hardwood floor refinishing cost in ${cityName}?`, a: `Full sand and refinish in ${cityName}: $3–$8/sq ft. Screen and recoat (lighter refresh): $1.50–$3/sq ft. A licensed contractor assesses which is appropriate.` },
      { q: `How long does floor refinishing take in ${cityName}?`, a: `Full refinishing takes 3–5 days including dry time. You can walk on floors 24 hours after final coat; furniture returns after 48–72 hours.` },
      { q: `Can I change the stain color when refinishing in ${cityName}?`, a: `Yes. Refinishing allows any stain color — lighter, darker, gray, or natural. The contractor shows you samples on your specific wood before committing.` },
      { q: `How many times can hardwood floors be refinished?`, a: `Solid hardwood (3/4") can typically be refinished 5–7 times. A licensed contractor measures remaining wood thickness to confirm it is viable.` },
    ]},
    closing: { h2: `Get Your Free Floor Refinishing Quote in ${cityName}`, text: `No forms. No waiting. No obligation. A licensed refinishing contractor in ${cityName} assesses your floors and gives you a complete quote.`, cta: `Call for Your Floor Refinishing Quote in ${cityName}`, sub: `Call ${phone} · Available 7 days a week` },
    internalLinks: { otherServicesLabel: `Other flooring services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── 8. Floor Removal ────────────────────────────────────────────────────────
export function getFloorRemovalQuoteCityPageContent(
  cityName: string, stateName: string, stateAbbr: string,
  nearby1: string, nearby2: string, nearby3: string,
  phone = PHONE, m?: CityMetadata | null
): ServiceCityContent {
  return {
    meta: { title: `Floor Removal in ${cityName}, ${stateAbbr} | Carpet, Tile & Hardwood Demo | Free Quote`, description: `Free floor removal quote in ${cityName}, ${stateName}. Carpet, tile, hardwood & vinyl removal and disposal. Often included in new installation quotes. Licensed contractors.` },
    hero: { h1: `Floor Removal in ${cityName}, ${stateName} — Free Quote`, sub: `Professional carpet, tile, hardwood, and vinyl floor removal and disposal. Licensed ${cityName} flooring contractors. Often bundled with new installation.`, trustBullets: trust(stateAbbr, cityName, m?.county), cta: "Get Your Free Floor Removal Quote — Call Now" },
    intro: { h2: `Floor Removal in ${cityName} — Demo and Disposal`, paragraphs: [`Professional floor removal in ${cityName} includes demolition, haul-away, and disposal of carpet, tile, hardwood, laminate, or vinyl — often bundled as part of a new flooring installation quote.`, `A free floor removal quote in ${cityName} confirms whether removal is included in your installation quote or priced separately.`], cta: `Call for a Floor Removal Quote in ${cityName}` },
    costEstimator: { h2: `Floor Removal Cost — ${cityName}`, intro: `Floor removal in ${cityName}: carpet and pad $1–$2/sq ft; laminate/LVP $1–$2/sq ft; hardwood $2–$4/sq ft; tile (with thinset removal) $3–$6/sq ft. Many contractors include removal in the installation quote — confirm when requesting your quote.`, ctaBelow: `Get Your Floor Removal Quote in ${cityName}` },
    mainService: {
      h2: `Floor Removal in ${cityName}, ${stateAbbr}`,
      description: `Floor removal in ${cityName} varies significantly by material type. Carpet: fastest — cut into strips, roll up, remove tack strips. Laminate/LVP: pull up planks, remove underlayment. Hardwood: pry up boards (often reusable if in good condition). Tile: most labor-intensive — tile must be broken up, adhesive thinset removed from subfloor (often by grinding), backer board removed. Tile removal generates significant debris. A licensed ${cityName} flooring contractor prices removal by material type and includes disposal costs in the quote.`,
      localParagraphs: [],
      cost: `Floor removal in ${cityName}: $1 – $6/sq ft (varies by material)`,
      whatAffects: ["Material type — carpet vs. tile vs. hardwood", "Whether thinset removal is required (tile)", "Disposal fees for heavy materials", "Whether included in new installation quote"],
      cta: `Get a Floor Removal Quote in ${cityName} — Call Now`,
    },
    whyCall: { h2: `When Professional Floor Removal Matters`, paragraphs: [`Tile removal is not DIY-friendly. The grinding required to remove thinset from a concrete slab requires professional equipment and generates fine silica dust — a serious respiratory hazard without proper containment.`, `Old flooring materials may contain asbestos. Vinyl flooring and tile adhesive installed before 1980 may contain asbestos. Professional contractors test and handle these materials safely.`, `Bundling removal with installation saves money. Most flooring contractors offer better pricing when removal and installation are quoted together.`] },
    localSignals: { h2: `Floor Removal Service Areas Near ${cityName}`, intro: `Licensed floor removal contractors in ${cityName} and nearby ${nearby1}, ${nearby2}, and ${nearby3}.`, bullets: sigs(stateName, cityName, [`All flooring types — carpet, tile, hardwood, LVP`, "Disposal included in removal quote", "Asbestos testing available for pre-1980 materials", `Serving ${cityName} and surrounding areas`], m) },
    eeat: { title: "Why trust this guide", bullets: EEAT },
    faq: { h2: `Floor Removal FAQ — ${cityName}`, items: [
      { q: `How much does floor removal cost in ${cityName}?`, a: `Floor removal: carpet $1–$2/sq ft; LVP/laminate $1–$2/sq ft; hardwood $2–$4/sq ft; tile $3–$6/sq ft. Often included in new installation quotes.` },
      { q: `Is floor removal included in installation quotes in ${cityName}?`, a: `It varies. Always confirm whether removal is included. Most contractors offer bundled pricing that is more affordable than separate removal and installation quotes.` },
      { q: `Can old vinyl flooring contain asbestos in ${cityName}?`, a: `Vinyl flooring and adhesive installed before 1980 may contain asbestos. A professional contractor tests and handles asbestos-containing materials safely.` },
      { q: `Can I remove carpet myself before the installer arrives in ${cityName}?`, a: `Carpet is the easiest DIY removal — cut into strips and roll up. Remove tack strips carefully. This can save $1–$2/sq ft on installation cost.` },
    ]},
    closing: { h2: `Get Your Free Floor Removal Quote in ${cityName}`, text: `No forms. No waiting. No obligation. A licensed contractor in ${cityName} quotes complete floor removal and disposal.`, cta: `Call for Your Floor Removal Quote in ${cityName}`, sub: `Call ${phone} · Available 7 days a week` },
    internalLinks: { otherServicesLabel: `Other flooring services in ${cityName}:`, nearbyLabel: "Nearby cities:", backLabel: `← All cities in ${stateName}` },
  };
}

// ── Dispatcher ─────────────────────────────────────────────────────────────
export function getServiceCityPageContent(service: string, params: ServiceContentParams): ServiceCityContent {
  const { cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone, cityMetadata } = params;
  const p = [cityName, stateName, stateAbbr, nearby1, nearby2, nearby3, phone ?? PHONE, cityMetadata] as const;
  switch (service) {
    case "flooring-quote":            return getFlooringQuoteCityPageContent(...p);
    case "hardwood-flooring-quote":   return getHardwoodFlooringQuoteCityPageContent(...p);
    case "laminate-flooring-quote":   return getLaminateFlooringQuoteCityPageContent(...p);
    case "tile-flooring-quote":       return getTileFlooringQuoteCityPageContent(...p);
    case "carpet-installation-quote": return getCarpetInstallationQuoteCityPageContent(...p);
    case "vinyl-flooring-quote":      return getVinylFlooringQuoteCityPageContent(...p);
    case "floor-refinishing-quote":   return getFloorRefinishingQuoteCityPageContent(...p);
    case "floor-removal-quote":       return getFloorRemovalQuoteCityPageContent(...p);
    default:                          return getFlooringQuoteCityPageContent(...p);
  }
}
