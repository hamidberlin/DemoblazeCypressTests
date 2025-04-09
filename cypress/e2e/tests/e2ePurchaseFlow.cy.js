import HomePageFlow from '../../pages/HomePageFlow';
import LoginPageFlow from '../../pages/LoginPageFlow';
import ProductPage from '../../pages/ProductPage';
import CartPage from '../../pages/CartPage';

const homePageFlow = new HomePageFlow();
const loginPageFlow = new LoginPageFlow();
const productPage = new ProductPage();
const cartPage = new CartPage();

describe('Demoblaze E2E Flow', () => {
  let user;

  before(() => {
    // Fixture laden
    cy.fixture('users').then((data) => {
      user = data.validUser;
    });
  });

  it('Logs in and buys iPhone 6 32GB', () => {
    // Homepage aufrufen
    homePageFlow.visit();
    homePageFlow.getNavbarTitle(); 
    homePageFlow.clickLoginButton();

    // Login durchführen
    loginPageFlow.login(user.username, user.password);
    loginPageFlow.checkLoginSuccess();

    // Produktkategorie auswählen
    homePageFlow.selectCategory('Phones');

    // Produkt auswählen (robuster mit Sichtbarkeitsprüfung)
    cy.contains('Iphone 6 32gb')
      .should('be.visible')
      .should('exist')
      .click();

    // Produkt in den Warenkorb legen
    productPage.addToCart();

    // Zum Warenkorb navigieren und Bestellung durchführen
    cartPage.goToCart();
    cartPage.placeOrder();

    const orderData = {
      name: 'Max Mustermann',
      country: 'Germany',
      city: 'Berlin',
      card: '123456789987654321',
      month: '04',
      year: '2025'
    };

    cy.screenshot('before-order-submit');

    // Bestellformular ausfüllen und abschicken
    cartPage.fillOrderForm(orderData);
    cartPage.submitPurchase();
  });
});
