describe('TS02 - Users API Testing', () => {

    it('TC01 - Get all users', () => {

        cy.request({
            method: 'GET',
            url: 'https://api.escuelajs.co/api/v1/users'
        })

            .then((response) => {

                // cek status code
                expect(response.status).to.eq(200)

                // cek response berupa array
                expect(response.body).to.be.an('array')

                // pastikan ada data user
                expect(response.body.length).to.be.greaterThan(0)

                // cek struktur data user pertama
                expect(response.body[0]).to.have.property('id')
                expect(response.body[0]).to.have.property('email')
                expect(response.body[0]).to.have.property('name')
                expect(response.body[0]).to.have.property('role')
                expect(response.body[0]).to.have.property('avatar')

                // optional debug/ cek isi data di cypress
                cy.log(JSON.stringify(response.body[0]))

            })

    })

    it('TC02 - Get user by id - 1', () => {

        cy.request({
            method: 'GET',
            url: 'https://api.escuelajs.co/api/v1/users/1'
        })

            .then((response) => {

                expect(response.status).to.eq(200)

                expect(response.body).to.be.an('object')

                expect(response.body.id).to.eq(1)

                expect(response.body).to.have.property('email')
                expect(response.body).to.have.property('password')
                expect(response.body).to.have.property('name')
                expect(response.body).to.have.property('role')
                expect(response.body).to.have.property('avatar')

                cy.log(JSON.stringify(response.body))

            })

    })

    it('TC03 - Get user by id - 2', () => {

        cy.request({
            method: 'GET',
            url: 'https://api.escuelajs.co/api/v1/users/2'
        })

            .then((response) => {

                expect(response.status).to.eq(200)

                expect(response.body).to.be.an('object')

                expect(response.body.id).to.eq(2)

                expect(response.body).to.have.property('email')
                expect(response.body).to.have.property('password')
                expect(response.body).to.have.property('name')
                expect(response.body).to.have.property('role')
                expect(response.body).to.have.property('avatar')

                cy.log(JSON.stringify(response.body))

            })

    })

    it('TC04 - Get user by id - 3', () => {

        cy.request({
            method: 'GET',
            url: 'https://api.escuelajs.co/api/v1/users/3'
        })

            .then((response) => {

                expect(response.status).to.eq(200)

                expect(response.body).to.be.an('object')

                expect(response.body.id).to.eq(3)

                expect(response.body).to.have.property('email')
                expect(response.body).to.have.property('password')
                expect(response.body).to.have.property('name')
                expect(response.body).to.have.property('role')
                expect(response.body).to.have.property('avatar')

                cy.log(JSON.stringify(response.body))

            })

    })

    // coba parameterisasi dan data driven
    const users = [
        {
            name: "Nicolas",
            email: "nico1@gmail.com",
            password: "1234",
            avatar: "https://picsum.photos/800"
        },
        {
            name: "John",
            email: "john1@gmail.com",
            password: "1234",
            avatar: "https://picsum.photos/800"
        },
        {
            name: "Jane",
            email: "jane1@gmail.com",
            password: "1234",
            avatar: "https://picsum.photos/800"
        }
    ]

    users.forEach((user, index) => {
        const tcNumber = 5 + index

        it(`TC0${tcNumber} - Create user - ${user.name}`, () => {

            cy.request({
                method: 'POST',
                url: 'https://api.escuelajs.co/api/v1/users',
                body: {
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    avatar: user.avatar
                }
            })

                .then((response) => {

                    // ASSERTION
                    expect(response.status).to.eq(201)

                    expect(response.body).to.have.property('name', user.name)
                    expect(response.body).to.have.property('email', user.email)
                    expect(response.body).to.have.property('avatar', user.avatar)
                    cy.log(JSON.stringify(response.body))

                })

        })

    })

    it('TC08 - Update user info id : 102', () => {
        cy.request({
            method: 'PUT',
            url: 'https://api.escuelajs.co/api/v1/users/102',
            body: {
                email: 'johniy@mail.com',
                name: 'janee'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(102)
            expect(response.body).to.have.property('email', 'johniy@mail.com');
            expect(response.body).to.have.property('name', 'janee');
            expect(response.duration).to.be.lessThan(1000); // cek durasi

            cy.log(JSON.stringify(response.body))
        });
    });

    it('TC08 - Update user info id : 103', () => {
        cy.request({
            method: 'PUT',
            url: 'https://api.escuelajs.co/api/v1/users/103',
            body: {
                email: 'johnSen@mail.com',
                name: 'janee'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.eq(103)
            expect(response.body).to.have.property('email', 'johnSen@mail.com');
            expect(response.body).to.have.property('name', 'janee');
            expect(response.duration).to.be.lessThan(1000);

            cy.log(JSON.stringify(response.body))
        });
    });



    it('TC01 - Check Email Availability', () => {

        cy.request({
            method: 'POST',
            url: 'https://api.escuelajs.co/api/v1/users/is-available',
            body: {
                email: 'johnSenbbfasfas@mail.com'
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {

            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('isAvailable');
            expect(response.body.isAvailable).to.be.false;

            cy.log(JSON.stringify(response.body));

        });

    });


    

})