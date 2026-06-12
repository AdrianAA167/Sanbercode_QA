import loginPage from '../support/POM/loginPage'
import dashboardPage from '../support/POM/dashboardPage'
import loginData from "../fixtures/loginData.json"

describe('TC03 - Dashboard Page', () => {

    Cypress.on('uncaught:exception', () => {
        return false
    })

    it('TC01 - Click logout', () => {

        loginPage.loginValid(loginData.validUsername,loginData.validpassword)

        // LOGOUT
        cy.intercept('GET', '**/auth/logout').as('logout')

        dashboardPage.clickUserDropdown()
        dashboardPage.clickLogout()

        cy.wait('@logout')

        dashboardPage.verifyLoginPage()
    })

})