// cara tanpa POM
describe('TS01 - Pengguna dapat masuk ke akun website OrangeHRM (login)', () => {
  it('TC01 - Login dengan username dan password yang valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").should('be.visible')

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('action-summary')
    
    cy.get("button[type='submit']").click()

    cy.wait('@action-summary').its('response.statusCode').should('eq',200)
    cy.url().should('include', '/dashboard')
  })

  it('TC02 - Login dengan username valid dan password salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin')
    cy.get("input[placeholder='Password']").type('admin222')
    cy.get("button[type='submit']").should('be.visible')

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/core/i18n/messages').as('message')
    
    cy.get("button[type='submit']").click()

    cy.wait('@message').its('response.statusCode').should('eq',304)
    cy.contains('Invalid credentials').should('be.visible')
  })

  it('TC03 - Login dengan username salah dan password valid', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin2121')
    cy.get("input[placeholder='Password']").type('admin123')
    cy.get("button[type='submit']").should('be.visible')

    cy.intercept('POST', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate').as('validate')
    
    cy.get("button[type='submit']").click()

    cy.wait('@validate').its('response.statusCode').should('eq',302)
    cy.contains('Invalid credentials').should('be.visible')

    
  })

  it('TC04 - Login dengan username salah dan password salah', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[placeholder='Username']").type('Admin2121')
    cy.get("input[placeholder='Password']").type('admin222')
    cy.get("button[type='submit']").should('be.visible')

    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').as('login')
    cy.get("button[type='submit']").click()

    cy.wait('@login').its('response.statusCode').should('be.oneOf',[200,304])
    cy.contains('Invalid credentials').should('be.visible')

    
  })

  // it('TC05 - Login dengan mengosongkan username dan memasukkan password random', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.get("input[placeholder='Password']").type('admin1212')
  //   cy.get("button[type='submit']").should('be.visible')
  //   cy.get("button[type='submit']").click()
  //   cy.contains('Required').should('be.visible')
  // })

  // it('TC06 - Login dengan menggunakan username dan mengosongkan password', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  //   cy.get("input[placeholder='Username']").type('Admin')
  //   cy.get("button[type='submit']").should('be.visible')
  //   cy.get("button[type='submit']").click()
  //   cy.contains('Required').should('be.visible')
  // })

  // it('TC07 - Login dengan mengosongkan username dan password', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


  //   cy.get("button[type='submit']").should('be.visible')
  //   cy.get("button[type='submit']").click()
  //   cy.contains('Required').should('be.visible')
  // })

  // it('TC08 - User menekan tombol "Forgot your password?"', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  //   cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").should('be.visible')
  //   cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click()
  //   cy.url().should('include', '/requestPasswordResetCode')
  // })

  // it('TC09 - Login dengan tombol Enter', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  //   cy.get('input[name="username"]')
  //     .type('Admin')

  //   cy.get('input[name="password"]')
  //     .type('admin123{enter}')

  //   cy.url().should('include', '/dashboard')
  // })

  // it('TC10 - Login Username dengan kombinasi huruf/besar kecil yang berbeda dan password valid', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.get("input[placeholder='Username']").type('AdMiN')
  //   cy.get("input[placeholder='Password']").type('admin123')
  //   cy.get("button[type='submit']").should('be.visible')
  //   cy.get("button[type='submit']").click()
  //   cy.contains('Invalid credentials').should('be.visible')
  // })

  // it('TC11 - Login Username dan password dengan kombinasi huruf/besar kecil yang berbeda', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.get("input[placeholder='Username']").type('AdMin')
  //   cy.get("input[placeholder='Password']").type('AdMin123')
  //   cy.get("button[type='submit']").should('be.visible')
  //   cy.get("button[type='submit']").click()
  //   cy.contains('Invalid credentials').should('be.visible')
  // })

  // it('TC12 - Login username valid dan password kombinasi besar/kecil', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.get("input[placeholder='Username']").type('Admin')
  //   cy.get("input[placeholder='Password']").type('AdmiN123')
  //   cy.get("button[type='submit']").should('be.visible')
  //   cy.get("button[type='submit']").click()
  //   cy.contains('Invalid credentials').should('be.visible')
  // })

  // it('TC13 - Login username menggunakan spasi dan password valid', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.get("input[placeholder='Username']").type('Admin ')
  //   cy.get("input[placeholder='Password']").type('admin123')
  //   cy.get("button[type='submit']").should('be.visible')
  //   cy.get("button[type='submit']").click()
  //   cy.contains('Invalid credentials').should('be.visible')
  // })

  // it('TC14 - Login username valid dan password spasi', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.get("input[placeholder='Username']").type('Admin')
  //   cy.get("input[placeholder='Password']").type('admin123 ')
  //   cy.get("button[type='submit']").should('be.visible')
  //   cy.get("button[type='submit']").click()
  //   cy.contains('Invalid credentials').should('be.visible')
  // })

  // it('TC15 - Login username menggunakan valid dengan menambahkan spasi di tengah dan password valid', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.get("input[placeholder='Username']").type('Adm in')
  //   cy.get("input[placeholder='Password']").type('admin123')
  //   cy.get("button[type='submit']").should('be.visible')
  //   cy.get("button[type='submit']").click()
  //   cy.contains('Invalid credentials').should('be.visible')
  // })

})
