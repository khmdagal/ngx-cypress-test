/// <reference types="cypress"/>

import { onNavigationPage } from "../support/page_objects/navigationPage";
import { onFormLayoutsPage } from "./formLayoutsPage";

describe("Page Object Design Pattern -- Testing page objects", () => {
  beforeEach("Open application", () => {
    cy.visit("/");
  });
  it("verify navigation across the pages", () => {
    onNavigationPage.formLayoutPage();
    onNavigationPage.datePickerPage();
    onNavigationPage.toasterPage();
    onNavigationPage.smartTablesPage();
    onNavigationPage.tooltipsPage();
  });

  // ------------  VIDEO 33 End-to-End Flow With Page Objects  -------------------------
  it("should submit Inline and Basic form and select tomorrow date in the calender", () => {
    onNavigationPage.formLayoutPage();
    onFormLayoutsPage.submitInlineFormWithNameAndEmail("Ali", "test@test.com");
  });
});
