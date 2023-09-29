import { test, expect } from '@playwright/test';

test("Locator", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");

   // await page.locator('id=login2').click();
    
    await page.waitForSelector('id=login2');
    await page.click('id=login2');

    await page.waitForSelector('#loginusername');
    console.log('kkk');

    //provide username  -CSS
   // await page.locator('#loginusername').fill('Shyam');
    await page.fill('#loginusername', 'Shyam');
    await page.fill("//input[@id='loginpassword']", "Ram");
    await page.click('//button[normalize-space()="Log in"]');
    const closelink =  await page.locator('//div[@id="logInModal"]//button[@type="button"][normalize-space()="Close"]');
 
    await expect(closelink).toBeVisible();

    


    
})