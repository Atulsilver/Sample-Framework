// src/tests/BaseTestNoLogin.ts

import { test } from "@playwright/test";
import { WebUtils } from "../utils/WebUtils";
import loginData from "../testdata/loginData.json";
import { HomePage } from "../pages/HomePage";

 // Runs once before all tests in a file
 export function beforeAllHook() {
  test.beforeAll(async ({page}) => {
    console.log("🚀 Test Suite Started (beforeAll)");
    // Example use:
    // DB connection
    // Read config
   
  });
}


 // Runs before each test

 export function beforeEachHook() {
  test.beforeEach(async ({ page }) => {
    console.log("➡️ Before Each Test");

    // Example:
    // await page.goto("http://localhost:8888");
    const wu=new WebUtils(page);
    await wu.openURL(loginData.url);
  });
}


 //Runs after each test
 export function afterEachHook() {
  test.afterEach(async ({ page }, testInfo) => {
    console.log("⬅️ After Each Test");

    // Screenshot only on failure
    if (testInfo.status !== testInfo.expectedStatus) {
      if (!page.isClosed()) {
        await page.screenshot({
          path: `screenshots/FAIL-${testInfo.title}.png`,
          fullPage: true
        });
      }
    }

    // 🔒 SAFE LOGOUT
    if (page.isClosed()) {
      console.log("ℹ️ Page already closed, skipping logout");
      return;
    }

    try {
      const homePage = new HomePage(page);

      // logout only if logout button exists
      if (await homePage.isLogoutVisible?.()) {
        await homePage.logout();
      } else {
        console.log("ℹ️ Logout not visible, skipped");
      }
    } catch (error) {
      console.log("ℹ️ Logout skipped (user not logged in)");
    }
  });
}



 // Runs once after all tests in a file
 
 export function afterAllHook() {
  test.afterAll(async () => {
    console.log("🏁 Test Suite Finished (afterAll)");
    // Example:
    // Close DB
    // Cleanup
  });
}