import { Given } from "@badeball/cypress-cucumber-preprocessor";

//#region Given
Given('que o usuário acessou o site Commit Quality', () => {
    cy.visit("/login");
});

Given("que o usuário está autenticado", () => {
  cy.login(Cypress.env("USER"), Cypress.env("PASS"));
});

Given("acessou o sistema com login válido", () => {
  cy.login(Cypress.env("USER"), Cypress.env("PASS"));
});
//#endergion 