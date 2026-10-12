const { chromium } = require('playwright');
(async () => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    // ======================== Open Salesforce ========================

    await page.goto('https://login.salesforce.com/?locale=in');
    await page.locator('#username').fill('yuvarani.sekar@testleaf.comm');
    await page.locator('input[type="submit"]').click();
    await page.locator('#password').fill('TestLeaf@2028');
    await page.locator('input[type="submit"]').click();
    await page.waitForURL('**/identity/verification/**', {timeout: 15000}); 
    console.log('Verification page displayed');
    console.log('Page Title:', await page.title());
    
    // ======================== Verify Salesforce logo ========================

    const logo = page.locator('#logo');
    if (await logo.isVisible()) 
        {
        console.log('Salesforce Logo Verification: SUCCESS');
    } 
    else 
        {
        console.log('Salesforce Logo Verification: FAILED');
    }
    await browser.close();
})();