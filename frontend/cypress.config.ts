import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    screenshotOnRunFailure: false,
    video: false,
    
  },
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    screenshotOnRunFailure: false
  },
});

