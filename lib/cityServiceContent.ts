/**
 * Dynamic city service content — loads the right content based on current site.
 */
import { getCurrentSiteConfig } from "./getSiteConfig";
import {
  getServiceCityPageContent as getNicheCityContent,
  type ServiceCityContent,
  type ServiceContentParams,
} from "./cityServiceContentFlooring";

export type { ServiceCityContent, ServiceContentParams };

const CONTENT_BY_NICHE: Record<string, typeof getNicheCityContent> = {
  "flooring": getNicheCityContent,
};

export function getServiceCityPageContent(service: string, params: ServiceContentParams) {
  const config = getCurrentSiteConfig();
  const fn = CONTENT_BY_NICHE[config.slug] ?? getNicheCityContent;
  return fn(service, params) as ServiceCityContent;
}
