import { test, expect } from '@playwright/test';

test('Home Page Test', async ({ page }) => {
    await page.goto("https://demoblaze.com/");

    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click();

    await page.waitForSelector('.hrefch');

    //Home Page
    const products = await page.$$('.hrefch')
    
    expect(products).toHaveLength(9);

    //Logout
    await page.locator('#logout2').click();

    await page.waitForTimeout(5000);

    

})

test('Add Product to cart Test', async ({ page }) => {
          await page.goto("https://demoblaze.com/");
            //Login
      await page.waitForTimeout(5000);
    await page.locator('#login2').click();

      await page.waitForTimeout(5000);
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click();
        
        //Add product to cart
    
    await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
     await page.locator('//a[@class="btn btn-success btn-lg"]').click();
     
     page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Product added.')
            await dialog.accept()
        })
        //Logout
    await page.locator('#logout2').click();

await page.waitForTimeout(5000);
        
})
    

        