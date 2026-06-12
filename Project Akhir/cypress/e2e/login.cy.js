import loginPage from "../support/POM/loginPage"
import loginData from "../fixtures/loginData.json"

describe('Login OrangeHRM', () => {

  it('TC01 - Login valid', () => {

    loginPage.visit()

    cy.wait(3000)
    cy.intercept('GET', '**/action-summary').as('dashboard')

    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.validpassword)
    loginPage.clickbuttonLogin()

    cy.wait('@dashboard')
    cy.url().should('include', '/dashboard')
  })


  it('TC02 - username valid password invalid', () => {

    loginPage.visit()

    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.invalidPassword)
    loginPage.clickbuttonLogin()

    loginPage.verifyInfalidCredential()
  })


  it('TC03 - username invalid password valid', () => {

    loginPage.visit()

    loginPage.inputUsername(loginData.invalidUsername)
    loginPage.inputPassword(loginData.validpassword)
    loginPage.clickbuttonLogin()

    loginPage.verifyInfalidCredential()
  })


  it('TC04 - username invalid password invalid', () => {

    loginPage.visit()

    loginPage.inputUsername(loginData.invalidUsername)
    loginPage.inputPassword(loginData.invalidPassword)
    loginPage.clickbuttonLogin()

    loginPage.verifyInfalidCredential()
  })


  it('TC05 - username kosong', () => {

    loginPage.visit()

    loginPage.inputPassword(loginData.validpassword)
    loginPage.clickbuttonLogin()

    loginPage.verifyRequired()
  })


  it('TC06 - password kosong', () => {

    loginPage.visit()

    loginPage.inputUsername(loginData.validUsername)
    loginPage.clickbuttonLogin()

    loginPage.verifyRequired()
  })


  it('TC07 - username & password kosong', () => {

    loginPage.visit()

    loginPage.clickbuttonLogin()

    loginPage.verifyRequired()
  })


  it('TC08 - Forgot password', () => {

    loginPage.visit()

    cy.intercept('GET', '**/requestPasswordResetCode').as('forgot')

    loginPage.clicklinkForgotpassword()

    cy.wait('@forgot')

    cy.url().should('include', '/requestPasswordResetCode')
  })


  it('TC09 - Login pakai Enter', () => {

    loginPage.visit()

    cy.intercept('GET', '**/action-summary').as('dashboard')

    loginPage.loginWithEnter(
      loginData.validUsername,
      loginData.validpassword
    )

    cy.wait('@dashboard')
    cy.url().should('include', '/dashboard')
  })


  it('TC10 - kombinasi huruf besar kecil username', () => {

    loginPage.visit()

    loginPage.inputUsername(loginData.combineUsername)
    loginPage.inputPassword(loginData.validpassword)
    loginPage.clickbuttonLogin()

    loginPage.verifyInfalidCredential()
  })


  it('TC11 - kombinasi username & password huruf besar kecil', () => {

    loginPage.visit()

    loginPage.inputUsername(loginData.combineUsername)
    loginPage.inputPassword(loginData.combinePassword)
    loginPage.clickbuttonLogin()

    loginPage.verifyInfalidCredential()
  })


  it('TC12 - password kombinasi huruf besar kecil', () => {

    loginPage.visit()

    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.combinePassword)
    loginPage.clickbuttonLogin()

    loginPage.verifyInfalidCredential()
  })


  it('TC13 - username pakai spasi belakang', () => {

    loginPage.visit()

    loginPage.inputUsername(loginData.spaceUsername)
    loginPage.inputPassword(loginData.validpassword)
    loginPage.clickbuttonLogin()

    loginPage.verifyInfalidCredential()
  })


  it('TC14 - password pakai spasi belakang', () => {

    loginPage.visit()

    loginPage.inputUsername(loginData.validUsername)
    loginPage.inputPassword(loginData.spacePassword)
    loginPage.clickbuttonLogin()

    loginPage.verifyInfalidCredential()
  })


  it('TC15 - username spasi di tengah', () => {

    loginPage.visit()

    loginPage.inputUsername(loginData.spacemidUsername)
    loginPage.inputPassword(loginData.validpassword)
    loginPage.clickbuttonLogin()

    loginPage.verifyInfalidCredential()
  })

})