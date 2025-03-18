import { test, expect } from "@playwright/test";

test.use({
  viewport: {
    height: 900,
    width: 1600,
  },
});
//Check all working of navlinks in desktop
test("check all the working of navlinks", async ({ page }) => {
  //   test.setTimeout(90000);
  await page.goto("https://www.xenonstack.com/", {
    waitUntil: "domcontentloaded",
  });

  await page.getByRole("link", { name: "Foundry" }).click();

  await expect(
    page.getByRole("heading", { name: "Data and AI Foundry: Shaping" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "Neural AI" }).click();
  await expect(
    page.getByRole("heading", { name: "Accelerate, Optimize and" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "NexaStack" }).click();
  await expect(
    page.getByRole("heading", { name: "Build and Manage Inference" }),
  ).toBeVisible();

  await page.getByRole("link", { name: "ElixirData" }).click();
  await expect(
    page.getByRole("heading", { name: "ElixirData - Manage" }),
  ).toBeVisible();

  await page.locator("#headerblock").getByText("MetaSecure").click();

  await page.locator("#headerblock").getByText("Akira AI").click();

  await page.getByText("XAI", { exact: true }).click();
});

// Initial 4 links are working