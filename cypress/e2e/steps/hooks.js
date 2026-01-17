import { Before } from '@badeball/cypress-cucumber-preprocessor';
import { After } from "@badeball/cypress-cucumber-preprocessor";

Before({ tags: '@automatizando_e2e' }, () => {
  cy.login();
});

After(function (scenario) {
  const nome = scenario.pickle.name.replace(/ /g, "_");
  cy.screenshot(nome);
});