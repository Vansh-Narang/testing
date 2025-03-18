import { test, expect } from '@playwright/test';

test('Check the / page loaded successfully', async ({ page }) => {
    await page.goto('https://www.xenonstack.com/');
    await page.getByRole('link', { name: 'xenonstack-logo' }).click();
    await expect(page.getByRole('link', { name: 'xenonstack-logo' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Build Agentic Systems for' })).toBeVisible();
    await expect(page.getByText('Enhancing AI Readiness')).toBeVisible();
    await expect(page.getByRole('contentinfo').locator('div').filter({ hasText: 'XenonStack is a Data Foundry' }).nth(3)).toBeVisible();
    await expect(page.locator('#product-main-section-three').getByRole('link', { name: 'Explore Further button-arrow' })).toBeVisible();
});