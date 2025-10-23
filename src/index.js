import Highcharts from "highcharts";
import HighchartsMore from "highcharts/highcharts-more";
import "highcharts/modules/solid-gauge";
//import { registerModules } from "./modules";

/**
 * Initialize and render a Highcharts chart.
 *
 * @param {string} containerId - HTML container id
 * @param {object} chartOptions - JSON options for Highcharts.chart()
 * @param {object} [modules] - Optional modules to enable (e.g. { exporting: true })
 */
export function renderChart(containerId, chartOptions, modules = {}) {
  if (!containerId || !chartOptions) {
    console.error("renderChart: Missing containerId or chartOptions");
    return;
  }
  

  // Register optional modules
  //registerModules(Highcharts, modules);

  // Render chart
  Highcharts.chart(containerId, chartOptions);
}

/**
 * Optionally expose the Highcharts instance itself
 */
export function getHighchartsInstance() {
  return Highcharts;
}

// Expose to browser global (for <script> usage)
if (typeof window !== "undefined") {
  window.HighchartsBundler = { renderChart, getHighchartsInstance };
}
