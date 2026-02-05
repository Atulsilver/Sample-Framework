// src/tests/loginPageScripts.spec.ts
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import loginData from "../testdata/loginData.json";
import { afterEachHook, beforeEachHook } from "./BaseTestNoLogin";
beforeEachHook();
afterEachHook();

test.describe("VTiger Login Tests", () => {

  // -------------------------
  // 🔹 VALID LOGIN
  // -------------------------
  test("Valid Login with correct credentials @valid", async ({ page }) => {
    // Step 1: Initialize Page Objects
    const loginPage = new LoginPage(page);
    const homePage  = new HomePage(page);

    // Step 2: Perform valid login
    await loginPage.validLogin(loginData.validLogin.username,loginData.validLogin.password);

    // Step 3: Verify Home/Dashboard
    await homePage.verifyHomePageDisplayed();

  
  });

  // -------------------------
  // 🔹 INVALID LOGIN
  // -------------------------
  test("Invalid Login with wrong credentials @invalid", async ({ page }) => {

    const loginPage = new LoginPage(page);

    // Step 1: Open application
    //await loginPage.openApplication();

    // Step 2: Perform invalid login
    await loginPage.invalidLogin(
      loginData.invalidLogin[0].username,
      loginData.invalidLogin[0].password
    );

    // Step 3: Verify error message
    await loginPage.verifyInvalidLoginError(
      loginData.invalidLogin[0].errorMessage
    );



  });

});





// src/tests/LoginPageScripts.spec.ts

// import { test, expect } from "@playwright/test";
// import { LoginPage } from "../pages/LoginPage";
// import { HomePage } from "../pages/HomePage";
// import loginData from "../testdata/loginData.json";

// test.describe("VTiger Login Automation", () => {

//   test.beforeEach(async ({ page }) => {
//     const loginPage = new LoginPage(page);
//     await loginPage.openApplication();
//   });

//   // ===============================
//   // ✅ VALID LOGIN TEST
//   // ===============================
//   test("Valid Login with correct credentials", async ({ page }) => {

//     const loginPage = new LoginPage(page);
//     const homePage  = new HomePage(page);

//     await loginPage.validLogin(
//       loginData.valid.username,
//       loginData.valid.password
//     );

//     await homePage.verifyHomePage();
//     await homePage.logout();
//   });

//   // ===============================
//   // ❌ INVALID LOGIN TEST
//   // ===============================
//   test("Invalid Login with wrong credentials", async ({ page }) => {

//     const loginPage = new LoginPage(page);

//     await loginPage.invalidLogin(
//       loginData.invalid.username,
//       loginData.invalid.password
//     );

//     await loginPage.verifyInvalidLoginError(
//       loginData.invalid.errorMessage
//     );
//   });

// });
