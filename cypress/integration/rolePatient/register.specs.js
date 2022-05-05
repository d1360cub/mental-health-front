const { faker } = require('@faker-js/faker');

describe('Mental Health Register Patient', () => {
  it('Shoul register with role Patient', () => {
    cy.visit('/');
    cy.get('.btn-header-users').click();
    cy.url().should('include', '/login');
    cy.get('.question').click();
    cy.contains('Registro');
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const randomPhoneNumber = faker.phone.phoneNumber();
    const randomEmail = faker.internet.email();
    const password = '123';
    cy.get('#firstName').clear().type(firstName);
    cy.get('#lastName').clear().type(lastName);
    cy.get('#phone').clear().type(randomPhoneNumber);
    cy.get('#email').clear().type(randomEmail);
    cy.get('#password').clear().type(password);
    cy.get('[data-cy="button-register"]').click();
    cy.get('.swal-modal').should('be.visible');
  });
});
