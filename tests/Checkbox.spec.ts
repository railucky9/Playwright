import { test, expect } from '@playwright/test';

test('Checkbox testing', async ({ page }) => {
    await page.goto('https://artoftesting.com/samplesiteforselenium');

    await page.locator('//input[@value="Automation"]').check();
    await expect(await page.locator('//input[@value="Automation"]')).toBeChecked();
    await expect(await page.locator('//input[@value="Automation"]').isChecked()).toBeTruthy();
    await expect(await page.locator('//input[@value="Performance"]').isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);

})