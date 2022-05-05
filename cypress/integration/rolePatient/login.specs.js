const { faker } = require('@faker-js/faker');

describe('Mental Health Login as Patient', () => {
  it('Shoul Login with role Patient', () => {
    cy.visit('/');
    cy.get('.btn-header-users').click();
    cy.url().should('include', '/login');
    const user = 'endyleyms@gmail.com';
    const password = '12345';
    cy.get('#email').type(user);
    cy.get('#password').type(password);
    cy.get('[data-cy="login-button"]').click();
    cy.url().should('include', '/viewerPatient');
    cy.get('input').type('Hello, World');
    cy.get('[data-cy="button-add"]').click();
    cy.get(':nth-child(1) > .todo__state').click();
    cy.get('[href="/profile"]').click();
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const phone = faker.phone.phoneNumber();
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#phone').type(phone);
    cy.get('.btn__centered > .btn-appointment').click();
    cy.get('.deleteUserButton > .btn-appointment').click();
    cy.get(':nth-child(1) > .swal-button').click();
    cy.get('.swal-button').click();
    cy.get('.btn-header-users').click();
  });
});
