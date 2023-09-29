import { test, expect } from '@playwright/test';

test('Soft assertions', async ({ page }) => {

    //hard assertion

     await page.goto("https://demoblaze.com/index.html")
    // await expect(page).toHaveTitle('STORE123');
    // await expect(page).toHaveURL('https://demoblaze.com/index.html');
    // await expect(page.locator('.navbar-brand')).toBeVisible();

    //Soft assertion


    await expect.soft(page).toHaveTitle('STORE123');
     await expect.soft(page).toHaveURL('https://demoblaze.com/index.html');
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();
    
})