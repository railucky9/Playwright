import { test, expect } from '@playwright/test';

test.skip('Alert with ok', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable Dialog window handling

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })
    await page.click("(//button[normalize-space()='Alert'])");

    await page.waitForTimeout(3000)

})

test.skip('Confirmation Dialog-Alert with OK and Cancel', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable Dialog window handling

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!');
        await dialog.accept(); //close by using OK buttons
        //await dialog.dismiss(); // close by using cancel
    })
    await page.click("(//button[normalize-space()='Confirm Box'])");

    await expect(page.locator("//p[@id='demo']")).toHaveText("You pressed OK!");

    await page.waitForTimeout(3000)

})

test('Prompt Dialog', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    //Enable Dialog window handling

    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:');
        expect(dialog.defaultValue()).toContain('Harry Potter')
        await dialog.accept('John'); // close by using ok button
      
    })
    await page.click("(//button[normalize-space()='Prompt'])");

    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello John! How are you today?");

    await page.waitForTimeout(3000)

})