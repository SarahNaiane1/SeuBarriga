
import loc from "../../support/locators";

describe("Should test at a functional level", () => {

  before(() => {
    cy.visit('https://barrigareact.wcaquino.me/')
    cy.get(loc.LOGIN.USER).type("a@a");
    cy.get(loc.LOGIN.PASSWORD).type("a");
    cy.get(loc.LOGIN.BTN_LOGIN).click();
    cy.get(loc.MESSAGE).should('contain', 'Bem vindo')

  });    

  it("Should create an account", () => {
    cy.get(loc.MENU.SETTINGS).click()
    cy.get(loc.MENU.CONTAS).click()
    cy.get(loc.CONTAS.NOME).type('Conta de Teste');
    cy.get(loc.CONTAS.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should("contain", "Conta inserida com sucesso");
  });

  it("Should update an account", () => {
    // cy.get(':nth-child(7) > :nth-child(2) > .fa-edit')  
    cy.get(loc.CONTAS.BTN_UPDATE).click();
    cy.get(loc.CONTAS.NOME).type(' ATUALIZADO');
    cy.get(loc.CONTAS.BTN_SALVAR).click();


  });
});
