export type { CalculatorServiceConfig } from "./calculatorRangesPestControl";
export type {
  CalculatorOption,
  SingleSelectConfig,
  MultiSelectConfig,
} from "./calculatorRangesPestControl";
export { getRangeForSingle, getRangeForMulti } from "./calculatorRangesPestControl";
export { CALCULATOR_CONFIG as PEST_CONTROL_CALCULATOR } from "./calculatorRangesPestControl";
export { CALCULATOR_CONFIG as PLUMBING_CALCULATOR } from "./calculatorRangesPlumbing";

import type { CalculatorServiceConfig } from "./calculatorRangesPestControl";
import { CALCULATOR_CONFIG as PEST_CONTROL_CALCULATOR } from "./calculatorRangesPestControl";
import { CALCULATOR_CONFIG as PLUMBING_CALCULATOR } from "./calculatorRangesPlumbing";
import { CALCULATOR_CONFIG as ELECTRICAL_CALCULATOR } from "./calculatorRangesElectrical";
import { CALCULATOR_CONFIG as TREE_REMOVAL_CALCULATOR } from "./calculatorRangesTreeRemoval";
import { CALCULATOR_CONFIG as HVAC_CALCULATOR } from "./calculatorRangesHvac";
import { CALCULATOR_CONFIG as WATER_DAMAGE_CALCULATOR } from "./calculatorRangesWaterDamage";
import { CALCULATOR_CONFIG as MOLD_REMEDIATION_CALCULATOR } from "./calculatorRangesMoldRemediation";
import { CALCULATOR_CONFIG as SOLAR_CALCULATOR } from "./calculatorRangesSolar";
import { CALCULATOR_CONFIG as FLOORING_CALCULATOR } from "./calculatorRangesFlooring";

const CALCULATOR_BY_NICHE: Record<string, Record<string, CalculatorServiceConfig>> = {
  "gutter": PEST_CONTROL_CALCULATOR,
  "plumbing": PLUMBING_CALCULATOR,
  "electrical": ELECTRICAL_CALCULATOR,
  "tree-removal": TREE_REMOVAL_CALCULATOR,
  "hvac": HVAC_CALCULATOR,
  "water-damage": WATER_DAMAGE_CALCULATOR,
  "mold-remediation": MOLD_REMEDIATION_CALCULATOR,
  "solar": SOLAR_CALCULATOR,
  "flooring": FLOORING_CALCULATOR,
};

export function getCalculatorConfig(nicheSlug: string): Record<string, CalculatorServiceConfig> {
  return CALCULATOR_BY_NICHE[nicheSlug] ?? PEST_CONTROL_CALCULATOR;
}

// Compatibilité
export const CALCULATOR_CONFIG = PEST_CONTROL_CALCULATOR;
