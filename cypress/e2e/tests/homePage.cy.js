import HomePage from '../../pages/HomePage';

const homePage = new HomePage();

describe('DemoBlaze Homepage Tests', () => {
  it('should visit the homepage and check the navbar title', () => {
    homePage.visit();
    homePage.getNavbarTitle().should('contain.text', 'PRODUCT STORE');
  });
});
