import { test, expect } from "@playwright/test";
//Load page performance is above 6 ms it should be average less than 2.5ms
test("Measure page load performance", async ({ page }) => {
    const start = Date.now();

    await page.goto("https://www.xenonstack.com/", { waitUntil: "load" });

    const end = Date.now();
    const loadTime = end - start;

    console.log(`Page Load Time: ${loadTime} ms`);

    expect(loadTime).toBeLessThan(3000); //Load time above 6 seconds
});
