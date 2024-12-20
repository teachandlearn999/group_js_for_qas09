// just for test












/*
/// <reference types="cypress" />

// https://www.automationexercise.com/test_cases #2

describe('automationexercise test_cases #2', () => {
    const email = `email${Date.now()}0@gmail.com`
    const password = 'password65435563'

    beforeEach('', () => {
        const username = 'name';
        cy.visit('https://automationexercise.com/')
        cy.get('.nav a[href="/login"]')
          .click()
        cy.get('.signup-form h2')
        cy.get('.signup-form input[name="name"]')
          .type(username)
        cy.get('.signup-form input[name="email"]')
          .type(email)
        cy.get('.signup-form button')
          .click()
        cy.get('#id_gender2')
          .click()
        cy.get('#password')
          .type(password)
        cy.get('#days')
          .select('1')
        cy.get('#months')
          .select('1')
        cy.get('#years')
          .select('2000')
        cy.get('#newsletter')
          .check()
        cy.get('#optin')
          .check()
        cy.get('#first_name')
          .type('O')
        cy.get('#last_name')
          .type('A')
        cy.get('#company')
          .type('OOO AAA')
        cy.get('#address1')
          .type('zfdfxgf')
        cy.get('#address2')
          .type('fzdgxfc')
        cy.get('#country')
          .select('United States')
        cy.get('#state')
          .type('CA')
        cy.get('#city')
          .type('LA')
        cy.get('#zipcode')
          .type('90001')
        cy.get('#mobile_number')
          .type('1231234545')
        cy.get('button[data-qa="create-account"]')
          .click()
        cy.get('a[data-qa="continue-button"]')
          .click()
        cy.get('.nav a[href="/logout"]')
          .click()
    })

    it('Test Case 2: Login User with correct email and password', () => {
        cy.visit('https://automationexercise.com/')
        cy.get('.nav a[href="/"]')
          .should('have.css', 'color', 'rgb(255, 165, 0)')
        cy.get('.nav a[href="/login"]')
          .click()
        cy.get('.login-form h2')
          .should('be.visible')
          .should('have.text', 'Login to your account')
          
        // to be continiued...
    })
})
*/


