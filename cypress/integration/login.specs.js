/// <reference types="Cypress" />

describe('Mental Health Login', () => {
  it('should not login', () => {
    const user = 'wrong@email.com';
    const password = 'wrongpassword';
    cy.visit('/');
    cy.get('.btn-header-users').click();
    cy.url().should('include', '/login');
    cy.get('#email').type(user);
    cy.get('#password').type(password);
    cy.get('[data-cy="login-button"]').click();
    cy.contains('Email o contraseña invalido');
  });

  it('should set an appointment', () => {
    const user = 'javier@marulanda.com';
    const password = '123';
    const date = '2022-04-29';
    const time = '08:00:00';
    cy.get('#email').clear();
    cy.get('#password').clear();
    cy.get('#email').type(user);
    cy.get('#password').type(password);
    cy.get('[data-cy="login-button"]').click();
    cy.saveLocalStorage();
    cy.get('[href="/doctors"]').click();
    cy.get('.doctors__box-container > :nth-child(1)').click();
    cy.url().should('include', '/perfil-doctor');
    cy.get('#date').type(date);
    cy.get(':nth-child(2) > .form-control').type(time);
    cy.get('.btn-appointment').click();
    cy.get('[data-cy="card-form"]');
    cy.getStripeElement('cardNumber').type('4242424242424242112512310020');
    cy.get('[data-cy="card-form"] > .btn-appointment').click();
    cy.url().should('include', '/viewerPatient');
  });
});
