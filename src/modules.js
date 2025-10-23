import Exporting from "highcharts/modules/exporting";
import Accessibility from "highcharts/modules/accessibility";
import ExportData from "highcharts/modules/export-data";

/**
 * Register optional Highcharts modules
 * @param {object} Highcharts - Highcharts instance
 * @param {object} config - which modules to enable
 */
export function registerModules(Highcharts, config = {}) {
  if (config.exporting) Exporting(Highcharts);
  if (config.accessibility) Accessibility(Highcharts);
  if (config.exportData) ExportData(Highcharts);
}
