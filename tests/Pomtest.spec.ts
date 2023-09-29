import { test, expect, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('Page Object Model', async ({ page }) => {

  //Login

  const login = new LoginPage(page);
  await login.gotoLoginButton()
  await login.login('pavanol', 'test@123');
  await page.waitForTimeout(3000);



  // Home

  const home = new HomePage(page);
  await home.addProductToCart('Nexus 6');
  await page.waitForTimeout(3000);
  await home.gotoCart();

  //Cart

  const cart = new CartPage(page)
  await page.waitForTimeout(3000);
  await cart.checkProductInCart('Nexus 6')
  const status = await cart.checkProductInCart('Nexus 6')
  expect(await status).toBe(true);

})

//npx playwright test tests/Pomtest.spec.ts --project chromium --headed --retries=1