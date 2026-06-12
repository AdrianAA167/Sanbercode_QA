describe('TS01 - Category API Testing', () => {

  it('TC01 - Get all categories', () => {

    cy.request({
      method: 'GET',
      url: 'https://api.escuelajs.co/api/v1/categories'
    })

      .then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body).to.be.an('array')

        expect(response.body.length).to.be.greaterThan(0)

        expect(response.body[0]).to.have.property('id')

        expect(response.body[0]).to.have.property('name')

        expect(response.body[0]).to.have.property('slug')

        expect(response.body[0]).to.have.property('image')

      })

  })

  it('TC02 - Get category by id = 1 ', () => {

    cy.request({
      method: 'GET',
      url: 'https://api.escuelajs.co/api/v1/categories/1'
    })

      .then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body).to.be.an('object')

        expect(response.body.id).to.eq(1)

        expect(response.body).to.have.property('name')

        expect(response.body).to.have.property('slug')

        expect(response.body).to.have.property('image')

        cy.log(JSON.stringify(response.body))

      })

  })

  it('TC02 - Get category by id = 2 ', () => {

    cy.request({
      method: 'GET',
      url: 'https://api.escuelajs.co/api/v1/categories/2'
    })

      .then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body).to.be.an('object')

        expect(response.body.id).to.eq(2)

        expect(response.body).to.have.property('name')

        expect(response.body).to.have.property('slug')

        expect(response.body).to.have.property('image')

        cy.log(JSON.stringify(response.body))

      })

  })

  it('TC03 - Get category by id = 3 ', () => {

    cy.request({
      method: 'GET',
      url: 'https://api.escuelajs.co/api/v1/categories/3'
    })

      .then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body).to.be.an('object')

        expect(response.body.id).to.eq(3)

        expect(response.body).to.have.property('name')

        expect(response.body).to.have.property('slug')

        expect(response.body).to.have.property('image')

        cy.log(JSON.stringify(response.body))

      })

  })

  it('TC05 - Create new category name pizza', () => {

    const name = `Sate ${Date.now()}`

    cy.request({
      method: 'POST',
      url: 'https://api.escuelajs.co/api/v1/categories',
      body: {
        name: name,
        image: 'https://placeimg.com/640/480/any'
      }
    })

      .then((response) => {

        console.log(response.body)

        expect(response.status).to.eq(201)

        expect(response.body).to.have.property('name', name)

        expect(response.body).to.have.property('image')

        expect(response.body).to.have.property('id')

        cy.log(JSON.stringify(response.body))

      })

  })

  it('TC06 - Create new category name pizza', () => {

    const name = `Pizza ${Date.now()}`

    cy.request({
      method: 'POST',
      url: 'https://api.escuelajs.co/api/v1/categories',
      body: {
        name: name,
        image: 'https://placeimg.com/640/480/any'
      }
    })

      .then((response) => {

        console.log(response.body)

        expect(response.status).to.eq(201)

        expect(response.body).to.have.property('name', name)

        expect(response.body).to.have.property('image')

        expect(response.body).to.have.property('id')

        cy.log(JSON.stringify(response.body))

      })

  })

  it('TC07 - Update category using PUT name bakpaw', () => {

    const updatedName = `Bakpaw ${Date.now()}`

    cy.request({
      method: 'PUT',
      url: 'https://api.escuelajs.co/api/v1/categories/95',
      body: {
        name: updatedName,
        image: 'https://placeimg.com/640/480/any'
      }
    })

      .then((response) => {

        console.log(response.body)

        expect(response.status).to.eq(200)

        expect(response.body).to.have.property('name', updatedName)

        expect(response.body).to.have.property('image')

        expect(response.body).to.have.property('id', 95)

        cy.log(JSON.stringify(response.body))

      })

  })

  it('TC08 - Update category using PUT name sate taican', () => {

    const updatedName = `Sate taican ${Date.now()}`

    cy.request({
      method: 'PUT',
      url: 'https://api.escuelajs.co/api/v1/categories/96',
      body: {
        name: updatedName,
        image: 'https://placeimg.com/640/480/any'
      }
    })

      .then((response) => {

        console.log(response.body)

        expect(response.status).to.eq(200)

        expect(response.body).to.have.property('name', updatedName)

        expect(response.body).to.have.property('image')

        expect(response.body).to.have.property('id', 96)

        cy.log(JSON.stringify(response.body))

      })

  })

  it('TC09 - Check category 92 and delete if exists', () => {

    cy.request({
      method: 'GET',
      url: 'https://api.escuelajs.co/api/v1/categories/92',
      failOnStatusCode: false
    })

      .then((res) => {

        // kalau category ADA
        if (res.status === 200) {

          cy.request({
            method: 'DELETE',
            url: 'https://api.escuelajs.co/api/v1/categories/92',
            failOnStatusCode: false
          })

        }

        // kalau tidak ada
        expect([200, 400, 404]).to.include(res.status)

      })

  })

  // test fail atau pass ternyata fail karena data id 92 sudah dihapus sebelumnya
  it('TC10 - Get category by id = 92 ', () => {

    cy.request({
      method: 'GET',
      url: 'https://api.escuelajs.co/api/v1/categories/92'
    })

      .then((response) => {

        expect(response.status).to.eq(200)

        expect(response.body).to.be.an('object')

        expect(response.body.id).to.eq(92)

        expect(response.body).to.have.property('name')

        expect(response.body).to.have.property('slug')

        expect(response.body).to.have.property('image')

        cy.log(JSON.stringify(response.body))

      })

  })

})
