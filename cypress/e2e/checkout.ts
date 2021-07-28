/// <reference path="../support/index.d.ts" />

import { createUser, User } from '../support/generate'

describe('Checkou', () => {
  let user: User
  describe('Free Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy free games', () => {
      // criar um usuario
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      // ir para explore page
      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      // filtrar jogos free
      cy.findByRole('radio', { name: /free/i }).click()
      cy.url().should('contain', 'price_lte=0')

      // adicionar o jogo no carrinho
      cy.addToCartByIndex(0)

      // verificar se o carrinho tem um jogo
      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()

      // clicar para fazer a compra
      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      // encontrara um texto de so jogos free
      cy.findByText(/Only free games, click buy and enjoy!/i).should('exist')

      // clicar para comprar
      cy.findByRole('button', { name: /buy now/i }).click()

      // redirecionar para pagina de success
      cy.wait(2000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)
      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })
  })

  describe('Paid Games', () => {})
})
