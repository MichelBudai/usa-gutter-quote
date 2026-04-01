/**
 * Dynamic city service content — loads the right content based on current site.
 */
import {
  getServiceCityPageContent as getNicheCityContent,
  type ServiceCityContent,
  type ServiceContentParams,
} from "./cityServiceContentGutter";

export type { ServiceCityContent, ServiceContentParams };

export function getServiceCityPageContent(
  service: string,
  params: ServiceContentParams
): ServiceCityContent {
  return getNicheCityContent(service as any, params);
}
