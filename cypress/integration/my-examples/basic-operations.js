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

    it('Print text from logo', function () {
        cy.get('.brand').then(function(element){
            cy.log(element.text())
        })
    })

    it('Assertion to check if logo text dispalyed as expected', function () {
        if(cy.get('.brand').should('have.text','GREENKART')){
            cy.log('Expected text found') //print tetx to test runner logs
            console.log('Text Found') //prints text ot browser console
        }
    })

    it('Aliasing', function () {
        cy.get('.products').as('ProductElementLocator') //aliasing element locator
        cy.get('@ProductElementLocator').find('.product').eq(0).contains('ADD TO CART').click()
    })
    
    it('Checkout', function () {
        cy.get('a.cart-icon').click()
        cy.get('button').contains('PROCEED TO CHECKOUT').click()
        cy.get(':nth-child(14)').click()
    })
})