# ES2015

![javascript](../../../assets/images/javaScript.jpeg)

[![MDN Web Docs](https://img.shields.io/badge/MDN_Web_Docs-black?style=flat&logo=mdnwebdocs&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) |
[![W3 Schools](https://img.shields.io/badge/W3Schools-6DA55F?style=flat&logo=w3c&logoColor=white)](https://www.w3schools.com/js/default.asp) |
[ECMA](https://www.ecma-international.org/)

## Table of Contents

1. [Abbreviations](#abbreviations)
1. [Introduction](#introduction)
1. [ES2015 Introduction](#es2015-introduction)
1. [let and const](./javascript.vanilla.es2015.let-and-const.md)
1. [Arrow Functions](./javascript.vanilla.es2015.arrow-functions.md)
1. [Rest/Spread](./javascript.vanilla.es2015.rest-spread.md)
1. [Object Enhancements](./javascript.vanilla.es2015.object-enhancements.md)
1. [Destructuring](./javascript.vanilla.es2015.destructuring.md)
1. [Maps and Sets](./javascript.vanilla.es2015.maps-and-sets.md)

## Abbreviations

- \*[ECMA]: European Computer Manufacturers Association
- \*[IE]: Internet Explorer
- \*[TC39]: Technical Committee 39

## Introduction

All programming languages go through updates to keep them modern and up to date with what an evolving world requires. The version of JavaScript used by most workplaces includes a set of updates released in 2015 called **ECMAScript2015** or **ES2015** for short. Since then, minor updates have been released every year, but the one you should be most concerned about learning for your professional development is ES2015. If you can talk confidently about this release during an interview, you will score major brownie points.

In this unit, we’ll dive deep into the major updates, popular features, and great functions of the ES2015 release. These changes let developers write less code to achieve the same functionality, enable people to navigate maps and sets in a more intuitive way, and introduce new data structures to store data better. The best of all, for a budding programmer like you, is that many methods and functions people used to have to implement by hand are built into this release. These functions have enabled JavaScript to be used as an Object Oriented Programming language - and we’ll go over exactly why that’s awesome our unit on Object Oriented Programming.

You will need to know how to use the features in ES2015 in any interview project or challenge a potential employer gives you. All future units will build on this information, and once you tap into the power of ES2015, you will be able to make some cool and imaginative projects. Speaking of which, the next unit, Connect Four, is one big project where you'll build an interactive game. This cumulative project will combine JavaScript fundamentals like DOM manipulation and advanced array methods with the information you learn here. You will also need to write more tests with Jasmine, because we know how great it feels to ace a test.

### Goals

- Familiarize yourself with the new features of ES2015
- Get some context for why these features we readded
- Prepare yourself for reading, understanding, and writing code on modern codebase
- Gain a more in-depth understanding of JavaScript

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## ES2015 Introduction

This subunit will give you some background on ES2015. It will explain the rationale behind the updates, an overview of the specific features in the release, and the relationship between ECMAScript and JavaScript. You won't be doing much programming in this subunit, but this is important to know to help you understand the broader picture of the technological world.

### An Introduction

- Let’s see some newer JS features!
- Everything covered here is part of ES2015 (what is that??)
- Some of these features aren’t supported in IE

#### Before we start.....A brief history

- Browser wars of the 90s
- JS Chaos, standardization necessary
- Enter ECMA!

#### What is ECMAScript

- The “standard” for the JS language!
- Started during the browser wars between Microsoft and Netscape
- Browsers/Node implement the language based on this standard

#### What is ECMA

- standards organization for information and communication systems.
- Who makes the decisions?

#### Introducing TC39

- Technical Committee 39 maintains and updates the ECMAScript standard/
- They are “in charge” of adding new features
- They evaluate proposals for complementary or additional technologies.

#### Evolving JS - The old way

- New features were batched together into large releases
- These releases were named with version numbers (ES3, ES5, etc.)
- Versions released infrequently, often with years between

#### Evolving JS - The new way

- Updates to the standard are published yearly
- Any new features ready each year are added together
- Versions named by year (ES2016, ES2017, etc.)
- Introduced a new, formalized proposal process

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### Stages of TC39

#### Stage 0: Strawman

- It all starts with an idea!
- Non-formal proposals live here

Any discussion, idea, change, or addition which has not yet been submitted as a formal proposal is considered to be a “strawman” proposal at this stage. Only members of TC39 can create these proposals, and there’s over a dozen active strawman proposals today.

#### Stage 1: Proposal

- It’s an “official” proposal
- Polyfills / plugins will be introduced usually at this time

Very unlikely that implementers are working on proposals

#### Stage 2: Draft

- Still a bit too early for us to cover!
- Sometimes implementers will experiment adding this to browsers/environments

#### Stage 3: Candidate

- Proposals in this stage are candidate recommendations.
- Unlikely to change beyond fixes to issues identified in the wild.
- Proposals move to this level with at least one browser implementation or when supported by a build- time transpiler like Babel.

#### Stage 4: Finished

Proposals get to this stage when there are at least two independent implementations that pass acceptance tests.

**Everything in this unit is Stage 4**

And has been implemented by almost all modern browsers

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)
