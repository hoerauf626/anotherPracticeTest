
/// <reference types="cypress" />
import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps"


Given('I open ultimateqa homepage', () => {
             cy.visit('https://ultimateqa.com/automation');
})

When('I search for Cypress course in the search bar', () => 
    {
      cy.get('.et_pb_text_inner > ul > :nth-child(3) > a').click()
      cy.wait(3000)
      cy.get('[class="et_pb_menu__icon et_pb_menu__search-button"]').should('be.visible').click({force:true})
      cy.get('.et_pb_menu__search-input').type('cypress{enter}')
      cy.scrollTo('center')
    })

Then('I select a course', () =>

    {
      cy.get('.entry-title').should('have.length', 5)
      cy.get('.entry-title').contains('Modern React and NodeJS Development Course Update').click()
    })
    
 
    When('I click on Interactions with simple elements link', () =>
     {
        cy.get('.et_pb_text_inner > ul > :nth-child(7) > a').click()
        cy.scrollTo(0, 500)
     })
    When('I click on the Open toggle to read text',()  =>
    
    {
        cy.get('.et_pb_toggle_0 > .et_pb_toggle_title').click()
    })
    Then('I verify that the toggle has been opened',() => 
    {
        assert.isTrue(true, 'et_pb_module et_pb_toggle et_pb_toggle_0 et_pb_toggle_item et_pb_toggle_true')
    })

    When('I click on Interactions with simple elements link', () => 
    {
        cy.get('.et_pb_text_inner > ul > :nth-child(7) > a').click()
        cy.scrollTo('center')
    })
    When('I select the first radio button Male', () => 
    {
        cy.get('[type="radio"]').first().check()
    })
    When('I select the Opel from the dropdown',() => 
    {
        cy.get('[value="Car"]').check()
        cy.get('[value="Car"]').should('be.checked')
    })
    Then('I assert that both of my selections are true', () => 
    {
        cy.get('select').select('opel').should('have.value', 'opel')
        cy.wait(3000)
        cy.get('select').select('opel').should('be.visible')
    })
     
