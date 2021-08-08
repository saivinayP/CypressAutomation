/// <reference types="Cypress" />

describe('Handling mouse hover events', function () {
    it('Launch practise page', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
    })

    it('mouse hover', function(){
        //show method should be applied on immediate parent of hidden element
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Top').click()
        cy.url().should('include','top')
    })

    it('click hidden elements', function(){
        //click method has ability to clcik even hidden elements
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
    })
})  