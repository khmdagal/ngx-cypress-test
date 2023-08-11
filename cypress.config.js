const { defineConfig } = require("cypress");

module.exports = defineConfig({
<<<<<<< HEAD
  e2e: {
    baseUrl: "http://localhost:1234",
  },
});

/*
// TypeScript configuration

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

*/
=======
  viewportHeight: 1080,
  viewportWidth: 1920,
  e2e: {
    baseUrl: "http://localhost:4200",
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    excludeSpecPattern: "",
    excludeSpecPattern: ["**/1-getting-started/*", "**/2-advanced-examples/*"]
  },
});
>>>>>>> 820d7f5008133739c3ae82e9a44fe9aaa08c6943
