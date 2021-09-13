//load type definition from Cypress module
///<reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>
  }
}
