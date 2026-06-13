class directoryPage {

    openDirectoryMenu() {
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(9) > a:nth-child(1)").click();
    }

    directoryTittle() {
        cy.contains("Directory").should('be.visible')
    }

    inputEmployeeName(name) {
        cy.get("input[placeholder='Type for hints...']").should('be.visible').type(name)
    }

    inputEmployeeNameDropdown(employeeName) {

        cy.intercept('GET', '**/employees*').as('getEmployee');

        cy.get('input[placeholder="Type for hints..."]')
            .clear()
            .type(employeeName.substring(0, 3));

        cy.wait('@getEmployee'); // untuk menunggu API selesai baru bisa, jadi gunakan intercept

        cy.contains('.oxd-autocomplete-option', employeeName)
            .should('be.visible')
            .click();
    }

    inputEmployeeNameEnter(name) {
        cy.get("input[placeholder='Type for hints...']")
            .should('be.visible')
            .type(`${name}{enter}`)
    }

    buttonSearch() {
        cy.get("button[type='submit']").should("be.visible").click()
    }

    buttonReset() {
        cy.get("button[type='reset']").should("be.visible").click()
    }


    jobTittleSelect() {
        // buka dropdown
        cy.contains('label', 'Job Title')
            .parents('.oxd-input-group')
            .find('.oxd-select-text-input')
            .click();
        // pilih option
        cy.contains('.oxd-select-option', 'Software Engineer')
            // berbeda dengan location texas yang terlihat untuk SE pada job title ini tidak terlihat jadi langsung klik saja jika menemukan konten SE
            .click();

    }

    locationSelect() {

        cy.contains('label', 'Location')
            .parents('.oxd-input-group')
            .find('.oxd-select-text-input')
            .click();

        cy.contains('.oxd-select-option', 'Texas R&D')
            .should('be.visible')
            .click();
    }

    cardEmployee() {
        cy.get(":nth-child(1) > .oxd-sheet")
            .should("be.visible")
            .click()
    }

    cardEmployeeDetailInfo() {
        cy.get(".orangehrm-corporate-directory-sidebar > .oxd-grid-item > .oxd-sheet")
            .should("be.visible")
    }

    buttonQuestionIcon() {
        cy.get(".oxd-icon.bi-question-lg")
            .should("be.visible")
            .click()
    }






    verifyInvalidnotExisit() {
        cy.contains('Invalid').should('not.exist');
    }

    // masih harus diupdate codenya karena ada kasus konten No record Found tidah hanya ada di sugest tapi di halaman hasil
    verifyRecordNotFounfEmployeeName() {
        cy.contains("No Records Found").should('not.exist')
    }

    verifyInvalid() {
        cy.contains("Invalid").should("be.visible")
    }

    verifyDirectoryPage() {
        cy.url().should('include', '/directory')
    }

    // verifyQuestionPage() {
    //     cy.url().should("hc/en-us")
    // }
}

export default new directoryPage