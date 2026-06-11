describe('TC03 - Dashboard Page', () => {
    // pakai ini untuk handling bug di logout
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false
    })

    it('TC01 - Click logout', () => {

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.wait(3000)// saya gunakan karena Cypress tidak menemukan input Username di halaman dalam waktu 4 detik.
        cy.get("input[placeholder='Username']").type('Admin')
        cy.get("input[placeholder='Password']").type('admin123')
        cy.get("button[type='submit']").click()

        cy.url().should('include', '/dashboard')

        cy.wait(4000)// saya gunakan karena Cypress tidak menemukan input Username di halaman dalam waktu 4 detik.
        
        cy.get('.oxd-userdropdown-tab').click()

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/logout').as('logout')
        cy.contains('a', 'Logout').click()

        cy.wait('@logout').its('response.statusCode').should('eq', 302)
        

        cy.url().should('include', '/auth/login')

    })

})