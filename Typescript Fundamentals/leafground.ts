import { chromium, expect } from "@playwright/test";

async function checkboxAssignment() {

    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();
    // 1. Navigate to Checkbox page
    await page.goto("https://leafground.com/checkbox.xhtml");
    // 2. Click Basic Checkbox
    const basicCheckbox = page.locator("div.ui-chkbox:has(input[aria-label='Basic'])");
    await basicCheckbox.locator("div.ui-chkbox-box").click();
    await expect(basicCheckbox.locator("input[aria-label='Basic']")).toBeChecked();
    console.log("Basic Checkbox selected");
    // 3. Click Notification Checkbox
    const notificationCheckbox = page.locator("div.ui-chkbox:has(input[aria-label='Ajax'])");
    await notificationCheckbox.locator("div.ui-chkbox-box").click();
    await expect(notificationCheckbox.locator("input[aria-label='Ajax']")).toBeChecked();
    console.log("Notification Checkbox selected");
    // 4. Verify notification message
    const notificationMessage = page.locator("span.ui-growl-title");
    await expect(notificationMessage).toHaveText("Checked");
    console.log("Notification message 'Checked' is displayed");
    await notificationCheckbox.locator("div.ui-chkbox-box").click();
    await expect(notificationMessage).toHaveText("Unchecked");
    console.log("Notification message 'Unchecked' is displayed");
    // 5. Select favorite language - Java
    const javaCheckbox = page.locator("label[for='j_idt87:basic:0']");
    await javaCheckbox.click();
    await expect(page.locator("input#j_idt87\\:basic\\:0")).toBeChecked();
    console.log("Favorite language Java is selected");
    // Select Python
    const pythonCheckbox = page.locator("label[for='j_idt87:basic:1']");
    await pythonCheckbox.click();
    await expect(page.locator("input#j_idt87\\:basic\\:1")).toBeChecked();
    console.log("Favorite language Python is selected");
    // 6. Click Tri-State Checkbox
    const triStateCheckbox = page.locator("div.ui-chkbox-box[data-iconstates]");
    await triStateCheckbox.click();
    console.log("Tri-State Checkbox clicked");
    // 7. Verify Tri-State Checkbox selected option
    const triStateMessage = page.locator("//p[contains(text(),'State =')]");
    const selectedState = await triStateMessage.textContent();
    console.log("Selected Tri-State option:",selectedState);
    // 8. Click Toggle Switch
    const toggleSwitch = page.locator("div.ui-toggleswitch-slider");
    await toggleSwitch.click();
    console.log("Toggle Switch clicked");
    // 9. Verify expected message - Error need to verify
    const toggleMessage = page.locator("#j_idt87\\:msg_container .ui-growl-title");
    await expect(toggleMessage).toBeVisible();
    await expect(toggleMessage).toHaveText("Checked");
    console.log("Expected message 'Checked' is displayed");
    await toggleSwitch.click();
    await expect(toggleMessage).toBeVisible();
    await expect(toggleMessage).toHaveText("Unchecked");
    console.log("Expected message 'UnChecked' is displayed");
    // 10. Verify disabled checkbox
    const disabledCheckbox = page.locator("input[aria-label='Disabled']");
    await expect(disabledCheckbox).toBeDisabled();
    console.log("Disabled Checkbox verified");
    // 11. Select multiple options
    const selectMultiple = page.locator("#j_idt87\\:multiple");
    await selectMultiple.click();
    for (const city of ["Miami", "London", "Paris"]) 
        {
    const option = page.locator(`li[data-item-value='${city}']`);
    await option.locator(".ui-chkbox-box").click();
    await expect(option.locator("input[type='checkbox']")).toHaveAttribute("aria-checked", "true");
    console.log(`${city} is selected`);
}
    // Close Select Multiple dropdown
    await page.locator("#j_idt87\\:multiple_panel .ui-selectcheckboxmenu-close").click();
    console.log("Multiple options selected successfully");
    // 12. Verify selected options
    await expect(page).toHaveURL("https://leafground.com/checkbox.xhtml");
    console.log("Checkbox page verification completed");
    // 13. Close browser
    await browser.close();
    console.log("Browser closed successfully");
}
checkboxAssignment();

checkboxAssignment();
