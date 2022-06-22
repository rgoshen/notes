---
id: AH4Ok83CzdjkoH3JzAJUM
title: Intro to Testing in JavaScript with Jest
desc: An introduction to testing in JavaScript using Jest
updated: 1643839975151
created: 1643434853894
stub: true
---

![javascript](/assets/images/javaScript.jpeg){display: block, margin: 0 auto, max-height: 400px}

[![Youtube](https://img.shields.io/badge/Youtube-FF0000?style=flat&logo=Youtube&logoColor=white)](https://www.youtube.com/watch?v=FgnxcUQ5vho&list=PLZlA0Gpn_vH_63f0HH-dUtkininO7GO6f) |
[![Jest](https://img.shields.io/badge/Docs-jest-%23C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/docs/getting-started)

## Table of Contents

1. [Introduction](#introduction)
2. [How to Install Jest](#how-to-install-jest)
3. [Why Testing is Important](#why-testing0is-important)
4. [how to Write Unit Tests in Jest](#how-write-unit-tests-in-jest)
5. [The importance of Coverage](#the-importance-of-coverage)

### Introduction

Testing is one of those things that people either love or hate. Usually testing is something that is hated, until you work on a project with good tests and you realize how amazing they are. In this tutorial I am going to show you how to get started with testing in JavaScript using Jest. I will talk about the code you need in order to write tests, as well as show you some pitfalls of testing. At the end of the video I will breakdown the importance of testing and some best practices you can adhere to in order to make your tests amazing.

### How to Install Jest

1. make project folder and cd into it

```bash
mkdir example
cd example
```

1. initialize npm

   1. this will setup the initial project structure and create package.json

```bash
npm init -y
```

1. install [jest](https://jestjs.io/) as a development package

```bash
npm i jest --save-dev
```

**NOTE:** saved as a development dependency only because only used during development

1. change the test script inside the `package.json()` file and replace existing test script with `"jest"`

```json
{
  "scripts": {
    "test": "jest"
  }
}
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### Why Testing is Important

- **Be confident that your code works**. You make a bunch of changes, when you test your code and it still passes those test, then your are more confident in your code. But what happens you don't test and then you deploy your code. It becomes unstable and your users start to complain that it is not doing what they need it to do.
- **Make better architectural decisions**. It will help you structure your code better and achieve proper separation of concerns. You won't be tempted to assign multiple responsibilities to single code blocks as those would be a nightmare to unit-test.
- **Pinpoint functionality before coding**. What should happen in case a parameter is null? What if its value is outside of the expected range or contains too many characters? Do you throw an exception or return null? Unit tests will help you discover all these cases. Look at the questions again and you'll find it's exactly what defines your unit test cases.
  reference [freecodecamp.org](https://www.freecodecamp.org/news/how-to-start-unit-testing-javascript/)

### How to Write Unit Tests in Jest

1. create a file and name it the same as the file you want to test i.e.:

```bash
touch fileName.test.js
```

see [[javascript.vanilla.testing.jest.intro-to-testing-in-javascript-with-jest.examples.sum-test-js]], [[javascript.vanilla.testing.jest.intro-to-testing-in-javascript-with-jest.examples.subtract-test-js]], and [[javascript.vanilla.testing.jest.intro-to-testing-in-javascript-with-jest.examples.cloneArray-test-js]]

**NOTE:** [[javascript.vanilla.testing.jest.intro-to-testing-in-javascript-with-jest.examples.sum-test-js]] has the steps to write a test

Files being tested [[javascript.vanilla.testing.jest.intro-to-testing-in-javascript-with-jest.examples.sum-js]], [[javascript.vanilla.testing.jest.intro-to-testing-in-javascript-with-jest.examples.subtract-js]] and [[javascript.vanilla.testing.jest.intro-to-testing-in-javascript-with-jest.examples.cloneArray-js]]

### The Importance of Test Coverage

- it's good to cover as much code as possible with tests
- will tell you how big a portion of your code is covered by unit tests

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)
