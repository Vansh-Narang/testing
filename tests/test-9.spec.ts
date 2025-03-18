import { test, expect } from "@playwright/test";

test.use({
    viewport: {
        height: 900,
        width: 1600,
    },
});

//Form submission in the get started button in the navbar
test.describe("Form Submit", () => {
    test("test successful form submission", async ({ page }) => {
        await page.goto("https://www.xenonstack.com/", {
            waitUntil: "domcontentloaded",
        });
        await page.getByRole("link", { name: "Get Started" }).click();
        await page
            .getByRole("textbox", { name: "Please enter your First Name" })
            .click();
        await page
            .getByRole("textbox", { name: "Please enter your First Name" })
            .fill("John");
        await page
            .getByRole("textbox", { name: "Please enter your Last Name" })
            .click();
        await page
            .getByRole("textbox", { name: "Please enter your Last Name" })
            .fill("Doe");
        await page
            .getByRole("textbox", { name: "Please enter your Business" })
            .click();
        await page
            .getByRole("textbox", { name: "Please enter your Business" })
            .fill("business@venture.com");
        await page
            .getByRole("textbox", { name: "Please enter your Contact" })
            .click();
        await page
            .getByRole("textbox", { name: "Please enter your Contact" })
            .fill("9087654321");
        await page
            .getByRole("textbox", { name: "Please enter your Company Name" })
            .click();
        await page
            .getByRole("textbox", { name: "Please enter your Company Name" })
            .fill("LargeFirm");
        await page
            .locator("#enterpriseIndustry")
            .selectOption("Financial Services");
        await page.getByText("Proceed Next").click();
        await page.getByText("XAI - Vision and AI Platform").click();
        await page.getByText("Mid Enterprises").dblclick();
        await page.getByText("Finance Operations").click();
        await page.getByText("POC Completed").click();
        await page.getByText("Aligning AI with business").click();
        await page.getByText("On Premises").click();
        await page.getByText("Microsoft Fabric").dblclick();
        await page
            .getByText("Collaborative Intelligence Agents as AI Teammates")
            .click();
        await page.getByText("Medium Regulated").click();
        await page.getByText("Submit", { exact: true }).click();
        await expect(
            page.getByText(
                "your request has been submitted successfully ! Our XenonStack Team will shortly"
            )
        ).toBeVisible();
        await page.getByRole("button", { name: "slider-cross-icon" }).click();
    });
});