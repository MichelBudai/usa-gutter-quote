import type { CalculatorServiceConfig } from './calculatorRangesPestControl';
export const CALCULATOR_CONFIG: Record<string, CalculatorServiceConfig> = {
  'flooring-quote': { kind: 'single', label: 'Flooring material', options: [
    { label: 'Carpet',                value: 'carpet',   min: 3, max: 8 },
    { label: 'Laminate',              value: 'laminate', min: 3, max: 8 },
    { label: 'Luxury Vinyl Plank',    value: 'lvp',      min: 3, max: 10 },
    { label: 'Hardwood',              value: 'hardwood', min: 6, max: 20 },
  ]},
  'hardwood-flooring-quote': { kind: 'single', label: 'Hardwood type', options: [
    { label: 'Engineered hardwood',   value: 'engineered', min: 6,  max: 14 },
    { label: 'Solid hardwood (oak)',  value: 'solid-oak',  min: 8,  max: 14 },
    { label: 'Solid hardwood (exotic)', value: 'exotic',   min: 12, max: 22 },
  ]},
  'laminate-flooring-quote': { kind: 'single', label: 'Laminate quality', options: [
    { label: 'Standard (8mm)',        value: 'standard',  min: 3, max: 6 },
    { label: 'Premium (12mm)',        value: 'premium',   min: 5, max: 8 },
    { label: 'Waterproof laminate',   value: 'waterproof',min: 4, max: 8 },
  ]},
  'tile-flooring-quote': { kind: 'single', label: 'Tile type', options: [
    { label: 'Ceramic tile',          value: 'ceramic',   min: 5,  max: 12 },
    { label: 'Porcelain tile',        value: 'porcelain', min: 7,  max: 16 },
    { label: 'Natural stone',         value: 'stone',     min: 10, max: 25 },
  ]},
  'carpet-installation-quote': { kind: 'single', label: 'Carpet grade', options: [
    { label: 'Builder grade',         value: 'builder',  min: 3, max: 5 },
    { label: 'Mid-grade residential', value: 'mid',      min: 4, max: 7 },
    { label: 'Premium stain-resistant', value: 'premium',min: 6, max: 10 },
  ]},
  'vinyl-flooring-quote': { kind: 'single', label: 'Vinyl type', options: [
    { label: 'Sheet vinyl',           value: 'sheet', min: 2, max: 5 },
    { label: 'Standard LVP (4–6mm)', value: 'lvp',   min: 3, max: 6 },
    { label: 'Premium LVP (8mm+)',   value: 'lvp-premium', min: 5, max: 12 },
  ]},
  'floor-refinishing-quote': { kind: 'single', label: 'Refinishing type', options: [
    { label: 'Screen and recoat',     value: 'recoat', min: 2, max: 3 },
    { label: 'Full sand and finish',  value: 'full',   min: 3, max: 6 },
    { label: 'Sand, stain & finish',  value: 'stain',  min: 4, max: 8 },
  ]},
  'floor-removal-quote': { kind: 'single', label: 'Material to remove', options: [
    { label: 'Carpet',                value: 'carpet',   min: 1, max: 2 },
    { label: 'Laminate / LVP',        value: 'laminate', min: 1, max: 2 },
    { label: 'Hardwood',              value: 'hardwood', min: 2, max: 4 },
    { label: 'Tile (with thinset)',   value: 'tile',     min: 3, max: 6 },
  ]},
};
