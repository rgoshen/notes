---
id: v2JF7qsFj4UY7zYt2XeRX
title: Linked Lists
desc: Linked Lists in JavaScript
updated: 1643839525146
created: 1643389478185
stub: true
---

![javascript](/assets/images/javaScript.jpeg){display: block, margin: 0 auto, max-height: 400px}

# How to Implement Linked Lists with Test Driven Development

[![Youtube](https://img.shields.io/badge/Youtube-FF0000?style=flate&logo=Youtube&logoColor=white)](https://www.youtube.com/watch?v=gJjPWA8wpQg&list=PLZlA0Gpn_vH_7qOMYNO7fdvIN9_kYEo2I) |
[![Jest](https://img.shields.io/badge/-jest-%23C21325?style=flat&logo=jest&logoColor=white)](https://jestjs.io/docs/getting-started)

## Table of Contents

1. [Introduction](#introduction)
2. [How to do test driven development](#how-to-do-test-drive-development)
3. [What a linked list is](#what-a-linked-list-is)
4. [How to create a linked list](#how-to-create-a-linked-list)
5. [How to write proper tests](#how-to-write-proper-tests)

### Introduction

Linked lists are one of the most popular data structures interviewers ask about in technical interviews. You will probably never have to implement one in a real day to day job, but knowing how to write a linked list and understanding how they work is crucial to passing a technical interview.

On top of covering linked lists in this tutorial, I will also be covering how you can use test driven development to make writing code easier. We will be designing the entirety of the linked list with test driven development to show you how to write better tests.

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### How to do test driven development

1. **Create precise tests:** Developers need to create precise unit tests to verify the functionality of specific features. They must ensure that the test compiles so that it can execute. In most cases, the test is bound to fail. This is a meaningful failure as developers are creating compact tests based on their assumptions of how the feature will behave.
1. **Correcting the Code:** Once a test fails, developers need to make the minimal changes required to correct the code so that it can run successfully when re-executed.
1. **Refactor the Code:** Once the test runs successfully, check for redundancy or any possible code optimizations to enhance overall performance. Ensure that refactoring does not affect the external behavior of the program.

The image below represents a high-level TDD approach towards development:

![tdd_high_level](/assets/images/tdd_high_level_flow_chart.png)

image from [Browserstack.com](https://www.browserstack.com/guide/what-is-test-driven-development)

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### What a linked list is

- alternative to an array data structure
- both are linear data structure
- an array is list of objects with each object accessed by an index starting at 0 and going to n-elements and contains a finite number of elements that is defined at creation
- a linked list on the other hand do not have indexes for its stored elements, it stores an object similar to an array however, instead of an consecutive index numbers, the node (element) has a reference to the next node in the list
- linked list is basically a group of nodes where each node points to the next node by means of a pointer
  - node is composed of data and a reference to the next node
- start off with a head node (first or 0 element), it has its value and the reference to next element only
- tail node is the very last node, it stores data and reference points to null
- each node after the head node will also have its value and a reference to next node and so on
- eventually ends with the tail node where it also has its value but does not have any reference to a next node
- three type of linked lists
  - singly linked list - each node references the next node except for the tail node which ends the list
  - doubly linked list - each node references the next node and its previous node except for the head node which starts the list
  - circular linked list - this is similar to a singly linked list except the tail node references back to the head node

![linked-lists](/assets/images/types-of-linked-list.png)
image from [faceprep.in](https://www.faceprep.in/data-structures/linked-list-introduction/)

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

#### Why use a linked list instead of an array?

- one advantage of linked lists is that elements can be added to it indefinitely without reallocation or reorganization of the entire structure because that data items need not be stored contiguously in memory. An array on the other hand will eventually get filled or have to be resized for making an insertion whenever needed (a costly operation that isn't always possible)
- elements are also be easily removed from linked lists whereas removing elements from an array leaves empty spaces that are a waste of computer memory or performing a shift operation in arrays increases the cost thus makes it expensive
- linked lists are more efficient with adding and removing elements than arrays
  - add an element at the beginning: array you can do this but you have to move existing first element down a position which in turn every other element also must move down (O(n) time because who have to loop through all existing elements) whereas in a linked list you can simply create the node, give it a reference to the existing head node and now the new node becomes the head node (O(1) time)
  - now if you are not operating on the first element of a linked list then it becomes O(n) time because you have to start with the first node and traverse through the list to the node you want conversely much quicker to get random elements in an array because you pass in the index of the element you want

#### Operations of Linked Lists

- **Insertion** - inserts an element at specified positions in the list
- **Deletion** - deletes an element at specified positions in the list
- **Search** - searches an element using the given value
- **Update** - update an element at specified position with the given value

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### How to create a linked list

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

1. create [[javascript.vanilla.data-structures.linked-lists.examples.linkedList-js]]
1. create [[javascript.vanilla.data-structures.linked-lists.examples.linkedList-test-js]] for automated testing and to drive writing the file
1. create [[javascript.vanilla.data-structures.linked-lists.examples.app-js]] see we can run code to manually test the `linkedList` file

1. go to [[javascript.vanilla.data-structures.linked-lists.examples.linkedList-js]] for remaining instructions

### How to write proper tests

1. go to [[javascript.vanilla.data-structures.linked-lists.examples.linkedList-test-js]] on writing tests

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)
