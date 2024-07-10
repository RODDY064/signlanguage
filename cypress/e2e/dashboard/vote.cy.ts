describe('Vote Testing',()=>{
    it('Vote for a video',()=>{
        cy.visit('http://localhost:3000')
        cy.get('.title').contains('Welcome Back')
        cy.get('#username').type('tester2@gmail.com')
        cy.get('#password').type('123456')
        cy.get('input[type="submit"]').click()
        cy.wait(2000)
        cy.url().should('include','dashboard')
        cy.get("#card").should('be.visible')
        cy.get("#card h2").contains('Hello')
        cy.get('#card').click()
        cy.wait(200)
        cy.url().should('include','video')
        cy.get('#vote_wrong').click()
        cy.get('#vote_wrong').click()
        // cy.wait(2000)
        // cy.get('#voted_wrong').should('be.visible')
    


    })
})