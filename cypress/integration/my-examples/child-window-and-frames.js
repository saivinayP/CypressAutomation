/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Handling child windows', function () {
    it('Launch practise page', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    })

    it('Launch new window', function () {
        cy.get('#opentab').then(function(el){
            const url = el.prop('href')
            cy.log(url)
            cy.visit(url)
            //it only works if the url is of same domain as main page
        })
    })

    it('Handle frames', function(){
        //frame is a html doc embeded into another html page
        //install cypress-iframe usinng command npm install -D cypress-iframe
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
        cy.frameLoaded('iframe#courses-iframe')
        cy.iframe().find('a[href*="mentorship"]').eq(0).click() 
        cy.iframe().find('h1[class*="pricing-title"]').should('have.length','2')
        /*
            always load frame before perfoorming any action on that
            use iframe to perform any action inside a frame
        */
    })
})