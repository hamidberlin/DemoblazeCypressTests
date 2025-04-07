// Definiert eine Klasse für die Login-Seite im Page Object Model
class LoginPage {
  
  // Öffnet das Login-Modal, indem der "Log in"-Button in der Navigation angeklickt wird
  openLoginModal() {
    cy.get('#login2').click()
  }

  // Gibt den Benutzernamen in das entsprechende Eingabefeld ein
  // .clear() stellt sicher, dass das Feld vorher geleert wird
  enterUsername(username) {
    cy.get('#loginusername').clear().type(username)
  }

  // Gibt das Passwort in das entsprechende Eingabefeld ein
  // Auch hier wird vorher das Feld geleert
  enterPassword(password) {
    cy.get('#loginpassword').clear().type(password)
  }

  // Klickt auf den Login-Button im Modal, um den Login-Vorgang auszulösen
  clickLoginButton() {
    cy.get('button[onclick="logIn()"]').click()
  }

  // Überprüft, ob der Benutzer erfolgreich eingeloggt ist
  // Dazu wird geschaut, ob oben rechts der Text mit dem Benutzernamen erscheint
  assertUserLoggedIn(username) {
    cy.get('#nameofuser').should('contain.text', username)
  }
}

// Exportiert eine Instanz der LoginPage-Klasse
// So kann sie in den Testdateien direkt verwendet werden
export default LoginPage()
