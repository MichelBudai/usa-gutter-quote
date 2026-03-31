import type { CalculatorServiceConfig } from './calculatorRangesPestControl';
export const CALCULATOR_CONFIG: Record<string, CalculatorServiceConfig> = {
  'solar-quote': { kind: 'single', label: 'Home size', options: [
    { label: 'Small (under 1,500 sq ft)', value: 'small',  min: 12000, max: 20000 },
    { label: 'Medium (1,500–2,500 sq ft)', value: 'medium', min: 18000, max: 28000 },
    { label: 'Large (2,500+ sq ft)',       value: 'large',  min: 25000, max: 40000 },
  ]},
  'solar-panel-installation-quote': { kind: 'single', label: 'System size', options: [
    { label: '5 kW system',  value: '5kw',  min: 14000, max: 20000 },
    { label: '7 kW system',  value: '7kw',  min: 18000, max: 26000 },
    { label: '10 kW system', value: '10kw', min: 25000, max: 35000 },
  ]},
  'solar-battery-storage-quote': { kind: 'single', label: 'Battery option', options: [
    { label: 'Single battery (13–16 kWh)',  value: 'single', min: 10000, max: 16000 },
    { label: 'Two batteries (whole-home)',  value: 'double', min: 18000, max: 30000 },
  ]},
  'solar-roof-replacement-quote': { kind: 'single', label: 'Project type', options: [
    { label: 'Standard roof + solar panels', value: 'standard', min: 25000, max: 45000 },
    { label: 'Tesla Solar Roof',             value: 'tesla',    min: 50000, max: 80000 },
  ]},
  'commercial-solar-quote': { kind: 'single', label: 'Business size', options: [
    { label: 'Small (50–100 kW)',   value: 'small',  min: 75000,  max: 180000 },
    { label: 'Medium (100–500 kW)', value: 'medium', min: 150000, max: 750000 },
    { label: 'Large (500 kW+)',     value: 'large',  min: 500000, max: 2000000 },
  ]},
  'solar-financing-quote': { kind: 'single', label: 'Financing preference', options: [
    { label: 'Cash purchase',      value: 'cash',  min: 14000, max: 35000 },
    { label: '$0 down solar loan', value: 'loan',  min: 0,     max: 0 },
    { label: 'Lease / PPA',        value: 'lease', min: 0,     max: 0 },
  ]},
  'solar-maintenance-quote': { kind: 'single', label: 'Service type', options: [
    { label: 'Panel cleaning only',          value: 'clean',   min: 150, max: 300 },
    { label: 'Full inspection + cleaning',   value: 'inspect', min: 200, max: 500 },
    { label: 'Annual maintenance plan',      value: 'plan',    min: 200, max: 400 },
  ]},
  'off-grid-solar-quote': { kind: 'single', label: 'System size', options: [
    { label: 'Cabin / basic (2–5 kW)',        value: 'cabin', min: 15000, max: 30000 },
    { label: 'Full home off-grid (5–10 kW)',  value: 'home',  min: 30000, max: 60000 },
    { label: 'Large home + generator backup', value: 'large', min: 50000, max: 100000 },
  ]},
};
