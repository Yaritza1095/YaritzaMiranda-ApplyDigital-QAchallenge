// cypress/pages/ProductDetailsPage.js

class ProductDetailsPage {
  // Use CSS to set the quantity input field to a random value
  setQuantity(qty) {
    cy.get('#quantity').clear().type(qty);
  }
//click add to cart button
  addToCart() {
    cy.get("button[type='button']").contains('Add to cart').click();
  }

  // Use XPath to click the <u> element with text "View Cart"
  proceedToCheckout() {
    cy.xpath("//u[normalize-space()='View Cart']").click({ force: true });
  }
}

export default ProductDetailsPage;
