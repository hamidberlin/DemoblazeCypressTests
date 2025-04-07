// cypress/pages/loginPage.js

class LoginPage {
    visit() {
      cy.visit('https://www.demoblaze.com');
    }
  
    getUsernameField() {
      return cy.get('#loginusername'); // Finde das Eingabefeld für den Benutzernamen
    }
  
    getPasswordField() {
      return cy.get('#loginpassword'); // Finde das Eingabefeld für das Passwort
    }
  
    getLoginButton() {
      return cy.get('button[onclick="logIn()"]'); // Der Login-Button
    }
  
    getLoginModal() {
      return cy.get('#logInModal'); // Das Login-Modalfenster
    }
  
    login(username, password) {
      this.getUsernameField().type("cypresstest"); // Gebe den Benutzernamen ein
      this.getPasswordField().type("cypresstest"); // Gebe das Passwort ein
      this.getLoginButton().click(); // Klicke auf den Login-Button
    }
  }
  
  export default new LoginPage();
  