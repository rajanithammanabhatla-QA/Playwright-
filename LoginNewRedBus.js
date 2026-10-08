const { chromium, webkit } = require('playwright');

(async () => {

    // Launch Edge browser
    const edgeBrowser = await chromium.launch({
        channel: 'msedge',
        headless: false
    });
    const edgePage = await edgeBrowser.newPage();
    await edgePage.goto('https://www.redbus.in');
    console.log("Red Bus Title:", await edgePage.title());
    console.log("Red Bus URL:", edgePage.url());
    // Launch WebKit browser
    const webkitBrowser = await webkit.launch({
        headless: false
    });
    const webkitPage = await webkitBrowser.newPage();
    await webkitPage.goto('https://www.flipkart.com');
    console.log("Flipkart Title:", await webkitPage.title());
    console.log("Flipkart URL:", webkitPage.url());
    // Keep browsers open
    await edgePage.waitForTimeout(5000);

    // Close browsers
    await edgeBrowser.close();
    await webkitBrowser.close();

})();