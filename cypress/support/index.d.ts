// load type definitions from Cypress module
/// <reference types="cypress" />

type ShowcaseAttributes = {
  name: string
  highlight?: boolean
}

type FieldsAttributes = {
  label: string
  name: string | number
}

type User = {
  username: string
  email: string
  password: string
}

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit google page
     * @example cy.google()
     */
    google(): Chainable<Window>

    /**
     * Custom command to get element by data-cy values
     * @example cy.getByDataCy('selector')
     */
    getByDataCy(selector: string): Chainable<Element>

    /**
     * Custom command to get fields by label
     * @example cy.getFields([{ label: 'foo', name: 'foo' }])
     */
    getFields(fields: FieldsAttributes[]): Chainable<Element>

    /**
     * Custom command to check banner in page
     * @example cy.shouldRenderBanner()
     */
    shouldRenderBanner(): Chainable<Element>

    /**
     * Custom command to check showcase in page
     * @example cy.shouldRenderShowcase({ name: 'Showcase', highlight: true })
     */
    shouldRenderShowcase(attrs: ShowcaseAttributes): Chainable<Element>

    /**
     * Custom command to check if value is less than price
     * @example cy.shouldBeLessThan(100)
     */
    shouldBeLessThan(value: number): Chainable<Element>

    /**
     * Custom command to check if value is greater than price
     * @example cy.shouldBeGreaterThan(100)
     */
    shouldBeGreaterThan(value: number): Chainable<Element>

    /**
     * Custom command to register new user
     * @example cy.signUp({ username: 'foo', email: 'foo@email.com', password: 'foo123' })
     */
    signUp(user: User): Chainable<Element>

    /**
     * Custom command to register new user
     * @example cy.signIn({ email: 'foo@email.com', password: 'foo123' })
     */
    signIn(email?: string, password?: string): Chainable<Element>

    /**
     * Custom command to add a item to cart
     * @example cy.addToCartByIndex(0)
     */
    addToCartByIndex(index: number): Chainable<Element>

    /**
     * Custom command to add a item to cart
     * @example cy.removeFromCartByIndex(0)
     */
    removeFromCartByIndex(index: number): Chainable<Element>
  }
}
