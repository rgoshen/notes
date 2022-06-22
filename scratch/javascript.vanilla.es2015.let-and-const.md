---
id: p959Di7l8LftqDFVv9M65
title: let and const
desc: 'let and const'
updated: 1643932970586
created: 1643930366350
---

![javascript](/assets/images/javaScript.jpeg){display: block, margin: 0 auto, max-height: 400px}

[![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=flat&logo=mdnwebdocs&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
[![W3 Schools](https://img.shields.io/badge/W3Schools-6DA55F?style=flat&logo=w3c&logoColor=white)](https://www.w3schools.com/js/default.asp)

# Table of Contents

1. [Abbreviations](#abbreviations)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Introduction](#introduction)
1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Reviewing var](#reviewing-var)
1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[let](#let)
1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[const](#const)

1. [Tutorials](#tutorials)

## Abbreviations

- \*[]:

## Introduction

In this subunit, we'll dive deep into the **let** and **const**, new ES2015 keywords used to declare variables. They both introduce a new kind of scope into JavaScript, and these keywords set rules on whether we can reassign or redeclare variables. This subunit will teach you all you need to know about what makes these keywords so powerful and what sets them apart.

## Reviewing var

**var**

- We use the **var** keyword to declare variables
- When defined in a function, the **var** keyword scopes a variable to that function
- **var** will hoist to the top of the scope it is defined in
- You can redeclare and reassign values with **var**

```javascript
var instructor = 'Colt'; // accessible everywhereI
function greet() {
  var message = 'Hello!'; // scoped to the greet function
}
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## let

The **let** keyword creates a **block-scoped** variable: a variable that only exists inside a code block.

### What Is A Code Block

Essentially any pair of curly braces (outside of object syntax).

```javascript
{
  // this is a code block
  let x = 5;
  var y = 10;
}

console.log(x);
// ReferenceError: x is not defined
console.log(y);
// 10
```

### Where Are Code Blocks Commonly Used

You’ll mostly use code blocks in **for** loops and **if** statements.

```javascript
if (x > 10) {
  let happy = true; // happy lives ONLY in this code block
}

// can't use it outside the block
console.log(happy); // ReferenceError: happy is not defined
```

### An Example

```javascript
for (var i = 1; i < 4; i++) {
  console.log(i);
}
// 1
// 2
// 3
console.log(i);
// 4

for (let i = 1; i < 4; i++) { console.log(i);
// 1
// 3
// 3
console.log(i); // ReferenceError: i is not defined
```

### More About let

It can be reassigned but not redeclared (unlike **var**).

```javascript
let z = 5;
z = 25;
let z = 10;
// SyntaxError: Identifier rzr has already been declared
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## const

The **const** keyword prevents a variable from ever being reassigned or redeclared.

```javascript
const PI = 3.14;
PI = 15; // TypeError: Assignment to constant variable
const PI = 5; // SyntaxError
```

**const** is also block-scoped, like **let**.

```javascript
{
  const x = 10;
}
console.log(x); // ReferenceError: x is not defined
```

### Comparison of Variable Declaration Keywords

| Keyword   | Can Reassign | Can Redeclare | Can Mutate | Scope Rules    |
| --------- | ------------ | ------------- | ---------- | -------------- |
| **var**   | yes          | yes           | yes        | function scope |
| **let**   | yes          | no            | yes        | block scope    |
| **const** | no           | no            | yes        | block scope    |

### What about var

- There's really no need to use it
- Just be careful of block scoping with **let**

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents) |

## Tutorials
