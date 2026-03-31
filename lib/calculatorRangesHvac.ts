import type { CalculatorServiceConfig } from './calculatorRangesPestControl';

export const CALCULATOR_CONFIG: Record<string, CalculatorServiceConfig> = {
  'hvac-quote': {
    kind: 'single',
    label: 'System type needed',
    options: [
      { label: 'AC replacement only',           value: 'ac-replace',   min: 3000, max: 8000  },
      { label: 'Furnace replacement only',       value: 'furnace',      min: 2500, max: 7000  },
      { label: 'Complete system (AC + furnace)', value: 'complete',     min: 6000, max: 15000 },
      { label: 'Heat pump system',               value: 'heat-pump',    min: 4000, max: 12000 },
    ],
  },
  'ac-repair-quote': {
    kind: 'single',
    label: 'AC problem',
    options: [
      { label: 'No-start / not turning on',  value: 'no-start',    min: 150, max: 500  },
      { label: 'Weak cooling / warm air',    value: 'weak-cool',   min: 200, max: 800  },
      { label: 'Ice buildup on unit',        value: 'ice',         min: 150, max: 600  },
      { label: 'Compressor failure',         value: 'compressor',  min: 800, max: 2500 },
    ],
  },
  'ac-installation-quote': {
    kind: 'single',
    label: 'Installation type',
    options: [
      { label: 'Central AC replacement',    value: 'replace',      min: 3000, max: 8000  },
      { label: 'New central AC + ductwork', value: 'new',          min: 5000, max: 12000 },
      { label: 'Mini-split (single zone)',  value: 'mini-single',  min: 2000, max: 4500  },
      { label: 'Multi-zone mini-split',     value: 'mini-multi',   min: 5000, max: 12000 },
    ],
  },
  'furnace-repair-quote': {
    kind: 'single',
    label: 'Furnace problem',
    options: [
      { label: 'No heat / not starting',    value: 'no-heat',   min: 150, max: 500  },
      { label: 'Short cycling',             value: 'cycling',   min: 75,  max: 400  },
      { label: 'Blower not working',        value: 'blower',    min: 400, max: 1500 },
      { label: 'Cracked heat exchanger',    value: 'exchanger', min: 150, max: 400  },
    ],
  },
  'furnace-installation-quote': {
    kind: 'single',
    label: 'Furnace type',
    options: [
      { label: 'Standard efficiency (80 AFUE)', value: '80-afue',   min: 2500, max: 4500 },
      { label: 'High efficiency (96+ AFUE)',    value: '96-afue',   min: 3500, max: 7000 },
      { label: 'Electric furnace',              value: 'electric',  min: 1800, max: 4000 },
      { label: 'Furnace + AC package',          value: 'combo',     min: 6000, max: 15000 },
    ],
  },
  'heat-pump-installation-quote': {
    kind: 'single',
    label: 'Heat pump type',
    options: [
      { label: 'Central air-source heat pump', value: 'central',      min: 4000, max: 8000  },
      { label: 'Cold-climate heat pump',       value: 'cold-climate', min: 5000, max: 10000 },
      { label: 'Mini-split (single zone)',     value: 'mini-single',  min: 2500, max: 5000  },
      { label: 'Multi-zone mini-split',        value: 'mini-multi',   min: 5000, max: 12000 },
    ],
  },
  'hvac-maintenance-quote': {
    kind: 'single',
    label: 'Maintenance plan',
    options: [
      { label: 'AC tune-up only',              value: 'ac-tuneup',    min: 75,  max: 150 },
      { label: 'Furnace tune-up only',         value: 'furnace-tune', min: 75,  max: 150 },
      { label: 'Annual plan (AC + furnace)',   value: 'annual',       min: 150, max: 250 },
      { label: 'Bi-annual with priority',      value: 'biannual',     min: 200, max: 350 },
    ],
  },
  'emergency-hvac-repair': {
    kind: 'single',
    label: 'Emergency type',
    options: [
      { label: 'No heat (winter)',     value: 'no-heat',   min: 150, max: 1200 },
      { label: 'No cool (summer)',     value: 'no-cool',   min: 150, max: 1500 },
      { label: 'Burning smell / CO',  value: 'safety',    min: 150, max: 400  },
      { label: 'After-hours service', value: 'after-hrs', min: 250, max: 1500 },
    ],
  },
};
