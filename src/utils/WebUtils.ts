// src/utils/WebUtils.ts
import { Page, Locator, expect } from "@playwright/test";

export class WebUtils {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // =========================
  // 🌐 NAVIGATION METHODS
  // =========================

  async openURL(url: string) {
    await this.page.goto(url, {
      waitUntil: "domcontentloaded",
      timeout: 60000
    });
  }

  async getCurrentURL(): Promise<string> {
    return this.page.url();
  }

  async refreshPage() {
    await this.page.reload();
  }

  async goBack() {
    await this.page.goBack();
  }

  async goForward() {
    await this.page.goForward();
  }

  // =========================
  // 🔍 LOCATOR METHODS
  // =========================

  getLocator(selector: string): Locator {
    return this.page.locator(selector);
  }

  async waitForLocator(selector: string) {
    await this.page.locator(selector).waitFor();
  }

  // =========================
  // 🖱 CLICK ACTIONS
  // =========================

  async click(element: Locator) {
    await element.click();
  }

  async doubleClick(selector: string) {
    await this.page.locator(selector).dblclick();
  }

  async rightClick(selector: string) {
    await this.page.locator(selector).click({ button: "right" });
  }

  // =========================
  // ⌨ INPUT ACTIONS
  // =========================

  async type(selector: string, value: string) {
    await this.page.locator(selector).type(value);
  }

  async fill(selector: Locator, value: string) {
    await selector.fill(value);
  }

  async clear(selector: string) {
    await this.page.locator(selector).fill("");
  }

  // =========================
  // 🖱 MOUSE ACTIONS
  // =========================

  async hover(element: Locator) {
    await element.hover();
  }

  async dragAndDrop(source: string, target: string) {
    await this.page.locator(source).dragTo(
      this.page.locator(target)
    );
  }

  // =========================
  // 🖱 ADVANCED MOUSE ACTIONS
  // =========================

  async mouseMove(x: number, y: number) {
    await this.page.mouse.move(x, y);
  }

  async mouseDown() {
    await this.page.mouse.down();
  }

  async mouseUp() {
    await this.page.mouse.up();
  }

  async mouseClickByCoordinates(x: number, y: number) {
    await this.page.mouse.click(x, y);
  }

  async scrollUsingMouseWheel(deltaX: number, deltaY: number) {
    await this.page.mouse.wheel(deltaX, deltaY);
  }

    // =========================
  // 📜 SCROLL METHODS
  // =========================

  async scrollToTop() {
    await this.page.evaluate(() => window.scrollTo(0, 0));
  }

  async scrollToBottom() {
    await this.page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  }

  async scrollIntoView(selector: string) {
    await this.page.locator(selector).scrollIntoViewIfNeeded();
  }

    // =========================
  // 🔐 ELEMENT STATE CHECKS
  // =========================

  async isEnabled(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isEnabled();
  }

  async isDisabled(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isDisabled();
  }

  async isVisible(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isVisible();
  }




  // =========================
  // ⌨ KEYBOARD ACTIONS
  // =========================

  async pressKey(key: string) {
    await this.page.keyboard.press(key);
  }

  async typeUsingKeyboard(text: string) {
    await this.page.keyboard.type(text);
  }

  // =========================
  // ☑ CHECKBOX & RADIO
  // =========================

  async check(selector: string) {
    await this.page.locator(selector).check();
  }

  async uncheck(selector: string) {
    await this.page.locator(selector).uncheck();
  }

  async isChecked(selector: string): Promise<boolean> {
    return await this.page.locator(selector).isChecked();
  }

  // =========================
  // 🔽 DROPDOWN METHODS
  // =========================

  async selectByValue(element: string, value: string) {
    await this.page.locator(element).selectOption(value);
  }

  async selectByLabel(selector: Locator, label: string) {
    await selector.selectOption({ label });
  }

  async selectByIndex(selector: string, index: number) {
    await this.page.locator(selector).selectOption({ index });
  }

  // =========================
  // ⏳ WAIT METHODS
  // =========================

  async waitForTimeout(time: number) {
    await this.page.waitForTimeout(time);
  }

  async waitForURL(url: string | RegExp) {
    await this.page.waitForURL(url);
  }

  // =========================
  // ✅ ASSERTIONS
  // =========================

  async verifyVisible(selector: string) {
    await expect(this.page.locator(selector)).toBeVisible();
  }

  async verifyHidden(selector: string) {
    await expect(this.page.locator(selector)).toBeHidden();
  }

  async verifyText(selector: string, expectedText: string) {
    await expect(this.page.locator(selector)).toHaveText(expectedText);
  }

  async verifyContainsText(selector: string, text: string) {
    await expect(this.page.locator(selector)).toContainText(text);
  }

  async verifyURL(expectedURL: string | RegExp) {
    await expect(this.page).toHaveURL(expectedURL);
  }

  async verifyTitle(title: string) {
    await expect(this.page).toHaveTitle(title);
  }


    // =========================
  // 🌍 PAGE LEVEL ASSERTIONS
  // =========================

  async verifyPageContainsText(text: string) {
    await expect(this.page.locator("body")).toContainText(text);
  }

  async verifyPageNotContainsText(text: string) {
    await expect(this.page.locator("body")).not.toContainText(text);
  }


    // =========================
  // 📍 LOCATOR ASSERTIONS
  // =========================

  async verifyEnabled(selector: string) {
    await expect(this.page.locator(selector)).toBeEnabled();
  }

  async verifyDisabled(selector: string) {
    await expect(this.page.locator(selector)).toBeDisabled();
  }

  async verifyChecked(selector: string) {
    await expect(this.page.locator(selector)).toBeChecked();
  }

  async verifyUnChecked(selector: string) {
    await expect(this.page.locator(selector)).not.toBeChecked();
  }

  async verifyAttribute(
    selector: string,
    attribute: string,
    value: string
  ) {
    await expect(this.page.locator(selector)).toHaveAttribute(attribute, value);
  }



  // =========================
  // 📄 TEXT & ATTRIBUTE
  // =========================

  async getText(selector: string): Promise<string> {
    return await this.page.locator(selector).innerText();
  }

  async getAttribute(selector: string, attr: string) {
    return await this.page.locator(selector).getAttribute(attr);
  }

  // =========================
  // 📸 SCREENSHOT
  // =========================

  async takeScreenshot(name: string) {
    await this.page.screenshot({
      path: `screenshots/${name}.png`,
      fullPage: true
    });
  }

  // =========================
  // 🪟 FRAMES & POPUPS
  // =========================

  async switchToFrame(frameName: string) {
    return this.page.frame(frameName);
  }

  async handleAlert() {
    this.page.on("dialog", async dialog => {
      await dialog.accept();
    });
  }

    // =========================
  // 🪟 WINDOWS / TABS
  // =========================

  async waitForNewTabAndSwitch() {
    const newPage = await this.page.context().waitForEvent("page");
    await newPage.waitForLoadState();
    return newPage;
  }

  async getAllPages() {
    return this.page.context().pages();
  }



  // =========================
  // 📂 FILE UPLOAD
  // =========================

  async uploadFile(selector: string, filePath: string) {
    await this.page.locator(selector).setInputFiles(filePath);
  }

  async removeUploadedFile(selector: string) {
    await this.page.locator(selector).setInputFiles([]);
  }


    // =========================
    // 🌐 NETWORK WAITS
    // =========================

  async waitForResponse(urlPart: string) {
    await this.page.waitForResponse(response =>
      response.url().includes(urlPart)
    );
  }

  async waitForRequest(urlPart: string) {
    await this.page.waitForRequest(request =>
      request.url().includes(urlPart)
    );
  }


    // =========================
    // ❌ FAILURE SUPPORT
    // =========================

  async captureScreenshotOnFailure(testName: string) {
    await this.page.screenshot({
      path: `screenshots/failure-${testName}.png`,
      fullPage: true
    });
  }


  

    async handleFailure( page: Page,stepName: string,error: unknown) {
      await page.screenshot({
      path: `screenshots/${stepName}.png`,
      fullPage: true
    });
    throw error;
}







}
