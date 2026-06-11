//// cara tanpa POM
// describe('Pengguna dapat masuk ke akun website OrangeHRM (login)', () => {
//   it('TC01 - Login dengan username dan password yang valid', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get("input[placeholder='Username']").type('Admin')
//     cy.get("input[placeholder='Password']").type('admin123')
//     cy.get("button[type='submit']").should('be.visible')

//     cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('action-summary')
//     cy.get("button[type='submit']").click()
//     cy.wait('@action-summary')
//     cy.url().should('include', '/dashboard')
//   })

//   it('TC02 - Login dengan username valid dan password salah', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get("input[placeholder='Username']").type('Admin')
//     cy.get("input[placeholder='Password']").type('admin222')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Invalid credentials').should('be.visible')
//   })

//   it('TC03 - Login dengan username salah dan password valid', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get("input[placeholder='Username']").type('Admin2121')
//     cy.get("input[placeholder='Password']").type('admin123')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Invalid credentials').should('be.visible')
//   })

//   it('TC04 - Login dengan username salah dan password salah', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get("input[placeholder='Username']").type('Admin2121')
//     cy.get("input[placeholder='Password']").type('admin222')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Invalid credentials').should('be.visible')
//   })

//   it('TC05 - Login dengan mengosongkan username dan memasukkan password random', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     cy.get("input[placeholder='Password']").type('admin1212')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Required').should('be.visible')
//   })

//   it('TC06 - Login dengan menggunakan username dan mengosongkan password', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     cy.get("input[placeholder='Username']").type('Admin')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Required').should('be.visible')
//   })

//   it('TC07 - Login dengan mengosongkan username dan password', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Required').should('be.visible')
//   })

//   it('TC08 - User menekan tombol "Forgot your password?"', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").should('be.visible')
//     cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click()
//     cy.url().should('include', '/requestPasswordResetCode')
//   })

//   it('TC09 - Login dengan tombol Enter', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

//     cy.get('input[name="username"]')
//       .type('Admin')

//     cy.get('input[name="password"]')
//       .type('admin123{enter}')

//     cy.url().should('include', '/dashboard')
//   })

//   it('TC10 - Login Username dengan kombinasi huruf/besar kecil yang berbeda dan password valid', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get("input[placeholder='Username']").type('AdMiN')
//     cy.get("input[placeholder='Password']").type('admin123')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Invalid credentials').should('be.visible')
//   })

//   it('TC11 - Login Username dan password dengan kombinasi huruf/besar kecil yang berbeda', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get("input[placeholder='Username']").type('AdMin')
//     cy.get("input[placeholder='Password']").type('AdMin123')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Invalid credentials').should('be.visible')
//   })

//   it('TC12 - Login username valid dan password kombinasi besar/kecil', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get("input[placeholder='Username']").type('Admin')
//     cy.get("input[placeholder='Password']").type('AdmiN123')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Invalid credentials').should('be.visible')
//   })

//   it('TC13 - Login username menggunakan spasi dan password valid', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get("input[placeholder='Username']").type('Admin ')
//     cy.get("input[placeholder='Password']").type('admin123')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Invalid credentials').should('be.visible')
//   })

//   it('TC14 - Login username valid dan password spasi', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get("input[placeholder='Username']").type('Admin')
//     cy.get("input[placeholder='Password']").type('admin123 ')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Invalid credentials').should('be.visible')
//   })

//   it('TC15 - Login username menggunakan valid dengan menambahkan spasi di tengah dan password valid', () => {
//     cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//     cy.get("input[placeholder='Username']").type('Adm in')
//     cy.get("input[placeholder='Password']").type('admin123')
//     cy.get("button[type='submit']").should('be.visible')
//     cy.get("button[type='submit']").click()
//     cy.contains('Invalid credentials').should('be.visible')
//   })

// })
import loginPage from "../support/POM/loginPage"
import loginData from "../fixtures/loginData.json"

describe('Pengguna dapat masuk ke akun website OrangeHRM (login)', () => {
  it('TC01 - Login dengan username dan password yang valid', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.validpassword)

    //intercept
    cy.intercept('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/dashboard/employees/action-summary').as('action-summary')
    loginPage.clickbuttonLogin()

    //wait
    cy.wait('@action-summary')

    //assertion
    cy.url().should('include', '/dashboard')
  })


  it('TC02 - Login dengan username valid dan password salah', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.invalidPassword)
    loginPage.clickbuttonLogin()
    loginPage.verifyInfalidCredential()
  })

  it('TC03 - Login dengan username salah dan password valid', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.invalidUsername)
    loginPage.inputPassword(loginData.validpassword)
    loginPage.clickbuttonLogin()
    loginPage.verifyInfalidCredential
  })

  it('TC04 - Login dengan username salah dan password salah', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.invalidUsername)
    loginPage.inputPassword(loginData.invalidPassword)
    loginPage.clickbuttonLogin()
    loginPage.verifyInfalidCredential()
  })

  it('TC05 - Login dengan mengosongkan username dan memasukkan password random', () => {
    loginPage.visit()
    loginPage.inputPassword(loginData.validpassword)
    loginPage.clickbuttonLogin()
    loginPage.verifyRequired()
  })

  it('TC06 - Login dengan menggunakan username dan mengosongkan password', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.validUsername)
    loginPage.clickbuttonLogin()
    loginPage.verifyRequired()
  })

  it('TC07 - Login dengan mengosongkan username dan password', () => {

    loginPage.visit()
    loginPage.clickbuttonLogin()
    loginPage.verifyRequired()

  })

  it('TC08 - User menekan tombol "Forgot your password?"', () => {

    loginPage.visit()
    loginPage.clicklinkForgotpassword()
    cy.url().should('include', '/requestPasswordResetCode')

  })

  it('TC09 - Login dengan tombol Enter', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    loginPage.loginWithEnter(loginData.validUsername, loginData.validpassword)

    cy.url().should('include', '/dashboard')
  })

  it('TC10 - Login Username dengan kombinasi huruf/besar kecil yang berbeda dan password valid', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.combineUsername)
    loginPage.inputPassword(loginData.validPassword)
    loginPage.clickbuttonLogin()
    loginPage.verifyInfalidCredential()
  })

  it('TC11 - Login Username dan password dengan kombinasi huruf/besar kecil yang berbeda', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.combineUsername)
    loginPage.inputPassword(loginData.combinePassword)
    loginPage.clickbuttonLogin()
    loginPage.verifyInfalidCredential()
  })

  it('TC12 - Login username valid dan password kombinasi besar/kecil', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.combinePassword)
    loginPage.clickbuttonLogin()
    loginPage.verifyInfalidCredential()
  })

  it('TC13 - Login username menggunakan spasi dan password valid', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.spaceUsername)
    loginPage.inputPassword(loginData.validpassword)
    loginPage.clickbuttonLogin()
    loginPage.verifyInfalidCredential()
  })

  it('TC14 - Login username valid dan password spasi', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.spacePassword)
    loginPage.clickbuttonLogin()
    loginPage.verifyInfalidCredential()
  })

  it('TC15 - Login username menggunakan valid dengan menambahkan spasi di tengah dan password valid', () => {
    loginPage.visit()
    loginPage.inputUsername(loginData.spacemidUsername)
    loginPage.inputPassword(loginData.validpassword)
    loginPage.clickbuttonLogin()
    loginPage.verifyInfalidCredential()
  })


})