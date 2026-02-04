// src/pages/HomePage.ts
import { Page, Locator, expect } from "@playwright/test";
//import { WebUtils } from "../utils/WebUtils";
import { BasePage } from "./BasePage";

export class HomePage extends BasePage {

protected page: Page;
  //private webUtils: WebUtils;
  // ---------------- LOCATORS ----------------
  private readonly homeTab: Locator;
  private readonly dashboardHeader: Locator;
  // private readonly userMenuIcon: Locator;
  // private readonly logoutLink: Locator;
  // private readonly quickCreateDropdown: Locator;
  // private readonly calendarLink: Locator;
  // private readonly searchBox: Locator;

  constructor(page: Page) {
    super(page);
    this.page = page;
     //this.webUtils = new WebUtils(page);

    //super(page);

    // Home / Dashboard specific locators
    this.homeTab = page.locator("a[href='index.php?action=index&module=Home']");
    this.dashboardHeader = page.locator("td.moduleName");
   // this.userMenuIcon = page.locator("img[src='themes/softed/images/user.PNG']");
    // this.logoutLink = page.locator("a[href='index.php?module=Users&action=Logout']");
    // this.quickCreateDropdown = page.locator("select[name='quickcreate']");
    // this.calendarLink = page.locator("a[href='index.php?module=Calendar&action=index']");
    // this.searchBox = page.locator("input[name='search_text']");
  }

  // ---------------- ACTION METHODS ----------------

  // 1️⃣ Verify user is on Home / Dashboard
  async verifyHomePageDisplayed() {
    await expect(this.homeTab).toBeVisible();
    await expect(this.dashboardHeader).toContainText("Home");
  }

  // // 2️⃣ Click on Home tab
  // async clickHomeTab() {
  //   await this.webUtils.click(this.homeTab);
  // }

  // // 3️⃣ Search from global search (dashboard feature)
  // async globalSearch(searchText: string) {
  //   await this.webUtils.fill(this.searchBox, searchText);
  //   await this.searchBox.press("Enter");
  // }

  // // 4️⃣ Open Calendar from Home page
  // async openCalendar() {
  //   await this.webUtils.click(this.calendarLink);
  // }

  // // 5️⃣ Use Quick Create dropdown (Home only feature)
  // async quickCreate(option: string) {
  //   await this.webUtils.selectByValue(this.quickCreateDropdown, option);
  // }

  // 6️⃣ Logout (Home page only)
  // async logout() {
  //   await this.webUtils.hover(this.userMenuIcon);
  //   await this.webUtils.click(this.logoutLink);
  // }

}
