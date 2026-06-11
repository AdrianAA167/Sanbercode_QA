class loginPage {

    visit() {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    inputUsername(username) {
        cy.get("input[placeholder='Username']").should('be.visible').type(username)
    }

    inputPassword(password) {
        cy.get("input[placeholder='Password']")
            .should('be.visible')
            .type(password)
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
            .type(`${password}{enter}`)
    }

    verifyDashboard(){
        cy.url().should('include', '/dashboard')
    }

    loginValid(username, password) {

        this.visit()

        this.inputUsername(username)
        this.inputPassword(password)
        this.clickbuttonLogin()

        this.verifyDashboard()
    }
}

export default new loginPage()