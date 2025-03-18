//Footer check (all partners and flags)
import { test, expect } from "@playwright/test";
test("test partner icons visibility", async ({ page }) => {
    await page.goto("https://www.xenonstack.com/", {
        waitUntil: "domcontentloaded",
    });
    await expect(
        page.getByRole("img", { name: "iso-9001-certified" })
    ).toBeVisible();
    await expect(
        page.getByRole("img", { name: "iso-27001-certified" })
    ).toBeVisible();
    await expect(
        page.getByRole("img", { name: "aws-cloud-native-member-logo" })
    ).toBeVisible();
    await expect(
        page.getByRole("img", { name: "microsoft-silver-partner" })
    ).toBeVisible();
    await expect(page.getByRole("img", { name: "aws-partner" })).toBeVisible();
    await expect(
        page.getByRole("img", { name: "soc-certified" })
    ).toBeVisible();
    await expect(
        page.getByRole("img", { name: "power-bi-partner" })
    ).toBeVisible();
    await expect(
        page.getByRole("img", { name: "kubernetes-certified-partner" })
    ).toBeVisible();
    await expect(
        page.getByRole("img", { name: "snowflake-partner" })
    ).toBeVisible();
    await expect(
        page.getByRole("img", { name: "servicenow-partner" })
    ).toBeVisible();
});

test("test required terms and other metadata visibility", async ({
    page,
}) => {
    await page.goto("https://www.xenonstack.com/", {
        waitUntil: "domcontentloaded",
    });
    await expect(page.getByText("@2025 XenonStack - A Stack")).toBeVisible();
    await expect(page.getByRole("link", { name: "Privacy" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Terms" })).toBeVisible();
    await expect(page.getByRole("link", { name: "Trademark" })).toBeVisible();
    await expect(page.getByText("Global Presence :")).toBeVisible();
    await expect(
        page.getByRole("img", { name: "india-flag-icon" }).first()
    ).toBeVisible();
    await expect(page.getByText("USA")).toBeVisible();
    await expect(
        page.getByRole("img", { name: "india-flag-icon" }).nth(1)
    ).toBeVisible();
    await expect(page.getByText("Dubai")).toBeVisible();
    await expect(
        page.getByRole("img", { name: "india-flag-icon" }).nth(2)
    ).toBeVisible();
    await expect(page.getByText("India")).toBeVisible();
    await expect(
        page.getByRole("img", { name: "india-flag-icon" }).nth(3)
    ).toBeVisible();
    await expect(page.getByText("UK")).toBeVisible();
    await expect(
        page.getByRole("img", { name: "india-flag-icon" }).nth(4)
    ).toBeVisible();
    await expect(page.getByText("Australia")).toBeVisible();
});