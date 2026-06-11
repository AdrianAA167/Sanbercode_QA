describe('TS02 - Forgot your password berhasil', () => {
    it('TC001 - click tombol "Forgot your password"', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode').as('requestpassword')
        cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').should('be.visible').click()

        cy.wait('@requestpassword').its('response.statusCode').should('eq', 200)

        cy.url().should('include', '/requestPasswordResetCode')

    })

    it('TC002 - click tombol cancel di reset password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header')
            .should('be.visible')
            .click()

        cy.url().should('include', '/requestPasswordResetCode')

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login')
        cy.contains('button', 'Cancel')
            .should('be.visible')
            .click()
        cy.wait('@login').its('response.statusCode').should('eq', 200)
        
        cy.url().should('include', '/login')

    })

    it('TC003 - click tombol Reset Password di reset password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
        cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header')
            .should('be.visible')
            .click()
        cy.get("input[placeholder='Username']").type("Admin")

        cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordResetFailure').as('sendPassword')
        cy.get("button[type='submit']").should('be.visible').click()

        cy.wait('@sendPassword').its('response.statusCode').should('eq', 200)
        
        cy.url().should('include', '/sendPasswordResetFailure')

    })

})
