import { chromium } from "playwright";

async function openSalesforce() {

    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext({storageState: "Data/slogin.json"});
    const page = await context.newPage();
    await page.goto("https://orgfarm-7fa65331c4-dev-ed.develop.my.salesforce.com/");
    await page.waitForTimeout(5000);
    console.log("Salesforce opened using saved login state");
    await page.waitForTimeout(10000);
    await browser.close();
}

openSalesforce();