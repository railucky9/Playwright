import { test, expect } from '@playwright/test';

test('AssertionTest', async ({ page }) => {

    await page.goto('https://www.icicibank.com/');
    await page.locator('//a[@id="login-btn"]').click();

    await page.waitForTimeout(3000);


    await expect(await page.locator('//input[@id="DUMMY1"]')).toBeVisible();
    await expect(await page.locator('//input[@id="DUMMY1"]')).toBeEmpty();
    await expect(await page.locator('//input[@id="DUMMY1"]')).toBeEditable();
    await expect(await page.locator('//input[@id="DUMMY1"]')).toBeEnabled();

    await page.fill('//input[@id="DUMMY1"]', 'John');

    await page.waitForTimeout(3000);


});