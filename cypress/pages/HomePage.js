// cypress/pages/HomePage.js

class HomePage {
    visit() {
      cy.visit('https://automationexercise.com/');
    }
  
    goToProducts() {
      cy.get('.shop-menu .nav > li')
        .contains('Products')
        .click();
    }
  
    // If the site has a top nav link labeled "Signup / Login"
    goToSignupOrLogin() {
      cy.get('.shop-menu .nav > li')
        .contains('Signup / Login')
        .click();
    }
  }
  
  export default HomePage;
  