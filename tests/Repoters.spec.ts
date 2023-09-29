import { test, expect } from '@playwright/test';

test('Test1', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await expect(page).toHaveTitle('STORE');

})

test('Test2', async ({ page }) => {
    await page.goto('https://practice.automationtesting.in');
    await expect(page).toHaveTitle('Automation Practice Site');
    
})
test('Test3', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/');
    await expect(page).toHaveTitle('nopCommerce demo store');
    
})

//npm install -g allure-commandline
// allure generate my-allure-results -o allure-report --clean
// allure open allure-report    
