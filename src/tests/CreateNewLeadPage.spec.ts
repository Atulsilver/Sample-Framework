// src/tests/CreateNewLeadPage.spec.ts
import { test } from "@playwright/test";
import createLeadData from "../testdata/createLeadData.json";
import { CreateNewLeadPage } from "../pages/CreateNewLeadPage";
import { BasePage } from "../pages/BasePage";
import { afterEachHook, beforeEachHook } from "./BaseTestWithLogin";


beforeEachHook();
afterEachHook();

test.describe.serial("Create Multiple Leads", () => {

  for (const lead of createLeadData.leads) {

    test(`Create ${lead.gender} Lead - ${lead.firstName}`, async ({ page }) => {

      const basePage = new BasePage(page);
      const createLeadPage = new CreateNewLeadPage(page);

      await test.step("Open Leads module", async () => {
        await basePage.openModule("Leads");
      });

      await test.step("Click Create Lead button", async () => {
        await basePage.clickCreateBtn();
      });

      await test.step(`Create Lead: ${lead.firstName}`, async () => {
        await createLeadPage.createLead(lead);
      });

    });

  }
});
