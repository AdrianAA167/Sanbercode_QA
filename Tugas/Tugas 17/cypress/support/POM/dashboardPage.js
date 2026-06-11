class dashboardPage {

    clickUserDropdown() {
        cy.get('.oxd-userdropdown-tab').click()
    }
    clickLogout() {
        cy.contains('a', 'Logout').click()
    }

    verifyDashboardPage() {
        cy.url().should('include', '/dashboard')
    }

    verifyLoginPage() {
        cy.url().should('include', '/auth/login')
    }


}

export default new dashboardPage()