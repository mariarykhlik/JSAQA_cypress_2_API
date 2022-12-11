const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '3d76i5',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
