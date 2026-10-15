import { chromium } from "playwright";

async function salesforceLogin() {
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();

    // Open Salesforce login page
    await page.goto("https://orgfarm-7fa65331c4-dev-ed.develop.my.salesforce.com/");
    await page.getByText("Username", { exact: true }).fill("rajani.thammanabhatla.d110b8c7ccd7@agentforce.com");
    await page.getByRole("button", { name: "Log In" }).click();
    await page.getByLabel("Passwor").fill("Dharani@16");
    await page.getByRole("button", { name: "Log In" }).click();
    await page.waitForTimeout(20000);
    console.log("Salesforce login successful");
    console.log("Current URL:", page.url());
    await context.storageState({path: "Data/slogin.json"});
    console.log("Storage state saved to Data/slogin.json");
    await browser.close();
}

salesforceLogin();