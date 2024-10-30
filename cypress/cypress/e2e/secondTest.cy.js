/// <reference types="cypress" />
describe('Test Jenkins Home Page', () => {
    it('Check "Add description" button class', () => {
        cy.visit('http://localhost:8080/login?from=%2F');
        cy.get('#j_username').type('admin');
        cy.get('#j_password').type('password');
        cy.get('.jenkins-button').click();
        cy.get('#description-link').should('have.class', 'jenkins-button');
    })
});
