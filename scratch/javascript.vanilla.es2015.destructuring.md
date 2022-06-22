---
id: gp97SHbjRVbCivrXH4hzt
title: Destructuring
desc: 'Desctructuring notes'
updated: 1644011074645
created: 1644008181567
---

![javascript](/assets/images/javaScript.jpeg){display: block, margin: 0 auto, max-height: 400px}

[![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=flat&logo=mdnwebdocs&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
[![W3 Schools](https://img.shields.io/badge/W3Schools-6DA55F?style=flat&logo=w3c&logoColor=white)](https://www.w3schools.com/js/default.asp)

# Table of Contents

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Introduction](#introduction)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Object Destructuring](#object-destructuring)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Destructuring and Spread](#destructuring-and-spread)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Renaming with Destructuring](#renaming-with-destructuring)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Defaults with Destructuring](#defaults-with-destructuring)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Destructuring Nested Objects](#destructuring-nested-objects)

1. ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat&logo=javascript&logoColor=%23F7DF1E)[Destructuring Functions](#destructuring-functions)

1. [Tutorials](#tutorials)

## Introduction

Software engineering and Development requires working with arrays and objects every day. One thing you'll want to do in this daily work is extract values from these data structures. Before ES2015, the code for this was quite tedious to implement, so a new feature was introduced called **destructuring**.

In this subunit, **you'll learn how to use destructuring to easily unpack values from a variety of objects, functions, arrays, and nested data structures**. You'll see how destructuring can be used to swap values in arrays, and at the end of the subunit, you'll have a few exercises to get some hands-on practice.

### Goals

- Understand what destructuring is
- Use object destructuring to write less code
- Use array destructuring to swap values and extract nested values

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Object Destructuring

JavaScript programmers take things out of objects all the time.

Here's how you used to have to extract values into variables.

```javascript
let userData = {
  username: 'smith',
  id: 12345,
  password: 'fiddlesticks',
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined,
};
let username = userData.username;
let firstName = userData.firstName;
let lastName = userData.lastName;
let id = userData.id;
```

### That’s A Lot of Typing

So they came up with some syntactic sugar.

```javascript
let userData = {
  username: 'smith',
  id: 12345,
  password: 'fiddlesticks',
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined,
};

/*
  declare variables: username, fi rstName, lastName, id values taken from the keys of the same name in userData
*/

let { username, firstName, lastName, id } = userData;

console.log(username); // smith
console.log(id); // 12345
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Destructuring and Spread

```javascript
let userData = {
  username: 'smith',
  id: 12345,
  password: 'fiddlesticks',
  firstName: 'Angela',
  lastName: 'Smith',
  age: 'guess',
  isLegit: undefined,
};

// extract the password key; collect the rest in 'user'

const { password, ...user } = userData;
console.log(user);

/*
{
username: 'smith',
id: 12345,
firstName: 'Angela ',
lastName: 'Smith', age: 'guess',
is Legit: undefined }
*/
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Renaming with Destructuring

```javascript
const instructorData = { name: 'Colt', job: 'Instructor' };
const { name: instructorName, job: occupation } = instructorData;
instructorName; // "Colt"
occupation; // "Instructor"
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Defaults with Destructuring

```javascript
const options = { refreshTime: 200 };
const { refreshTime = 750, waitTime = 1000 } = options;

console.log(refreshTime); // 200 - initialized in options
console.log(waitTime); // 1000 - fallback to default
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Destructuring Nested Objects

```javascript
const instructor = {
  id: 44,
  name: 'Colt',
  isHilarious: true,
  funFacts: {
    favoriteFood: 'Burrito',
    favoriteDrink: 'Old Fashioned',
  },
};
const {
  funFacts: { favoriteFood, favoriteDrink },
} = instructor;
console.log(favoriteFood); // 'Burrito'
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Destructuring Functions

We can use destructuring to extract key/value pairs from an object into variables.

```javascript
function makeInstructor(settings) {
  let name = settings.name;
  let age = settings.age;
}
```

We're going to assume the function is passed an object with a key of name and age

```javascript
function myFunc({ name, age }) {
  let name = name;
  let age = age;
}
```

But what happens if the object does not contain a key of name or age?

We can use default parameters!

```javascript
function myFunc({ name = 'Xie', age = 38 }) {
  let name = name;
  let age = age;
}
```

**You Can Apply The Same Concept To Arrays!**

```javascript
const myFavoriteThings = [’teaching', 'music', 'hiking', 'dank memes'];
const [first, second, ...others] = myFavoriteThings;

console.log(first); // 'teaching'
console.log(second); // 'music'
console.log(others); // ['hiking', 'dank memes']
```

**Fancy 1 -Line Array Value Swap**

```javascript
let a = 1;
let b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1
```

[![](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Tutorials
