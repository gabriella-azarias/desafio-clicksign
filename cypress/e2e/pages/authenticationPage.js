
class AuthenticationPage {

  visitLogin() {
    cy.visit('/login');
  }

  usernameInput() {
    return cy.get('[data-testid="username-textbox"]');
  }

  passwordInput() {
    return cy.get('[data-testid="password-textbox"]');
  }

  loginButton() {
    return cy.get('[data-testid="login-button"]');
  }

  fillCredentials(username = '', password = '') {
    this.usernameInput().clear().type(username);
    this.passwordInput().clear().type(password);
  }

  submitLogin() {
    this.loginButton().click();
  }

  navbarLoginLink() {
    return cy.get('[data-testid="navbar-login"]');
  }

  navbarLogoutButton() {
    return cy.get('[data-testid="navbar-logout"]');
  }

  submitLogout() {
    this.navbarLogoutButton().click();
  }

  shouldShowMessage(message) {
    cy.contains(message).should('be.visible');
  }

  shouldBeLoggedIn() {
    this.navbarLoginLink().should('not.exist');
    cy.contains('My Account').should('be.visible');
  }

  shouldBeLoggedOut() {
    this.navbarLoginLink().should('exist');
    this.navbarLogoutButton().should('not.exist');
  }
}

export const authenticationPage = new AuthenticationPage();