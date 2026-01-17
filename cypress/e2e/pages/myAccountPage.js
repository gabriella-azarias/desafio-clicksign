class MyAccountPage {
  goToMyAccount() {
    cy.contains("My Account").click();
    cy.url().should("include", "/account");
    cy.contains("h1", "My Account").should("be.visible");
  }

  openUpdateDetails() {
    cy.get('.toggle-details-button').click();
  }

  fillName(value) {
    cy.contains("label", "Name")
      .parent()
      .find("input")
      .should("be.visible")
      .clear()
      .type(value);
  }

  fillYoutubeName(value) {
    cy.contains("label", "Youtube")
      .parent()
      .find("input")
      .should("be.visible")
      .clear()
      .type(value);
  }

  clickSave() {
    cy.contains("button", "Save").click();
  }

  assertAccountDetails(rows) {
    rows.forEach((row) => {
      const campo = row["Campo"];
      const esperado = row["Valor Esperado"];

      switch (campo) {
        case "Name":
          cy.contains("li", "Name:").should("contain", esperado);
          break;
        case "Youtube Name":
          cy.contains("li", "Youtube Name:").should("contain", esperado);
          break;
        case "YouTube Link":
          cy.contains("a", "Youtube Link")
            .should("have.attr", "href")
            .and("include", "@commitquality");
          break;
        default:
          throw new Error(`Campo não mapeado: ${campo}`);
      }
    });
  }
}

export const myAccountPage = new MyAccountPage();