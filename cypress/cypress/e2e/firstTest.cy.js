/// <reference types="cypress" />
describe('Test Jenkins Home Page', () =>{
    // it('Verify logo URL', ()=>{

    //     cy.visit('http://localhost:8080/login?from=%2F');
    //   //  cy.get('#j_username').type('Russavell');
    //   //  cy.get('#j_password').type('')
    //     cy.get('[alt="logo"]').should('have.attr', 'src', "/static/57f095c6/images/svgs/logo.svg")
    // })
    
    it('Verify logo URL', ()=>{

        cy.visit('http://localhost:8080/login?from=%2F');
        cy.get('#j_username').type('Russavell');
        cy.get('#j_password').type('password');
        cy.get('.jenkins-button').click();
        cy.get('#jenkins-name-icon').should('have.attr', 'src', "/static/4e6b45bd/images/title.svg")
    })
});