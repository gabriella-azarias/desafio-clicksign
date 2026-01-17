Cypress.Commands.add('login', (username = 'test', password = 'test') => {
  cy.visit('/login');
  cy.get('[data-testid="username-textbox"]').type(username);
  cy.get('[data-testid="password-textbox"]').type(password);
  cy.get('[data-testid="login-button"]').click();
});

