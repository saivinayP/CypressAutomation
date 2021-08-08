/// <reference types="Cypress" />

describe('Handling web tables', function () {
    it('Launch practise page', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice')
    })

    it('get price of a cource from web table', function(){
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            if($el.text().includes('Python')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const priceText = price.text()
                    cy.log('Price of the cource is : '+priceText)
                    expect(priceText).to.equal('25')
                })
            }
        })
    })
})