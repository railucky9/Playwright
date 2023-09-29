import { test, expect } from '@playwright/test';

test('Single File', async ({ page }) => {


    await page.goto("https://www.foundit.in/");

    await page.waitForSelector('.mqfihd-upload');
    await page.locator('.mqfihd-upload').click();

    
    await page.waitForTimeout(5000);

    await page.locator('#file-upload').setInputFiles('tests\\Upload_Files\\adb command.txt')

    await page.waitForTimeout(5000);
})

test.only('Multiple Files', async ({ page }) => {
    await page.goto('https://davidwalsh.name/tutorials/demos/multiple-file-upload.php')
    await page.locator('#filesToUpload').setInputFiles(['tests/uploadFiles/testfile1.php',
        'tests\Upload_Files\testfile2.txt'
    ]);
    await page.waitForTimeout(3000);

    expect(await page.locator('fileList li:nth-child(1)')).toHaveText('testfile1.txt')

    expect(await page.locator('fileList li:nth-child(1)')).toHaveText('testfile2.txt')

    await page.waitForTimeout(3000);

    //Removing files 

    await page.locator('#filesToUpload').setInputFiles([]);

    expect(await page.locator('fileList li:nth-child(1)')).toHaveText('No Files');
    
    await page.waitForTimeout(3000);

    
   await page.waitForTimeout(3000);
})