import puppetteer from "puppeteer";
import { fork } from "child_process";

describe("test validator form", () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = "http://localhost:8888";

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on("error", reject);
      server.on("message", (message) => {
        if (message === "ok") {
          resolve();
        }
      });
    });
    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 100,
      args: ["--no-sandbox"],
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  }, 35000);

  test("master", async () => {
    // jest.setTimeout(35000);
    await page.goto(baseUrl);
    const input = await page.$("#inputNumber");
    await input.type("5536913867557809");
    const submit = await page.$("#btnNumber");
    await submit.click();
    const elem = await page.waitForSelector(".cardActiv");
    expect(elem).toBeTruthy();
  }, 35000);

  test("mir", async () => {
    await page.goto(baseUrl);
    const input = await page.$("#inputNumber");
    await input.type("2202202345824738");
    const submit = await page.$("#btnNumber");
    await submit.click();
    const elem = await page.waitForSelector(".cardActiv");
    expect(elem).toBeTruthy();
  }, 35000);

  test("not valid", async () => {
    await page.goto(baseUrl);
    const input = await page.$("#inputNumber");
    await input.type("22022023458247389");
    const submit = await page.$("#btnNumber");
    await submit.click();
    const elem = await page.waitForSelector(".message-fols");
    expect(elem).toBeTruthy();
  }, 35000);

  afterAll(async () => {
    await browser.close();
    server.kill();
  });
});
