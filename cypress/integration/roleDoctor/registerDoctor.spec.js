/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="Cypress" />
const { faker } = require('@faker-js/faker');

describe('Mental Health Login', () => {
  it('should login if the role is doctor ', () => {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const randomEmail = faker.internet.email();
    const randomPhoneNumber = faker.phone.phoneNumber();
    const academic = faker.random.words();
    const areAtention = faker.lorem.slug();
    const description = faker.lorem.text(15);
    cy.visit('/');
    cy.get('.btn-header-users').click();
    cy.contains('Iniciar sesión');
    cy.get('.question').click();
    cy.contains('Registro');
    cy.get('[href="/doctor-warning"] > .btn-appointment').click();
    cy.url().should('include', '/doctor-warning');
    cy.get('[href="/doctor-signup"]').click();
    cy.url().should('include', '/doctor-signup');
    cy.get('#firstName').clear().type(firstName);
    cy.get('#lastName').clear().type(lastName);
    cy.get('#email').clear().type(randomEmail);
    cy.get('#password').clear().type('123');
    cy.get('#phone').clear().type(randomPhoneNumber);
    cy.get('#academic').clear().type(academic);
    cy.get('#atentionarea').clear().type(areAtention);
    cy.get('#description').clear().type(description);
    cy.get('#experience').clear().type(' 2 Años');
    cy.get('[data-cy="button-register"]').click();
    cy.get('.swal-modal').should('be.visible');
    cy.get(':nth-child(2) > .swal-button').click();
  });
});
