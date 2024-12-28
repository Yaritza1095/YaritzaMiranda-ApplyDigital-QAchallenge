README
1. Overview
This project automates end-to-end functional flows and audit tests for an e-commerce site called automationexercise.com using Cypress.

The functional test suite covers:

User Registration
User Login
Add to Cart
Checkout
Payment (Faker data)
Order Submission
The audit test suite (via cypress-audit) checks Performance and Accessibility with Lighthouse.

2. Required Libraries
You need the following devDependencies in your package.json:

Cypress (latest version recommended)
cypress-audit (for Lighthouse/Pa11y audits)
@faker-js/faker (to generate random data for registration, payment)
mochawesome, mochawesome-merge, and mochawesome-report-generator (for HTML test reports)
cypress-xpath (for xpath locator support)

Installation commands
npm install --save-dev cypress @faker-js/faker cypress-audit
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
npm install cypress-xpath

4. Test Scripts & Execution
4.1 Functional Test Specs

The automation exercise spec has the following scenarios 
Register test
Login test
Add to Cart test
Checkout test
Payment test (with Faker data)
Submit Order test
Logout test

4.2 Audit (Performance & Accessibility) Specs
The performance and accesibility spec uses lighthouse to do performance and accesibility score tests for the home page

5. Running Tests
5.1 In Headless Mode

Runs all specs (functional + performance). Results are output in the terminal, plus .json test artifacts in cypress/reports/ (using MochaAwesome).

5.2 Interactive Mode
npx cypress open

Choose “E2E Testing” (Cypress 10+).
Select the test spec you want to run (functional or performance).
Watch the browser as it performs each step.

6. Generating MochaAwesome Reports

6.1 Merge all .json files:
npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json
Generate an HTML report:
npx mochawesome-report-generator cypress/reports/report.json

7. Test Cases
7.1 Functional Tests
TC-001: Register New User
Objective: Verify that a guest user can register for a new account on the site.
Preconditions:
User is on the Home page.
The Signup / Login link is visible in the header.
Steps:
Click “Signup / Login” in the navigation menu.
On the registration page, enter valid details (name, email) and click SignUp.
Fill out required fields for account creation (password, address, city, state, zipcode, country, mobile number, etc.).
Click “Create Account” and then “Continue”.
Expected Results:
A success message “Account Created!” appears.
The user is logged in automatically or prompted to continue.
The header navigation now shows a “Logged in as [username]” link.



Thought for a few seconds
Below is a README-style documentation describing functional test cases (Register, Login, Add to Cart, Checkout, Pay & Submit Order) and audit test cases (Performance & Accessibility). Each test case includes objectives, preconditions, steps, and expected results. You can adapt the wording, IDs, and format to suit your team’s standards.

README - Test Cases
Overview
This document outlines the primary test cases for an e-commerce flow (on automationexercise.com or similar site) and the additional Performance and Accessibility audits integrated via Cypress + cypress-audit (Lighthouse/Pa11y).

Table of Contents
Functional Test Cases
TC-001: Register New User
TC-002: User Login
TC-003: Add to Cart
TC-004: Checkout
TC-005: Payment Details
TC-006: Submit Order
Audit Test Cases
TC-007: Performance (Lighthouse)
TC-008: Accessibility (Lighthouse)
Functional Test Cases
TC-001: Register New User
Objective: Verify that a guest user can register for a new account on the site.
Preconditions:
User is on the Home page.
The Signup / Login link is visible in the header.
Steps:
Click “Signup / Login” in the navigation menu.
On the registration page, enter valid details (name, email) and click SignUp.
Fill out required fields for account creation (password, address, city, state, zipcode, country, mobile number, etc.).
Click “Create Account” and then “Continue”.
Expected Results:
A success message “Account Created!” appears.
The user is logged in automatically or prompted to continue.
The header navigation now shows a “Logged in as [username]” link.
TC-002: User Login
Objective: Confirm an existing user can log in to their account.
Preconditions:
A valid user account already exists (registered earlier).
The user is on the Home page and not logged in.
Steps:
Click “Signup / Login” in the navigation bar.
Under “Login” section, provide email and password.
Click “Login” button.
Expected Results:
The user is logged in successfully.
The site header updates to “Logged in as [username]”.
No error messages appear, and the user can navigate to other pages as an authenticated user.

TC-003: Add to Cart
Objective: Verify that a logged-in user can add products to the shopping cart.
Preconditions:
The user is logged in (from TC-001 or TC-002).
At least one product is available in the Products page.
Steps:
Navigate to Products page.
Select a product (for example, click “View Product” on the 3rd product).
Choose a quantity and click “Add to cart”.
Observe the cart popup or confirmation message.
Expected Results:
The product with the chosen quantity is added to the cart.
The cart icon/badge updates with the correct number of items.
A “View Cart” or similar link is presented in a modal or on the page.

TC-004: Checkout
Objective: Ensure a user can initiate the checkout process from the cart.
Preconditions:
At least one product is in the cart (from TC-003).
The user is still logged in.
Steps:
From the Add to cart popup, click “View Cart” (or open the cart page by clicking “Cart” in the header).
Click “Proceed To Checkout” on the cart page.
Expected Results:
The site navigates to a Checkout page with an Order Summary.
The user sees a breakdown of the product(s) and pricing.
The user is ready to enter payment details (if required next).

TC-005: Payment Details
Objective: Confirm that a user can fill out payment info to pay for their order.
Preconditions:
The user is on the Checkout page (from TC-004).
Payment form fields are visible (Name on Card, Card Number, CVC, Expiration, etc.).
Steps:
Click “Place Order” (or equivalent) to open the payment form.
Enter valid payment details (can be Faker data for automation):
Name on card, card number, CVC, expiration month/year.
Click “Pay and Confirm Order”.
Expected Results:
The payment details are accepted (assuming valid data).
The site transitions to a final confirmation step or success page.



Thought for a few seconds
Below is a README-style documentation describing functional test cases (Register, Login, Add to Cart, Checkout, Pay & Submit Order) and audit test cases (Performance & Accessibility). Each test case includes objectives, preconditions, steps, and expected results. You can adapt the wording, IDs, and format to suit your team’s standards.

README - Test Cases
Overview
This document outlines the primary test cases for an e-commerce flow (on automationexercise.com or similar site) and the additional Performance and Accessibility audits integrated via Cypress + cypress-audit (Lighthouse/Pa11y).

Table of Contents
Functional Test Cases
TC-001: Register New User
TC-002: User Login
TC-003: Add to Cart
TC-004: Checkout
TC-005: Payment Details
TC-006: Submit Order
Audit Test Cases
TC-007: Performance (Lighthouse)
TC-008: Accessibility (Lighthouse)
Functional Test Cases
TC-001: Register New User
Objective: Verify that a guest user can register for a new account on the site.
Preconditions:
User is on the Home page.
The Signup / Login link is visible in the header.
Steps:
Click “Signup / Login” in the navigation menu.
On the registration page, enter valid details (name, email) and click SignUp.
Fill out required fields for account creation (password, address, city, state, zipcode, country, mobile number, etc.).
Click “Create Account” and then “Continue”.
Expected Results:
A success message “Account Created!” appears.
The user is logged in automatically or prompted to continue.
The header navigation now shows a “Logged in as [username]” link.
TC-002: User Login
Objective: Confirm an existing user can log in to their account.
Preconditions:
A valid user account already exists (registered earlier).
The user is on the Home page and not logged in.
Steps:
Click “Signup / Login” in the navigation bar.
Under “Login” section, provide email and password.
Click “Login” button.
Expected Results:
The user is logged in successfully.
The site header updates to “Logged in as [username]”.
No error messages appear, and the user can navigate to other pages as an authenticated user.
TC-003: Add to Cart
Objective: Verify that a logged-in user can add products to the shopping cart.
Preconditions:
The user is logged in (from TC-001 or TC-002).
At least one product is available in the Products page.
Steps:
Navigate to Products page.
Select a product (for example, click “View Product” on the 3rd product).
Choose a quantity and click “Add to cart”.
Observe the cart popup or confirmation message.
Expected Results:
The product with the chosen quantity is added to the cart.
The cart icon/badge updates with the correct number of items.
A “View Cart” or similar link is presented in a modal or on the page.
TC-004: Checkout
Objective: Ensure a user can initiate the checkout process from the cart.
Preconditions:
At least one product is in the cart (from TC-003).
The user is still logged in.
Steps:
From the Add to cart popup, click “View Cart” (or open the cart page by clicking “Cart” in the header).
Click “Proceed To Checkout” on the cart page.
Expected Results:
The site navigates to a Checkout page with an Order Summary.
The user sees a breakdown of the product(s) and pricing.
The user is ready to enter payment details (if required next).
TC-005: Payment Details
Objective: Confirm that a user can fill out payment info to pay for their order.
Preconditions:
The user is on the Checkout page (from TC-004).
Payment form fields are visible (Name on Card, Card Number, CVC, Expiration, etc.).
Steps:
Click “Place Order” (or equivalent) to open the payment form.
Enter valid payment details (can be Faker data for automation):
Name on card, card number, CVC, expiration month/year.
Click “Pay and Confirm Order”.
Expected Results:
The payment details are accepted (assuming valid data).
The site transitions to a final confirmation step or success page.
TC-006: Submit Order
Objective: Validate that the order submission completes successfully and the user sees an order confirmation.
Preconditions:
Payment details were successfully entered (TC-005).
The user is still on the final step of Checkout.
Steps:
Click “Submit” or “Confirm Order” if there’s a final confirmation button.
Wait for the confirmation screen or message.
Expected Results:
A success message like “Order Placed!” or “Your order has been confirmed!” is displayed.
The user can optionally see an Order ID or transaction reference.
The cart is cleared or marked as purchased, and the user is in a post-order state.

7.2 Audit Tests

TC-007: Performance (Lighthouse)
Objective: Check Performance metrics (and optionally Best Practices, SEO) for the Home page on both Desktop and Mobile.
Preconditions:
The site (automationexercise.com) is accessible in the test environment.
cypress-audit plugin is configured (Lighthouse tasks).
Steps:
Visit the home page in Cypress: cy.visit('https://automationexercise.com/');
Run cy.lighthouse with thresholds, e.g., performance: 80, accessibility: 90.
Repeat with different formFactor configs:
Desktop: formFactor: 'desktop'
Mobile: formFactor: 'mobile' + screenEmulation.
Expected Results:
The site meets or exceeds the Performance threshold (e.g., 80+).
If any metric is below the threshold, the test fails, indicating potential performance regression.

TC-008: Accessibility (Lighthouse)
Objective: Validate the Accessibility score on the Home page (or product pages) via Lighthouse/Pa11y.
Preconditions:
The site is accessible.
The cypress-audit plugin is properly set up for accessibility checks.
Steps:
Visit the target page, e.g., Home or Products.
Call cy.lighthouse with an accessibility threshold (e.g. 90).
(Optional) Also call cy.pa11y() to catch advanced accessibility issues.
Expected Results:
The page’s Accessibility score meets or exceeds 90 (or your target).
No major WCAG violations are found. If so, the test fails with details on which accessibility criteria are missing.

8. Additional notes



Thought for a few seconds
Below is a README-style documentation describing functional test cases (Register, Login, Add to Cart, Checkout, Pay & Submit Order) and audit test cases (Performance & Accessibility). Each test case includes objectives, preconditions, steps, and expected results. You can adapt the wording, IDs, and format to suit your team’s standards.

README - Test Cases
Overview
This document outlines the primary test cases for an e-commerce flow (on automationexercise.com or similar site) and the additional Performance and Accessibility audits integrated via Cypress + cypress-audit (Lighthouse/Pa11y).

Table of Contents
Functional Test Cases
TC-001: Register New User
TC-002: User Login
TC-003: Add to Cart
TC-004: Checkout
TC-005: Payment Details
TC-006: Submit Order
Audit Test Cases
TC-007: Performance (Lighthouse)
TC-008: Accessibility (Lighthouse)
Functional Test Cases
TC-001: Register New User
Objective: Verify that a guest user can register for a new account on the site.
Preconditions:
User is on the Home page.
The Signup / Login link is visible in the header.
Steps:
Click “Signup / Login” in the navigation menu.
On the registration page, enter valid details (name, email) and click SignUp.
Fill out required fields for account creation (password, address, city, state, zipcode, country, mobile number, etc.).
Click “Create Account” and then “Continue”.
Expected Results:
A success message “Account Created!” appears.
The user is logged in automatically or prompted to continue.
The header navigation now shows a “Logged in as [username]” link.
TC-002: User Login
Objective: Confirm an existing user can log in to their account.
Preconditions:
A valid user account already exists (registered earlier).
The user is on the Home page and not logged in.
Steps:
Click “Signup / Login” in the navigation bar.
Under “Login” section, provide email and password.
Click “Login” button.
Expected Results:
The user is logged in successfully.
The site header updates to “Logged in as [username]”.
No error messages appear, and the user can navigate to other pages as an authenticated user.
TC-003: Add to Cart
Objective: Verify that a logged-in user can add products to the shopping cart.
Preconditions:
The user is logged in (from TC-001 or TC-002).
At least one product is available in the Products page.
Steps:
Navigate to Products page.
Select a product (for example, click “View Product” on the 3rd product).
Choose a quantity and click “Add to cart”.
Observe the cart popup or confirmation message.
Expected Results:
The product with the chosen quantity is added to the cart.
The cart icon/badge updates with the correct number of items.
A “View Cart” or similar link is presented in a modal or on the page.
TC-004: Checkout
Objective: Ensure a user can initiate the checkout process from the cart.
Preconditions:
At least one product is in the cart (from TC-003).
The user is still logged in.
Steps:
From the Add to cart popup, click “View Cart” (or open the cart page by clicking “Cart” in the header).
Click “Proceed To Checkout” on the cart page.
Expected Results:
The site navigates to a Checkout page with an Order Summary.
The user sees a breakdown of the product(s) and pricing.
The user is ready to enter payment details (if required next).
TC-005: Payment Details
Objective: Confirm that a user can fill out payment info to pay for their order.
Preconditions:
The user is on the Checkout page (from TC-004).
Payment form fields are visible (Name on Card, Card Number, CVC, Expiration, etc.).
Steps:
Click “Place Order” (or equivalent) to open the payment form.
Enter valid payment details (can be Faker data for automation):
Name on card, card number, CVC, expiration month/year.
Click “Pay and Confirm Order”.
Expected Results:
The payment details are accepted (assuming valid data).
The site transitions to a final confirmation step or success page.
TC-006: Submit Order
Objective: Validate that the order submission completes successfully and the user sees an order confirmation.
Preconditions:
Payment details were successfully entered (TC-005).
The user is still on the final step of Checkout.
Steps:
Click “Submit” or “Confirm Order” if there’s a final confirmation button.
Wait for the confirmation screen or message.
Expected Results:
A success message like “Order Placed!” or “Your order has been confirmed!” is displayed.
The user can optionally see an Order ID or transaction reference.
The cart is cleared or marked as purchased, and the user is in a post-order state.
Audit Test Cases
TC-007: Performance (Lighthouse)
Objective: Check Performance metrics (and optionally Best Practices, SEO) for the Home page on both Desktop and Mobile.
Preconditions:
The site (automationexercise.com) is accessible in the test environment.
cypress-audit plugin is configured (Lighthouse tasks).
Steps:
Visit the home page in Cypress: cy.visit('https://automationexercise.com/');
Run cy.lighthouse with thresholds, e.g., performance: 80, accessibility: 90.
Repeat with different formFactor configs:
Desktop: formFactor: 'desktop'
Mobile: formFactor: 'mobile' + screenEmulation.
Expected Results:
The site meets or exceeds the Performance threshold (e.g., 80+).
If any metric is below the threshold, the test fails, indicating potential performance regression.
TC-008: Accessibility (Lighthouse)
Objective: Validate the Accessibility score on the Home page (or product pages) via Lighthouse/Pa11y.
Preconditions:
The site is accessible.
The cypress-audit plugin is properly set up for accessibility checks.
Steps:
Visit the target page, e.g., Home or Products.
Call cy.lighthouse with an accessibility threshold (e.g. 90).
(Optional) Also call cy.pa11y() to catch advanced accessibility issues.
Expected Results:
The page’s Accessibility score meets or exceeds 90 (or your target).
No major WCAG violations are found. If so, the test fails with details on which accessibility criteria are missing.
Additional Notes
MochaAwesome Reporting

All test results can be output in JSON and HTML using mochawesome + mochawesome-merge + mochawesome-report-generator.
Failing thresholds in Performance or Accessibility cause the test suite to fail, alerting the team to potential regressions.
Environment Variations

For the Functional tests, you can run them in both Desktop (cy.viewport(1280, 720)) and Mobile (cy.viewport('iphone-6')) to confirm the flow is consistent across devices.
For the Audit tests, specify formFactor: 'desktop' and 'mobile' in cy.lighthouse().
Faker Data

We use Faker to fill random name, email, addresses, payment details, etc., ensuring repeatable-yet-unique test runs.

9. Why I chose Cypress

All-In-One, Front-End-Focused Runner

Cypress runs directly in the browser alongside the application, providing an interactive Test Runner UI.
Its built-in “time-travel” feature lets you visually step through commands and see snapshots of the DOM for each step—very useful for debugging front-end issues.
Strong Ecosystem for Front-End QA

Cypress has a large, active community and a robust plugin ecosystem, including:
cypress-audit (Lighthouse and Pa11y integration)
Various plugins for code coverage, visual testing, network stubbing, etc.
This broad ecosystem simplifies front-end testing tasks that might require extra configuration or 3rd-party libraries in Playwright.
Automatic Waiting & DOM Synchronization

Cypress automatically retries and waits for elements to appear without needing explicit “wait” or “sleep” calls.
This often reduces flaky tests, letting you write more concise commands (e.g., cy.get('button').click() is typically enough for Cypress to handle timing).
Ease of Setup & Lower Barrier to Entry

Cypress’s “batteries-included” approach (built-in test runner, reporter, assertion library) often means less boilerplate.
Many QA and front-end teams find Cypress simpler to get started with—particularly those new to JavaScript-based E2E testing.
Rich Debugging Experience

Cypress’s interactive Test Runner shows each step in a left-hand log, plus the visual browser state on the right-hand side.
You can click on each command to see what the DOM looked like at that moment in time, which makes front-end debugging more intuitive.
Out-of-the-Box Screenshots and Videos

Cypress automatically captures screenshots on test failures and can record videos of your entire test run.
This is extremely helpful in CI/CD pipelines for diagnosing front-end issues or performance bottlenecks.
Direct Integration with Lighthouse/Accessibility

Tools like cypress-audit unify E2E logic (logging in, navigating to pages) with performance and accessibility checks in a single test run.
While Playwright can run Lighthouse externally or via community plugins, Cypress has a more mature ecosystem for integrated audits, partly due to its strong front-end focus.
Time-Traveling Debug Logs

You can click through the Cypress commands in the Test Runner to see the DOM snapshot at each step.
This feature is unique to Cypress and can drastically reduce debugging time—especially for visual or interactive front-end tests.
Community & Tutorials

Because Cypress has been around for a while in the front-end space, there’s a large wealth of tutorials, blog posts, example repos, and community Q&A.
For teams quickly ramping up on E2E testing, having these resources can reduce the learning curve.

