/// <reference types="cypress" />
describe("AE Tests", () => {
  const email = `email${Date.now()}@gmail.com`;
  const password = "password";
  const username = "name";
  const incorrectEmail = `incorrectemail${Date.now()}@g.com`;
  const incorrectPass = 'incorrectpassword';
  const address1 = "ABC";
  const address2 = "CBD";
  const testsNeedingAccount = ["AE_TestCase2", "AE_TestCase4"];


  beforeEach(function () {
    cy.visit("https://www.automationexercise.com/");
    cy.get('.nav a[href="/"]').should("have.css", "color", "rgb(255, 165, 0)");

    if (testsNeedingAccount.includes(this.currentTest.title)) {
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

  it("AE_TestCase1", () => {
    cy.get('.nav a[href="/login"]').click();
    cy.get(".signup-form h2").should("be.visible").should("have.text", "New User Signup!");
    cy.get('.signup-form input[name="name"]').type(username);
    cy.get('.signup-form input[name="email"]').type(`email_${Date.now()}@gmail.com`);
    cy.get(".signup-form button").click();
    cy.get("#id_gender2").click();
    cy.get("#password").type(password);
    cy.get("#days").select("1");
    cy.get("#months").select("1");
    cy.get("#years").select("2000");
    cy.get("#newsletter").check();
    cy.get("#optin").check();
    cy.get("#first_name").type("O");
    cy.get("#last_name").type("A");
    cy.get("#company").type("OOO AAA");
    cy.get("#address1").type("zfdfxgf");
    cy.get("#address2").type("fzdgxfc");
    cy.get("#country").select("United States");
    cy.get("#state").type("CA");
    cy.get("#city").type("LA");
    cy.get("#zipcode").type("90001");
    cy.get("#mobile_number").type("1231234545");
    cy.get('button[data-qa="create-account"]').click();
    cy.get('h2[data-qa="account-created"]').should("be.visible").should("have.text", "Account Created!");
    cy.get('a[data-qa="continue-button"]').click();
    cy.get(".navbar-nav li:last-child a").should("be.visible").should("contain", `Logged in as ${username}`);
    cy.get(".navbar-nav li:last-child a b").should("have.css","font-weight","700");
    cy.get('.navbar-nav a[href="/delete_account"]').click();
    cy.get("h2.title").should("be.visible").should("have.text", "Account Deleted!");
    cy.get('a[data-qa="continue-button"]').click();
    cy.get('.nav a[href="/"]').should("have.css", "color", "rgb(255, 165, 0)");
  });

  it("AE_TestCase2", () => {
    cy.get('.nav a[href="/login"]').click();
    cy.get(".login-form h2").should("have.text", "Login to your account");
    cy.get('.login-form input[name="email"]').type(email);
    cy.get('.login-form input[name="password"]').type(password);
    cy.get(".btn.btn-default").first().click();
    cy.contains("Logged in as name").should("be.visible");
    cy.get('.nav a[href="/delete_account"]').click();
    cy.get("h2.title.text-center").should("include.text", "Account Deleted!");
    cy.get('a[data-qa="continue-button"]').click();
    cy.get('.nav a[href="/"]').should("have.css", "color", "rgb(255, 165, 0)");
  });

  it("AE_TestCase3", () => {
    cy.get('.nav a[href="/login"]').click();
    cy.get('.login-form h2').should('be.visible').should('have.text', "Login to your account");
    cy.get('.login-form input[name="email"]').type(incorrectEmail);
    cy.get('.login-form input[name="password"]').type(incorrectPass);
    cy.get('[data-qa="login-button"]').click();
    cy.get('[action="/login"] p').should('be.visible').should('have.text', "Your email or password is incorrect!")
  })

  it("AE_TestCase4", () => {
    cy.get('.nav a[href="/login"]').click();
    cy.get(".login-form h2").should("have.text", "Login to your account");
    cy.get('.login-form input[name="email"]').type(email);
    cy.get('.login-form input[name="password"]').type(password);
    cy.get(".btn.btn-default").first().click();
    cy.contains("Logged in as name").should("be.visible")
    cy.get(".nav [href='/logout']").click();
    cy.get(".login-form h2").should("have.text", "Login to your account");
  })

  //Register User with existing email
  it("AE_TestCase5", () => {
    cy.get('.nav a[href="/login"]').click();
    cy.get(".signup-form h2").should("be.visible");
    cy.get('input[data-qa="signup-name"]').type(username);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();
    cy.get('.signup-form p').should('be.visible')
  })

  it("AE_TestCase6", () => {
    const fileName = "HTTP_Status.pdf";
    cy.get('a[href="/contact_us"]').should("be.visible").click();
    cy.get("div h2").contains("Get In Touch").should("be.visible");
    cy.get('input[data-qa="name"]').type("Patrick");
    cy.get('input[data-qa="email"]').type("a@gmail.com");
    cy.get('input[data-qa="subject"]').type("About");
    cy.get("#message.form-control").type("Everything looks good!");
    // cy.get('input.form-control[type="file"]').attachFile('fileName');
    cy.get('input[data-qa="submit-button"]').click();
    cy.on("window:alert", (text) => {
      expect(text).to.equal("Press OK to proceed").click("OK");
    });
    cy.get(" div.status.alert.alert-success").should("be.visible").should("have.text","Success! Your details have been submitted successfully.");
    cy.get("#form-section .fa fa-angle-double-left").text(" Home").click();
    cy.get('.nav a[href="/"]').should("have.css","color","rgb(255, 165, 0)");

  });

  it("AE_TestCase6_v2", () => {
    cy.get('.nav a[href="/contact_us"]').click();
    cy.get(".contact-form h2").should("be.visible").should("have.text", "Get In Touch");
    cy.get('input[data-qa="name"]').type(username);
    cy.get('input[data-qa="email"]').type("email@gmail.com");
    cy.get('input[data-qa="subject"]').type(`AE_TestCase6_${Date.now()}`);
    cy.get("#message").type("This is test message.");
    cy.get('input[name="upload_file"]').selectFile("cypress/support/upload_file.txt");
    cy.get('input[data-qa="submit-button"]').click();
    cy.on("window:confirm", (text) => {
      expect(text).to.contains("Press OK to proceed!");
      return true;
    });
    cy.get(".status.alert.alert-success").should("be.visible").should("have.text", "Success! Your details have been submitted successfully.");
    cy.get(".btn-success").contains("Home").click();
    cy.get('.nav a[href="/"]').should("have.css", "color", "rgb(255, 165, 0)");
  });

  it("AE_TestCase8", () => {
    cy.get('a[href="/products"]').click();
    cy.get("div.features_items").should("contain", "All Products");
    cy.get(".features_items").should("be.visible");
    cy.get('a[href="/product_details/1"]').click();
    cy.get("div.product-information").should("be.visible");
    cy.get(".product-information h2").should("be.visible");
    cy.get("div.product-information p").should("be.visible").should("contain", "Category");
    cy.get("div.product-information span span").should("be.visible");
    cy.get("div.product-information p").should("be.visible").should("contain", "Availability:");
    cy.get("div.product-information p").should("be.visible").should("contain", "Condition:");
    cy.get("div.product-information p").should("be.visible").should("contain", "Brand:");
  });

  it("AE_TestCase9", () => {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.get(".navbar-nav").should("be.visible");
    cy.title().should("include", "Automation Exercise");
    cy.get('a[href="/products"]').click();

    // user is navigated to ALL PRODUCTS page successfully
    cy.get(".features_items")
      .should("be.visible")
      .and("contain", "All Products");

    //Enter product name 'top'; in search box, click search button
    const searchProduct = "Top";

    cy.get("#search_product").should("be.visible").type(searchProduct);
    searchProduct.toLowerCase().trim();
    cy.get("#submit_search").click();

    cy.get(".features_items h2")
      .should("be.visible")
      .and("contain", "Searched Products");

    cy.get(".single-products").should("exist").and("be.visible");

    cy.get(".features_items .product-image-wrapper")
      .should("exist")
      .and("be.visible");

    // Log total number of products found
    cy.get(".features_items .product-image-wrapper").then(($products) => {
      cy.log(`Total products found: ${$products.length}`);
    });

    cy.get(".features_items .product-image-wrapper")
      .should("have.length.at.least", 1)
      .first()
      .within(() => {
        cy.get(".productinfo p")
          .invoke("text")
          .then((text) => {
            cy.log("Found product:", text);
          });
      });

    //verify that search results are displayed
    cy.get(".features_items").should("contain", "Rs.");

    // Log all product names for debugging
    cy.get(".features_items .product-image-wrapper").each(($product, index) => {
      cy.wrap($product)
        .find(".productinfo p")
        .invoke("text")
        .then((text) => {
          cy.log(`Product ${index + 1}: ${text}`);
        });
    });
  });

  it("AE_TestCase13", () => {
    cy.get('a[href="/product_details/1"]').click(); // нажать на товар
    cy.url().should("include", "/product_details/1"); // проверить, что мы на странице товара

    cy.get("span span") // сохраняем значение цены в переменную со страницы товара
      .invoke("text")
      .then((price1) => {
        Cypress.env("price1", price1);
      });

    cy.get("input#quantity").clear(); // очистить текущее количество товара на странице
    cy.get("input#quantity").type("4"); // выбрать 4 товара
    cy.get("button.btn.btn-default.cart").click(); // добавить в корзину
    cy.get('a[href="/view_cart"] u').click(); // посмотреть странцу корзины
    cy.get('a[href="/product_details/1"]')
      .should("be.visible")
      .should("have.text", "Blue Top"); // проверить название товара в корзине

    cy.get(".cart_price p").then(($price2) => {
      const price2 = $price2.text();
      const price1 = Cypress.env("price1");
      expect(price2).to.equal(price1);
    }); // сравниваем цену в корзине с ценой на странице товара

    cy.get("td.cart_price p")
      .invoke("text")
      .then((text) => {
        const price = +text.replace("Rs. ", ""); // Преобразуем "Rs. 500" в число 500

        cy.get("button.disabled") // Получаем значение из кнопки <button class="disabled">4</button>
          .invoke("text")
          .then((buttonText) => {
            const quantity = +buttonText; // Преобразуем текст "4" в число 4

            cy.get("p.cart_total_price") // Проверяем значение в теге <p class="cart_total_price">Rs. 2000</p>
              .invoke("text")
              .then((totalText) => {
                const totalPrice = +totalText.replace("Rs. ", ""); // Преобразуем "Rs. 2000" в число 2000

                expect(totalPrice).to.equal(price * quantity); // Проверяем, что totalPrice равен price * quantity
              });
          });
      });

    cy.get("button.disabled").should("be.visible").should("have.text", "4"); // проверить количество
  });
  
  it("AE_TC14_ Place Order: Register while Checkout", () => {
    cy.get('div.overlay-content a.add-to-cart[data-product-id="1"]').click({ force: true });
    cy.get('#cartModal  u').click();
    cy.get('.nav a[href="/view_cart"]').should('have.css', 'color', 'rgb(255, 165, 0)');
    cy.get('a.check_out').click();
    cy.get('a[href="/login"] u').click();
    cy.get('[data-qa="signup-name"]').type(username);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();
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
    cy.get('#address1').type(address1);
    cy.get('#address2').type(address2);
    cy.get('#country').select('United States');
    cy.get('#state').type('TX');
    cy.get('#city').type('GT');
    cy.get('#zipcode').type('12345');
    cy.get('#mobile_number').type('1234567890');
    cy.get('button[data-qa="create-account"]').click()
    cy.get('h2[data-qa="account-created"]').should('be.visible').should('have.text', 'Account Created!')
    cy.get('[data-qa="continue-button"]').click();
    cy.get('b').contains(username);
    cy.get('.nav a[href="/view_cart"]').click();
    cy.get('.col-sm-6 > .btn').click();
    cy.get('#address_delivery > :nth-child(4)').should('have.text', address1);
    cy.get('.form-control').type('Comment');
    cy.get('a[href="/payment').click();
    cy.get('input[name="name_on_card"]').type(username);
    cy.get('[data-qa="card-number"]').type(123456789);
    cy.get('[data-qa="cvc"]').type(123);
    cy.get('input[name="expiry_month"]').type(12);
    cy.get('input[name="expiry_year"]').type(2025);
    cy.get('#submit').click();
    cy.get('.col-sm-9 > p').should('have.text', 'Congratulations! Your order has been confirmed!');
    cy.get('.nav a[href="/delete_account"]').click();
    cy.get('h2.title.text-center[data-qa="account-deleted"]').should('have.text', 'Account Deleted!');
  })

  it("AE_TestCase21", () => {
    cy.get('a[href="/products"]').click(); //Product button
    cy.get("h2.title").should("have.text", "All Products"); // All product page
    cy.get('a[href="/product_details/1"]').click(); //Click view product
    cy.get(".nav li.active a").should("be.visible").should("have.text", "Write Your Review"); //Verify write your review is visible
    cy.get('input[id="name"]').type("Rus");
    cy.get('input[id="email"]').type("rus.gmail.com");
    cy.get('textarea[id="review"]').type("My new review");
    cy.get('button[id="button-review"]').click();
    cy.get("#review-section").invoke("show").find("span").should("have.text", "Thank you for your review.");
    // Option #2
    // cy.get('#review-section').then((el)=>{
    //     const text = el.show().text().trim();
    //     expect(text).to.eq('Thank you for your review.');
    // })
  });
  
});
