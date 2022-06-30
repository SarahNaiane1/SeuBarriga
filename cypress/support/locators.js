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
        EXIT: '[href="/logout"]'
    },
    CONTAS: {
        NOME: '[data-test="nome"]',
        BTN_SALVAR: '.btn',
        BTN_UPDATE:':nth-child(5) > :nth-child(2) > :nth-child(1) > .far',
        XP_BTN_UPDATE: "//table//td[contains(., 'Conta de Teste')]/..//i[@class='far fa-edit']",
        XP_BTN_DELETE: "//table//td[contains(., 'Conta de Teste')]/..//i[@class='far fa-trash-alt']",
        BTN_SAVE: '.btn'
        

    },
    MESSAGE: '.toast-message'    
}

export default locators;