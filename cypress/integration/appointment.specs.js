/// <reference types="Cypress" />

describe('Cancel reservation', () => {
  it('should cancel a reservation', () => {
    const date = '2022-04-29';
    const time = '08:00:00';
    const user = 'jhon@zapata.com';
    const password = '123';
    cy.visit('/');
    cy.get('.header__navigation > [href="/#doctors"]').click();
    cy.url().should('include', '/#doctors');
    cy.get('.doctors__box-container > :nth-child(1)').click();
    cy.url().should('include', '/perfil-doctor');
    cy.get('.fotoperfil').should('have.length', 1);
    cy.get('#date').type(date);
    cy.get(':nth-child(2) > .form-control').type(time);
    cy.get('.btn-appointment').click();
    cy.get('.swal-modal').should('be.visible');
    cy.get(':nth-child(1) > .swal-button').click();
    cy.get('.swal-button').click();
    cy.get('.swal-modal').should('not.be.visible');
    cy.get('#date').type(date);
    cy.get(':nth-child(2) > .form-control').type(time);
    cy.get('.btn-appointment').click();
    cy.get(':nth-child(2) > .swal-button').click();
    cy.url().should('include', '/login');
    cy.get('#email').type(user);
    cy.get('#password').type(password);
    cy.get('[data-cy="login-button"]').click();
    cy.get('.sc-gsnTZi').should('be.visible');
    cy.get('.sc-eCYdqJ > [type="button"]').click();
    cy.get('#date').should('be.empty');
    cy.get(':nth-child(2) > .form-control').should('be.empty');
  });
});
