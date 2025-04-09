class LoginPageFlow {
  login(username, password) {
    cy.get('#loginusername').clear().type(username).should('be.visible');
    cy.get('#loginpassword').clear().type(password).should('be.visible');
    cy.get('button[onclick="logIn()"]').should('be.enabled').click();
  }

  checkLoginSuccess() {
    // Warten auf das Element '#nameofuser', auch wenn es durch CSS oder ein anderes Event verzögert wird
    cy.get('#nameofuser', { timeout: 60000 })
      .should('be.visible')
      .and('contain.text', 'Welcome')
      .then(($el) => {
        // Sicherstellen, dass das Element nicht 'display: none' hat
        expect($el).to.have.css('display', 'block');
      });
  }
}

export default LoginPageFlow;
