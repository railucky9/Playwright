import { test, expect } from '@playwright/test';

test('Built-inlocators', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    // page.getByPlaceholder

    await page.getByPlaceholder("Username").fill('Admin');
    await page.getByPlaceholder("Password").fill('admin123');

    await page.getByRole('button', { name: 'LOGIN' }).click(); 
    await expect(await page.getByText('Paul Collings')).toBeVisible();
    
  
});



