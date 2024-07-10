describe('Authentication Testing',()=>{
    it('Register the user',()=>{
      cy.visit('http://localhost:3000')
      cy.get('.title').contains('Welcome Back')
      cy.get('#signup').click()
      cy.get('.title').contains('Create an Account')
      cy.get('#firstname').type('Tester')
      cy.get('#lastname').type('Two')
      cy.get('#email').type('tester2@gmail.com')
      cy.get('#user_password').type('123456')
      cy.get('#checkbox').check()

      cy.get('input[type="submit"]').click()
      cy.wait(2000)
      cy.get('.title').contains('Welcome Back')})

      
})