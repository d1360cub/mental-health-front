/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="Cypress" />

describe('Mental Health Login', () => {
  it('should login if the role is doctor ', () => {
    const user = 'alexsuarez737+admin@gmail.com';
    const password = '123';
    cy.visit('/');
    cy.get('.btn-header-users').click();
    cy.url().should('include', '/login');
    cy.get('#email').clear().type(user);
    cy.get('#password').clear().type(password);
    cy.get('[data-cy="login-button"]').click();
    cy.get(':nth-child(4) > .MuiTableCell-alignCenter > [data-testid="DeleteForeverSharpIcon"] > path').click();
    cy.get(':nth-child(1) > .swal-button').click();
    cy.get('[data-testid="KeyboardArrowRightIcon"]').click();
    cy.get('[data-testid="KeyboardArrowRightIcon"]').click();
    cy.get('[data-testid="KeyboardArrowRightIcon"]').click();
    cy.get(':nth-child(2) > .MuiTableCell-alignCenter > [data-testid="DeleteForeverSharpIcon"]').click();
    cy.get(':nth-child(2) > .swal-button').click();
    cy.get(':nth-child(4) > .MuiTableCell-alignCenter > [data-testid="DeleteForeverSharpIcon"]').click();
    cy.get(':nth-child(2) > .swal-button').click();
    cy.get('[data-cy="button-log-out"]').click();
  });
});
