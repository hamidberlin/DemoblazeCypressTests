class HomePage {
    visit() {
      cy.visit('https://www.demoblaze.com/');
    }
  
    getNavbarTitle() {
      return cy.get('.navbar-brand');
    }
  }
  
  export default HomePage;
  