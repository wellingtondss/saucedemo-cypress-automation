# SauceDemo Cypress E2E Automation

End-to-end automation test suite for https://www.saucedemo.com/ using Cypress (JavaScript).

## Goal
Create a small end-to-end automation test suite covering:
- Login flow validations
- Purchase flow validations (sorting, cart, checkout, and order completion)

## Framework
- Cypress (JavaScript)
- Page Object Model (POM) structure for maintainability
- Mochawesome reporter for HTML reports

---

## How to install dependencies

Requirements:
- Node.js (recommended: 18+)
- npm

Install dependencies:
npm install

---

## How to run the tests

Interactive mode (Cypress UI):
npm run cy:open

Headless mode:
npm run cy:run

Headless mode (Chrome):
npm run cy:run:chrome

---

## Report (Mochawesome)
This project uses cypress-mochawesome-reporter.
After running tests in headless mode, an HTML report is generated based on the reporter configuration.

---

## Assumptions / Limitations

Assumptions:
- SauceDemo default users remain available (standard_user, locked_out_user) and password is secret_sauce.
- The application is reachable and stable during test execution.
- This is a UI end-to-end suite (no backend mocking).

Limitations:
- The suite focuses on the requested flows and stable paths for the technical task scope.
- No API-level assertions were added (e.g., cy.intercept) since the scope is UI E2E.
- CI/CD is not included in this version (listed as an improvement).

---

## What I would improve with more time

- Add CI pipeline (GitHub Actions) to execute tests automatically on each push/pull request.
- Upload CI artifacts (Mochawesome report, screenshots/videos on failure).
- Add more negative scenarios:
  - Login with invalid password or empty fields.
  - Checkout validation for missing required customer fields.
- Add cart coverage:
  - Remove items and validate cart badge count updates.
- Add assertions for checkout totals (subtotal, tax, total).

--------------

## Time spent

Approximately 3 hours were spent on this task (including setup, implementation, stabilization/debugging, and documentation).  
The original task recommendation was ~2 hours; additional time was used to stabilize selectors, implement item validation in checkout, and configure reporting.