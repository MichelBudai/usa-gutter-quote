export type { CalculatorServiceConfig, CalculatorOption, SingleSelectConfig, MultiSelectConfig } from './calculatorRangesGutter';
export { getRangeForSingle, getRangeForMulti } from './calculatorRangesGutter';
export { CALCULATOR_CONFIG as GUTTER_CALCULATOR } from './calculatorRangesGutter';
import type { CalculatorServiceConfig } from './calculatorRangesGutter';
import { CALCULATOR_CONFIG as GUTTER_CALCULATOR } from './calculatorRangesGutter';

const CALCULATOR_BY_NICHE: Record<string, Record<string, CalculatorServiceConfig>> = {
  'gutter': GUTTER_CALCULATOR,
};

export function getCalculatorConfig(nicheSlug: string): Record<string, CalculatorServiceConfig> {
  return CALCULATOR_BY_NICHE[nicheSlug] ?? GUTTER_CALCULATOR;
}

export const CALCULATOR_CONFIG = GUTTER_CALCULATOR;
