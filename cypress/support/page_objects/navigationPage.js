function selectGroupMenuItem(groupName) {
  cy.contains("a", groupName).then((menu) => {
    cy.wrap(menu)
      .find(".expand-state g g")
      .invoke("attr", "data-name")
      .then((attr) => {
        if (attr.includes("left")) {
          cy.wrap(menu).click();
        }
      });
  });
}

export class Navigation {
  /*
cy.contains("Forms").click();
cy.contains("Form Layouts").click();
if we only run the code above it will execute the first one
and then couldn't find the datePicker, because the the dropdown is collapsed
then we can solve this problem by refactoring and checking if this collapsed or not
we can put the following code inside each function but we don't want copy and past so
so we created a function and then call it.
*/

  formLayoutPage() {
    selectGroupMenuItem("Form");
    cy.contains("Form Layouts").click();
  }

  datePickerPage() {
    selectGroupMenuItem("Form");
    cy.contains("Datepicker").click();
  }

  toasterPage() {
    selectGroupMenuItem("Modal & Overlays");
    cy.contains("Toastr").click();
  }

  smartTablesPage() {
    selectGroupMenuItem("Tables & Data");
    cy.contains("Smart Table").click();
  }
  tooltipsPage() {
    selectGroupMenuItem("Modal & Overlays");
    cy.contains("Tooltip").click();
  }
}

export const onNavigationPage = new Navigation();
