const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    // Open Salesforce
    await page.goto('https://login.salesforce.com/?locale=in');
    // Enter username and click Next
    await page.locator('#username').fill('rajani.thammanabhatla@gmail.com');
    await page.locator('input[type="submit"]').click();
    // Enter password and click Login
    await page.locator('#password').fill('Dharani@16');
    await page.locator('input[type="submit"]').click();
    //console.log('Login and Password entered successfully');
    // Wait for Verification page
    await page.waitForURL('**/identity/verification/**', {
        timeout: 15000
    });
    console.log('Verification page displayed');
    console.log('Page Title:', await page.title());
    // Verify Salesforce logo
    const logo = page.locator('#logo');
    if (await logo.isVisible()) {
        console.log('Salesforce Logo Verification: SUCCESS');
    } else {
        console.log('Salesforce Logo Verification: FAILED');
    }
    await browser.close();
})();