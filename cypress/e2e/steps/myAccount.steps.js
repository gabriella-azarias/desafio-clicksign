import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { myAccountPage } from "../pages/myAccountPage";

//#region When
When('preenche os campos {string} e {string} com novos valores', (campo1, campo2) => {
  myAccountPage.openUpdateDetails();

  if (campo1 === "Name") myAccountPage.fillName("Teste Quality");
  if (campo2 === "Youtube") myAccountPage.fillYoutubeName("Teste Quality");
});

When('solicita {string}', (botao) => {
  if (botao === "Save") myAccountPage.clickSave();
});
//#endergion 

//#region Then
Then("os detalhes da conta são exibidos", (dataTable) => {
  myAccountPage.assertAccountDetails(dataTable.hashes());
});

Then("visualiza", (dataTable) => {
  myAccountPage.assertAccountDetails(dataTable.hashes());
});
//#endergion 

//#region Multi Bindings
Given('que acessa a seção {string}', acessarSecao);
When('acessa a seção {string}', acessarSecao);

function acessarSecao(secao) {
  if (secao === "My Account") {
    myAccountPage.goToMyAccount();
  }
}
//#endergion