// src/pages/LoginPage.ts

import { Page, Locator, expect } from "@playwright/test";
//import { WebUtils } from "../utils/WebUtils";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    //protected page: Page;
    //private webUtils: WebUtils;


  // 🔹 Locators 
  protected readonly usernameInput: Locator;
  protected readonly passwordInput: Locator;
  protected readonly loginButton: Locator;
  protected readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
   
    this.usernameInput = page.locator("input[name='user_name']");
    this.passwordInput = page.locator("input[name='user_password']");
    this.loginButton   = page.locator("#submitButton");
    this.errorMessage  = page.locator(".errorMessage"); 
    
  }

  // // 🔹 Open Application
  //   async openApplication() {
  //   await this.page.goto("http://localhost:8888/");
  // }

  // 🔹 Common method to enter credentials
  private async enterCredentials(username: string, password: string) {
    await this.webUtils.fill(this.usernameInput, username);
    await this.webUtils.fill(this.passwordInput, password);
    //await this.webUtils.click(this.loginButton);
    // await this.usernameInput.fill(username);
    // await this.passwordInput.fill(password);
  }

  // ✅ VALID LOGIN
  async validLogin(username: string, password: string) {
    await this.enterCredentials(username, password);
    await this.webUtils.click(this.loginButton);

    // success validation
    //await expect(this.page).toHaveURL(/index.php/);
  }

  // ❌ INVALID LOGIN
  async invalidLogin(username: string, password: string) {
    await this.enterCredentials(username, password);
    await this.webUtils.click(this.loginButton);
  }

  // 🔹 Validate error message for invalid login
  async verifyInvalidLoginError(expectedError: string) {
    await expect(this.errorMessage).toBeVisible();
    await expect(this.errorMessage).toContainText(expectedError);
  }
}
