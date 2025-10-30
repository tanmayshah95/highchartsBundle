/**
 * Dynamically import Highcharts modules based on user config.
 * In v12+, imports auto-register themselves with Highcharts.
 */
export function registerModules(config = {}) {
  const imports = [];
  

  // if (config.more) imports.push(import("highcharts/es-modules/masters/highcharts-more.src.js"));
  // if (config.stock) imports.push(import("highcharts/modules/stock"));
  // if (config.treemap) imports.push(import("highcharts/modules/treemap"));
  // if (config.sunburst) imports.push(import("highcharts/modules/sunburst"));
  // if (config.solidgauge) imports.push(import("highcharts/es-modules/masters/modules/solid-gauge.src.js"));
  // if (config.heatmap) imports.push(import("highcharts/modules/heatmap"));

  // // Utility modules
  // if (config.exporting) imports.push(import("highcharts/modules/exporting"));
  // if (config.accessibility) imports.push(import("highcharts/modules/accessibility"));
  // if (config.exportData) imports.push(import("highcharts/modules/export-data"));

  // console.log(imports);

  // // Wait for all requested imports
  // await Promise.all(imports);
}



// import "highcharts/highcharts-more";
// import "highcharts/modules/stock";
// import "highcharts/modules/treemap";
// import "highcharts/modules/sunburst";
// import "highcharts/modules/solid-gauge";
// import "highcharts/modules/heatmap";
// import "highcharts/modules/exporting";
// import "highcharts/modules/accessibility";
// import "highcharts/modules/export-data";

// export async function registerModules() {
//   return Promise.resolve();
// }
