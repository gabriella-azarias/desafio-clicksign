const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

const { addCucumberPreprocessorPlugin } = preprocessor;

const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://commitquality.com",
    supportFile: "cypress/support/e2e.js",
    specPattern: "cypress/e2e/features/**/*.feature",
    screenshotsFolder: "cypress/screenshots",
    screenshotOnRunFailure: true,

    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
