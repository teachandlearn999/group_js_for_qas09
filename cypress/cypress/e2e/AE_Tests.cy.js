/// <reference types="cypress" />
describe('AE Tests', () =>{
  const email = `email${Date.now()}@gmail.com`;
  const password = 'password';
  
  beforeEach(()=>{
      const username = 'name'
      cy.visit('https://www.automationexercise.com/')
      cy.get('.nav a[href="/login"]').click();
      cy.get('.signup-form input[name="name"]').type(username);
      cy.get('.signup-form input[name="email"]').type(email);
      cy.get('.signup-form button').click();
      cy.get('#id_gender2').click();
      cy.get('#password').type(password);
      cy.get('#days').select('1');
      cy.get('#months').select('1');
      cy.get('#years').select('2000');
      cy.get('#newsletter').check();
      cy.get('#optin').check();
      cy.get('#first_name').type('Jana');
      cy.get('#last_name').type('Li');
      cy.get('#company').type('ABC');
      cy.get('#address1').type('DFG');
      cy.get('#address2').type('CVB');
      cy.get('#country').select('United States');
      cy.get('#state').type('TX');
      cy.get('#city').type('GT');
      cy.get('#zipcode').type('12345');
      cy.get('#mobile_number').type('1234567890');
      cy.get('button[data-qa="create-account"]').click()
      cy.get('a[data-qa="continue-button"]').click();
      cy.get('.nav a[href="/logout"]').click();
  })
  it('AE_TestCase2', ()=>{
    cy.visit('https://www.automationexercise.com/')
      cy.get('.nav a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)')
      cy.get('.nav a[href="/login"]').click();
      cy.get('.login-form h2').should('have.text','Login to your account'); 

  })
});