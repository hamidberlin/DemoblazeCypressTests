// Importiert das Page Object für die Login-Seite
import loginPage from '../../support/pageObjects/loginPage'

// Beginnt die Test-Suite mit dem Titel "Demoblaze Login"
describe('Demoblaze Login', () => {

  // beforeEach-Hook: Wird vor jedem Test ausgeführt
  beforeEach(() => {
    // Besucht die Demoblaze-Startseite
    cy.visit('https://www.demoblaze.com/')

    // Lädt die Testdaten (Benutzerinformationen) aus der 'users.json'-Datei in den Fixtures-Ordner
    // und speichert sie unter dem Alias 'users' zur späteren Verwendung mit 'this.users'
    cy.fixture('users').as('users')
  })

  // Der eigentliche Testfall: Einloggen mit gültigem Benutzer
  it('logs in with valid user', function () {
    // Öffnet das Login-Fenster über das Page Object
    loginPage.openLoginModal()

    // Kurze Wartezeit, damit das Modal vollständig geladen wird (kann durch besseres Warten ersetzt werden)
    cy.wait(500)

    // Gibt den Benutzernamen aus der Fixture-Datei ein
    loginPage.enterUsername(this.users.validUser.username)

    // Gibt das Passwort ein
    loginPage.enterPassword(this.users.validUser.password)

    // Klickt auf den Login-Button
    loginPage.clickLoginButton()

    // Wartezeit, um sicherzustellen, dass der Login abgeschlossen ist
    cy.wait(1000)

    // Überprüft, ob der Benutzername nach dem Login korrekt angezeigt wird
    loginPage.assertUserLoggedIn(this.users.validUser.username)
  })
})
