/// <reference types = "cypress" />

import loc from "../../support/locators";
import "../../support/commandsContas";
describe("Should test at a functional level", () => {
  before(() => {
    cy.visit("https://barrigareact.wcaquino.me/");
    cy.get(loc.LOGIN.USER).type("a@a");
    cy.get(loc.LOGIN.PASSWORD).type("a");
    cy.get(loc.LOGIN.BTN_LOGIN).click();
    cy.get(loc.MESSAGE).should("contain", "Bem vindo");
  });

  it("Should create an account", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
    cy.get(loc.CONTAS.NOME).type("Conta de Teste");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "Conta inserida com sucesso");
  });

  it("Should update an account", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
    cy.xpath(loc.CONTAS.XP_BTN_UPDATE).click();
    cy.get(loc.CONTAS.NOME).clear().type("ATUALIZADO");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "Conta atualizada com sucesso");
  });

  it.only("Should not create an  account with same name", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
    cy.get(loc.CONTAS.NOME).clear().type("ATUALIZADO");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "code 400");
  });
  it("Should reset an account", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.RESET).click();
    cy.get(loc.MESSAGE).should("contain", "Dados resetados com sucesso");
  });

  it("Should exited an account", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.EXIT).click();
    cy.get(loc.MESSAGE).should("contain", "Até Logo");
  });

  it.only("Should delete an account", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
    cy.xpath(loc.CONTAS.XP_BTN_DELETE).click();
    cy.get(loc.MESSAGE).should("contain", "Conta excluida com sucesso");
  });
});
