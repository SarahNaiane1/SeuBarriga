const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        CONTAS: '[href="/contas"]',
        SETTINGS: '[data-test=menu-settings]',
        RESET: '[href="/reset"]',
        EXIT: '[href="/logout"]',
        MOVIMENTACAO: '[data-test="menu-movimentacao"] > .fas'
    },
    CONTAS: {
        NOME: '[data-test="nome"]',
        BTN_SALVAR: '.btn',
        BTN_UPDATE:':nth-child(5) > :nth-child(2) > :nth-child(1) > .far',
        XP_BTN_UPDATE: "//table//td[contains(., 'Conta de Teste')]/..//i[@class='far fa-edit']",
        XP_BTN_DELETE: "//table//td[contains(., 'Conta de Teste')]/..//i[@class='far fa-trash-alt']",
        BTN_SAVE: '.btn'
        

    },
    MOVIMENTACAO: {
        DESCRICAO: '[data-test=descricao]',
        VALOR: '[data-test=valor]',
        INTERESSADO: '[data-test=envolvido]',
        CONTA: '[data-test=conta]',
        STATUS: '[data-test=status]',
        BTN_SALVAR: '.btn-primary'
    },
    EXTRATO: {
        LINHAS: '.list-group > li',
        FN_XP_BUSCA_ELEMENTO: (desc, value) => `//span[contains(., '${desc}')]/following-sibling::small[contains(., '${value}')]`,
        FN_XP_REMOVER_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='far fa-trash-alt']`,
        FN_XP_ALTERAR_ELEMENTO: conta => `//span[contains(., '${conta}')]/../../..//i[@class='fas fa-edit']`,
        FN_XP_LINHA: desc => `//span[contains(., '${desc}')]/../../../..`
    },
    MESSAGE: '.toast-message'    
}

export default locators;