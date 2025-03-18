import { test, expect } from "@playwright/test";


//Check all links in the website

test("Check for broken links", async ({ page, context }) => {
    test.setTimeout(120000);
    await page.goto("https://www.xenonstack.com/");

    //Getting all links of the page
    const links = await page.$$eval("a", (anchors) =>
        anchors.map((a) => a.href).filter((href) => href.startsWith("http"))
    );

    console.log(`Total links found: ${links.length}`);

    for (const link of links) {
        const response = await context.request.get(link);
        if (!response.ok()) {
            console.warn(`❌ Broken Link: ${link} (Status: ${response.status()})`);
        } else {
            console.log(`✅ Valid Link: ${link} (Status: ${response.status()})`);
        }
    }
});
