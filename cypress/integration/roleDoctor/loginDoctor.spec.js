/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="Cypress" />
const { faker } = require('@faker-js/faker');

describe('Mental Health Login', () => {
  it('should login if the role is doctor ', () => {
    const user = 'ana@moreno.com';
    const password = '123';
    const randomPhoneNumber = faker.lorem.paragraph();
    cy.visit('/');
    cy.get('.btn-header-users').click();
    cy.url().should('include', '/login');
    cy.get('#email').type(user);
    cy.get('#password').type(password);
    cy.get('[data-cy="login-button"]').click();
    cy.url().should('include', '/viewerDoctor');
    cy.get('[data-cy="button-log-out"]').contains(/salir/i);
    cy.get('.home-Welcome__message').contains(/bienvenid@ dr/i);
    cy.get('strong').contains(/tus proximas citas son :/i);
    cy.get('.home_content--citas').should('have.length', 1);
    cy.get(':nth-child(1) > .home-content__card--perfil > #H-clinica').click();
    cy.get(':nth-child(1) > .home-content__card--perfil > #modal > .popup > .container-text > form > :nth-child(1) > div > .textareaCH').type(`${randomPhoneNumber}`);
    cy.get(':nth-child(1) > .home-content__card--perfil > #modal > .popup > .container-text > form > :nth-child(1) > div > .button').click();
    cy.wait(3000);
    cy.get(':nth-child(1) > .home-content__card--perfil > #modal > .popup > .btn-close-popup').click();
    cy.get('.fc-timeGridDay-button').click();
  });
});
