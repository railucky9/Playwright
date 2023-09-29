import { test, expect } from '@playwright/test';

let page;

test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();

    await page.goto("https://demoblaze.com/index.html");

    //Login
    await page.locator('#login2').click();
    await page.locator('#loginusername').fill('pavanol');
    await page.locator('#loginpassword').fill('test@123')
    await page.locator('//button[normalize-space()="Log in"]').click();

     await page.waitForSelector('.hrefch');
});

test.afterEach(async () => {
  
    //Logout
    await page.locator('#logout2').click();
})
test('Home Page Test', async ({ page }) => {
       await page.waitForSelector('.hrefch');

    //Home Page
    const products = await page.$$('.hrefch')  
    expect(products).toHaveLength(9);       
    })
 
test('Add Product to cart Test', async ({ page }) => {

 

            //Login
     await page.locator('//a[normalize-space()="Samsung galaxy s6"]').click();
     await page.locator('//a[@class="btn btn-success btn-lg"]').click();

      await page.waitForTimeout(5000);
        
        //Add product to cart
        
     
        page.on('dialog', async dialog => {
            expect(dialog.message()).toContain('Product added.')
            await dialog.accept()
        })
        
})
      


