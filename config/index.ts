import { flooringConfig } from "./sites/flooring";

const SITE_CONFIGS_BY_SLUG = {
  "flooring": flooringConfig,
} as const;

const SITE_CONFIGS_BY_HOST: Record<string, typeof flooringConfig> = {
  "usa-flooring-quote.com": flooringConfig,
  "www.usa-flooring-quote.com": flooringConfig,
  "localhost:3000": flooringConfig,
};

export type SiteConfig = typeof flooringConfig;

export function getSiteConfig(hostname: string): SiteConfig {
  return SITE_CONFIGS_BY_HOST[hostname] ?? flooringConfig;
}

export function getSiteConfigBySlug(slug: string): SiteConfig {
  return SITE_CONFIGS_BY_SLUG[slug as keyof typeof SITE_CONFIGS_BY_SLUG] ?? flooringConfig;
}
