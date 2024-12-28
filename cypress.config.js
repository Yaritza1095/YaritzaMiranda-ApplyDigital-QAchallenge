// cypress.config.js
const { defineConfig } = require('cypress');
const { lighthouse, pa11y, prepareAudit } = require('cypress-audit');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      console.log('>>>>> setupNodeEvents LOADED <<<<<');
      // 1) Prepare the browser for Lighthouse
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      // 2) Register tasks for Lighthouse & Pa11y
      on('task', {
        lighthouse: lighthouse(),
        pa11y: pa11y()
      });
      return config;
    },
    // (Optional) If you use MochaAwesome:
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/reports',
      overwrite: false,
      html: false,
      json: true
    },
  },
});
