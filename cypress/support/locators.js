const locators = {
    LOGIN: {
        USER: '[data-test=email]',
        PASSWORD: '[data-test=passwd]',
        BTN_LOGIN: '.btn'
    },
    MENU: {
        CONTAS: '[href="/contas"]',
        SETTINGS: '[data-test=menu-settings]'
    },
    CONTAS: {
        NOME: '[data-test="nome"]',
        BTN_SALVAR: '.btn',
        BTN_UPDATE:  ':nth-child(1) > :nth-child(2) > :nth-child(1) > .far',
        BTN_SAVE: '.btn'

    },
    MESSAGE: '.toast-message'    
}

export default locators;