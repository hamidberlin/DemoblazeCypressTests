class ProductPage {
  addToCart() {
    // Klick auf den Button "Add to cart"
    cy.contains('Add to cart')
      .should('be.visible')
      .click();

    // Log und Screenshot zur Fehlersuche hinzufügen
    cy.log('Product added to cart!');
    cy.screenshot('product_added_to_cart');
  }
}

export default ProductPage;
