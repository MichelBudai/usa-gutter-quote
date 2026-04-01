import type { ServiceSlug } from "./data";

export interface CalculatorOption {
  label: string;
  value: string;
  min: number;
  max: number;
}

export interface CalculatorConfig {
  label: string;
  options: CalculatorOption[];
}

/** Single-select: one choice drives the range */
export interface SingleSelectConfig extends CalculatorConfig {
  kind: "single";
}

/** Multi-select: combine two dimensions */
export interface MultiSelectConfig extends CalculatorConfig {
  kind: "multi";
  secondLabel?: string;
  secondOptions?: CalculatorOption[];
  /** key: "option1_value|option2_value", value: [min, max] */
  ranges?: Record<string, [number, number]>;
}

export type CalculatorServiceConfig = SingleSelectConfig | MultiSelectConfig;

const gutterInstallationOptions: CalculatorOption[] = [
  { label: "Single-story home (up to 150 lin ft)", value: "single_small", min: 600, max: 1200 },
  { label: "Single-story home (150–200 lin ft)", value: "single_large", min: 900, max: 1600 },
  { label: "Two-story home (up to 200 lin ft)", value: "two_medium", min: 1200, max: 2000 },
  { label: "Two-story home (200+ lin ft, complex roofline)", value: "two_large", min: 1600, max: 2800 },
];

const gutterCleaningOptions: CalculatorOption[] = [
  { label: "Single-story home", value: "single", min: 100, max: 175 },
  { label: "Two-story home", value: "two", min: 150, max: 250 },
  { label: "Three-story / large home", value: "three", min: 200, max: 350 },
];

const gutterRepairOptions: CalculatorOption[] = [
  { label: "Seam resealing (1–2 sections)", value: "seam_small", min: 75, max: 200 },
  { label: "Seam resealing (multiple sections)", value: "seam_large", min: 150, max: 400 },
  { label: "Hanger replacement (several)", value: "hanger", min: 100, max: 300 },
  { label: "Sagging section realignment", value: "sag", min: 150, max: 400 },
  { label: "End cap or mitre repair", value: "endcap", min: 75, max: 200 },
];

const gutterReplacementSizeOptions: CalculatorOption[] = [
  { label: "Under 150 lin ft", value: "small", min: 0, max: 0 },
  { label: "150 – 200 lin ft", value: "medium", min: 0, max: 0 },
  { label: "200+ lin ft", value: "large", min: 0, max: 0 },
];

const gutterReplacementMaterialOptions: CalculatorOption[] = [
  { label: "Seamless aluminum", value: "aluminum", min: 0, max: 0 },
  { label: "Seamless steel", value: "steel", min: 0, max: 0 },
  { label: "Copper", value: "copper", min: 0, max: 0 },
];

const gutterReplacementRanges: Record<string, [number, number]> = {
  "small|aluminum": [600, 1200],
  "small|steel": [900, 1600],
  "small|copper": [2000, 3500],
  "medium|aluminum": [800, 1600],
  "medium|steel": [1200, 2200],
  "medium|copper": [2800, 4500],
  "large|aluminum": [1200, 2400],
  "large|steel": [1800, 3200],
  "large|copper": [4000, 7000],
};

const gutterGuardOptions: CalculatorOption[] = [
  { label: "Screen or basic mesh (full home)", value: "screen", min: 150, max: 500 },
  { label: "Reverse-curve (full home)", value: "reverse", min: 400, max: 1200 },
  { label: "Micro-mesh (full home)", value: "micromesh", min: 700, max: 2000 },
  { label: "Micro-mesh premium brand (full home)", value: "micromesh_premium", min: 1200, max: 2800 },
];

const downspoutRepairOptions: CalculatorOption[] = [
  { label: "Unclog and flush (per downspout)", value: "unclog", min: 75, max: 150 },
  { label: "Joint or section repair", value: "joint", min: 100, max: 200 },
  { label: "Reroute / extension for proper discharge", value: "reroute", min: 150, max: 400 },
  { label: "Underground drainage extension", value: "underground", min: 300, max: 800 },
];

const seamlessGutterOptions: CalculatorOption[] = [
  { label: "Aluminum — single-story home", value: "alum_single", min: 600, max: 1200 },
  { label: "Aluminum — two-story home", value: "alum_two", min: 1000, max: 2000 },
  { label: "Steel — single-story home", value: "steel_single", min: 900, max: 1800 },
  { label: "Steel — two-story home", value: "steel_two", min: 1400, max: 2800 },
  { label: "Copper — any size", value: "copper", min: 2500, max: 7000 },
];

const gutterInspectionOptions: CalculatorOption[] = [
  { label: "Visual inspection (included with cleaning)", value: "visual", min: 0, max: 0 },
  { label: "Standalone inspection", value: "standalone", min: 0, max: 150 },
  { label: "Full written report", value: "report", min: 75, max: 200 },
];

export const CALCULATOR_CONFIG: Record<string, CalculatorServiceConfig> = {
  "gutter-installation": {
    kind: "single",
    label: "Home size",
    options: gutterInstallationOptions,
  },
  "gutter-cleaning": {
    kind: "single",
    label: "Home size",
    options: gutterCleaningOptions,
  },
  "gutter-repair": {
    kind: "single",
    label: "Type of repair",
    options: gutterRepairOptions,
  },
  "gutter-replacement": {
    kind: "multi",
    label: "Gutter footage",
    options: gutterReplacementSizeOptions,
    secondLabel: "Material",
    secondOptions: gutterReplacementMaterialOptions,
    ranges: gutterReplacementRanges,
  },
  "gutter-guard-installation": {
    kind: "single",
    label: "Guard type",
    options: gutterGuardOptions,
  },
  "downspout-repair": {
    kind: "single",
    label: "Type of repair",
    options: downspoutRepairOptions,
  },
  "seamless-gutter": {
    kind: "single",
    label: "Material and home size",
    options: seamlessGutterOptions,
  },
  "gutter-inspection": {
    kind: "single",
    label: "Inspection type",
    options: gutterInspectionOptions,
  },
};

export function getRangeForSingle(
  config: SingleSelectConfig,
  value: string
): [number, number] | null {
  const opt = config.options.find((o) => o.value === value);
  return opt ? [opt.min, opt.max] : null;
}

export function getRangeForMulti(
  config: MultiSelectConfig,
  value1: string,
  value2: string
): [number, number] | null {
  if (!config.ranges) return null;
  const key = `${value1}|${value2}`;
  return config.ranges[key] ?? null;
}
