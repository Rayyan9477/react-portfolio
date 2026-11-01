import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests/e2e",
  fullyParallel: true,
  reporter: "list",
  use: { trace: "retain-on-failure" },
  projects: [
    {
      name: "desktop",
      use: {
        viewport: { width: 1440, height: 900 },
        baseURL: "http://127.0.0.1:4180",
      },
    },
    {
      name: "mobile",
      use: {
        ...devices["iPhone 13"],
        defaultBrowserType: "chromium",
        baseURL: "http://127.0.0.1:4180",
      },
    },
    { name: "email-configured", use: { baseURL: "http://127.0.0.1:4181" } },
  ],
  webServer: [
    {
      command: "npm run dev -- --host 127.0.0.1 --port 4180 --strictPort",
      url: "http://127.0.0.1:4180",
      reuseExistingServer: false,
      env: {
        VITE_EMAILJS_SERVICEID: "",
        VITE_EMAILJS_TEMPLATEID: "",
        VITE_EMAILJS_PUBLICKEY: "",
      },
    },
    {
      command: "npm run dev -- --host 127.0.0.1 --port 4181 --strictPort",
      url: "http://127.0.0.1:4181",
      reuseExistingServer: false,
      env: {
        VITE_EMAILJS_SERVICEID: "test-service",
        VITE_EMAILJS_TEMPLATEID: "test-template",
        VITE_EMAILJS_PUBLICKEY: "test-public",
      },
    },
  ],
});
