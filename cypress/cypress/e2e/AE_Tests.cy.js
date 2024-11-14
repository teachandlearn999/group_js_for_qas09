/// <reference types="cypress" />
describe("AE Tests", () => {
  const email = `email${Date.now()}@gmail.com`;
  const password = "password";

  beforeEach(() => {
    const username = "name";
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
  });

  it("AE_TestCase2", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('.nav a[href="/"]').should("have.css", "color", "rgb(255, 165, 0)");
    cy.get('.nav a[href="/login"]').click();
    cy.get(".login-form h2").should("have.text", "Login to your account");
  });

  it("AE_TestCase13", () => {
    cy.visit("https://www.automationexercise.com/");
    cy.get('.nav a[href="/"]').should("have.css", "color", "rgb(255, 165, 0)"); // проверить homepage
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
});
