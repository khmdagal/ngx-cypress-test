/// <reference types="cypress"/>

import { onNavigationPage } from "../support/page_objects/navigationPage";

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
});
