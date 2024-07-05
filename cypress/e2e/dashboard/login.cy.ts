describe('Login Testing',()=>{
    it('Login the user',()=>{
        // cy.viewport('iphone-x')
        cy.visit('http://localhost:3000')
        cy.get('.title').contains('Welcome Back')
        cy.get('#username').type('tester2@gmail.com')
        cy.get('#password').type('123456')
        cy.get('#changeType').click()
        cy.get('#password').should('have.attr','type','text')
        cy.get('#changeType').click()
        cy.get('#password').should('have.attr','type','password')
        cy.get('input[type="submit"]').click()

        cy.wait(2000)
        cy.url().should('include','dashboard')

    })
})