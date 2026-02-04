// src/tests/BaseTestWithLogin.ts

import { test } from "@playwright/test";
import { WebUtils } from "../utils/WebUtils";
import loginData from "../testdata/loginData.json";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";


 //Runs once before all tests in a file
 export function beforeAllHook() {
  test.beforeAll(async ({page}) => {
    console.log("➡️ Test Suite Started (beforeAll)");
    // Example use:
    // DB connection
    // Read config
  
  });
}

 // Runs before each test

 export function beforeEachHook() {
  test.beforeEach(async ({ page }) => {
    console.log("➡️ Before Each Test");

    const wu=new WebUtils(page);
    await wu.openURL(loginData.url);
    const loginPage = new LoginPage(page);
    await loginPage.validLogin(loginData.validLogin.username, loginData.validLogin.password);
  });
}


 //Runs after each test
 export function afterEachHook() {
  test.afterEach(async ({ page }, testInfo) => {
    console.log("⬅️ After Each Test");

    if (testInfo.status !== testInfo.expectedStatus) {
      await page.screenshot({
        path: `screenshots/FAIL-${testInfo.title}.png`,
        fullPage: true
      });
    }
   
  });
}



 //Runs once after all tests in a file
 
 export function afterAllHook() {
  test.afterAll(async () => {
    console.log("🏁 Test Suite Finished (afterAll)");
    // Example:
    // Close DB
    // Cleanup
  });
}
   
