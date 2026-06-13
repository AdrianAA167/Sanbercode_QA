class RecruitmentPage {

    openRecruitmenMenu() {
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(5) > a:nth-child(1)")
            .should("be.visible")
            .click()
    }

    recruitmenTitle() {
        cy.contains(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module", "Recruitment")
            .should("be.visible")
    }

    selectMenuCandidate() {
        cy.get(".--visited > .oxd-topbar-body-nav-tab-item")
            .should("be.visible")
            .click()
        cy.contains(".oxd-table-filter-header-title > .oxd-text", "Candidates") // ambil selector dari cypress
        cy.url().should('include', '/viewCandidates')
    }

    selectMenuVacancies() {
        cy.get(":nth-child(2) > .oxd-topbar-body-nav-tab-item")
            .should("be.visible")
            .click()
        cy.contains(".oxd-table-filter-header-title > .oxd-text", "Vacancies")
        cy.url().should('include', '/viewJobVacancy')
    }

    jobTittleSelect(jobTittle) {
        // buka dropdown
        cy.contains('label', 'Job Title')
            .parents('.oxd-input-group')
            .find('.oxd-select-text-input')
            .click();
        // pilih option
        cy.contains('.oxd-select-option', jobTittle)
            .click();

    }

    VacancySelect(vacancy) {
        // buka dropdown
        cy.contains('label', 'Vacancy')
            .parents('.oxd-input-group')
            .find('.oxd-select-text-input')
            .click();
        // pilih option
        cy.contains('.oxd-select-option', vacancy)
            .click();

    }

    HRSelect(HR) {
        // buka dropdown
        cy.contains('label', 'Hiring Manager')
            .parents('.oxd-input-group')
            .find('.oxd-select-text-input')
            .click();
        // pilih option
        cy.contains('.oxd-select-option', HR)
            .click();

    }

    statusSelect(Status) {
        cy.contains('label', "Status")
            .parents('.oxd-input-group')
            .find('.oxd-select-text-input')
            .click();
        // pilih option
        cy.contains('.oxd-select-option', Status)
            .click();
    }

    keywords(word) {
        cy.get("input[placeholder='Enter comma seperated words...']").type(word)
    }

    keywordsWithEnter(word) {
        cy.get("input[placeholder='Enter comma seperated words...']")
            .type(word + '{enter}');
    }

    inputCandidateeName(name) {
        cy.get("input[placeholder='Type for hints...']").should('be.visible').type(name)
    }

    inputCandidateNameDropdown(employeeName) {

        cy.intercept('GET', '**/recruitment*').as('getCandidate');

        cy.get('input[placeholder="Type for hints..."]')
            .clear()
            .type(employeeName.substring(0, 3));

        cy.wait('@getCandidate'); // untuk menunggu API selesai baru bisa, jadi gunakan intercept

        cy.contains('.oxd-autocomplete-option', employeeName)
            .should('be.visible')
            .click();
    }

    inputCandidateNameEnter(name) {
        cy.get("input[placeholder='Type for hints...']")
            .should('be.visible')
            .type(`${name}{enter}`)
    }

    methodAplicationSelect(method) {
        // buka dropdown
        cy.contains('label', 'Hiring Manager')
            .parents('.oxd-input-group')
            .find('.oxd-select-text-input')
            .click();
        // pilih option
        cy.contains('.oxd-select-option', method)
            .click();

    }

    DateSelect() {
        cy.get("input[placeholder='From']").click()
        cy.contains("Today").click()
    }

    ButtonSearch() {
        cy.get("button[type='submit']")
            .should("be.visible")
            .click()
    }

    ButtonReset() {
        cy.get("button[type='reset']")
            .should("be.visible")
            .click()
    }

    ButtonAdd() {
        cy.get(".orangehrm-header-container > .oxd-button")
            .should("be.visible")
            .click()
    }

    iconSeeCandidateProfile() {
        cy.get(":nth-child(1) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(1) > .oxd-icon")
            .should("be.visible").click()
    }

    iconDeleteCandidateProfil() {
        cy.get(":nth-child(2) > .oxd-table-row > :nth-child(7) > .oxd-table-cell-actions > :nth-child(2) > .oxd-icon")
            .should("be.visible").click()
    }

    Candidate() {
        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)")
            .should("be.visible")
    }


    verifyAddCandidatePage() {
        cy.url().should('include', '/addCandidate')
    }





    verifyRecruitmenPage() {
        cy.url().should('include', '/recruitment')
    }
}

export default new RecruitmentPage