import LoginPage from '../../pages/LoginPageBase';

describe('Login Test', () => {
  it('should log something', () => {
    cy.log('Login test loaded');
  });
});

// Beginnt die Test-Suite mit dem Titel "Demoblaze Login"
describe('Demoblaze Login', () => {

  // beforeEach-Hook: Wird vor jedem Test ausgeführt
  beforeEach(() => {
    // Besucht die Demoblaze-Startseite
    cy.visit('https://www.demoblaze.com/')

    // Lädt die Testdaten (Benutzerinformationen) aus der 'users.json'-Datei in den Fixtures-Ordner
    // und speichert sie unter dem Alias 'users' zur späteren Verwendung mit 'this.users'
    cy.fixture('users').as('users');
  })

  // Der eigentliche Testfall: Einloggen mit gültigem Benutzer
  it('logs in with valid user', function () {
    // Öffnet das Login-Fenster über das Page Object
    LoginPage.openLoginModal();

    // Kurze Wartezeit, damit das Modal vollständig geladen wird (kann durch besseres Warten ersetzt werden)
    cy.wait(500);

    // Gibt den Benutzernamen aus der Fixture-Datei ein
    LoginPage.enterUsername(this.users.validUser.username);

    // Gibt das Passwort ein
    LoginPage.enterPassword(this.users.validUser.password);

    // Klickt auf den Login-Button
    LoginPage.clickLoginButton();

    // Wartezeit, um sicherzustellen, dass der Login abgeschlossen ist
    cy.wait(1000);

      // Screenshot nach Test
    cy.screenshot();

    // Überprüft, ob der Benutzername nach dem Login korrekt angezeigt wird
    LoginPage.assertUserLoggedIn(this.users.validUser.username);
  })
})

