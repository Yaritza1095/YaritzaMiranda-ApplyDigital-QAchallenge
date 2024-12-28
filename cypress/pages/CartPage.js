// cypress/pages/CartPage.js
import { faker } from '@faker-js/faker';

class CartPage {
  goToCheckout() {
    // Example: "Proceed To Checkout" button
    cy.contains('Proceed To Checkout').click();
  }

  confirmOrder() {
    cy.contains('Place Order').click();

    // Fill in payment info
    const nameOnCard = faker.person.fullName();        // e.g. "John Doe"
    const cardNumber = faker.finance.creditCardNumber(); // e.g. "4485 5994 3601 9295"
    const cvc = faker.finance.creditCardCVV();           // e.g. "311"
    const expiryMonth = faker.number.int({ min: 1, max: 12 }).toString().padStart(2, '0');
    const expiryYear = faker.date.future().getFullYear().toString(); // e.g. "2027"

    // Example selectors - update these to match your DOM
    cy.get('[data-qa="name-on-card"]').type(nameOnCard);
    cy.get('[data-qa="card-number"]').type(cardNumber);
    cy.get('[data-qa="cvc"]').type(cvc);
    cy.get('[data-qa="expiry-month"]').type(expiryMonth);
    cy.get('[data-qa="expiry-year"]').type(expiryYear);

    // Click the final pay/confirm button
    cy.contains('Pay and Confirm Order').click();

    // Validate success
    cy.contains('Order Placed!').should('be.visible');
  }
}

export default CartPage;
