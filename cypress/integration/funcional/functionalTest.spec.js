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

  it("Should not create an  account with same name", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
    cy.get(loc.CONTAS.NOME).clear().type("ATUALIZADO");
    cy.get(loc.CONTAS.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "code 400");
  });

  it("Should delete an account", () => {
    cy.get(loc.MENU.SETTINGS).click();
    cy.get(loc.MENU.CONTAS).click();
    cy.xpath(loc.CONTAS.XP_BTN_DELETE).click();
    cy.get(loc.MESSAGE).should("contain", "Conta excluida com sucesso");
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

  it("Should create a transaction", () => {
    cy.get(loc.MENU.MOVIMENTACAO).click();
    cy.get(loc.MOVIMENTACAO.DESCRICAO).type("Desc");
    cy.get(loc.MOVIMENTACAO.VALOR).type("123");
    cy.get(loc.MOVIMENTACAO.INTERESSADO).type("Inter");
    cy.get(loc.MOVIMENTACAO.CONTA).select("Conta para movimentacoes");
    cy.get(loc.MOVIMENTACAO.STATUS).click();
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click();
    cy.get(loc.MESSAGE).should("contain", "sucesso");
    cy.get(loc.EXTRATO.LINHAS).should("have.length", 7);
    cy.xpath(loc.EXTRATO.FN_XP_BUSCA_ELEMENTO("Desc", "123")).should("exist");
  });


  it('Should get balance', () => {
    cy.get(loc.MENU.HOME).click()
    cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '534,00')

    cy.get(loc.MENU.EXTRATO).click()
    cy.xpath(loc.EXTRATO.FN_XP_ALTERAR_ELEMENTO('Movimentacao 1, calculo saldo')).click()
    // cy.wait(1000)
    cy.get(loc.MOVIMENTACAO.DESCRICAO).should('have.value', 'Movimentacao 1, calculo saldo')
    cy.get(loc.MOVIMENTACAO.STATUS).click()
    cy.get(loc.MOVIMENTACAO.BTN_SALVAR).click()
    cy.get(loc.MESSAGE).should('contain', 'sucesso')

    cy.get(loc.MENU.HOME).click()
    cy.xpath(loc.SALDO.FN_XP_SALDO_CONTA('Conta para saldo')).should('contain', '4.034,00')
})
  it('Should remove a transaction', () => {
    cy.get(loc.MENU.EXTRATO).click()
    cy.xpath(loc.EXTRATO.FN_XP_REMOVER_ELEMENTO('Movimentacao para exclusao')).click()
    cy.get(loc.MESSAGE).should('contain', 'sucesso')
})
});
