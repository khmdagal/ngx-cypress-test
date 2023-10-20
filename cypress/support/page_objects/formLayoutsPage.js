import { from } from "core-js/core/array";

export class FormLayoutsPage {
  submitInlineFormWithNameAndEmail(name,email) {
    cy.contains("nb-card", "Inline form")
      .find("form")
      .then((form) => {
        cy.wrap(form).find('[placeholder="Jane Doe"]').type(name);
          cy.wrap(from).find('[placeholder="Email"]').type(email);
          cy.wrap(from).find('[type="checkbox"]').check({ force: true });
          cy.wrap(from).submit()
      });
  }
}

export const onFormLayoutsPage = new FormLayoutsPage();
