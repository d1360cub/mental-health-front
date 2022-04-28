describe('Mental Health Register Patient', () => {
  it('Shoul register with role Patient', () => {
    cy.visit('/');
    cy.get('.btn-header-users').click();
    cy.url().should('include', '/login');
    cy.get('.question').click();
    cy.contains('Registro');
    const firstName = 'Oscar';
    const lastName = 'Perez';
    const phone = 314567890;
    const email = 'oscar@perez.com';
    const password = '123';
    cy.get('#firstName').clear().type(firstName);
    cy.get('#lastName').clear().type(lastName);
    cy.get('#phone').clear().type(phone);
    cy.get('#email').clear().type(email);
    cy.get('#password').clear().type(password);
    cy.get('[data-cy="button-register"]').click();
    cy.get('.swal-modal').should('be.visible');
  });
});
