# linkedList.js

1. create a `LinkedList` class and export it so the automated tests can access it
1. create an `constructor();` method with no parameters because we want to create an empty linked list by default
1. inside the constructor method create two references

   1. `this.head = null;` - beginning or first node of linked list

   1. `this.length = ;.` - time saver so we can keep track of the length and not have to loop through it every time to determine the length

1. create another class `LinkedListNode` for the node itself or just create a normal js object `linkedListNode ={value: null, next: null};` **note:** for consistency better to go with option 1
1. create a `constructor(value, next);` in the node class
1. create `insertAtHead(data)` method in the linked list class
1. inside the `insertAtHead()` method create a newNode
   1. pass in data and `this.head` since this is going in front of the head
1. then set head to `newNode` and 1 to length
1. perform first manual test in [app.js](./appjs.md)

```nodejs
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtHead(data) {
    const newNode = new LinkedListNode(data, this.head);
    this.head = newNode;
    this.length++;
  }

  removeHead() {
    this.head = this.head.next;
    this.length--;
  }

  getByIndex(index) {
    if (index < 0 || index >= this.length) return null;

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  insertAtIndex(index, value) {
    if (index === 0) return this.insertAtHead(value);

    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;

    prev.next = new LinkedListNode(value, prev.next);
    this.length++;
  }

  removeAtIndex(index) {
    if (index === 0) return this.removeHead();

    const prev = this.getByIndex(index - 1);
    if (prev === null) return null;

    prev.next = prev.next.next;
    this.length--;
  }

  print() {
    let output = '';
    let current = this.head;
    while (current) {
      output = `${output}${current.value} -> `;
      current = current.next;
    }
    console.log(`${output}null`);
  }
}

// option 1
class LinkedListNode {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

// option 2
// let linkedListNode = { value: null, next: null };

// helper function to help with testing getByIndex test
LinkedList.fromValues = function (...values) {
  const ll = new LinkedList();
  for (let i = values.length - 1; i >= 0; i--) {
    ll.insertAtHead(values[i]);
  }
  return ll;
};

module.exports = LinkedList;
```

support files [app.js](./appjs.md)
