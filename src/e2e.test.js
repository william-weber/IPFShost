import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains the text", async () => {
    await page.goto("http://localhost:5000");
    await page.waitForSelector(".App-header");
    const text = await page.$eval(".App-header", (e) => e.textContent);
    expect(text).toContain("Edit");
  });

  afterAll(() => browser.close());
});
