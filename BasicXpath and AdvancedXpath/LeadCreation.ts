import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

// ======================== LOGIN TO SALESFORCE ========================

await page.goto('https://login.salesforce.com');
await page.locator('#username').fill('thammana.rajani@gmail.com');
await page.locator('input[type="submit"]').click();
await page.locator('#password').fill('Test123@');
await page.locator('#Login').click();
await page.waitForURL('**/one/one.app', { timeout: 120000 });

// ======================== CREATE LEAD ========================

await page.locator('div[title="New"]').click();
await page.locator('button[aria-label="Salutation"]').click();
await page.locator('lightning-base-combobox-item[data-value="Mrs."]').click();
await page.locator('input[name="lastName"]').fill('Vem');
await page.locator('input[name="Company"]').fill('ABC Technologies');
await page.locator('button[name="SaveEdit"]').click();

console.log('Lead created successfully');
await browser.close();