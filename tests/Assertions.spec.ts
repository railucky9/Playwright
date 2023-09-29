import { test, expect } from '@playwright/test';

test('AssertionTest', async ({page}) => {

    await page.goto('https://demo.nopcommerce.com/register');

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register');

    await expect(page).toHaveTitle('nopCommerce demo store. Register');

    const logoElement = await page.locator('.header-logo');
    await expect(logoElement).toBeVisible()
    
    const searchStoreBox = await page.locator('#small-searchterms');
    await expect(searchStoreBox).toBeEnabled();

    const maleRadioButton = await page.locator('#gender-male');
    await maleRadioButton.click();
    await expect(maleRadioButton).toBeChecked();

    const newsLetter = await page.locator('#Newsletter');
    await expect(newsLetter).toBeChecked();

    const registerButton = await page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type', 'submit');

    await expect(await page.locator('.page-title h1')).toHaveText('Register'); //Full Text

    await expect(await page.locator('.page-title h1')).toContainText('Reg'); //Partial Text

    const emailInput = await page.locator('#Email');
    await emailInput.fill('test@123.com');
    await expect(emailInput).toHaveValue('test@123.com');

    const options = await page.locator('select[name="DateOfBirthMonth"]  option');
    await expect(options).toHaveCount(13);
    
})