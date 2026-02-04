import { test, expect } from '@playwright/test';
import {LoginPage} from '../../pages/LoginPage.ts';
import {HomePage} from '../../pages/HomePage.ts';
import {CreateNewLeadPage} from './../../pages/CreateNewLeadPage.ts';
import {LeadsPage} from '../../pages/LeadsPage.ts';
import loginData from '../../testdata/loginData.json';
import createLeadData from '../../testdata/createLeadData.json';
import { afterEachHook, beforeEachHook } from '../BaseTestWithLogin.ts';
import { BasePage } from '../../pages/BasePage.ts';


beforeEachHook();
afterEachHook();
test.describe('VTiger Create Lead - Smoke Suite', () => {

  test('Smoke | Create Lead with mandatory fields', async ({ page }) => {

    // 3️⃣ Navigate to Leads
    const createNewLeadPage = new CreateNewLeadPage(page);
    
    await createNewLeadPage.openModule('Leads');

    await createNewLeadPage.clickCreateBtn();

    //await createNewLeadPage.createLead();

    // 5️⃣ Fill mandatory fields & save
    await createNewLeadPage.createLead(createLeadData.leads[0]);

    // 6️⃣ Verification (Lead created)
    await expect(page.locator('span.dvHeaderText')).toContainText(createLeadData.leads[0].lastName);

  });

});
