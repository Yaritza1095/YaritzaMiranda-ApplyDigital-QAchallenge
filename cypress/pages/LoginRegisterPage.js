// cypress/pages/LoginRegisterPage.js
import { faker } from '@faker-js/faker';

class LoginRegisterPage {
  register(name, email, password) {
    // 1. Fill out initial sign-up form
    cy.get('[data-qa="signup-name"]').type(name);
    cy.get('[data-qa="signup-email"]').type(email);
    cy.get('[data-qa="signup-button"]').click();

    // 2. Fill out account details
    cy.get('#id_gender1').check();
    cy.get('#password').type(password);
    cy.get('#days').select('10');
    cy.get('#months').select('May');
    cy.get('#years').select('1990');

    // 3. Address info (using Faker)
    const address1 = faker.location.streetAddress();
    const address2 = `Apt #${faker.number.int({ min: 1, max: 999 })}`;
    const state = faker.location.state();
    const city = faker.location.city();
    const zipcode = faker.location.zipCode();
    const mobileNumber = faker.phone.number('##########'); // 10-digit placeholder

    cy.get('[data-qa="first_name"]').type(name);
    cy.get('[data-qa="last_name"]').type('Tester');
    cy.get('[data-qa="company"]').type('FakerCo');
    cy.get('[data-qa="address"]').type(address1);
    cy.get('[data-qa="address2"]').type(address2);
    cy.get('[data-qa="country"]').select('Canada');        // Choose Canada
    cy.get('[data-qa="state"]').type(state);
    cy.get('[data-qa="city"]').type(city);
    cy.get('[data-qa="zipcode"]').type(zipcode);
    cy.get('[data-qa="mobile_number"]').type(mobileNumber);

    // 4. Submit form
    cy.get('[data-qa="create-account"]').click();

    // 5. Validate success
    cy.contains('Account Created!').should('be.visible');
    cy.get('[data-qa="continue-button"]').click();
  }

  logout() {
    cy.get('.shop-menu .nav > li').contains('Logout').click();
  }
}

export default LoginRegisterPage;
