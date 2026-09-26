# OrangeHRM QA Automation Assessment

## Overview
This project automates the **Employee Lifecycle Management** scenario from the QA Automation technical assessment using **Playwright with JavaScript** and Page Object Model (POM).

Automated coverage:
1. Valid login and Dashboard verification
2. Add employee using JSON test data
3. Upload employee profile picture
4. Search employee by Employee ID
5. Update Job Title and Employment Status
6. Cross-check employee data using a public REST API simulator
7. Delete employee and verify deletion in UI and API
8. Logout and verify protected session is invalidated

> Note: The assignment allows OrangeHRM API **or a public test API**. This solution uses JSONPlaceholder as a safe public API simulator. The UI remains the system under test; API calls are used to demonstrate request/response validation and UI/API data consistency checks.

## Tech Stack
- Node.js
- Playwright Test
- JavaScript
- Page Object Model
- JSON test data
- Playwright HTML Report
- Playwright video, screenshot and trace artifacts

## Project Structure
```text
orangehrm_qa_automation_solution/
├── assets/
│   └── profile.png
├── data/
│   └── employee.json
├── execution-artifacts/
│   └── sample-execution-report.html
├── pages/
│   ├── ApiClient.js
│   ├── EmployeeDetailsPage.js
│   ├── LoginPage.js
│   └── PimPage.js
├── tests/
│   └── employeeLifecycle.spec.js
├── utils/
│   └── testData.js
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.js
├── TEST_CASES.md
└── README.md
```

## Prerequisites
- Node.js 18 or above
- npm
- Internet connection

## Setup
```bash
npm install
npx playwright install chromium
```

Copy environment file:
```bash
cp .env.example .env
```

The demo credentials from the assignment are already represented as defaults:
- Username: `Admin`
- Password: `admin123`

## Execute
Run headless:
```bash
npm test
```

Run headed:
```bash
npm run test:headed
```

Run only the employee lifecycle scenario:
```bash
npm run test:employee
```

Debug:
```bash
npm run debug
```

## Report
After execution, the Playwright HTML report is generated in `playwright-report/`.

Open it with:
```bash
npm run report
```

## Video / Screenshot / Trace
- Video: recorded for every test execution (`video: 'on'`)
- Screenshot: retained on failure
- Trace: retained on failure
- Runtime artifacts are stored under `test-results/`

## Test Data Strategy
Employee base data is stored in `data/employee.json`. A unique Employee ID is generated at runtime to reduce collisions in the shared OrangeHRM demo environment.

## API Validation Strategy
Because OrangeHRM's public demo does not provide a stable, documented assessment API contract, this project uses JSONPlaceholder to simulate the API portion permitted by the assignment. The same employee values used in UI automation are sent in API create/update requests and validated in responses.

## Assumptions / Known Risks
- OrangeHRM is a shared public demo, so test data or dropdown master data may change.
- Job Title `QA Engineer` and Employment Status `Full-Time Permanent` must exist in the demo tenant. If the demo data changes, update `data/employee.json` only.
- The public demo may be slow; reasonable Playwright timeouts are configured.
- JSONPlaceholder simulates writes and does not persist created users. Therefore deletion validation checks the successful DELETE response rather than a later GET lookup.

## GitHub Submission Steps
1. Create a public GitHub repository.
2. Copy this project into the repository.
3. Run `npm install` and `npm test` locally.
4. Commit source/configuration files and, if requested, the generated `playwright-report/` and selected video artifact.
5. Push changes and share the GitHub repository link with the assessment reviewers.

## Candidate-Level Design Note
The framework intentionally stays simple: one end-to-end spec, focused page objects, one JSON data file, and reusable API/data helpers. This demonstrates practical automation structure without unnecessary enterprise-level complexity, suitable for approximately 1.5 years of QA automation experience.
#