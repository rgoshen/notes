---
id: cpGwCZq3oVsz7wSK7CJX2
title: Object Enhancements
desc: ''
updated: 1644008154487
created: 1644000489996
---

![javascript](/assets/images/javaScript.jpeg){display: block, margin: 0 auto, max-height: 400px}

[![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=flat&logo=mdnwebdocs&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
[![W3 Schools](https://img.shields.io/badge/W3Schools-6DA55F?style=flat&logo=w3c&logoColor=white)](https://www.w3schools.com/js/default.asp)

# Table of Contents

1. [Abbreviations](#abbreviations)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Introduction](#introduction)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Object Shorthand](#object-shorthand)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Object Methods](#object-methods)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Computed Property Names](#computed-property-names)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Current Usage](#current-usage)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Computed Property Names in the Wild](#computed-property-names-in-the-wild)

1. [Tutorials](#tutorials)

## Abbreviations

- \*[JS]: JavaScript

## Introduction

Objects are one of the most fundamental data structures in JavaScript, and you'll be working with them all the time. In ES2015, a few nice enhancements were introduced so that you can accomplish some tasks writing less code. Let's explore some of those newer object enhancements!

## Object Shorthand

ES2015 provides quite a few enhancements for JS objects!

When the keys are the same name as the variable values, (this happens a lot), you don't have to repeat yourself.

```javascript
let firstName = 'Mary';
let lastName = 'Malarky';

// ES5 (Oldschool)

let instructor = {
  firstName = firstName,
  lastName = lastName,
};
```

```javascript
let firstName = 'Mary';
let lastName = 'Malarky';

// ES6

let instructor = {
  firstName,
  lastName,
};
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Object Methods

A nice shorthand when a key in an object represents a function.

```javascript
// ES5

let instructor = {
  sayHello: function () {
    return 'Hello!';
  },
};
```

```javascript
// ES2015

let instructor = {
  sayHello() {
    return 'Hello!';
  },
};
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Computed Property Names

ES2015 allows us to create an object with a key that JavaScript can compute at definition.

Here’s what we mean by that!

```javascript
// ES5

let firstName = 'Mary';
let instructor = {};
instructor[firstName] = "That's me!";
instructor.Mary; // "That's me!"
```

```javascript
// ES2015

let firstName = 'Mary';
let instructor = {
  [firstName]: "That's me!",
};
instructor.Mary; // "That’s me!"
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Current Usage

- These new shorthand methods are everywhere!
- Object shorthand and methods allow for writing less code
- Computed property names are everywhere in modern web frameworks.

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Computed Property Names in the Wild

- This appears when you work with multiple inputs or DOM elements and you want to change the value in an object based on a specific interaction,
- It's impossible to know upfront what key you are changing in the object without hardcoding the key, so instead we can use the **event** object for a browser interaction.

```javascript
function changeValueInObj(obj, event) {
  return {
    ...obj,
    [event.target.name]: [event.target.value],
  };
}
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Tutorials
