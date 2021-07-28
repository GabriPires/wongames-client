/// <reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist', () => {
    // acessa a pagina de wishlist nao logado
    cy.visit('/wishlist')

    // redirecionado e faz signIn
    cy.signIn()

    // verifica se a wishlist ta vazia
    cy.findByText(/your wishlist is empty/i).should('exist')

    // adiciona um jogo na wishlist
    cy.getByDataCy('game-card')
      .eq(0)
      .within(() => {
        cy.findAllByLabelText(/add to wishlist/i).click()
      })

    // verifica se o jogo esta la
    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    // remove esse jogo
    cy.getByDataCy('wishlist').within(() => {
      cy.findAllByLabelText(/remove from wishlist/i).click()
    })

    // verifica se a wishlist esta vazia
    cy.findByText(/your wishlist is empty/i).should('exist')
  })
})
