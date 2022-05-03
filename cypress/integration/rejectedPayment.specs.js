/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="Cypress" />

describe('Reject payment', () => {
  it('should reject a payment because of wrong card number', () => {
    const date = '2022-05-13';
    const time = '08:00:00';
    const user = 'ana@escobar.com';
    const password = '123';
    cy.visit('/login');
    cy.get('#email').type(user);
    cy.get('#password').type(password);
    cy.get('[data-cy="login-button"]').click();
    cy.saveLocalStorage();
    cy.get('[data-cy="home-component"]').contains('Citas');
    cy.get('[href="/doctors"]').click();
    cy.get('.doctors__box-container > :nth-child(6)').click();
    cy.url().should('include', '/perfil-doctor');
    cy.get('#date').type(date);
    cy.get(':nth-child(2) > .form-control').type(time);
    cy.get('.btn-appointment').click();
    cy.get('.sc-gsnTZi').should('be.visible');
    cy.get('[data-cy="card-form"]');
    cy.getStripeElement('cardNumber').type('4000000000000002112512310020');
    cy.get('[data-cy="card-form"] > .btn-appointment').click();
    cy.wait(3000);
    cy.get('.swal-modal').should('be.visible');
    cy.get('.swal-button').click();
    cy.get('.swal-modal').should('not.be.visible');
    cy.getStripeElement('cardNumber').clear();
    cy.getStripeElement('cardNumber').type('4000000760000002');
    cy.get('[data-cy="card-form"] > .btn-appointment').click();
    cy.url().should('include', '/viewerPatient');
  });
});
