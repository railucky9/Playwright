import { test, expect } from '@playwright/test';

test('Mouse Double Click', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    await page.locator('//button[normalize-space()="Copy Text"]').scrollIntoViewIfNeeded();

    const btnCopy = await page.locator('//button[normalize-space()="Copy Text"]')

    //double click

    await btnCopy.dblclick();

    const f2 = await page.locator('#field2');

    await expect(f2).toHaveValue('Hello World!')

    await page.waitForTimeout(5000);


})