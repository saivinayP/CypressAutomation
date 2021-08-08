/// <reference types="Cypress" />

describe('Handling alerts and pop ups', function () {
    it('Launch practise page', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    })

    it('pop up handling', function(){
        //cypress auto accepts alerts and pop ups
        //it has capability to listen to browser events 
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //events
        //window:alert 
        cy.on('window:alert',(str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        //window:confirm
        cy.on('window:confirm',(str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })
    })
})