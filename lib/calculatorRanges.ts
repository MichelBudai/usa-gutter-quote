export type { CalculatorServiceConfig, CalculatorOption, SingleSelectConfig, MultiSelectConfig } from './calculatorRangesGutter';
export { getRangeForSingle, getRangeForMulti } from './calculatorRangesGutter';
export { CALCULATOR_CONFIG as GUTTER_CALCULATOR } from './calculatorRangesGutter';
import type { CalculatorServiceConfig } from './calculatorRangesGutter';
import { CALCULATOR_CONFIG as GUTTER_CALCULATOR } from './calculatorRangesGutter';

// Always return the niche calculator regardless of slug received
export function getCalculatorConfig(_slugOrService: string): Record<string, CalculatorServiceConfig> {
  return GUTTER_CALCULATOR;
}

export const CALCULATOR_CONFIG = GUTTER_CALCULATOR;
