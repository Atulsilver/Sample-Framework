// src/pages/CreateNewLeadPage.ts
import { Page, Locator } from "@playwright/test";
import { BasePage } from "./BasePage";

export class CreateNewLeadPage extends BasePage {

  private salutation: Locator;
  private firstName: Locator;
  private lastName: Locator;
  private company: Locator;
  private leadStatus: Locator;
  private rating: Locator;
  private assignedToGroupRadio: Locator;
  private groupDropdown: Locator;
  private saveButton: Locator;

  constructor(page: Page) {
    super(page);

    this.salutation = page.locator("select[name='salutationtype']");
    this.firstName = page.locator("input[name='firstname']");
    this.lastName = page.locator("input[name='lastname']");
    this.company = page.locator("input[name='company']");
    this.leadStatus = page.locator("select[name='leadstatus']");
    this.rating = page.locator("select[name='rating']");
    this.assignedToGroupRadio = page.locator("input[value='T']");
    this.groupDropdown = page.locator("select[name='assigned_group_id']");
    this.saveButton = page.getByRole("button", { name: "Save" }).first();
  }

  async createLead(data: any) {
    await this.webUtils.selectByLabel(this.salutation, data.salutation);
    await this.webUtils.fill(this.firstName, data.firstName);
    await this.webUtils.fill(this.lastName, data.lastName);
    await this.webUtils.fill(this.company, data.company);

    await this.webUtils.selectByLabel(this.leadStatus, data.leadStatus);
    await this.webUtils.selectByLabel(this.rating, data.rating);

    await this.webUtils.click(this.assignedToGroupRadio);
    await this.webUtils.selectByLabel(this.groupDropdown, data.assignedTo);

    await this.webUtils.click(this.saveButton);
  }
}
