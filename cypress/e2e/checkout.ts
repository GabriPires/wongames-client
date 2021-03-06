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

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })

  describe.only('Paid Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy paid games', () => {
      // criar um usuario
      cy.visit('/sign-up')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`)

      // ir para explore page
      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      // filtrar jogos free
      cy.findByRole('radio', { name: /highest to lowest/i }).click()
      cy.url().should('contain', 'sort=price%3Adesc')

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

      // o botao de comprar deve estar desabilitado
      cy.findByRole('button', { name: /buy now/i }).should(
        'have.attr',
        'disabled'
      )

      // preencher com o cartaao de credito
      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1022')
      cy.fillElementsInput('cardCvc', '102')

      // clicar para comprar
      cy.findByRole('button', { name: /buy now/i }).click()

      // redirecionar para pagina de success
      cy.wait(2000)
      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)
      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/profile/orders')
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.signIn(user.email, user.password)
      cy.location('href').should(
        'eq',
        `${Cypress.config().baseUrl}/sign-in?callbackUrl=/profile/orders`
      )

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
