import loginPage from '../support/POM/loginPage'
import forgotPasswordPage from '../support/POM/forgotPasswordPage'
import loginData from "../fixtures/loginData.json"

describe('TS02 - Forgot your password berhasil', () => {

    beforeEach(() => {
        loginPage.visit()

        cy.wait(3000)
    })

    it('TC001 - click tombol "Forgot your password"', () => {

        cy.intercept('GET', '**/requestPasswordResetCode')
            .as('requestpassword')

        loginPage.clicklinkForgotpassword()

        cy.wait('@requestpassword')
            .its('response.statusCode')
            .should('eq', 200)

        forgotPasswordPage.verifyResetPasswordPage()
    })

    it('TC002 - click tombol cancel di reset password', () => {

        loginPage.clicklinkForgotpassword()

        cy.intercept('GET', '**/auth/login')
            .as('login')

        forgotPasswordPage.clickButtonCancel()

        cy.wait('@login')
            .its('response.statusCode')
            .should('eq', 200)

        forgotPasswordPage.verifyBackToLoginPage()
    })

    it('TC003 - click tombol Reset Password di reset password', () => {

        loginPage.clicklinkForgotpassword()

        forgotPasswordPage.inputUsername(loginData.validUsername)

        cy.intercept('GET', '**/sendPasswordResetFailure')
            .as('sendPassword')

        forgotPasswordPage.clickButtonResetPassword()

        cy.wait('@sendPassword')
            .its('response.statusCode')
            .should('eq', 200)

        forgotPasswordPage.verifyResetPasswordSuccessPage()
    })

})