class ForgotPasswordPage {

    forgotPasswordTitleCheck() {
        cy.contains('Reset Password').should('be.visible')
    }

    inputUsername(username) {
        cy.get("input[placeholder='Username']")
            .should('be.visible')
            .type(username)
    }

    clickButtonCancel() {
        cy.contains('button', 'Cancel').click()
    }

    clickButtonResetPassword() {
        cy.get("button[type='submit']").click()
    }

    verifyResetPasswordPage() {
        cy.url().should('include', '/requestPasswordResetCode')
    }

    verifyBackToLoginPage() {
        cy.url().should('include', '/login')
    }

    verifyResetPasswordSuccessPage() {
        cy.url().should('include', '/sendPasswordResetFailure')
    }
}

export default new ForgotPasswordPage()