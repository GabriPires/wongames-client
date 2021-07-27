/// <reference path="../support/index.d.ts" />

describe('Home Page', () => {
  it('should render home sections', () => {
    // visitar a página
    cy.visit('/')

    // selecionou os banners
    cy.shouldRenderBanner()
    cy.shouldRenderShowcase({ name: 'New Games' })
    cy.shouldRenderShowcase({ name: 'Most Popular Games' })
    cy.shouldRenderShowcase({ name: 'Upcoming' })
    cy.shouldRenderShowcase({ name: 'Free games' })
  })
})
