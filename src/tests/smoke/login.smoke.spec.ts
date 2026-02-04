// src/tests/smoke/login.smoke.spec.ts
import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { HomePage } from '../../pages/HomePage';
import loginData from './../../testdata/loginData.json';
import { beforeEachHook, afterEachHook } from '../BaseTestNoLogin';

beforeEachHook();
afterEachHook();

test.describe('Smoke - Login', () => {

  // 1️⃣ Login Page Load Check
  test('Login page loads successfully', async ({ page }) => {
    await expect(page.locator("input[name='user_name']")).toBeVisible();
    await expect(page.locator("input[name='user_password']")).toBeVisible();
    await expect(page.locator("#submitButton")).toBeVisible();
  });

  // 2️⃣ Valid Login
  test('Valid login works', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage  = new HomePage(page);

    await loginPage.validLogin(loginData.validLogin.username, loginData.validLogin.password);
    await homePage.verifyHomePageDisplayed();
  });

});
