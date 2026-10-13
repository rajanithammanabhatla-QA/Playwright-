import { chromium } from 'playwright';

async function salesforceLogin() {
    const browser = await chromium.launch({headless: false});
    const page = await browser.newPage();

    // ======================== Open Salesforce ========================

    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('//input[contains(@id,"username")]').fill('yuvarani.sekar@testleaf.com');
    await page.locator('input[type="submit"]').click();
    await page.locator('//input[contains(@id,"password")]').fill('TestLeaf@2028');
    await page.locator('//input[@id="Login" and @name="Login"]').click();
    await page.waitForLoadState('domcontentloaded');
    console.log('Salesforce login completed');
    await page.waitForTimeout(5000);
    await browser.close();
}
salesforceLogin();