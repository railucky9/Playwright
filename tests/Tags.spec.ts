import { test, expect } from '@playwright/test';

test('test1@sanity', async ({ page }) => {
   
      console.log('this is my test1...')

})

test('test2@sanity', async ({ page }) => {
   
      console.log('this is my test2...')

})

test('test3@reg', async ({ page }) => {
   
      console.log('this is my test3...')

})
test('test4@reg', async ({ page }) => {
   
      console.log('this is my test4...')

})
test('test5@sanity@reg', async ({ page }) => {
   
      console.log('this is my test5...')

})

//npx playwright test tests/Tags.spec.ts --project chromium --headed -g "@sanity@reg"
//npx playwright test tests/Tags.spec.ts --project chromium --headed -g " @reg" -g-invert "sanity"