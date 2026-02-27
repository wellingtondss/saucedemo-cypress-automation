const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    defaultCommandTimeout: 5000,

    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      charts: true,
      reportTitle: "End-to-end automation test",
      reportPageTitle: "End-to-end automation test",
      embeddedScreenshots: true,
      inlineAssets: true,
    },

    video: true,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      return config;
    },
  },
});
