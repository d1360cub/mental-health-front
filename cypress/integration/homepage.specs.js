/// <reference types="Cypress" />

describe('Mental Health Homepage Tests', () => {
  it('should render Homepage', () => {
    cy.visit('/');
    cy.get('[data-cy=\'home-component\']').should('have.length', 6);
  });

  it('should render Home Component', () => {
    cy.get('.home').should('have.length', 1);
    cy.contains('cerebro');
  });

  it('should render About Component', () => {
    cy.get('[data-cy=\'about-button\']').should('have.length', 1);
  });

  it('should render Services Component', () => {
    cy.contains('services');
    cy.get('.services__box').should('have.length', 6);
  });

  it('should render Doctors Component', () => {
    cy.get('#search').type('wrong search');
    cy.get('.doctors__box-container').should('not.be.visible');
    cy.get('#search').clear().type('ansiedad');
    cy.get('.doctors__box-container').should('be.visible');
  });
});
