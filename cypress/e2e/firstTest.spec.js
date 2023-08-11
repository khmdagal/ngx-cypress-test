/// <reference types="cypress"/>

describe("our first suite", () => {
  it("first test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    //find element by Tag Name
    cy.get("input");

    //find element by ID
    cy.get("#inputEmail");

    //find element by classnames
    cy.get(".input-full-width");

    //find element by attribute name
    cy.get("[placeholder]");

    //find element by attribute name and value
    cy.get("[placeholder='Email']");

    //find element by class value
    cy.get("[class='input-full-width size-medium shape-rectangle']");

    //tag name and attribute value
    cy.get("input[placeholder='Email']");

    //find two different attributes
    cy.get("[placeholder='Email'][type='email']");

    //find by tag name attribute with value and ID and class name
    cy.get("input[placeholder='Email']#inputEmail.input-full-width");

    //The most recommended way by Cypress - create your own locater
    cy.get("[data-cy='imputEmail1']");
  });

  it("second test", () => {
    cy.visit("/");
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();

    cy.get('[data-cy="signInButton"]')

    cy.contains('Sign in')

    cy.contains('[status="warning"]', 'Sign in')
    
    cy.get('#inputEmail3')
      .parents('form')
      .find('button')
      .should('contain', 'Sign in')
      .parents('form')
      .find('nb-checkbox')
      .click()
    
    
      //explain: hey cypress find nb-card that contains text "Horizontal form" and within that card find an web element type equals "email"
    // by using find command is used to find and element from parent element
    cy.contains('nb-card', 'Horizontal form').find('[type="email"]')
  })
});
