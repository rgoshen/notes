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
