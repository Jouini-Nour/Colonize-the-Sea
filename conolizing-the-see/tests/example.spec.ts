const { chromium } = require('playwright');

describe('Example Test', () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    await page.goto('https://www.example.com');
  });

  afterEach(async () => {
    await page.close();
  });

  test('should have the correct page title', async () => {
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });

  test('should have a visible logo', async () => {
    const logo = await page.$('img');
    expect(logo).not.toBeNull();
    const isVisible = await logo.isVisible();
    expect(isVisible).toBe(true);
  });
});
