import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { authenticationPage } from '../pages/authenticationPage';

//#region When
When("informa", (dataTable) => {
  const dados = dataTable.rowsHash();

  if (dados.Username) {
    cy.get('[data-testid="username-textbox"]').type(dados.Username);
  }

  if (dados.Password) {
    cy.get('[data-testid="password-textbox"]').type(dados.Password);
  }
});

When('clica em {string}', (button) => {
  if (button === 'Login') {
    return authenticationPage.submitLogin();
  }

  if (button === 'Logout') {
    return authenticationPage.submitLogout();
  }

  throw new Error(`Botão não mapeado: ${button}`);
});
//#endergion 

//#region Then
Then(
  'o usuário visualiza a mensagem {string} em vermelho',
  (message) => {
    authenticationPage.shouldShowMessage(message);
  }
);

Then('o acesso é concedido ao usuário', () => {
  authenticationPage.shouldBeLoggedIn();
});

Then('o usuário é redirecionado para a tela de login', () => {
  authenticationPage.shouldBeLoggedOut();
});

Then('a sessão do usuário é encerrada', () => {
  authenticationPage.shouldBeLoggedOut();
});
//#endergion 