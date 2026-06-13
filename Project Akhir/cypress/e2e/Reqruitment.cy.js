import RecruitmentPage from "../support/POM/RecruitmentPage"
import loginPage from "../support/POM/loginPage"
import lognData from "../fixtures/loginData.json"

describe("TS04 - Mengakses menu Recruitment",() =>{
    it('TC_REC_01 - Memastikan halaman Recruitment',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.recruitmenTitle()
        RecruitmentPage.verifyRecruitmenPage()

    })
    
    it('TC_REC_02 - Memastikan halaman Candidates ditampilkan dengan benar',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
    })

    it('TC_REC_02 - Memilih Job Title melalui dropdown filter',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.jobTittleSelect("Software Engineer")
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_03 - Memilih Vacancy melalui dropdown filter',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.VacancySelect("Software Engineer")
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_05 - Memilih HR melalui dropdown filter',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.HRSelect("manda user")
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_06 - Memilih Status melalui dropdown filter',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.statusSelect("Rejected")
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_09 - Menginput keyword pada kolom pencarian lalu menekan search',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.keywords("hai")
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_10 - Menginput keyword valid pada kolom pencarian lalu menekan enter',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.keywordsWithEnter("hai")
    })

    it('TC_REC_11 - Menginput keyword random pada kolom pencarian lalu menekan enter',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.keywordsWithEnter(3214214532)
    })
    
    it('TC_REC_12 - Memilih tanggal pada field Date of Application',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.DateSelect()
        RecruitmentPage.ButtonSearch()
    })

    it('TC_REC_13 - Melakukan pencarian tanpa mengisi filter apa pun',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.keywordsWithEnter("hai")
        RecruitmentPage.ButtonReset()
    })


    it('TC_REC_14 - Melakukan pencarian tanpa mengisi filter apa pun',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.ButtonSearch()
    })


    // perlu tambahkan scroll
    it('TC_REC_15 - Mengakses icon View/edit Candidate Details',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.ButtonSearch()

        cy.scrollTo("bottom")

        // scroll container
        cy.get('.orangehrm-container').scrollTo(0, 500);

        RecruitmentPage.iconSeeCandidateProfile()
        RecruitmentPage.verifyAddCandidatePage()
    })
    
    it('TC_REC_16 - Mengakses icon Delete Candidate Details',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.ButtonSearch()

        cy.scrollTo("bottom")

        // scroll container

        RecruitmentPage.iconDeleteCandidateProfil()
    })

    it('TC_REC_17 - Menampilkan daftar kandidat pada Record Found',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.Candidate()
    })


    it('TC_REC_19 - Dapat menambah data candidate dengan masuk ke halaman daftar candidate',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuCandidate()
        RecruitmentPage.ButtonAdd()

        // masih tambahkan method jika ingin menambahkan candidate

        RecruitmentPage.verifyAddCandidatePage()
    })


    it('TC_REC_20 - Memastikan halaman Vacancies ditampilkan dengan benar',() =>{
        loginPage.loginValid(lognData.validUsername,lognData.validpassword)
        RecruitmentPage.openRecruitmenMenu()
        RecruitmentPage.selectMenuVacancies()
    })
})