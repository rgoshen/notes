# cloneArray.test.js

```nodejs
const { expect } = require('@jest/globals');
const cloneArray = require('./cloneArray');

test('properly clone array', () => {
  const array = [1, 2, 3];

  //   expect(cloneArray(array)).toEqual([1, 2, 3]);
  expect(cloneArray(array)).toEqual(array);
  expect(cloneArray(array)).not.toBe(array); // tests to make sure to separate arrays
});
```
