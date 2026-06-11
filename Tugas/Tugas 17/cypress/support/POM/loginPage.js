class loginPage {

    // membuka halaman
    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    titleLoginCheck() {
        cy.get('h5').should('contain', 'Login').and('be.visible')
    }

    buttonLoginCheck() {
        cy.get("button[type='submit']").should('be.visible')
    }

    linkForgotPasswordCheck() {
        cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').should('be.visible')
    }

    inputUsername(username) {
        cy.get("input[placeholder='Username']").should('be.visible').type(username)
    }

    inputPassword(password) {
        cy.get("input[placeholder='Password']").should('be.visible').type(password)
    }

    clickbuttonLogin() {
        cy.get("button[type='submit']").click()
    }

    clicklinkForgotpassword() {
        cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').click()
    }

    verifyInfalidCredential() {
        cy.contains('Invalid credentials').should('be.visible')
    }

    verifyRequired() {
        cy.contains('Required').should('be.visible')
    }

    loginWithEnter(username, password) {
        this.inputUsername(username)

        cy.get("input[placeholder='Password']")
            .should('be.visible')
            .type(`${password}{enter}`)
    }
}

export default new loginPage