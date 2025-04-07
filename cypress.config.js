const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.demoblaze.com',
    exit: true, // Stellt sicher, dass der Cypress-Runner nach dem Test beendet wird
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

