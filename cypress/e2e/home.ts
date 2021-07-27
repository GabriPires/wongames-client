/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    // visitar a página
    cy.visit('/')

    // selecionou os banners
    cy.shouldRenderBanner()
    cy.shouldRenderShowcase({ name: 'New Games', highlight: false })
    cy.shouldRenderShowcase({ name: 'Most Popular Games', highlight: true })
    cy.shouldRenderShowcase({ name: 'Upcoming', highlight: true })
    cy.shouldRenderShowcase({ name: 'Free games', highlight: true })
  })
})
