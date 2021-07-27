/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    // visitar a página
    cy.visit('/')

    // selecionou os banners
    cy.get('.slick-slider').within(() => {
      cy.findByRole('heading', { name: /townscaper/i })
      cy.findByRole('link', { name: /build your own city/i })

      cy.get('.slick-dots > :nth-child(2) > button').click()
      cy.wait(700)

      cy.findByRole('heading', { name: /cyberpunk 2077/i })
      cy.findByRole('link', { name: /buy now/i })
    })
  })
})
