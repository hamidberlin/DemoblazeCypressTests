import loginPage from '../../pages/loginPage';

describe('Login Test for Demoblaze', () => {
  it('should login with valid credentials', () => {
    // Besuche die Demoblaze-Website
    loginPage.visit();

    // Melde dich mit gültigen Anmeldedaten an
    loginPage.login('validUsername', 'validPassword');

    // Überprüfe, ob der Benutzer erfolgreich eingeloggt wurde
    cy.get('#logout2').should('be.visible'); 
  });

  it('should show error with invalid credentials', () => {
    // Besuche die Demoblaze-Website
    loginPage.visit();

    // Melde dich mit ungültigen Anmeldedaten an
    loginPage.login('invalidUsername', 'invalidPassword');

    // Überprüfe, ob der Fehler angezeigt wird
    cy.get('.sweet-alert').should('be.visible'); 
  });
});
