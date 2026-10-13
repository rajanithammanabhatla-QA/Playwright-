import { test, expect } from '@playwright/test';

test('Classroom 1 - Input and Locator Practice', async ({ page }) => {

    // =================== Part 1: Navigate to the page ===================
    
    await page.goto('https://leafground.com/input.xhtml');
    await expect(page).toHaveTitle(/Input/);


    // =================== Part 2: Validate a Disabled Textbox ===================
   
    const disabledTextbox = page.getByPlaceholder('Disabled');
    await expect(disabledTextbox).toBeDisabled();


    // =================== Part 3: Validate an Enabled Textbox  ===================

    const nameTextbox = page.locator('#j_idt88\\:name');
    await expect(nameTextbox).toBeEditable();
    // Enter your name
    await nameTextbox.fill('Rajani');


    // =================== Part 4: Soft Assertion Practice ===================
 
    const softAssertionTextbox = page.locator('input[placeholder="Babu Manickam"]');
    // Soft assertion: This assertion is EXPECTED TO FAIL because the textbox is enabled.The test will continue executing after this failure.
    await expect.soft(softAssertionTextbox).toBeDisabled();
    console.log('Execution continues after soft assertion');

    // =================== Part 5: Fill Data ===================

    const fillTextbox = page.locator('input[placeholder="Babu Manickam"]');
    // fill() automatically clears the existing value and enters the new value verify that the textbox contains the expected value
    await fillTextbox.fill('Playwright Learning');
    await expect(fillTextbox).toHaveValue('Playwright Learning');

});