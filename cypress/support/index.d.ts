//load type definition from Cypress module
///<reference types="cypress" />

type User = {
  username: string
  email: string
  password: string
}

type ShowcaseAtributes = {
  name: string
  highlight?: boolean 
}

type FieldsAtributes = {
  label: string
  name: string | number
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to get element by data-cy
     * @example cy.getByDataCy('selector')
     */
     getByDataCy(selector: string): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>

    /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase()
     */
     shouldRenderShowcase(attrs: ShowcaseAtributes): Chainable<Element>
    
    /**
     * Custom command to get fields by label
     * @example cy.getFields([{ label: 'foo', name: 'foo' }])
     */
     getFields(fields: FieldsAtributes[]): Chainable<Element>

    /**
     * Custom command to check if value is greater than price
     * @example cy.shouldBeGreaterThan(/^\$\d+(\.\d{1,2})?/)
     */
     shouldBeGreaterThan(value: number): Chainable<Element>

    /**
     * Custom command to check if value is less than price
     * @example cy.shouldBeGreaterThan(/^\$\d+(\.\d{1,2})?/)
     */
     shouldBeLessThan(value: number): Chainable<Element>
    
    /**
     * Custom command to sign up
     * @example cy.signUp({ username: 'Edu', email: 'email@mail.com', password: '123456'})
     */
     signUp(user: User): Chainable<Element>

    /**
     * Custom command to sign in
     * @example cy.signUp({ email: 'email@mail.com', password: '123456'})
     */
     signIn(email?: string, password?: string): Chainable<Element>

    /**
     * Custom command to add item to cart by index
     * @example cy.addToCartByIndex(2)
     */
     addToCartByIndex(index: number): Chainable<Element>

    /**
     * Custom command to remove item from cart by index
     * @example cy.removeFromCartByIndex(2)
     */
     removeFromCartByIndex(index: number): Chainable<Element>
  }
}
