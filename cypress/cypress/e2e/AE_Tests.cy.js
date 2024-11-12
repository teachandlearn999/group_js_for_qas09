describe ('AE Tests', () => {

const email = `email${Date.now()}@gmail.com`
const password = 'Pa$Sw0rD'
const username = 'John'

    beforeEach(() => {
    
        cy.visit('https://automationexercise.com')
        cy.get('a[href="/login"]').click()
        cy.get('input[name="name"]').type(username)
        cy.get('input[data-qa="signup-email"]').type(email)
        cy.get('.signup-form button').click()
        cy.get('#id_gender1').click()
        cy.get('#password').type(password)
        cy.get('#days').select('31')
        cy.get('#months').select('2')
        cy.get('#years').select('2011')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#first_name').type('Douglas')
        cy.get('#last_name').type('Smith')
        cy.get('#company').type('Roga & Kopyta')
        cy.get('#address1').type('12345 Oak St')
        cy.get('#address2').type('Apt. 12345')
        cy.get('#state').type('CA')
        cy.get('#city').type('SF')
        cy.get('#zipcode').type('12345')
        cy.get('#mobile_number').type('12345678')
        cy.get('button[data-qa="create-account"]').click()
        cy.get('.pull-right .btn').click()
        cy.get('a[href="/logout"]').click()

    })

    it ('Login User with correct email and password', () => {

        cy.visit('http://automationexercise.com')
        cy.get('.nav a[href="/"]').should('have.css', 'color', 'rgb(255, 165, 0)')
        cy.get('a[href="/login"]').click()
        cy.get('.login-form h2').should('be.visible').and('have.text', 'Login to your account')
        cy.get('input[data-qa="login-email"]').type(email)
        cy.get('input[type="password"]').type(password)
        cy.get('button[data-qa="login-button"]').click()
        cy.get('.navbar-nav li:last-child a').should('be.visible').and('contain', `Logged in as ${username}`)
        cy.get('a[href="/delete_account"]').click()
        cy.get('h2.title').should('be.visible').and('have.text', 'Account Deleted!')
        
        })
                
    })