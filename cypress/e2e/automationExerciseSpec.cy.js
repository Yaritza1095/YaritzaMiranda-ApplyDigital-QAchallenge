// cypress/e2e/automationExerciseSpec.cy.js

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import CartPage from '../pages/CartPage';
import LoginRegisterPage from '../pages/LoginRegisterPage';

import { faker } from '@faker-js/faker';
import 'cypress-xpath'; // If you're using XPath for the "View Cart" popup

describe('Automation Exercise - E2E Flow (Desktop & Mobile)', () => {
  const homePage = new HomePage();
  const loginRegisterPage = new LoginRegisterPage();
  const productsPage = new ProductsPage();
  const productDetailsPage = new ProductDetailsPage();
  const cartPage = new CartPage();

  // You can still keep these flags if you want to turn features on/off
  const enableLogout = true;

  it('Desktop Flow', () => {
    cy.viewport(1280, 720);
    fullFlow();
  });

  it('Mobile Flow (iPhone 6)', () => {
    cy.viewport('iphone-6');
    fullFlow();
  });

  function fullFlow() {
    // 1) Visit site
    homePage.visit();

    // 2) Click "Signup / Login" from the homepage
    homePage.goToSignupOrLogin();

    // 3) Register
    const name = faker.person.firstName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    loginRegisterPage.register(name, email, password);

    // (At this point, we are logged in as the new user)
    // 4) Go to Products
    homePage.goToProducts();

    // 5) Select the 3rd product
    productsPage.selectProductByIndex(2);

    // 6) Enter random quantity & add to cart
    const qty = Cypress._.random(1, 20);
    productDetailsPage.setQuantity(qty);
    productDetailsPage.addToCart();

    // 7) Click "View Cart" via the popup (no reload)
    productDetailsPage.proceedToCheckout();

    // 8) On the cart page, proceed to checkout
    cartPage.goToCheckout();

    // 9) Confirm Order
    cartPage.confirmOrder();

    // 10) Logout
    if (enableLogout) {
      loginRegisterPage.logout();
      cy.contains('Signup / Login').should('be.visible');
    }
  }
});
