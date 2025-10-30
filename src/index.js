// import Highcharts from "highcharts";
// import "highcharts/highcharts-more";
// import "highcharts/modules/solid-gauge";
// //import { registerModules } from "./modules";

// /**
//  * Initialize and render a Highcharts chart.
//  *
//  * @param {string} containerId - HTML container id
//  * @param {object} chartOptions - JSON options for Highcharts.chart()
//  * @param {object} [modules] - Optional modules to enable (e.g. { exporting: true })
//  */
// export function renderChart(containerId, chartOptions, modules = {}) {
//   if (!containerId || !chartOptions) {
//     console.error("renderChart: Missing containerId or chartOptions");
//     return;
//   }
  

//   // Register optional modules
//   //registerModules(Highcharts, modules);

//   // Render chart
//   Highcharts.chart(containerId, chartOptions);
// }

// /**
//  * Optionally expose the Highcharts instance itself
//  */
// export function getHighchartsInstance() {
//   return Highcharts;
// }

// // Expose to browser global (for <script> usage)
// if (typeof window !== "undefined") {
//   window.HighchartsBundler = { renderChart, getHighchartsInstance };
// }


import Highcharts from "highcharts/es-modules/masters/highcharts.src.js";
import { registerModules } from "./modules";
//import { applyCustomTheme } from "./custom/theme";
//import { registerCustomPlugins } from "./custom/plugin";

// === Core Highcharts extensions ===
// import "highcharts/highcharts-more";
// import "highcharts/modules/stock";
// import "highcharts/modules/treemap";
// import "highcharts/modules/sunburst";
// import "highcharts/modules/solid-gauge";
// import "highcharts/modules/heatmap";

// // === Utility modules ===
// import "highcharts/modules/exporting";
// import "highcharts/modules/export-data";
// import "highcharts/modules/accessibility";

/**
 * Render a Highcharts chart in a given container.
 *
 * @param {string} containerId - HTML container ID
 * @param {object} chartOptions - Highcharts JSON options
 * @param {object} [modules] - Optional modules (e.g., { stock: true, treemap: true })
 */
export async function renderChart(containerId, chartOptions, modules = {}) {
  if (!containerId || !chartOptions) {
    console.error("renderChart: Missing containerId or chartOptions");
    return;
  }

  // Load required modules dynamically
  await registerModules(modules);

  // Apply custom global theme + plugins
  //applyCustomTheme();
  //registerCustomPlugins();

  // Render chart
  return Highcharts.chart(containerId, chartOptions); 
}

/** Return Highcharts instance (for advanced use) */
export function getHighchartsInstance() {
  return Highcharts;
}

// UMD global exposure
if (typeof window !== "undefined") {
  window.HighchartsBundler = { renderChart, getHighchartsInstance };
}

