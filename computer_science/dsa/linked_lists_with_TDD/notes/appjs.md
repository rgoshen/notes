# app.js

1. import LinkedList `const LinkedList = require('./[linkedList](/javascript/data_structures/linked_lists_with_TDD/notes/linkedlistjs.md)');`
1. create a new linked list `const ll = new LinkedList();`
1. insert the value 10 at the head `ll.insertAtTheHead(10);`
1. insert the value 20 at the head `ll.insertAtTheHead(20);`
1. log 'll' to console `console.log(ll);`
1. run app.js `node app.js`
1. go to [linkedList.test.js](./linkedList.testjs.md)

```nodejs
const LinkedList = require('./linkedList');

// const ll = new LinkedList();

// ll.insertAtHead(10);
// console.log(ll);
// ll.insertAtHead(20);
// console.log(ll);

const ll = LinkedList.fromValues(10, 20, 30, 40);
ll.print();
// console.log(ll.getByIndex(0).value);
// ll.insertAtIndex(2, 60);
// ll.removeHead();
ll.removeAtIndex(2);
ll.print();
```
