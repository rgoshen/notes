# sum Test Example

###  Jest test example for sum.js

1. import file you want to test
1. `test('describe what you are testing, callback)`
   1. first argument passed in actually will get displayed inside the console when you run the test
   1. second parameter is the callback function that actually runs the test
   1. inside the callback you use the expect function that is the actual test - `expect()` returns an expectation object
   1. `.toBe()` is the matcher that is called on the returned expectation object - the correct value you expect to be returned by the function you are invoking inside the expect function is passed into the matcher
   1. when [jest](https://jestjs.io/) runs, it keeps track of all the matchers that fail and prints out nice error messages for you - for a complete list of [jest](https://jestjs.io/) matchers click [here](https://jestjs.io/)
1. run the test

```bash
npm run test

> jest@1.0.0 test
> jest

 PASS  ./sum.test.js
 PASS  ./subtract.test.js
 PASS  ./cloneArray.test.js

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.351 s, estimated 1 s
Ran all test suites.
```

**NOTE:** if you want to have more verbose information on what exactly was tested (i.e. what functions or what lines in the files were specifically tested) then use the flag `--coverage` of [jest](https://jestjs.io/)

    - this also creates a folder name _coverage_ inside the root project folder which among other things an _index.html_ file similar to the console output below

```json
{
  "scripts": {
    "test": "jest --coverage"
  }
}
```

```bash
npm run test

> jest@1.0.0 test
> jest --coverage

 PASS  ./sum.test.js
 PASS  ./cloneArray.test.js
 PASS  ./subtract.test.js
---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |
 cloneArray.js |     100 |      100 |     100 |     100 |
 subtract.js   |     100 |      100 |     100 |     100 |
 sum.js        |     100 |      100 |     100 |     100 |
---------------|---------|----------|---------|---------|-------------------

Test Suites: 3 passed, 3 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.362 s, estimated 1 s
Ran all test suites.
```

```nodejs
const sum = require('./sum');

test('properly add two numbers', () => {
  expect(sum(1, 2)).toBe(3);
});
```
