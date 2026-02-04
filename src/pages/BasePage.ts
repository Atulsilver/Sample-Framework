// src/pages/BasePage.ts
import { Page, Locator, expect } from "@playwright/test";
import { WebUtils } from "../utils/WebUtils";
export class BasePage {

  protected page: Page;
  protected webUtils: WebUtils;
  
  // ================= HEADER =================
  protected readonly globalSearchDropdown: Locator;
  protected readonly globalSearchInput: Locator;
  protected readonly globalSearchBtn: Locator;

  protected readonly userMenuIcon: Locator;
  protected readonly signOutLink: Locator;
  protected readonly myPreferencesLink: Locator;

  // ================= MODULE MENU =================
  protected readonly calendarTab: Locator;
  protected readonly leadsTab: Locator;
  protected readonly organizationsTab: Locator;
  protected readonly contactsTab: Locator;
  protected readonly opportunitiesTab: Locator;
  protected readonly productsTab: Locator;
  protected readonly documentsTab: Locator;
  protected readonly emailTab: Locator;
  protected readonly ticketsTab: Locator;
  protected readonly dashboardTab: Locator;

  // ================= TOOLBAR ICONS =================
  protected readonly createBtn: Locator;
  protected readonly editBtn: Locator;
  protected readonly deleteBtn: Locator;
  protected readonly searchIcon: Locator;
  protected readonly refreshBtn: Locator;
  protected readonly importBtn: Locator;
  protected readonly exportBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.webUtils = new WebUtils(page);
    // -------- HEADER --------
    this.globalSearchDropdown = page.locator("select[name='search_field']");
    this.globalSearchInput = page.locator("input[name='search_text']");
    this.globalSearchBtn = page.locator("input[name='search']");

    this.userMenuIcon = page.locator("img[src='themes/softed/images/user.PNG']");
    this.signOutLink = page.locator("a[href*='action=Logout']");
    this.myPreferencesLink = page.locator("a[href*='action=DetailView&module=Users']");

    
    // -------- MODULE MENU --------
    this.calendarTab = page.getByRole('link', { name: 'Calendar' });
    this.leadsTab = page.getByRole('link', { name: 'Leads' });
    this.organizationsTab = page.getByRole('link', { name: 'Organizations' });
    this.contactsTab = page.getByRole('link', { name: 'Contacts' });
    this.opportunitiesTab = page.getByRole('link', { name: 'Opportunities' });
    this.productsTab = page.getByRole('link', { name: 'Products' });
    this.documentsTab = page.getByRole('link', { name: 'Documents' });
    this.emailTab = page.getByRole('link', { name: 'Email' });
    this.ticketsTab = page.getByRole('link', { name: 'Trouble Tickets' });
    this.dashboardTab = page.getByRole('link', { name: 'Dashboard' });

    // -------- TOOLBAR --------
    this.createBtn = page.locator("img[title^='Create']");
    this.editBtn = page.locator("img[title='Edit']");
    this.deleteBtn = page.locator("img[title='Delete']");
    this.searchIcon = page.locator("img[title='Search']");
    this.refreshBtn = page.locator("img[title='Refresh']");
    this.importBtn = page.locator("img[title='Import']");
    this.exportBtn = page.locator("img[title='Export']");
  }

  // ================= HEADER ACTIONS =================
  async globalSearch(text: string) {
    await this.webUtils.fill(this.globalSearchInput, text);
    await this.webUtils.click(this.globalSearchBtn);
  }

  async logout() {
    await this.webUtils.hover(this.userMenuIcon);
    await this.webUtils.click(this.signOutLink);
  }

  async openMyPreferences() {
    await this.webUtils.hover(this.userMenuIcon);
    await this.webUtils.click(this.myPreferencesLink);
  }

  // ================= MODULE NAVIGATION All =================
  async openModule(moduleName: string) {
    await this.webUtils.click(this.page.getByRole("link", { name: moduleName }));
  }

  // ================= TOOLBAR ACTIONS =================
  async clickCreateBtn() {
    await this.webUtils.click(this.createBtn);
  }

  async clickEdit() {
    await this.webUtils.click(this.editBtn);
  }

  async clickDeleteBtn() {
    await this.webUtils.click(this.deleteBtn);
    await this.page.on("dialog", d => d.accept());
  }

  async clickRefresh() {
    await this.webUtils.click(this.refreshBtn);
  }
}
