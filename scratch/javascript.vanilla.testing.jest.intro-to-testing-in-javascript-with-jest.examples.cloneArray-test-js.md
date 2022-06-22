---
id: 1PPLjdFkBJtsbFFR4ZD8D
title: cloneArray.test.js
desc: cloneArray.test.js Jest Example
updated: 1643436146425
created: 1643435226999
---

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
