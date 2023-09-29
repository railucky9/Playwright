import { test, expect } from '@playwright/test';

test('Handle checkboxes', async ({ page }) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium');

    const checkboxLocators = [
        '//input[@value="Automation"]',
        '//input[@value="Performance"]'

    ];

    for (const locator of checkboxLocators) {
        await page.locator(locator).check();
    }
    for (const locator of checkboxLocators) {
        if (await page.locator(locator).isChecked()) {
            await page.locator(locator).uncheck();
        }
      }


    await page.waitForTimeout(3000);

    
})