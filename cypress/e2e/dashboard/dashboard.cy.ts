describe('Dashboard Testing',()=>{
     // desktop view
    it ('Visit Dashboard and Check if All navigation are working ',()=>{
        cy.visit('http://localhost:3000')
        cy.get('#username').type('tester2@gmail.com')
        cy.get('#password').type('123456')
        cy.get('input[type="submit"]').click()
        cy.wait(2000)
        cy.url().should('include','dashboard')
        cy.get('#home').click()
        cy.url().should('include','dashboard')
        cy.get("#history").click()
        cy.url().should('include','history')
        cy.get('#home').click()
    })

    // mobile view
    it ('Visit Dashboard and Check if All navigation are working in mobile view',()=>{
        cy.viewport('iphone-x')
        cy.visit('http://localhost:3000')
        cy.get('#username').type('tester2@gmail.com')
        cy.get('#password').type('123456')
        cy.get('input[type="submit"]').click()
        cy.wait(2000)
        cy.url().should('include','dashboard')
        cy.get('#mobileLogo').should('be.visible')
        cy.get('#menu').click()
        cy.get('#mobileNav').should('be.visible')
        cy.get('#home').click()
        cy.url().should('include','/dashboard')
        cy.get('#menu').click()
        cy.get('#mobileNav').should('be.visible')
        cy.get('#history').click()
        cy.url().should('include','/history')
        cy.get('#menu').click()
        cy.get('#close').click()


    })


})