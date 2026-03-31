import type { CalculatorServiceConfig } from './calculatorRangesPestControl';

export const CALCULATOR_CONFIG: Record<string, CalculatorServiceConfig> = {
  'water-damage-restoration-quote': {
    kind: 'single',
    label: 'Damage extent',
    options: [
      { label: 'Minor (one room)',             value: 'minor',    min: 1500, max: 4000  },
      { label: 'Moderate (multiple rooms)',    value: 'moderate', min: 4000, max: 10000 },
      { label: 'Major (whole floor/flooding)', value: 'major',    min: 8000, max: 30000 },
    ],
  },
  'water-extraction-quote': {
    kind: 'single',
    label: 'Area affected',
    options: [
      { label: 'One room',           value: 'one',   min: 500,  max: 1500 },
      { label: 'Several rooms',      value: 'multi', min: 1500, max: 4000 },
      { label: 'Whole floor',        value: 'floor', min: 3000, max: 8000 },
    ],
  },
  'flood-cleanup-quote': {
    kind: 'single',
    label: 'Flood extent',
    options: [
      { label: 'Minor flooding',     value: 'minor',    min: 2000,  max: 6000  },
      { label: 'Moderate flooding',  value: 'moderate', min: 6000,  max: 15000 },
      { label: 'Major flooding',     value: 'major',    min: 12000, max: 40000 },
    ],
  },
  'basement-flooding-quote': {
    kind: 'single',
    label: 'Basement type and flooding',
    options: [
      { label: 'Unfinished basement, inches of water',  value: 'unfin-minor', min: 1000, max: 3000  },
      { label: 'Unfinished, significant flooding',      value: 'unfin-major', min: 2000, max: 6000  },
      { label: 'Finished basement flooding',            value: 'finished',    min: 5000, max: 20000 },
    ],
  },
  'mold-inspection-quote': {
    kind: 'single',
    label: 'Inspection type',
    options: [
      { label: 'Free visual inspection',         value: 'free',  min: 0,   max: 0   },
      { label: 'Air quality lab testing',        value: 'lab',   min: 200, max: 400 },
      { label: 'Full inspection + testing',      value: 'full',  min: 300, max: 600 },
    ],
  },
  'structural-drying-quote': {
    kind: 'single',
    label: 'Area to dry',
    options: [
      { label: 'One room',       value: 'one',   min: 500,  max: 1500 },
      { label: 'Several rooms',  value: 'multi', min: 1500, max: 4000 },
      { label: 'Large scale',    value: 'large', min: 3000, max: 10000 },
    ],
  },
  'sewage-cleanup-quote': {
    kind: 'single',
    label: 'Sewage backup extent',
    options: [
      { label: 'Minor (floor drain, toilet)',    value: 'minor',    min: 2000,  max: 5000  },
      { label: 'Moderate (bathroom/basement)',   value: 'moderate', min: 4000,  max: 12000 },
      { label: 'Major sewage flooding',          value: 'major',    min: 8000,  max: 25000 },
    ],
  },
  'emergency-water-damage': {
    kind: 'single',
    label: 'Emergency source',
    options: [
      { label: 'Burst pipe or appliance leak',   value: 'pipe',    min: 1500,  max: 8000  },
      { label: 'Storm flooding',                 value: 'storm',   min: 3000,  max: 20000 },
      { label: 'Sewage backup emergency',        value: 'sewage',  min: 2000,  max: 15000 },
      { label: 'Roof leak water damage',         value: 'roof',    min: 1000,  max: 8000  },
    ],
  },
};
