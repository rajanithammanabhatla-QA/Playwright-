import { chromium } from 'playwright';

async function useStorageState() {

    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext({storageState: 'leaftapsStorageState.json'});
    const page = await context.newPage();
    await page.goto('https://leaftaps.com/crmsfa/control/main');
    console.log('Leaftaps opened using saved storage state');
    await page.waitForTimeout(5000);
    await browser.close();
}
useStorageState();
