import { test, expect } from '@playwright/test';

test.beforeAll(async () => {
    console.log('This is beforeAll Hook.....')
})

test.afterAll(async () => {
     console.log('This is aftereAll Hook.....')
})

test.beforeEach(async () => {
    console.log('This is beforeEach Hook.....')
})

test.afterEach(async () => {
     console.log('This is aftereEach Hook.....')
})

test.describe.skip('Group 1', () => {  // skip or only
    test('Test1', async ({ page }) => {
 
        console.log('This is test 1....')
        
    })
    
    test('Test2', async ({page }) => {
    console.log('This is test 2......')
})
    
})

test.describe('Group 2', () => {
    
    test('Test3', async ({page }) => {
     console.log('This is test 3......')
    })
    
    test('Test4', async ({ page }) => {
     console.log('This is test 4......')
    
})

})



