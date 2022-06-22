---
id: ES1Vn6i5CtqChws3ZqFnl
title: reduce
desc: 'reduce function notes'
updated: 1643927343877
created: 1643926780181
---

![javascript](/assets/images/javaScript.jpeg){display: block, margin: 0 auto, max-height: 400px}

[![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=flat&logo=mdnwebdocs&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
[![W3 Schools](https://img.shields.io/badge/W3Schools-6DA55F?style=flat&logo=w3c&logoColor=white)](https://www.w3schools.com/js/default.asp)

# Table of Contents

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Introduction](#introduction)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[What it does](#what-it-does)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Adding A Second Parameter](#adding-a-second-parameter)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Let's Try Something Else](#lets-try-something-else)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[When You Would Use Reduce](#when-you-would-use-reduce)

1. [Tutorials](#tutorials)

## Introduction

In this subunit, you'll learn how use the incredibly powerful **reduce** method! It iterates over an array but it does not return an array - it can instead return something entirely new like an object or string!

Reduce has some other very cool functionality, which we'll explore. It's a more complicated to use than map and filter, but once you get the hang of it, you'll have an extremely useful tool at your disposal.

### Goals

- Understand what reduce does
- Use reduce to create new data structures

### What it does

Whatever is returned from the callback function, becomes the new value of the accumulator!

- Accepts a callback function and an optional second parameter
- Iterates through an array
- Runs a callback on each value in the array
- The first parameter to the callback is either the first value in the array or the optional second parameter
- The first parameter to the callback is often called "accumulator"
- The returned value from the callback becomes the new value of accumulator

#### Let's Break It Down

```javascript
let evens = [2, 4, 6, 8, 10];
evens.reduce(function (accumulator, nextValue) {
  return accumulator + nextValue;
});

/*
 2
 6
 12
 20
 30
*/
```

### Adding A Second Parameter

```javascript
let evens = [2, 4, 6, 810];

evens.reduce(function (accumulator, nextValue) {
  return accumulator + nextValue;
}, 10);

/*
 12
 16
 22
 30
 40
*/
```

### Let's Try Something Else

```javascript
let names = ['Maya1, 'Tammy', 'Angela', 'Alexis'];

names.reduce(function(accumulator, nextValue){
  if(nextValue !== "Colt"){
    return accumulator + = ' ' + nextValue;
  }
  return accumulator;
},'My friends are ');

/*
Here is what reduce will build up:

'My friends are Maya'
'My friends are Maya Tammy'
'My friends are Maya Tammy Angela'

With a final output of:

'My friends are Maya Tammy Angela Alexis'
*/
```

### When You Would Use Reduce

- It works for almost everything, but is sometimes overkill
- When you want to transform an array into another data structure

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Tutorials
