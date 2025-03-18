import { test, expect } from "@playwright/test";
//Checking all buttons in whole page
test.describe("Checking the Buttons in whole page", () => {
    test("Akira Ai", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");

        await page
            .locator("#product-main-section-one")
            .getByRole("link", { name: "Explore Further button-arrow" })
            .click();
        await expect(
            page.getByRole("heading", { name: "Bringing Agentic AI into" }),
        ).toBeVisible();
    });

    test("Elixir Data", async ({ page }) => {
        test.slow();
        await page.goto("https://www.xenonstack.com/");
        await page
            .locator("#product-main-section-two")
            .getByRole("link", { name: "Explore Further button-arrow" })
            .click();
        await expect(
            page.getByRole("heading", { name: "ElixirData - Manage" }),
        ).toBeVisible({ timeout: 100000 });
    });

    test("Xenonstack AI", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page
            .locator("#product-main-section-three")
            .getByRole("link", { name: "Explore Further button-arrow" })
            .click();
        await expect(
            page.getByRole("heading", { name: "Autonomous Operations Powered" }),
        ).toBeVisible();
    });

    test("NexaStack AI", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page
            .locator("#product-main-section-four")
            .getByRole("link", { name: "Explore Further button-arrow" })
            .click();
        await expect(
            page.getByRole("heading", { name: "Agentic Infrastructure Toggle" }),
        ).toBeVisible();
    });

    test("Akira Stack", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page.getByRole("button", { name: "Discover Now" }).click();
        await expect(
            page.getByRole("heading", { name: "Deep Learning and AI", exact: true }),
        ).toBeVisible();
    });

    test("Metasecure", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page
            .locator("#product-main-section-five")
            .getByRole("link", { name: "Explore Further button-arrow" })
            .click();
        await expect(
            page.getByRole("heading", { name: "Autonomous SoC with" }),
        ).toBeVisible();
    });

    test("Neural AI", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page
            .locator("#product-main-section-six")
            .getByRole("link", { name: "Explore Further button-arrow" })
            .click();
        await expect(
            page.getByRole("heading", { name: "Accelerate, Optimize and" }),
        ).toBeVisible();
    });

    test("Agentic AI", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page
            .locator("section")
            .filter({ hasText: "Augment Data and Analytics" })
            .getByRole("link")
            .click();
        await expect(
            page.getByRole("heading", { name: "Agentic AI Transforming" }),
        ).toBeVisible();
    });

    test("xenonify AI", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/");
        await page
            .locator("section")
            .filter({ hasText: "Cloud FinOps for AI" })
            .getByRole("link")
            .click();
        await expect(
            page.getByRole("heading", { name: "Harnessing Gen AI For" }),
        ).toBeVisible();
    });

    test("Aerospace and aviation card", async ({ page }) => {
        await page.getByRole("link", { name: "aerospace-and-aviation" }).click();
        await expect(
            page.getByRole("heading", {
                name: "Aerospace and Defense solutions- Upcoming developments and Future Trends",
            }),
        ).toBeVisible();
    });

    test("Automative and industrial card", async ({ page }) => {
        await page.getByRole("link", { name: "automotive-and-industrial" }).click();
        await expect(
            page.getByRole("heading", { name: "Digital Manufacturing and" }),
        ).toBeVisible();
    });

    test("Supply chain card", async ({ page }) => {
        await page.getByRole("link", { name: "supply-chain Supply Chain" }).click();
        await expect(
            page.getByRole("heading", { name: "Digital Retail Management and" }),
        ).toBeVisible();
    });

    test("Tech card", async ({ page }) => {
        await page.getByRole("link", { name: "technology Technology" }).click();
        await expect(
            page.getByRole("heading", { name: "Leading Enterprise Technology" }),
        ).toBeVisible();
    });

    test("Financial Card", async ({ page }) => {
        await page
            .getByRole("link", { name: "financial-services Financial" })
            .click();
        await expect(
            page.getByRole("heading", {
                name: "Banking and Financial Technology Solutions",
            }),
        ).toBeVisible();
    });
    test("Consumer Tech card", async ({ page }) => {
        await page
            .getByRole("link", { name: "consumer-tech Consumer Tech" })
            .click();
        await expect(
            page.getByRole("heading", { name: "Consumer Technology Services" }),
        ).toBeVisible();
    });

    test("Hospitality card", async ({ page }) => {
        await page.getByRole("link", { name: "hospitality-and-tourism" }).click();
        await expect(
            page.getByRole("heading", {
                name: "Travel and Hospitality Technology Services",
            }),
        ).toBeVisible();
    });
    test("Careers", async ({ page }) => {
        await page
            .getByRole("link", { name: "Join Us Today blue-cta-arrow" })
            .click();
        await expect(
            page.getByRole("heading", { name: "Building People and Ecosystem" }),
        ).toBeVisible();
    });
    test("Check blogs", async ({ page }) => {
        await page
            .getByRole("link", { name: "Explore Blogs blue-cta-arrow" })
            .click();
        await expect(
            page.getByRole("heading", { name: "Technology Blogs" }),
        ).toBeVisible();
    });
});