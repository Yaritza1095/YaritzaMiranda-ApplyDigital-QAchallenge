// cypress/e2e/performanceAccessibility.spec.js

describe('Home Page - Lighthouse (Desktop & Mobile)', () => {
  it('Desktop Lighthouse Audit', () => {
    // Visit
    cy.visit('https://automationexercise.com/');
    
    cy.lighthouse(
      {
        performance: 80,
        accessibility: 90,
        'best-practices': 80,
        seo: 80,
      },
      {
        formFactor: 'desktop',
        screenEmulation: { disabled: true },
      }
    );
  });

  it('Mobile Lighthouse Audit', () => {
    cy.visit('https://automationexercise.com/');

    cy.lighthouse(
      {
        performance: 80,
        accessibility: 90,
        'best-practices': 80,
        seo: 80,
      },
      {
        formFactor: 'mobile',
        screenEmulation: {
          mobile: true,
          width: 375,
          height: 667,
          deviceScaleFactor: 2,
          disabled: false,
        },
      }
    );
  });
});
