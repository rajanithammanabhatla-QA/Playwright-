import { chromium } from "playwright";

async function createLead() {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();

    // ======================== LOGIN  ========================

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("democsr2");
    await page.locator("#password").fill("crmsfa");
    await page.locator(".decorativeSubmit").click();
    await page.waitForLoadState("domcontentloaded");

    // ======================== NAVIGATE TO LEADS ========================

    await page.locator("img[src*='crm.png']").click();
    await page.waitForLoadState("domcontentloaded");
    await page.locator("a[href*='leadsMain']").click();
    await page.waitForLoadState("domcontentloaded");
    await page.locator("a[href*='createLeadForm']").click();
    await page.waitForLoadState("domcontentloaded");

    // ======================== CREATE LEAD  ========================

    await page.locator("#createLeadForm_companyName").fill("TestLeaf Technologies");
    await page.locator("#createLeadForm_firstName").fill("Rajani");
    await page.locator("#createLeadForm_lastName").fill("Tester");
    await page.locator("#createLeadForm_personalTitle").fill("Ms.");
    await page.locator("#createLeadForm_generalProfTitle").fill("QA Engineer");
    await page.locator("input[value='Create Lead']").click();
    await page.waitForLoadState("domcontentloaded");

    // ======================== EDIT LEAD UPDATE COMPANY NAME ========================

    await page.locator("a.subMenuButton[href*='updateLeadForm']").click();
    await page.waitForLoadState("domcontentloaded");
    await page.locator("#updateLeadForm_companyName").fill("TestLeaf Updated Company");
    await page.locator("input[value='Update']").click();
    await page.waitForLoadState("domcontentloaded");

    // ======================== VERIFY UPDATED COMPANY NAME ON LEAD ========================

    const updatedCompanyName = await page.locator("#viewLead_companyName_sp").innerText();
    console.log("Updated Company Name:", updatedCompanyName);
    if (updatedCompanyName.includes("TestLeaf Updated Company")) 
        {
        console.log("PASS - Company Name updated successfully");
    } 
    else 
        {
        console.log("FAIL - Company Name was not updated");
    }

    await page.waitForTimeout(5000);
    await browser.close();
}

createLead();