import type { CalculatorServiceConfig } from './calculatorRangesPestControl';

export const CALCULATOR_CONFIG: Record<string, CalculatorServiceConfig> = {
  'tree-removal-quote': {
    kind: 'single',
    label: 'Tree size',
    options: [
      { label: 'Small (under 30 ft)',       value: 'small',  min: 300,  max: 600  },
      { label: 'Medium (30–60 ft)',          value: 'medium', min: 600,  max: 1200 },
      { label: 'Large (60+ ft)',             value: 'large',  min: 1200, max: 2500 },
      { label: 'Very large / difficult access', value: 'xl', min: 1500, max: 4000 },
    ],
  },
  'tree-trimming-quote': {
    kind: 'single',
    label: 'Trimming type',
    options: [
      { label: 'Deadwood removal',     value: 'deadwood',  min: 150, max: 300 },
      { label: 'Crown reduction',      value: 'crown',     min: 300, max: 800 },
      { label: 'Canopy lifting',       value: 'lifting',   min: 200, max: 500 },
      { label: 'Utility clearance',    value: 'utility',   min: 200, max: 600 },
    ],
  },
  'stump-removal-quote': {
    kind: 'single',
    label: 'Stump diameter',
    options: [
      { label: 'Small (under 12 inches)',  value: 'small',  min: 100, max: 200 },
      { label: 'Medium (12–24 inches)',    value: 'medium', min: 150, max: 300 },
      { label: 'Large (24+ inches)',       value: 'large',  min: 200, max: 400 },
    ],
  },
  'emergency-tree-removal': {
    kind: 'single',
    label: 'Emergency situation',
    options: [
      { label: 'Hanging limb over structure',  value: 'limb',      min: 200,  max: 800  },
      { label: 'Fallen tree in yard',          value: 'yard',      min: 400,  max: 1000 },
      { label: 'Tree blocking driveway',       value: 'driveway',  min: 300,  max: 800  },
      { label: 'Tree on structure',            value: 'structure', min: 800,  max: 4000 },
    ],
  },
  'tree-inspection': {
    kind: 'single',
    label: 'Inspection type',
    options: [
      { label: 'Free inspection (no obligation)',  value: 'free',        min: 0,   max: 0   },
      { label: 'Formal arborist report',           value: 'formal',      min: 200, max: 500 },
    ],
  },
  'lot-clearing-quote': {
    kind: 'single',
    label: 'Lot size and density',
    options: [
      { label: 'Quarter acre, lightly wooded',   value: 'quarter-light',  min: 1500, max: 4000  },
      { label: 'Quarter acre, heavily wooded',   value: 'quarter-heavy',  min: 3000, max: 8000  },
      { label: 'Half acre or more',              value: 'half-plus',      min: 5000, max: 20000 },
    ],
  },
  'fallen-tree-removal': {
    kind: 'single',
    label: 'Tree location',
    options: [
      { label: 'Open yard',             value: 'yard',      min: 200, max: 600  },
      { label: 'Blocking driveway',     value: 'driveway',  min: 300, max: 800  },
      { label: 'On fence or vehicle',   value: 'fence',     min: 400, max: 1000 },
      { label: 'On structure / roof',   value: 'structure', min: 600, max: 3000 },
    ],
  },
  'tree-cabling-bracing': {
    kind: 'single',
    label: 'Support needed',
    options: [
      { label: 'Single cable installation',     value: 'single',   min: 200, max: 600  },
      { label: 'Multiple cables (2–3)',         value: 'multiple', min: 400, max: 1200 },
      { label: 'Bracing rod installation',      value: 'brace',    min: 150, max: 400  },
      { label: 'Cable + bracing combined',      value: 'combined', min: 400, max: 1500 },
    ],
  },
};
