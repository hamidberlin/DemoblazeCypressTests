// cypress/e2e/tests/login.cy.js

import LoginPage from '../../pages/loginPage';

describe('Login Tests for Demoblaze', () => {
  it('should login with valid credentials', () => {
    cy.visit('https://www.demoblaze.com');
    LoginPage.openLoginModal(); // Login-Modal öffnen
    LoginPage.submitLogin('your_username', 'your_password'); // Mit gültigen Daten anmelden
    LoginPage.checkIfLoggedIn('your_username'); // Überprüfen, ob der Benutzer eingeloggt ist
  });

  it('should show error with invalid credentials', () => {
    cy.visit('https://www.demoblaze.com');
    LoginPage.openLoginModal(); // Login-Modal öffnen
    LoginPage.submitLogin('wrong_username', 'wrong_password'); // Mit ungültigen Daten anmelden
    LoginPage.usernameError(); // Überprüfen, ob die Fehlermeldung angezeigt wird
  });
});
