// cypress/pages/ProductsPage.js

class ProductsPage {
    // index = zero-based (0 => first, 1 => second, etc.)
    selectProductByIndex(index) {
      cy.get('.features_items .col-sm-4')
        .eq(index)
        .within(() => {
          cy.contains('View Product').click();
        });
    }
  }
  
  export default ProductsPage;
  