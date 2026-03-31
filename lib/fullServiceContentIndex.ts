/**
 * Dynamic registry — loads the right content based on current site config.
 */
import type { FullServiceContent } from "./fullServiceContentTypes";
import { getCurrentSiteConfig } from "./getSiteConfig";
import { GUTTER_FULL_CONTENT } from "@/config/sites/gutter-content";
import { PLUMBING_FULL_CONTENT } from "@/config/sites/plumbing-content";
import { ELECTRICAL_FULL_CONTENT } from "@/config/sites/electrical-content";
import { TREE_REMOVAL_FULL_CONTENT } from "@/config/sites/tree-removal-content";
import { HVAC_FULL_CONTENT } from "@/config/sites/hvac-content";
import { WATER_DAMAGE_FULL_CONTENT } from "@/config/sites/water-damage-content";
import { MOLD_REMEDIATION_FULL_CONTENT } from "@/config/sites/mold-remediation-content";
import { SOLAR_FULL_CONTENT } from "@/config/sites/solar-content";
import { FLOORING_FULL_CONTENT } from "@/config/sites/flooring-content";

const CONTENT_BY_NICHE: Record<string, Record<string, FullServiceContent>> = {
  "gutter": GUTTER_FULL_CONTENT,
  "plumbing": PLUMBING_FULL_CONTENT,
  "electrical": ELECTRICAL_FULL_CONTENT,
  "tree-removal": TREE_REMOVAL_FULL_CONTENT,
  "hvac": HVAC_FULL_CONTENT,
  "water-damage": WATER_DAMAGE_FULL_CONTENT,
  "mold-remediation": MOLD_REMEDIATION_FULL_CONTENT,
  "solar": SOLAR_FULL_CONTENT,
  "flooring": FLOORING_FULL_CONTENT,
};

export function getFullServiceContent(): Record<string, FullServiceContent> {
  const config = getCurrentSiteConfig();
  return CONTENT_BY_NICHE[config.slug] ?? GUTTER_FULL_CONTENT;
}

// Compatibilité — sera supprimé progressivement
export const FULL_SERVICE_CONTENT = GUTTER_FULL_CONTENT;
