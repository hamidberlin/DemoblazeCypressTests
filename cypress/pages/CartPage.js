class CartPage {
  // Gehe zum Warenkorb
  goToCart() {
    cy.get('#cartur')
      .should('be.visible')  
      .click();
  }

  // Platziere die Bestellung
  placeOrder() {
    cy.contains('Place Order')
      .should('be.visible')  
      .click();
  }

  // Fülle das Bestellformular aus
  fillOrderForm(data) {
    cy.get('#name')
      .should('be.visible')
      .type(data.name);  
    cy.get('#country')
      .should('be.visible')
      .type(data.country);  
    cy.get('#city')
      .should('be.visible')
      .type(data.city);  
    cy.get('#card')
      .should('be.visible')
      .type(data.card);  
    cy.get('#month')
      .should('be.visible')
      .type(data.month);  
    cy.get('#year')
      .should('be.visible')
      .type(data.year);  
  }

  // Bestellvorgang abschließen
  submitPurchase() {
    cy.contains('Purchase')
      .should('be.visible')  
      .click();

    // Warten auf die Bestellbestätigung
    cy.get('.sweet-alert', { timeout: 15000 })
      .should('be.visible')  
      .contains('Thank you for your purchase!')  
      .should('be.visible');  

    // Bestätigung anklicken
    cy.contains('OK')
      .should('be.visible')  
      .click();
  }
}

export default CartPage;
