/// <reference types="Cypress" />

describe('Handling child windows', function () {
    it('Launch practise page', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    })

    // we have to handle dom to open child window in same page. 
    // that can be done by modifying target atribute

    it('open new tab in smae page', function(){
        //removeAttr is jquery method, invoke is cypress command
        cy.get('#opentab').invoke('removeAttr','target').click()
    })

    it('navigate between pages', function(){
        cy.url().should('include','rahulshettyacademy.com/#/index')
        cy.go('back')//go backward
        
        cy.url().should('include','rahulshettyacademy.com/AutomationPractice/#/')
        cy.go('forward')//go forward
    })

})