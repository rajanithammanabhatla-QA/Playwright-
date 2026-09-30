const browser = "Chrome";
function getBrowserVersion() {
    let browserVersion = "Chrome Version 140";
    if (browser === "Chrome") {
        console.log("Browser is Chrome");
    }
    else {
        console.log("Browser is not Chrome");
    }
    console.log("Browser Version: " + browserVersion);
}
getBrowserVersion();