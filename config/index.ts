import { gutterConfig } from "./sites/gutter";

const SITE_CONFIGS_BY_SLUG = {
  "gutter": gutterConfig,
} as const;

const SITE_CONFIGS_BY_HOST: Record<string, typeof gutterConfig> = {
  "usa-gutter-quote.com":     gutterConfig,
  "www.usa-gutter-quote.com": gutterConfig,
  "localhost:3000":            gutterConfig,
  "localhost:3010":            gutterConfig,
  "localhost:3011":            gutterConfig,
  "localhost:3012":            gutterConfig,
  "localhost:3013":            gutterConfig,
  "localhost:3014":            gutterConfig,
  "localhost:3015":            gutterConfig,
  "localhost:3016":            gutterConfig,
};

export type SiteConfig = typeof gutterConfig;

export function getSiteConfig(hostname: string): SiteConfig {
  return SITE_CONFIGS_BY_HOST[hostname] ?? gutterConfig;
}

export function getSiteConfigBySlug(slug: string): SiteConfig {
  return SITE_CONFIGS_BY_SLUG[slug as keyof typeof SITE_CONFIGS_BY_SLUG] ?? gutterConfig;
}
