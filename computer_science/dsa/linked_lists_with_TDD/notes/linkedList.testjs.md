# linkedList.test.js

1. import LinkedList class `const LinkedList = require('./[LinkedList](/javascript/data_structures/linked_lists_with_TDD/notes/linkedListjs.md)');`
1. write a describe block `describe('#insertAtHead'() => {});`
   1. first parameter is a string of the name of the method/function to be tested - '#' is just a convention to be used when testing a method of a class
   1. second parameter is callback function that contains all the test information we want
1. inside of callback function create first test `test('adds node to beginning of the list', () => {});`
   1. similar to the describe block first parameter is a string saying what the test does and second parameter is another callback function that contains the code to run to test whatever we want to test
1. to run the tests inside the `package.json()` file and replace existing test script with `"jest --coverage"`

```json
{
  "scripts": {
    "test": "jest --coverage"
  }
}
```

1. then run test

```bash
❯ npm run test

> linked_lists_with_tdd@1.0.0 test
> jest --coverage

 PASS  ./linkedList.test.js
  #insertAtHead
    ✓ adds node to the beginning of list (1 ms)

---------------|---------|----------|---------|---------|-------------------
File           | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
---------------|---------|----------|---------|---------|-------------------
All files      |     100 |      100 |     100 |     100 |
 linkedList.js |     100 |      100 |     100 |     100 |
---------------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        0.236 s
Ran all test suites.
```

**NOTE:** `npm run test` will run all tests

**NOTE:** try to get 100% test coverage if possible but not necessary - 100% test coverage means all lines of code in object file were tested

1. From here on out you write tests, test by `npm run test`, tests should fail and then write the method based on your test cases, run the tests again `npm run test` and now they should pass - keep doing this until you have created all your methods you need to write.

```nodejs
const { expect } = require('@jest/globals');
const LinkedList = require('./linkedList');

describe('#insertAtHead', () => {
  test('adds node to the beginning of list', () => {
    const ll = new LinkedList();
    ll.insertAtHead(10);
    const oldHead = ll.head;
    ll.insertAtHead(20);

    expect(ll.head.value).toBe(20);
    expect(ll.head.next).toBe(oldHead);
    expect(ll.length).toBe(2);
  });
});

describe('#getByIndex', () => {
  describe('with index less than 0', () => {
    test('it returns null', () => {
      //helper function in linkedList.js
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(-1)).toBeNull();
    });
  });

  describe('with index greater than list length', () => {
    test('it returns null', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(5)).toBeNull();
    });
  });

  describe('with index 0', () => {
    test('it returns the head', () => {
      const ll = LinkedList.fromValues(10, 20);

      expect(ll.getByIndex(0).value).toBe(10);
    });
  });

  describe('with index in the middle', () => {
    test('it returns the element at that index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);

      expect(ll.getByIndex(2).value).toBe(30);
    });
  });
});

describe('#insertAtIndex', () => {
  describe('with index less than 0', () => {
    test('it does not insert anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(-1, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index greater than list length', () => {
    test('it does not insert anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(5, 30);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index 0', () => {
    test('insert at the head', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.insertAtIndex(0, 30);

      expect(ll.head.value).toBe(30);
      expect(ll.head.next.value).toBe(10);
      expect(ll.length).toBe(3);
    });
  });

  describe('with index in the middle', () => {
    test('insert at the given index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.insertAtIndex(2, 50);
      const node = ll.getByIndex(2);

      expect(node.value).toBe(50);
      expect(node.next.value).toBe(30);
      expect(ll.length).toBe(5);
    });
  });
});

describe('#removeHead', () => {
  test('removes the head', () => {
    const ll = LinkedList.fromValues(10, 20, 30);
    ll.removeHead();

    expect(ll.head.value).toBe(20);
    expect(ll.length).toBe(2);
  });
});

describe('#removeAtIndex', () => {
  describe('with index less than 0', () => {
    test('it does not remove anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index greater than list length', () => {
    test('it does not remove anything', () => {
      const ll = LinkedList.fromValues(10, 20);
      ll.removeAtIndex(-1);

      expect(ll.length).toBe(2);
    });
  });

  describe('with index 0', () => {
    test('remove the head', () => {
      const ll = LinkedList.fromValues(10, 20, 30);
      ll.removeAtIndex(0);

      expect(ll.head.value).toBe(20);
      expect(ll.head.next.value).toBe(30);
      expect(ll.length).toBe(2);
    });
  });

  describe('with index in the middle', () => {
    test('remove at the given index', () => {
      const ll = LinkedList.fromValues(10, 20, 30, 40);
      ll.removeAtIndex(2);
      const node = ll.getByIndex(1);

      expect(node.value).toBe(20);
      expect(node.next.value).toBe(40);
      expect(ll.length).toBe(3);
    });
  });
});

```

> **NOTE:** when writing tests for a class you do not want to use other methods of that class to test current method because if other method fails then all tests for current method would fail whether the method logic was written correctly or not - here is where you would create a helper function see [linkedList.js](./linkedListjs.md)
