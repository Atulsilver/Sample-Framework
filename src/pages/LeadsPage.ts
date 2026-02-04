import { Page, Locator, expect } from "@playwright/test";
import { BasePage } from "./BasePage";
export class LeadsPage extends BasePage {



    // ---------------- LOCATORS ----------------
    private readonly createLeadBtn: Locator;


   // ------------------constructor------------------
    constructor(page: Page) {
        super(page);
        this.page = page;
        //this.webUtils = new WebUtils(page);
        this.createLeadBtn = page.locator("img[title='Create Lead...']");

    }

    // ---------------- ACTION METHODS ----------------

    // 1️⃣ Click on Create Lead button
    async clickCreateLeadBtn() {
        await this.webUtils.click(this.createLeadBtn);
    }


}