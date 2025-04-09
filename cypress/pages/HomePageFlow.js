class HomePageFlow {
    visit() {
        cy.visit('https://www.demoblaze.com/');
    }

    getNavbarTitle() {
        return cy.get('.navbar-brand').should('be.visible'); 
    }

    clickLoginButton() {
        cy.get('#login2').should('be.visible').click(); 
    }

    selectCategory(categoryName) {
        cy.contains('.list-group-item', categoryName).should('be.visible').click(); 
    }

    selectProduct(productName) {
        cy.contains('a', productName).should('be.visible').click();
    }
}

export default HomePageFlow;
