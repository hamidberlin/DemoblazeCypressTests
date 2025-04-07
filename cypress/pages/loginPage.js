// cypress/pages/loginPage.js

class LoginPage {
  // Selektoren
  get usernameField() {
    return cy.get('#loginusername');
  }

  get passwordField() {
    return cy.get('#loginpassword');
  }

  get loginButton() {
    return cy.get('.btn.btn-primary');
  }

  get loginModal() {
    return cy.get('#login2');
  }

  get usernameError() {
    return cy.get('.toast').should('be.visible').and('contain', 'Wrong username or password');
  }

  // Methoden
  openLoginModal() {
    this.loginModal.click();
  }

  submitLogin(username, password) {
    this.usernameField.type("cypresstest");
    this.passwordField.type("cypresstest");
    this.loginButton.click();
  }

  // Optional: Überprüfen, ob der Login erfolgreich war
  checkIfLoggedIn(username) {
    cy.get('#nameofuser').should('contain', username);
  }
}

export default new LoginPage();
