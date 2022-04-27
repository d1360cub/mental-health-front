/* eslint-disable cypress/no-unnecessary-waiting */
/// <reference types="Cypress" />
const { faker } = require('@faker-js/faker');

describe('Mental Health Login', () => {
  it('should login if the role is doctor ', () => {
    const user = 'ana@moreno.com';
    const password = '123';
    const randomDescription = faker.lorem.paragraph();
    const lastName = faker.name.lastName();
    const randomPhoneNumber = faker.phone.phoneNumber();
    cy.visit('/');
    cy.get('.btn-header-users').click();
    cy.url().should('include', '/login');
    cy.get('#email').type(user);
    cy.get('#password').type(password);
    cy.get('[data-cy="login-button"]').click();
    cy.saveLocalStorage();
    cy.url().should('include', '/viewerDoctor');
    cy.get('[data-cy="button-log-out"]').contains(/salir/i);
    cy.get('.home-Welcome__message').contains(/bienvenid@ dr/i);
    cy.get('strong').contains(/tus proximas citas son :/i);
    cy.get('.home_content--citas').should('have.length', 1);
    cy.get(':nth-child(1) > .home-content__card--perfil > #H-clinica').click();
    cy.get(':nth-child(1) > .home-content__card--perfil > #modal > .popup > .container-text > form > :nth-child(1) > div > .textareaCH').type(`${randomDescription}`);
    cy.get(':nth-child(1) > .home-content__card--perfil > #modal > .popup > .container-text > form > :nth-child(1) > div > .button').click();
    cy.wait(3000);
    cy.get(':nth-child(1) > .home-content__card--perfil > #modal > .popup > .btn-close-popup').click();
    cy.get('.fc-timeGridDay-button').click();
    cy.get('[href="/profile"]').click();
    cy.get('[data-cy="updateAvatar"]').attachFile('avatar.jpg');
    cy.get('[data-cy="buttonUpdateAvatar"]').click();
    cy.get('#lastName').type(lastName);
    cy.get('#phone').type(randomPhoneNumber);
    cy.get('[data-cy="updateData"]').click();
  });
});
