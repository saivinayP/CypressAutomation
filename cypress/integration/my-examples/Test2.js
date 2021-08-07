/// <reference types="Cypress" />

describe('Handling Web Controls UI using Cypress', function () {
    it('Launch practise page', function () {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/#/')
    })

    it('Assertion: is option1 checked ?', function () {
        cy.get('#checkBoxOption1').check()
        cy.get('#checkBoxOption1').should('be.checked').and('have.value', 'option1')
    })

    it('Assertion: option1 should not be checked', function () {
        cy.get('#checkBoxOption1').uncheck()
        cy.get('#checkBoxOption1').should('not.be.checked').and('have.value', 'option1')
    })

    it('check multiple checkboxes at a time', function () {
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])
    })

    it('static dropdown', function () {
        cy.get('select').select('option1').should('have.value', 'option1')
    })

    it('dynamic dropdowns', function () {
        cy.get('input#autocomplete').type('ind')

        cy.get('.ui-menu-item .ui-menu-item-wrapper').each(($el, index, $list) => {
            if ($el.text() === 'India') {
                $el.click()
            }
        })

        cy.get('input#autocomplete').should('have.value', 'India')
    })

    it('Handling Visible and invisible elements using Assertions in Cypress', function(){
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')
    })

    it('Radio buttons', function(){
        cy.get('input[value="radio1"]').check()
    })
})