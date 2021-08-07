/// <reference types="Cypress" />

describe('My First test Suit', function () {
    it('Launching URL', function () {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    })

    it('type text in search box', function () {
        cy.get('.search-keyword').type('ca');
        cy.wait(2000)
    })

    it('count elements from search results', function () {
        //Assertion
        cy.get('.product:visible').should('have.length', 4)
    })

    it('Add second item to the cart', function () {
        //parent child chaining 
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    })

    it('Adding item based on its Name', function () {
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const vegetableName = $el.find('h4.product-name').text()
            if (vegetableName.includes('Cashews')) {
                $el.find('button').click()
            }
        })
    })



})