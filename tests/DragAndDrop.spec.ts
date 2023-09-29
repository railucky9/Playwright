import { test, expect } from '@playwright/test';

test('Drag And Drop', async ({ page }) => {
    await page.goto('https://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-3.html');

    const rome = await page.locator('#box6');
    const italy = await page.locator('#box106');

    //Approach 1

    // await rome.hover()
    // await page.mouse.down();

    // await italy.hover();
    // await page.mouse.up();

    //Approach 2

    await rome.dragTo(italy);

    await page.waitForTimeout(5000)

});