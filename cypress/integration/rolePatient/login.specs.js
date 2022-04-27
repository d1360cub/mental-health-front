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
    cy.get('input').type('Prueba nueva tarea');
    cy.get('[data-cy="button-add"]').click();
    cy.get(':nth-child(1) > .todo__state').click();
    cy.get('[href="/profile"]').click();
    const firstName = 'Ammie';
    const lastName = 'Caro';
    const phone = 31234455;
    cy.get('#firstName').type(firstName);
    cy.get('#lastName').type(lastName);
    cy.get('#phone').type(phone);
    cy.get('.btn__centered > .btn-appointment').click();
    cy.url().should('include', '/viewerPatient');
    cy.get('.btn-header-users').click();
  });
});
