import directoryPage from "../support/POM/directoryPage";
import loginPage from "../support/POM/loginPage";
import loginData from "../fixtures/loginData.json"

describe("TS02 - Mencari data karyawan", () => {
    // Perhatikan
    // untuk employee name menyesuaikan saja, kadang terhapus di OrangHRM

    it('TC_DIR_001 - Membuka menu Directory', () =>{
        loginPage.loginValid(loginData.validUsername,loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.verifyDirectoryPage();
    })

    it('TC_DIR_002 - Input nama karyawan valid dan menekan tombol search', () => {
        loginPage.loginValid(loginData.validUsername, loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.inputEmployeeName("Russel Hamilton")
        directoryPage.buttonSearch()
        cy.wait(4000)
        directoryPage.verifyInvalidnotExisit() // untuk verifikasi agar tidak muncul invalid ketika input benar
    })

    it('TC_DIR_003 - Input nama lengkap karyawan valid  dan menekan sugest nama karyawan', () => {
        loginPage.loginValid(loginData.validUsername, loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.inputEmployeeNameDropdown("Russel Hamilton")
        directoryPage.buttonSearch()
        cy.wait(4000)
        directoryPage.verifyInvalidnotExisit() // untuk verifikasi agar tidak muncul invalid ketika input benar
    })

    it('TC_DIR_004 - Input 3 huruf nama karyawan valid dan menekan sugest nama karyawan', () => {
        loginPage.loginValid(loginData.validUsername, loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.inputEmployeeNameDropdown("Russ")
        directoryPage.buttonSearch()
        cy.wait(4000)
        directoryPage.verifyInvalidnotExisit() // untuk verifikasi agar tidak muncul invalid ketika input benar
    })


    it('TC_DIR_005 - Input nama karyawan tidak valid dan menekan tombol search', () => {
        loginPage.loginValid(loginData.validUsername, loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.inputEmployeeName("Russssss")
        directoryPage.buttonSearch()
        cy.wait(4000)
        directoryPage.verifyInvalid()
    })

    it('TC_DIR_006 - Input nama karyawan dengan angka dan menekan tombol search', () => {
        loginPage.loginValid(loginData.validUsername, loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.inputEmployeeName(12345)
        directoryPage.buttonSearch()
        cy.wait(4000)
        directoryPage.verifyInvalid()
    })

    it('TC_DIR_007 - Input nama karyawan valid dan menekan tombol enter', () => {
        loginPage.loginValid(loginData.validUsername, loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.inputEmployeeNameEnter("Russel Hamilton")
        cy.wait(4000)
        directoryPage.verifyRecordNotFounfEmployeeName();
        directoryPage.verifyInvalidnotExisit()
    })



    it('TC_DIR_008 - Cari tanpa input', () =>{
        loginPage.loginValid(loginData.validUsername,loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.buttonSearch()
    })

    it('TC_DIR_009 - Filter Job Title',() =>{
        loginPage.loginValid(loginData.validUsername,loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.jobTittleSelect()
        directoryPage.buttonSearch()
    })

    it('TC_DIR_010 - Filter Location',() =>{
        loginPage.loginValid(loginData.validUsername,loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.locationSelect()
        directoryPage.buttonSearch()
    })

    it('TC_DIR_011 - Klik Tombol Reset',() =>{
        loginPage.loginValid(loginData.validUsername,loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.locationSelect()
        directoryPage.buttonReset();
    })

    it('TC_DIR_012 - Cari dari record found', () => {
        loginPage.loginValid(loginData.validUsername, loginData.validpassword);
        directoryPage.openDirectoryMenu();
        cy.wait(4000)
        directoryPage.verifyInvalidnotExisit() // untuk verifikasi agar tidak muncul invalid ketika input benar

        directoryPage.cardEmployee()
    })

    it('TC_DIR_013 - Melihat detail karyawan', () => {
        loginPage.loginValid(loginData.validUsername, loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.inputEmployeeNameDropdown("Russel Hamilton")
        directoryPage.buttonSearch()
        cy.wait(4000)
        directoryPage.verifyInvalidnotExisit() // untuk verifikasi agar tidak muncul invalid ketika input benar

        directoryPage.cardEmployee()
        directoryPage.cardEmployeeDetailInfo()
    })

    it('TC_DIR_014 - Scroll record found', () => {
        loginPage.loginValid(loginData.validUsername, loginData.validpassword);
        directoryPage.openDirectoryMenu();
        cy.intercept('GET', '**/directory/employees*').as('searchEmployee');

        directoryPage.buttonSearch();
        cy.wait('@searchEmployee');
        cy.scrollTo("bottom")

        // scroll container
        cy.get('.orangehrm-container').scrollTo(0, 500);
        cy.wait(500);
        cy.get('.orangehrm-container').scrollTo(0, 1000);

    })



    it('TC_DIR_015 - Cari dari record found', () => {
        loginPage.loginValid(loginData.validUsername, loginData.validpassword);
        directoryPage.openDirectoryMenu();
        cy.wait(4000)
        directoryPage.verifyInvalidnotExisit() // untuk verifikasi agar tidak muncul invalid ketika input benar

        directoryPage.cardEmployee()
        directoryPage.cardEmployeeDetailInfo()
    })

    it('TC_DIR_016 - Klik Tombol Question',() =>{
        loginPage.loginValid(loginData.validUsername,loginData.validpassword);
        directoryPage.openDirectoryMenu();
        directoryPage.buttonQuestionIcon();
        // directoryPage.verifyQuestionPage();
    })




})

