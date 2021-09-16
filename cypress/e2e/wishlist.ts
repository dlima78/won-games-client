///<reference path="../support/index.d.ts" />

describe('Wishlist', () => {
  it('should add and remove games from wishlist ', () => {
    cy.visit('/wishlist')

    cy.signIn()
    cy.findByText(/your wishlist is empty/i)

    cy.getByDataCy('game-card').eq(2).within(() => {
      cy.findByLabelText(/add to wishlist/i).click()
    })

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').should('have.length', 1)
    })

    cy.getByDataCy('wishlist').within(() => {
      cy.getByDataCy('game-card').within(() => {
        cy.findByLabelText(/remove from wishlist/i).click()
      })
    })

    cy.findByText(/your wishlist is empty/i)    
  });
});