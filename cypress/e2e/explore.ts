///<reference path="../support/index.d.ts" />

import { priceFields, platformFields, sortFields, genreFields } from '../../src/utils/filter/fields'

describe('Explore Page', () => {
  before(() => {
    cy.visit('/games')
    cy.wait(4000)
  })
  it('should renders filters columns', () => {
    cy.findByRole('heading', { name: /Sort by price/i}).should('exist')
    cy.findByRole('heading', { name: /^price/i}).should('exist')
    cy.findByRole('heading', { name: /platforms/i}).should('exist')
    cy.findByRole('heading', { name: /genres/i}).should('exist')

    cy.getFields(priceFields)
    cy.getFields(platformFields)
    cy.getFields(sortFields)
    cy.getFields(genreFields)
  });

  it('should show 15 games and more games when show more is clicked', () => {
    cy.getByDataCy('game-card').should('have.length', 15)
    cy.findByRole('button', { name: /show more/i }).click()
    cy.getByDataCy('game-card').should('have.length', 30)
  });

  it('should order by price', () => {
    cy.findByText(/lowest to highest/i).click()
    cy.location('href').should('contain', 'sort=price%3Aasc')
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText('$0.00').should('exist')
    })

    cy.findByText(/highest to lowest/i).click()
    cy.location('href').should('contain', 'sort=price%3Adesc')

    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeGreaterThan(0)    
    })
  });

  it('should filter by price', () => {
    cy.findByText(/highest to lowest/i).click()
    
    cy.findByText("Free").click()
    cy.location('href').should('contain', 'price_lte=0')
    cy.getByDataCy('game-card').first().within(() => {
      cy.findByText('$0.00').should('exist')
    })
  
    cy.findByText("Under $50").click()
    cy.location('href').should('contain', 'price_lte=50')
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(50)
    })

    cy.findByText("Under $150").click()
    cy.location('href').should('contain', 'price_lte=150')
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(150)
    })

    cy.findByText("Under $250").click()
    cy.location('href').should('contain', 'price_lte=250')
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(250)
    })
    
    cy.findByText("Under $500").click()
    cy.location('href').should('contain', 'price_lte=500')
    cy.getByDataCy('game-card').first().within(() => {
      cy.shouldBeLessThan(500)
    })
  });

  it('should filter by platform and genres', () => {
    cy.findByText('Windows').click()
    cy.location('href').should('contain', 'platforms=windows')

    cy.findByText('Linux').click()
    cy.location('href').should('contain', 'platforms=linux')

    cy.findByText('Mac OS').click()
    cy.location('href').should('contain', 'platforms=mac')

    cy.findByText('Action').click()
    cy.location('href').should('contain', 'categories=action')
  });

  it('should return empty when no games match', () => {
    cy.visit('/games')
    cy.findByText('Free').click()
    cy.findByText('Linux').click()
    cy.getByDataCy('game-card').should('not.exist')
    cy.findByText(/We didn't find any games with this filter/i).should('exist')
    
  });
});