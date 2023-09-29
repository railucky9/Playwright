import { test, expect } from '@playwright/test';

test('Hidden Drop Down', async ({ page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

   await page.waitForLoadState('domcontentloaded');
    
  

    await page.locator('[name="username"]').fill('Admin');
    await page.locator('[name="password"]').fill('admin123')
    await page.locator('[type="submit"]').click();
   
    await page.locator('//span[normalize-space()="PIM"]').click();
   //click on dropdown
    
    await page.locator('//div[3]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]');
    
    //waiting for option

    await page.waitForTimeout(3000);

    const options = await page.$$("//div[@role='listbox']//span");

    for (let option of options) {
        const jobTitle = await option.textContent();
       // console.log(jobTitle);
        
        if (jobTitle.includes('QA Engineer')) {
            await option.click();
            break;
        }
    }

   


})