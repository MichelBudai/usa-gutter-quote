import type { CalculatorServiceConfig } from './calculatorRangesPestControl';

export const CALCULATOR_CONFIG: Record<string, CalculatorServiceConfig> = {
  'mold-remediation-quote': {
    kind: 'single',
    label: 'Contamination extent',
    options: [
      { label: 'Small area (bathroom, closet)',    value: 'small',    min: 500,  max: 2000  },
      { label: 'Medium area (one room)',           value: 'medium',   min: 2000, max: 6000  },
      { label: 'Large / multiple rooms',           value: 'large',    min: 6000, max: 15000 },
      { label: 'Extensive whole-home',             value: 'extensive',min: 10000,max: 30000 },
    ],
  },
  'mold-inspection-quote': {
    kind: 'single',
    label: 'Inspection type',
    options: [
      { label: 'Free visual inspection',          value: 'free',   min: 0,   max: 0   },
      { label: 'Air quality lab testing',         value: 'air',    min: 200, max: 400 },
      { label: 'Comprehensive with thermal',      value: 'full',   min: 300, max: 600 },
    ],
  },
  'mold-testing-quote': {
    kind: 'single',
    label: 'Testing type',
    options: [
      { label: 'Air quality sample (1 location)', value: 'air-single', min: 200, max: 400 },
      { label: 'Multiple air samples',            value: 'air-multi',  min: 300, max: 600 },
      { label: 'Post-remediation clearance',      value: 'clearance',  min: 200, max: 500 },
    ],
  },
  'black-mold-removal-quote': {
    kind: 'single',
    label: 'Black mold extent',
    options: [
      { label: 'Small area',                      value: 'small',    min: 1500, max: 4000  },
      { label: 'Medium area (one room)',           value: 'medium',   min: 3000, max: 8000  },
      { label: 'Large / extensive',               value: 'large',    min: 6000, max: 15000 },
    ],
  },
  'attic-mold-removal-quote': {
    kind: 'single',
    label: 'Attic contamination',
    options: [
      { label: 'Small area, no sheathing damage', value: 'small',  min: 1000, max: 2500 },
      { label: 'Moderate contamination',          value: 'medium', min: 2500, max: 5000 },
      { label: 'Extensive with sheathing repair', value: 'large',  min: 4000, max: 10000 },
    ],
  },
  'crawl-space-mold-quote': {
    kind: 'single',
    label: 'Crawl space scope',
    options: [
      { label: 'Basic removal and treatment',     value: 'basic',        min: 500,  max: 2000 },
      { label: 'Removal plus vapor barrier',      value: 'barrier',      min: 1500, max: 4000 },
      { label: 'Full encapsulation',              value: 'encapsulation',min: 3000, max: 8000 },
    ],
  },
  'mold-damage-repair-quote': {
    kind: 'single',
    label: 'Repair scope',
    options: [
      { label: 'Minor repair (one wall)',         value: 'minor',    min: 500,  max: 2000  },
      { label: 'Moderate (one room)',             value: 'moderate', min: 2000, max: 8000  },
      { label: 'Extensive reconstruction',        value: 'extensive',min: 8000, max: 30000 },
    ],
  },
  'emergency-mold-removal': {
    kind: 'single',
    label: 'Emergency situation',
    options: [
      { label: 'Same-day assessment',             value: 'assessment', min: 0,    max: 300   },
      { label: 'Assessment + containment',        value: 'contain',    min: 300,  max: 1000  },
      { label: 'Full emergency remediation',      value: 'full',       min: 1000, max: 15000 },
    ],
  },
};
