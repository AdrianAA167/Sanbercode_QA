import RecruitmentPage from "../support/POM/RecruitmentPage"
import loginPage from "../support/POM/loginPage"
import lognData from "../fixtures/loginData.json"

describe("TS04 - Mengakses menu Recruitment", () => {
    it('TC_REC_01 - Memastikan halaman Recruitment', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.recruitmenTitle()
        RecruitmentPage.verifyRecruitmenPage()

    })

    it('TC_REC_02 - Memastikan halaman Candidates ditampilkan dengan benar', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
    })

    it('TC_REC_02 - Memilih Job Title melalui dropdown filter', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.jobTittleSelect("Software Engineer")
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_03 - Memilih Vacancy melalui dropdown filter', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.VacancySelect("Software Engineer")
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_05 - Memilih HR melalui dropdown filter', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.HRSelect("manda user")
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_06 - Memilih Status melalui dropdown filter', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.statusSelect("Rejected")
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_09 - Menginput keyword pada kolom pencarian lalu menekan search', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.keywords("hai")
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_10 - Menginput keyword valid pada kolom pencarian lalu menekan enter', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.keywordsWithEnter("hai")
    })

    it('TC_REC_11 - Menginput keyword random pada kolom pencarian lalu menekan enter', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.keywordsWithEnter(3214214532)
    })

    it('TC_REC_12 - Memilih tanggal pada field Date of Application', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.DateSelect()
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_13 - Melakukan Reset setelah filter sudah diisi', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.keywordsWithEnter("hai")
        RecruitmentPage.ButtonReset()
    })


    it('TC_REC_14 - Melakukan pencarian tanpa mengisi filter apa pun', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.ButtonSearch()
    })


    // perlu tambahkan scroll
    it('TC_REC_15 - Mengakses icon View/edit Candidate Details', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.ButtonSearch()

        cy.scrollTo("bottom")

        // scroll container
        cy.get('.orangehrm-container').scrollTo(0, 500);

        RecruitmentPage.iconSeeCandidateProfile()
        RecruitmentPage.verifyAddCandidatePage()
    })

    it('TC_REC_16 - Mengakses icon Delete Candidate Details', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.ButtonSearch()

        cy.scrollTo("bottom")

        // scroll container

        RecruitmentPage.iconDeleteCandidateProfil()
    })

    it('TC_REC_17 - Menampilkan daftar kandidat pada Record Found', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        cy.scrollTo("bottom")
        RecruitmentPage.Candidate()
    })


    it('TC_REC_19 - Dapat menambah data candidate dengan masuk ke halaman daftar candidate', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.ButtonAdd()

        // masih tambahkan method jika ingin menambahkan candidate

        RecruitmentPage.verifyAddCandidatePage()
    })

    // "= Vacancies Menu =========================="


    it('TC_REC_20 - Memastikan halaman Vacancies ditampilkan dengan benar', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
    })

    it('TC_REC_21 - Memverifikasi filter Job Title melalui dropdown.', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
        RecruitmentPage.jobTittleSelect("Software Engineer")
        RecruitmentPage.ButtonSearch()

    })

    it('TC_REC_22 - Memverifikasi filter Vacancy melalui dropdown.', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
        RecruitmentPage.VacancySelect("Software Engineer")
        RecruitmentPage.ButtonSearch()

    })

    it('TC_REC_23 - Memverifikasi filter Hiring Manager melalui dropdown.', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
        RecruitmentPage.HRSelect("mandaa user")
        RecruitmentPage.ButtonSearch()

    })

    it('TC_REC_24 - Memverifikasi filter Hiring Manager melalui dropdown.', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
        RecruitmentPage.statusSelect("Active")
        RecruitmentPage.ButtonSearch()

    })


    it('TC_REC_25 - Melakukan Reset setelah filter sudah diisi', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
        RecruitmentPage.statusSelect("Active")
        cy.scrollTo("top")
        RecruitmentPage.ButtonResetVacancy()
    })

    it('TC_REC_26 - Melakukan pencarian tanpa mengisi filter apa pun', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
        RecruitmentPage.ButtonSearch()
    })


    it('TC_REC_27 - Mengakses icon Delete Vacancy Details', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
        RecruitmentPage.ButtonSearch()

        cy.scrollTo("bottom")

        // scroll container

        RecruitmentPage.iconDeleteVacancyProfil()
    })

    it('TC_REC_28 - Memastikan tombol Edit ditampilkan pada setiap data vacancy.', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
        RecruitmentPage.ButtonSearch()

        cy.scrollTo("bottom")

        // scroll container

        RecruitmentPage.iconEditVacancy()
        RecruitmentPage.verifyEditVacancyPage()

    })

    it('TC_REC_17 - Menampilkan daftar kandidat pada Record Found', () => {
        loginPage.loginValid(lognData.validUsername, lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
        cy.scrollTo("bottom")
        RecruitmentPage.Candidate()
    })


})