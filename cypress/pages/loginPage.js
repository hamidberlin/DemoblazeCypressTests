// Definiert eine Klasse für die Login-Seite im Page Object Model
class LoginPage {
  
  // Öffnet das Login-Modal, indem der "Log in"-Button in der Navigation angeklickt wird
  openLoginModal() {
    cy.get('#login2').click()
  }

  // Gibt den Benutzernamen in das entsprechende Eingabefeld ein
  enterUsername(username) {
    cy.get('#loginusername').clear().type(username)
  }

  // Gibt das Passwort in das entsprechende Eingabefeld ein
  enterPassword(password) {
    cy.get('#loginpassword').clear().type(password)
  }

  // Klickt auf den Login-Button im Modal, um den Login-Vorgang auszulösen
  clickLoginButton() {
    cy.get('button[onclick="logIn()"]').click()
  }

  // Überprüft, ob der Benutzer erfolgreich eingeloggt ist
  assertUserLoggedIn(username) {
    cy.get('#nameofuser').should('contain.text', username)
  }
}

// Exportiert eine Instanz der LoginPage-Klasse
export default new LoginPage();
