# React Testing Crash Course

### A tutorial on testing React Apps

[![reactjs](../../assets/images/reactjs.png)](https://reactjs.org/)

[![Youtube](https://img.shields.io/badge/Youtube-FF0000?style=flat&logo=Youtube&logoColor=white)](https://www.youtube.com/watch?v=OVNjsIto9xM) |
[![GitHub](https://img.shields.io/badge/repo-github-%23121011.svg?style=flat&logo=github&logoColor=white)](https://github.com/MitchelSt/react-testing-starter) |
[![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/) |
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/) |
[![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=flat&logo=cypress&logoColor=058a5e)](https://www.cypress.io/)

## Table of Contents

1. [Abbreviations](#abbreviations)
2. [Introduction](#introduction)
3. [Why Should You Test](#why-should-you-test)
4. [What to Test](#what-to-test)
5. [Demo App Setup](#demo-app-setup)
6. [Unit Tests](#unit-tests)
7. [Integration Tests](#integration-tests)
8. [End-to-End Tests](#end-to-end-tests)
9. [Example Tests](./javascript.react-js.testing.react-testing-crash-course.examples.md)å

## Abbreviations

- \*[E2E]: End-to-End

## Introduction

Learn about testing in React including unit, e2e and integration testing with React Testing Library, Jest & Cypress

## Why Should You Test

- Goal: check whether an application behaves as expected
- Safeguard against unwanted behavior when changes are made
- Automated, and thus efficient on the long-term

## What to Test

Have a test priority (example):

1. High value features - E2E [![cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=flat&logo=cypress&logoColor=058a5e)](https://www.cypress.io/)
1. Edge cases in high value features - Integration / Unit [![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)
1. Things that are easy to break - Integration / Unit [![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)
1. Basic React component testing - Integration / Unit [![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)
   - User interaction - Integration / Unit [![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)
   - Conditional rendering - Integration / Unit [![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)
   - Utils/Hooks - Integration / Unit [![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=flat&logo=testing-library&logoColor=white)](https://testing-library.com/docs/react-testing-library/intro/)

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Demo App Setup

1. Download zip file or clone this [repo](https://github.com/MitchelSt/react-testing-starter)
1. Unzip, if you downloaded the zip file.
1. cd into project folder
1. run `yarn install && yarn dev` **NOTE:** you may need to rerun `yarn dev` to get the app started
1. login in with username: 'johndoe' and password: 's3cret'

## Unit Tests

Test a very small part of the code, usually a function.

1. create a new test file for which ever component you want to test. (i.e. component name is TransactionCreateStepTwo.js then test file name would be TransactionCreateStepTwo.test.js) (example test file: [[javascript.react-js.testing.react-testing-crash-course.examples.TransactionCreateStepTwo-testjs]])

   1. render the component you want to test

      1. `screen.debug()` - [debug()](https://testing-library.com/docs/react-testing-library/api#render-result) - shortcut for console.log(prettyDOM(baseElement)) - if the baseElement is not specified, it defaults to document.body

      1. `screen.getByRole("button", { name: /pay/i })).toBeDisabled();` - [getByRole](https://testing-library.com/docs/queries/byrole) - react-testing-library query to see what roles are available

         **NOTE:** this particular app uses [formik](https://formik.org/) forms. There is a known "issue" that [formik](https://formik.org/) during render will make all elements enabled initially and then disable whatever element(s) need to be disabled, so you need to use async/await to "wait out" this initial period and change to `screen.findByRole("button", { name: /pay/i })).toBeDisabled();`

      1. now create your assertion statement `expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();` which should fail now

      1. now create your assertion statement `expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();` which should pass now

         **NOTE:** there is priority system built into react-test-library and can be found [here](https://testing-library.com/docs/queries/about#priority).

      1. `userEvent.type(screen.getByPlaceholderText(/amount/i), "50");` - mimics a user typing an amount in the textbox for amount - on this example have to use `getByPlaceholderText` because on this form there is no label or name associated with it.

      1. `userEvent.type(screen.getByPlaceholderText(/add a note/i), "dinner");` - mimics a user typing a note in the textbox for note - on this example have to use `getByPlaceholderText` because on this form there is no label or name associated with it.

         **NOTE:** the above pattern is known as the _Arrange, Act, Assert_ method. You _Arrange_ by rendering the component, you _Act_ by having user events, and finally the _Assert_ with expect statement.

Here we tested user interaction and conditional rendering by first seeing if the 'pay' button was disabled on initial render, added user interaction by typing in values to the two inputs and then testing to make sure the 'pay' button became enabled.

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Integration Tests

Testing whether multiple units within the app are working correctly together. These type of tests usually have multiple assertions in them. There is not a consensus on what makes a unit test vs. an integration test.

When writing an integration test, it is good to think about actual user flows. Example: user clicks on '$ NEW', searches for another user, clicks on appropriate user and then fills in amount, adds a note and then clicks on 'PAY' button.

A good example of a simple integration test then would be to combine the two unit tests written in the last section by moving the assertion from the first test into the second test before the user interaction and then deleting the first test.

```nodejs
test("amount and note entered, pay button becomes enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "5" }} receiver={{ id: "5" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/Amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/Add a note/i), "dinner");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
```

This does not mean this is how integration tests are to be written, but if combining more than one unit test represents how a realistic user flow, then by all means do this. In this example it just worked out that way.

Often, a few integration tests are better than numerous, small and concise unit tests.

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## End-to-End Tests

Tests all the way from the back end to the front end. In essence mimicking how a user would interact and use the application in teh browser.

For this, a testing library known as [Cypress](https://www.cypress.io/) will be used. This does not come with CreateReactApp by default so there is some setup involved.

1. install [Cypress](https://www.cypress.io/)

```bash
yarn all -D cypress @testing-library/cypress
```

1. open cypress

```bash
yarn run cypress open
```

1. remove [Cypress](https://www.cypress.io/) default tests by navigating to '/cypress/integration' and remove any folders in there.

1. (_optional_) add react-testing-library cypress commands - this allows you to use the commands from the previous tests in out cypress tests

   1. go to '/cypress/support/commands.js'
   1. add the following

   ```javascript
   import '@testing-library/cypress/';
   ```

   1. close all open files

1. (_optional_) if not already installed, then add [Testing Playground](https://chrome.google.com/webstore/search/testing%20playground?hl=en) chrome extension - allows you to hover over elements of your page and suggests queries

1. go to '/cypress/integration' folder and add [[javascript.react-js.testing.react-testing-crash-course.examples.payment_specjs]]

   1. in the cypress window, click on 'Run 1 integration spec' to see results of test

**NOTE:** `cy` is cypress
**NOTE:** biggest thing to note here is that there are not assertion statements per se not like in Jest or React-testing-library
**NOTE:** in cypress all queries are 'find' and not 'get'

line 37 in [paymentSpec Example](./javascript.react-js.testing.react-testing-crash-course.examples.payment_specjs.md) `cy.findByText(note).click({ force: true });` forces cypress to click regardless. If this if the `.click({ force: true })` is not included, cypress may error out since it takes the page some time to fully load and the element it is supposed to click maybe hidden from view by the navbar.

lines 40 & 41 in [paymentSpec Example](./javascript.react-js.testing.react-testing-crash-course.examples.payment_specjs.md)

```nodejs
cy.findByText(`-$${paymentAmount}`).should("be.visible");
cy.findByText(note).should("be.visible");
```

are cypress version of assertion statements

line 47 in [paymentSpec Example](./javascript.react-js.testing.react-testing-crash-course.examples.payment_specjs.md) `expect(convertedOldBalance - convertedNewBalance).to.equal(parseFloat(paymentAmount));` is a custom assertion

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)
