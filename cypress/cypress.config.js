const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {

    },
    // Screenshots bei Fehlern aufnehmen
    screenshotOnRunFailure: true,
    // Ordner für Screenshots
    screenshotsFolder: "cypress/screenshots",
    // Optional: Videos von Tests aufnehmen
    video: true, 
    // Optional: Video-Kompression einstellen
    videoCompression: 32, 
    // Optional: Breite der Screenshots einstellen
    screenshotWidth: 1280,  
     // Optional: Höhe der Screenshots einstellen
    screenshotHeight: 720, 
  },
});
