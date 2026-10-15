import { chromium } from 'playwright';

async function saveStorageState() {

    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://leaftaps.com/opentaps/control/login');
    await page.locator('#username').fill('democsr');
    await page.locator('#password').fill('crmsfa');
    await page.locator('.decorativeSubmit').click();
    await page.getByText('CRM/SFA').click();
    // Save storage state to file
    await context.storageState({path: 'leaftapsStorageState.json'});
    console.log('Storage state saved successfully');
    await browser.close();
}
saveStorageState();
