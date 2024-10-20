{
  "fileName": "playwright.config.ts",
  "fileContent": "import { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  use: {\n    headless: true,\n    viewport: { width: 1280, height: 720 },\n    ignoreHTTPSErrors: true,\n    video: 'retain-on-failure',\n  },\n};\n\nexport default config;\n"
}