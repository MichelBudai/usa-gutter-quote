import stateMetadataJson from "../data/state_metadata.json";
interface StateMetadata { cityCount: number; pctPre1980: number | null; avgMedianYear: number | null; avgHomeownership: number | null; topCities: { name: string; population: number }[]; }
const stateMetadataMap = stateMetadataJson as Record<string, StateMetadata>;
export interface StatePageContent {
  metaTitle: string; metaDescription: string; heroTitle: string; heroSub: string; trustBullets: string[];
  intro: { h2: string; paragraphs: string[]; ctaText: string };
  why: { h2: string; points: { h3: string; text: string }[] };
  services: { h2: string; intro: string; items: { slug: any; title: string; description: string; costRange: string }[] };
  cityIntro: { h2: string; paragraph: string; ctaText: string };
  faq: { h2: string; items: { q: string; a: string }[] };
  closing: { h2: string; text: string; ctaText: string };
  internalLinks: { otherStatesLabel: string; viewAllStatesLabel: string; otherServicesLabel: string };
}
const SVC: Record<string, { description: string; costRange: string }> = {
  "flooring-quote":            { description: "Complete flooring quotes for any material — hardwood, laminate, tile, vinyl, or carpet. Licensed flooring contractors measure your space and give you an exact installed price.", costRange: "$2 – $20/sq ft installed" },
  "hardwood-flooring-quote":   { description: "Solid and engineered hardwood flooring installation quotes. Material, underlayment, installation, and finishing included. Adds significant property value.", costRange: "$6 – $22/sq ft installed" },
  "laminate-flooring-quote":   { description: "Laminate flooring installation quotes. Durable, waterproof options available. Looks like hardwood at a fraction of the cost. Quick installation.", costRange: "$3 – $10/sq ft installed" },
  "tile-flooring-quote":       { description: "Tile flooring installation for kitchens, bathrooms, and entryways. Ceramic, porcelain, and natural stone options. Grout and setting materials included.", costRange: "$5 – $20/sq ft installed" },
  "carpet-installation-quote": { description: "Carpet installation quotes — bedroom, whole-home, and commercial. Padding, tack strips, and furniture moving included. Same-day or next-day installation available.", costRange: "$3 – $10/sq ft installed" },
  "vinyl-flooring-quote":      { description: "Luxury vinyl plank (LVP) and sheet vinyl installation. 100% waterproof, pet-friendly, and scratch-resistant. Ideal for kitchens, bathrooms, and basements.", costRange: "$3 – $10/sq ft installed" },
  "floor-refinishing-quote":   { description: "Hardwood floor refinishing — sanding, staining, and polyurethane finishing. Restores original hardwood to like-new condition at a fraction of replacement cost.", costRange: "$3 – $8/sq ft" },
  "floor-removal-quote":       { description: "Old flooring removal and disposal quotes. Carpet, tile, hardwood, and vinyl removal. Often included in installation quotes or priced separately.", costRange: "$1 – $4/sq ft" },
};
const LABELS: Record<string, string> = {
  "flooring-quote": "Flooring Quote", "hardwood-flooring-quote": "Hardwood Flooring Quote",
  "laminate-flooring-quote": "Laminate Flooring Quote", "tile-flooring-quote": "Tile Flooring Quote",
  "carpet-installation-quote": "Carpet Installation Quote", "vinyl-flooring-quote": "Vinyl Flooring Quote",
  "floor-refinishing-quote": "Floor Refinishing Quote", "floor-removal-quote": "Floor Removal Quote",
};
const STATE_CTX: Record<string, { popular: string; note: string }> = {
  alabama: { popular: "hardwood and luxury vinyl plank", note: "Humid climate — moisture-resistant flooring recommended for below-grade installations." },
  alaska: { popular: "hardwood and carpet", note: "Cold climate — carpet popular for warmth. Moisture barriers important for slab installations." },
  arizona: { popular: "tile and luxury vinyl plank", note: "Dry hot climate — tile ideal for cooling effect. Hardwood contracts in low humidity." },
  arkansas: { popular: "hardwood and carpet", note: "Humid climate — moisture-resistant options recommended for basements." },
  california: { popular: "luxury vinyl plank and hardwood", note: "Earthquake country — floating floors recommended. Coastal areas need moisture resistance." },
  colorado: { popular: "hardwood and luxury vinyl plank", note: "Dry climate causes hardwood expansion and contraction — acclimation critical." },
  connecticut: { popular: "hardwood and tile", note: "Cold winters — radiant heat compatible flooring increasingly popular." },
  delaware: { popular: "hardwood and luxury vinyl plank", note: "Coastal humidity — moisture-resistant options recommended." },
  florida: { popular: "tile and luxury vinyl plank", note: "High humidity and flooding risk — tile and LVP strongly recommended over hardwood in most areas." },
  georgia: { popular: "hardwood and luxury vinyl plank", note: "Humid climate — moisture-resistant options recommended. Hardwood popular in historic homes." },
  hawaii: { popular: "tile and luxury vinyl plank", note: "Tropical humidity — tile and LVP strongly recommended. Hardwood warps in coastal areas." },
  idaho: { popular: "hardwood and luxury vinyl plank", note: "Dry climate — hardwood popular but requires proper acclimation." },
  illinois: { popular: "hardwood and luxury vinyl plank", note: "Cold winters and humid summers — moisture barriers important." },
  indiana: { popular: "hardwood and carpet", note: "Cold winters — carpet popular in bedrooms. LVP growing rapidly." },
  iowa: { popular: "hardwood and carpet", note: "Cold climate — carpet and hardwood most popular. LVP growing." },
  kansas: { popular: "hardwood and luxury vinyl plank", note: "Tornado risk — quick installation options popular. LVP widely installed." },
  kentucky: { popular: "hardwood and carpet", note: "Hardwood historically dominant. LVP rapidly replacing carpet in main areas." },
  louisiana: { popular: "tile and luxury vinyl plank", note: "Flood risk and high humidity — tile and LVP strongly recommended. Hardwood not recommended in flood zones." },
  maine: { popular: "hardwood and carpet", note: "Cold climate — carpet popular for warmth. Hardwood in historic homes." },
  maryland: { popular: "hardwood and luxury vinyl plank", note: "Mid-Atlantic humidity — moisture barriers important. LVP growing rapidly." },
  massachusetts: { popular: "hardwood and tile", note: "Historic homes with original hardwood — refinishing often more cost-effective than replacement." },
  michigan: { popular: "hardwood and luxury vinyl plank", note: "Cold winters — carpet popular in bedrooms. LVP dominant in main areas." },
  minnesota: { popular: "hardwood and carpet", note: "Cold climate — carpet popular for warmth. Hardwood requires careful acclimation." },
  mississippi: { popular: "tile and luxury vinyl plank", note: "High humidity and flood risk — tile and LVP strongly recommended." },
  missouri: { popular: "hardwood and luxury vinyl plank", note: "Humid summers — moisture-resistant options recommended for basements." },
  montana: { popular: "hardwood and carpet", note: "Cold climate — carpet popular. Dry air affects hardwood — acclimation critical." },
  nebraska: { popular: "hardwood and luxury vinyl plank", note: "Extreme temperature swings — floating floors handle expansion better." },
  nevada: { popular: "tile and luxury vinyl plank", note: "Dry desert climate — tile excellent. Hardwood can crack without humidity control." },
  "new-hampshire": { popular: "hardwood and carpet", note: "Cold climate — carpet popular for warmth. Historic homes often have original hardwood." },
  "new-jersey": { popular: "hardwood and luxury vinyl plank", note: "Coastal humidity — moisture-resistant options popular. LVP dominant in new construction." },
  "new-mexico": { popular: "tile and luxury vinyl plank", note: "Dry climate — tile ideal. Hardwood requires humidity control." },
  "new-york": { popular: "hardwood and luxury vinyl plank", note: "Historic brownstones and co-ops with original hardwood — refinishing very popular." },
  "north-carolina": { popular: "hardwood and luxury vinyl plank", note: "Humid climate — moisture-resistant options recommended. LVP rapidly growing." },
  "north-dakota": { popular: "carpet and luxury vinyl plank", note: "Cold climate — carpet popular for warmth. LVP growing in main areas." },
  ohio: { popular: "hardwood and luxury vinyl plank", note: "Cold winters and humid summers — moisture barriers important for basements." },
  oklahoma: { popular: "hardwood and luxury vinyl plank", note: "Tornado risk — quick install options popular. LVP dominant in new builds." },
  oregon: { popular: "hardwood and luxury vinyl plank", note: "Rainy climate — moisture-resistant options important for basements and entryways." },
  pennsylvania: { popular: "hardwood and luxury vinyl plank", note: "Historic homes with original hardwood — refinishing popular. LVP growing rapidly." },
  "rhode-island": { popular: "hardwood and tile", note: "Coastal humidity — moisture-resistant options recommended. Historic homes with original hardwood." },
  "south-carolina": { popular: "hardwood and luxury vinyl plank", note: "Humid subtropical — moisture-resistant options strongly recommended." },
  "south-dakota": { popular: "carpet and luxury vinyl plank", note: "Cold climate — carpet popular. LVP growing as a durable option." },
  tennessee: { popular: "hardwood and luxury vinyl plank", note: "Humid climate — moisture-resistant options recommended for basements." },
  texas: { popular: "luxury vinyl plank and tile", note: "Hot humid climate — LVP dominant. Tile excellent for cooling. Hardwood warps in coastal humidity." },
  utah: { popular: "luxury vinyl plank and hardwood", note: "Dry climate — hardwood can crack without humidity control. LVP popular for moisture resistance." },
  vermont: { popular: "hardwood and carpet", note: "Cold climate — carpet popular. Historic homes with original hardwood." },
  virginia: { popular: "hardwood and luxury vinyl plank", note: "Mid-Atlantic humidity — moisture barriers important. LVP rapidly growing." },
  washington: { popular: "luxury vinyl plank and hardwood", note: "Rainy climate — LVP highly recommended for moisture resistance. Hardwood popular in dry east WA." },
  "west-virginia": { popular: "hardwood and carpet", note: "Cold winters — carpet popular. Hardwood in historic homes." },
  wisconsin: { popular: "hardwood and luxury vinyl plank", note: "Cold climate — carpet popular in bedrooms. LVP dominant in main areas." },
  wyoming: { popular: "hardwood and carpet", note: "Cold climate and dry air — hardwood requires careful humidity control." },
};
const DEFAULT_CTX = { popular: "luxury vinyl plank and hardwood", note: "A licensed flooring contractor recommends the best material for your local climate and subfloor conditions." };
export function getStatePageContent(serviceSlug: string, serviceLabel: string, stateName: string, stateAbbr: string, stateSlug: string): StatePageContent {
  const serviceLower = serviceLabel.toLowerCase().replace(/\s*quote\s*$/i, "").trim();
  const stateMeta = stateMetadataMap[stateSlug] ?? null;
  const ctx = STATE_CTX[stateSlug] ?? DEFAULT_CTX;
  const topCityNames = stateMeta?.topCities.slice(0, 3).map((c) => c.name).join(", ") ?? "";
  const slugs = ["flooring-quote","hardwood-flooring-quote","laminate-flooring-quote","tile-flooring-quote","carpet-installation-quote","vinyl-flooring-quote","floor-refinishing-quote","floor-removal-quote"];
  return {
    metaTitle: `${serviceLabel} in ${stateName} | Licensed Flooring Contractors by City | Free Quote`,
    metaDescription: `Get free ${serviceLower} quotes from licensed flooring contractors in ${stateName}. ${ctx.popular} most popular. Compare estimates by city — no obligation. Call now.`,
    heroTitle: `Free ${serviceLabel} in ${stateName} — Licensed Flooring Contractors`,
    heroSub: `Licensed ${stateName} flooring contractors. ${ctx.popular} most popular. Free, no-obligation estimate by city.`,
    trustBullets: [`Licensed & insured ${stateAbbr} flooring contractors`, "Free estimate, no obligation", "Material + installation pricing", `${stateMeta?.cityCount ?? "Hundreds of"} ${stateName} cities covered`],
    intro: {
      h2: `Get a Free ${serviceLabel} from a${/^[AEIOU]/i.test(stateName) ? "n" : ""} ${stateName}-Licensed Flooring Contractor`,
      paragraphs: [
        `Popular flooring in ${stateName}: ${ctx.popular}. ${ctx.note}`,
        ...(stateMeta?.pctPre1980 ? [`${stateMeta.pctPre1980}% of ${stateName} homes have a median build year before 1980 — original hardwood floors are common and often worth refinishing rather than replacing.`] : []),
        `A free quote from a licensed ${stateName} flooring contractor includes material, labor, subfloor prep, and removal of old flooring — so you're comparing complete installed prices.`,
      ],
      ctaText: "Select Your City Below",
    },
    why: {
      h2: `Why ${stateName} Homeowners Get a Flooring Quote First`,
      points: [
        { h3: "Installed Price Includes More Than Material", text: "Material cost is only 40–60% of total flooring cost. Labor, underlayment, subfloor prep, and old floor removal significantly affect the total. A licensed contractor quotes the complete installed price." },
        { h3: `${stateName} Climate Affects Material Choice`, text: `${ctx.note} A licensed ${stateName} contractor recommends the right material for your specific subfloor, location in the home, and local climate conditions.` },
        { h3: "Subfloor Condition Affects Cost", text: "Uneven, damaged, or wet subfloors require preparation before new flooring can be installed — a cost that online calculators and material prices never include. A licensed contractor assesses your subfloor as part of the quote." },
      ],
    },
    services: {
      h2: `Flooring Services Available Across ${stateName}`,
      intro: `Select your ${stateName} city below for a local flooring quote.`,
      items: slugs.map((slug) => { const { description, costRange } = SVC[slug] ?? { description: `Licensed ${stateName} flooring contractors for ${slug}.`, costRange: "Get a free quote" }; return { slug, title: `${LABELS[slug] ?? slug} — ${stateName}`, description, costRange }; }),
    },
    cityIntro: {
      h2: `Find a Flooring Contractor in Your ${stateName} City`,
      paragraph: `Licensed flooring contractors are available for free quotes in ${stateMeta?.cityCount ?? "hundreds of"} ${stateName} cities${topCityNames ? `, including ${topCityNames}` : ""}. Select your city below.`,
      ctaText: "Select Your City",
    },
    faq: {
      h2: `${stateName} Flooring Quote FAQ`,
      items: [
        { q: `How much does flooring cost in ${stateName}?`, a: `Flooring in ${stateName} typically costs $3–$15/sq ft installed depending on material. Carpet: $3–$8; LVP: $3–$10; laminate: $3–$8; hardwood: $6–$20; tile: $5–$18. Select your city for an exact quote.` },
        { q: `What is the most popular flooring in ${stateName}?`, a: `${ctx.popular} are most popular in ${stateName}. ${ctx.note}` },
        { q: `Is hardwood flooring good for ${stateName}'s climate?`, a: `${ctx.note} A licensed ${stateName} contractor recommends the best material for your specific situation.` },
        { q: `Does the flooring quote include removal of old flooring in ${stateName}?`, a: `It depends on the contractor. Some include removal in the installation quote, others price it separately at $1–$4/sq ft. Always confirm what is included in your quote.` },
        { q: `How long does flooring installation take in ${stateName}?`, a: `Most residential flooring jobs take 1–3 days depending on material and area size. Tile takes longer due to setting and grout cure time. Hardwood refinishing takes 3–5 days including dry time.` },
      ],
    },
    closing: { h2: `Find a Licensed Flooring Contractor in Your ${stateName} City`, text: `No forms. No wait. No obligation. Select your city, connect with a licensed ${stateName} flooring contractor, and get an honest complete installed price.`, ctaText: `Select Your ${stateName} City` },
    internalLinks: { otherStatesLabel: "Flooring quotes in other states", viewAllStatesLabel: "View All States", otherServicesLabel: `Other flooring services in ${stateName}` },
  };
}
