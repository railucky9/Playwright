import { test, expect } from '@playwright/test';

test('Bootstrao Drop Down', async ({ page }) => {

    await page.goto('https://www.irctc.co.in/nget/train-search');
    await page.locator('//div[@class="ng-tns-c65-12 ui-dropdown ui-widget ui-state-default ui-corner-all"]').click();

    //1

    // const options = await page.locator('//ul[@role="listbox"]//span');

    // await expect(options).toHaveCount(6);

    //2

    // const options = await page.$$('//ul[@role="listbox"]//span');
    // await expect(options.length).toBe(6)

    //3 select options from dropdown

    const options = await page.$$('//ul[@role="listbox"]//span');
    for (let option of options) {
        const value = await option.textContent();

       // console.log('Value is ', value);
        
        if (value.includes('PREMIUM TATKAL')) {
            await option.click();
        }
    }

    await page.waitForTimeout(3000)


})