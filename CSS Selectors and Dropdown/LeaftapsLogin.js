import { chromium } from "playwright";

async function createLead() {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("democsr2");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.waitForLoadState("domcontentloaded");
    await page.locator("img[src*='crm.png']").click();
    await page.waitForLoadState("domcontentloaded");
    await page.locator("a[href*='leadsMain']").click();
    await page.waitForLoadState("domcontentloaded");
    await page.locator("a[href*='createLeadForm']").click();
    await page.waitForLoadState("domcontentloaded");

    await page.locator("#createLeadForm_companyName").fill("TestLeaf Technologies");
    await page.locator("#createLeadForm_firstName").fill("Rajani");
    await page.locator("#createLeadForm_lastName").fill("Tester");
    await page.locator("#createLeadForm_personalTitle").fill("Ms.");
    await page.locator("#createLeadForm_generalProfTitle").fill("QA Engineer");
    await page.locator("#createLeadForm_annualRevenue").fill("1200000");
    await page.locator("#createLeadForm_departmentName").fill("Quality Assurance");

    const sourceDropdown = page.locator("#createLeadForm_dataSourceId");
    const options = sourceDropdown.locator("option");
    const optionCount = await options.count();
    console.log("========== SOURCE DROPDOWN ==========");

    for (let i = 0; i < optionCount; i++) {
       const optionText = await options.nth(i).innerText();
       const optionValue = await options.nth(i).getAttribute("value");
       console.log(`Text: ${optionText} | Value: ${optionValue}`);
    }

    console.log("=====================================");

    await sourceDropdown.selectOption({label: "Employee"});
    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210");
    await page.locator("input[value='Create Lead']").click();
    await page.waitForLoadState("domcontentloaded");
    console.log("Lead created successfully!");
    await browser.close();
}

createLead();