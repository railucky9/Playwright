import { test, expect } from '@playwright/test';

test('Mouse hover', async ({ page }) => {

    await page.goto('https://www.icicibank.com/');

    const accounts = await page.locator('//span[normalize-space()="Accounts"]');
    const cards = await page.locator('//span[@class="m-text"][normalize-space()="Cards"]');

    //mouse hover

    await accounts.hover();

      await page.waitForTimeout(5000);
    await cards.hover();

    await page.waitForTimeout(5000);

})