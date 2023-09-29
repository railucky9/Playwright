import { test, expect } from '@playwright/test';

//only
// test.only('test1', async ({ page }) => {
     
//     console.log('this is test1')
// })
 
//skip
// test.skip('test2', async ({ page }) => {
     
//     console.log('this is test2')
// })

// test('test3', async ({ page, browserName }) => {
    
//     console.log('this is test 3')
//     if (browserName === 'chromium')
//     {
//         test.skip();
//         }
    
// })
 
//fixme
// test('test4', async ({page }) => {
//     test.fixme();
//     console.log('this is test 4..,')
// })

//Fail

// test('test5', async ({ page }) => {
//     test.fail()  //expect
//     console.log('this is test 5....')
//     expect(1).toBe(2);  //If both exp & actual is failed then test pass
// })

// test('test6', async ({ page, browserName }) => {

//     console.log('this is test 6....')
    
//     if (browserName === 'firefox') //exp
//     {
//         test.fail() //exp
//         }
    
//})  

//slow
test('test7', async ({page }) => {
       //test.slow()
     test.setTimeout(5000)
    await page.goto('https://demoblaze.com/index.html');

})
   
    

