
## **1. Overview**
This project automates end-to-end functional flows and audit tests for an e-commerce site called **automationexercise.com** using **Cypress**.

### **The functional test suite covers:**
- **User Registration**
- **User Login**
- **Add to Cart**
- **Checkout**
- **Payment (Faker data)**
- **Order Submission**

### **The audit test suite (via cypress-audit) checks:**
- **Performance (Lighthouse)**
- **Accessibility (Lighthouse)**

---

## **2. Required Libraries**
You need the following **devDependencies** in your `package.json`:

- **node.js**
- **npm**
-  **Cypress** *(latest version recommended)*
- **cypress-audit** *(for Lighthouse/Pa11y audits)*
- **@faker-js/faker** *(to generate random data for registration, payment)*
- **mochawesome**, **mochawesome-merge**, and **mochawesome-report-generator** *(for HTML test reports)*
- **cypress-xpath** *(for XPath locator support)*

### **Installation commands:**
```bash
npm init -y
npm install --save-dev cypress @faker-js/faker cypress-audit
npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator
npm install cypress-xpath
```

---

## **3. Test Scripts & Execution**

### **3.1 Functional Test Specs**
The automation exercise spec includes the following scenarios:
- **Register Test**
- **Login Test**
- **Add to Cart Test**
- **Checkout Test**
- **Payment Test (with Faker data)**
- **Submit Order Test**
- **Logout Test**

### **3.2 Audit (Performance & Accessibility) Specs**
- The **Performance and Accessibility spec** uses **Lighthouse** to test performance and accessibility scores for the home page.

---

## **4. Running Tests**

### **4.1 In Headless Mode**
Runs all specs (functional + performance). Results are output in the terminal, plus `.json` test artifacts in `cypress/reports/` (using MochaAwesome).

### **4.2 Interactive Mode**
```bash
npx cypress open
```
- Choose **“E2E Testing”** (Cypress 10+).
- Select the test spec you want to run (functional or performance).
- Watch the browser as it performs each step.

---

## **5. Generating MochaAwesome Reports**

### **5.1 Merge all .json files:**
```bash
npx mochawesome-merge cypress/reports/*.json > cypress/reports/report.json
```

### **5.2 Generate an HTML report:**
```bash
npx mochawesome-report-generator cypress/reports/report.json
```

---

## **6. Test Cases**

### **6.1 Functional Tests**

**TC-001: Register New User**
- **Objective:** Verify that a guest user can register for a new account on the site.
- **Preconditions:**
  - User is on the Home page.
  - The Signup/Login link is visible in the header.
- **Steps:**
  1. Click **Signup/Login** in the navigation menu.
  2. On the registration page, enter valid details (name, email) and click **SignUp**.
  3. Fill out required fields for account creation (password, address, city, state, zipcode, country, mobile number, etc.).
  4. Click **Create Account** and then **Continue**.
- **Expected Results:**
  - A success message **“Account Created!”** appears.
  - The user is logged in automatically or prompted to continue.
  - The header navigation shows **“Logged in as [username]”**.

**TC-002: User Login**
- **Objective:** Confirm an existing user can log in to their account.
- **Preconditions:**
  - A valid user account already exists.
  - User is on the Home page and not logged in.
- **Steps:**
  1. Click **Signup/Login** in the navigation bar.
  2. Under **Login**, provide email and password.
  3. Click **Login**.
- **Expected Results:**
  - User logs in successfully.
  - Header updates to **“Logged in as [username]”**.

**TC-003: Add to Cart**
- **Objective:** Verify that a logged-in user can add products to the shopping cart.
- **Preconditions:**
  - User is logged in.
  - At least one product is available.
- **Steps:**
  1. Navigate to **Products**.
  2. Select a product.
  3. Click **Add to cart**.
- **Expected Results:**
  - Product is added to the cart.
  - Cart icon updates with the correct number of items.

---

### **6.2 Audit Tests**

**TC-007: Performance (Lighthouse)**
- **Objective:** Validate performance metrics.
- **Steps:**
  1. Visit the home page.
  2. Run `cy.lighthouse` with performance thresholds.

**TC-008: Accessibility (Lighthouse)**
- **Objective:** Validate accessibility compliance.
- **Steps:**
  1. Visit target page.
  2. Run `cy.lighthouse`.

---

## **7. Why I Chose Cypress**

- **All-In-One, Front-End-Focused Runner**: Cypress runs directly in the browser, providing an interactive Test Runner UI.
- **Time-Travel Debugging**: Visual snapshots of the DOM for each step aid in debugging.
- **Strong Ecosystem**: Active community and plugins like `cypress-audit`.
- **Automatic Waiting**: Reduces flaky tests.
- **Ease of Setup**: Minimal boilerplate setup.
- **Rich Debugging Experience**: Interactive test logs and DOM snapshots.
- **Out-of-the-Box Screenshots and Videos**: Automatic capture on test failures.
- **Direct Integration with Lighthouse**: Seamless audit integration.
- **Community Support**: Abundant resources, tutorials, and Q&A.

---

## **8. Additional Notes**
- **MochaAwesome Reporting:** JSON & HTML artifacts in `cypress/reports/`.
- **Environment Variations:** Desktop & Mobile testing.
- **Faker Data:** Used for generating random test data.

---

**Happy Testing! 🧪🚀**

