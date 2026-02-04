import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import loginData from './../../testdata/loginData.json';
import { beforeEachHook, afterEachHook } from '../BaseTestNoLogin';

beforeEachHook();
afterEachHook();

test.describe('Smoke - Login', () => {

  test('Valid login works', async ({ page }) => {
    const login = new LoginPage(page);
    const home = new HomePage(page);

    await login.validLogin(
      loginData.validLogin.username,
      loginData.validLogin.password
    );

    await home.verifyHomePageDisplayed();
  });

});
