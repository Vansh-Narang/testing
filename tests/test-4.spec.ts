import { test, expect } from "@playwright/test";

test.describe("Checking social media handles", () => {
    test("Youtube", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page.waitForLoadState("domcontentloaded"); // Ensures the page is fully loaded

        const page1Promise = page.waitForEvent("popup"); // Wait for new tab
        await page.getByRole("link", { name: "Youtube" }).click();
        const page1 = await page1Promise;

        await page1.waitForLoadState("load"); // Ensure new tab is fully loaded
        await expect(
            page1.getByRole("link", { name: "YouTube Home" })
        ).toBeVisible({ timeout: 5000 }); // Set explicit timeout
    });
    test("Linkedin", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page.waitForLoadState("domcontentloaded"); 

        const page1Promise = page.waitForEvent("popup"); 
        await page.getByRole('link', { name: 'LinkedIn' }).click();
        const page1 = await page1Promise;

        await page1.waitForLoadState("load"); 
        // await page1.getByRole('link', { name: 'LinkedIn', exact: true }).click();
        await expect(
            page1.getByRole("link", { name: 'LinkedIn' })
        ).toBeVisible({ timeout: 5000 });
    });
    test("Github", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page.waitForLoadState("domcontentloaded"); 

        const page1Promise = page.waitForEvent("popup"); 
        await page.getByRole("link", { name: "Github" }).click();
        const page1 = await page1Promise;

        await page1.waitForLoadState("load"); 
        await expect(
            page1.getByRole("link", { name: "Github" })
        ).toBeVisible({ timeout: 5000 }); 
    });
    // test("Twitter", async ({ page }) => {
    //     await page.goto("https://www.xenonstack.com/");
    //     await page.waitForLoadState("domcontentloaded"); // Ensures the page is fully loaded

    //     const page1Promise = page.waitForEvent("popup"); // Wait for new tab
    //     await page.getByRole("link", { name: "Twitter" }).click();
    //     const page1 = await page1Promise;

    //     await page1.waitForLoadState("load"); // Ensure new tab is fully loaded
    //     await expect(
    //         page1.getByRole("link", { name: "Twitter" })
    //     ).toBeVisible({ timeout: 5000 }); // Set explicit timeout
    // });
    test("Medium", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page.waitForLoadState("domcontentloaded");

        const page1Promise = page.waitForEvent("popup");
        await page.getByRole("link", { name: "Medium" }).click();
        const page1 = await page1Promise;

        await page1.waitForLoadState("load"); 
        await expect(
            page1.getByTestId("headerMediumLogo")
        ).toBeVisible({ timeout: 5000 }); 
    });
    test("Instagram", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page.waitForLoadState("domcontentloaded"); 

        const page1Promise = page.waitForEvent("popup"); 
        await page.getByRole("link", { name: "Instagram" }).click();
        const page1 = await page1Promise;

        await page1.waitForLoadState("load"); 
        await expect(
            page1.getByRole("link", { name: "Instagram" })
        ).toBeVisible({ timeout: 5000 }); 
    });
});
