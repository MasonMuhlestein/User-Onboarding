describe('Quote App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


    it('example test', () =>{
        const textInput = () => cy.get('[name="name"]')
        const emailInput = () => cy.get('[name="email"]')
        const submitButton = () => cy.get('button')
        const passwordInput = () => cy.get('[name="password"]')


        const person = {name: "bobby"};

        expect(2+2).to.equal(4)
        expect(2+2).to.not.equal(5)
        expect('Bobby').to.equal('Bobby')
        expect({name: "bobby"}).to.deep.equal({name: "bobby"})
        expect({name: "bobby"}).to.eql({name: "bobby"})
        expect(person).to.equal(person)
    })

    it('renders properly', () => {
        cy.visit('http://localhost:3000')

        cy.get(':nth-child(2) > input').should('exist')
        cy.get(':nth-child(3) > input').should('exist')
        cy.get('button').should('exist')
        cy.get('[name="foobar]').should('not.exist')
        cy.get('.checkboxes > label > input').should('exist')
        cy.get('form').submit()
    })

    it('button submits form', () => {
        const textInput = () => cy.get('[name="name"]')
        const emailInput = () => cy.get('[name="email"]')
        const checkInput = () => cy.get('[name="terms"]')
        const submitButton = () => cy.get('button')
        const passwordInput = () => cy.get('[name="password"]')

        textInput().type('works')
        emailInput().type('works')
        passwordInput().type('works')
        checkInput().check()
        submitButton().click()
    })

    describe('filling out the input', () => {
        it('can type in name'), () => {
            cy.get('nth-child(1) > input').type('Coding is fun!!!').should('have.value', 'Coding is fun!!!')
            cy.get('[name:"user"]').type('Mason')
        }
    })
})