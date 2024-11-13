/// <reference types="cypress" />
describe("AE Tests", () => {
  const email = `email${Date.now()}@gmail.com`;
  const password = "password";
  const username = "name";
  const testsNeedingAccount = ["AE_TestCase2"];

  beforeEach(function() {
    if (testsNeedingAccount.includes(this.currentTest.title)) {
      cy.visit("https://www.automationexercise.com/");
      cy.get('.nav a[href="/login"]').click();
      cy.get('.signup-form input[name="name"]').type(username);
      cy.get('.signup-form input[name="email"]').type(email);
      cy.get(".signup-form button").click();
      cy.get("#id_gender2").click();
      cy.get("#password").type(password);
      cy.get("#days").select("1");
      cy.get("#months").select("1");
      cy.get("#years").select("2000");
      cy.get("#newsletter").check();
      cy.get("#optin").check();
      cy.get("#first_name").type("Jana");
      cy.get("#last_name").type("Li");
      cy.get("#company").type("ABC");
      cy.get("#address1").type("DFG");
      cy.get("#address2").type("CVB");
      cy.get("#country").select("United States");
      cy.get("#state").type("TX");
      cy.get("#city").type("GT");
      cy.get("#zipcode").type("12345");
      cy.get("#mobile_number").type("1234567890");
      cy.get('button[data-qa="create-account"]').click();
      cy.get('a[data-qa="continue-button"]').click();
      cy.get('.nav a[href="/logout"]').click();
    }
  });

  it('AE_TestCase1', () => {
    cy.visit('https://automationexercise.com/')
    cy.get('.nav a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)')
    cy.get('.nav a[href="/login"]').click()
    cy.get('.signup-form h2').should('be.visible').should('have.text', 'New User Signup!')
    cy.get('.signup-form input[name="name"]').type(username)
    cy.get('.signup-form input[name="email"]').type(`email_${Date.now()}@gmail.com`)
    cy.get('.signup-form button').click()
    cy.get('#id_gender2').click()
    cy.get('#password').type(password)
    cy.get('#days').select('1')
    cy.get('#months').select('1')
    cy.get('#years').select('2000')
    cy.get('#newsletter').check()
    cy.get('#optin').check()
    cy.get('#first_name').type('O')
    cy.get('#last_name').type('A')
    cy.get('#company').type('OOO AAA')
    cy.get('#address1').type('zfdfxgf')
    cy.get('#address2').type('fzdgxfc')
    cy.get('#country').select('United States')
    cy.get('#state').type('CA')
    cy.get('#city').type('LA')
    cy.get('#zipcode').type('90001')
    cy.get('#mobile_number').type('1231234545')
    cy.get('button[data-qa="create-account"]').click()
    cy.get('h2[data-qa="account-created"]').should('be.visible').should('have.text', 'Account Created!')
    cy.get('a[data-qa="continue-button"]').click()
    cy.get('.navbar-nav li:last-child a').should('be.visible').should('contain', `Logged in as ${username}`)
    cy.get('.navbar-nav li:last-child a b').should('have.css', 'font-weight', '700')
    cy.get('.navbar-nav a[href="/delete_account"]').click()
    cy.get('h2.title').should('be.visible').should('have.text', 'Account Deleted!')
    cy.get('a[data-qa="continue-button"]').click()
    cy.get('.nav a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)')
})
  
  
  it("AE_TestCase2", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('.nav a[href="/"]').should("have.css", "color", "rgb(255, 165, 0)");
    cy.get('.nav a[href="/login"]').click();
    cy.get(".login-form h2").should("have.text", "Login to your account");
  });

});
