# jQuery

### jQuery Library

[![jQuery](../../../assets/images/jQuery_logo.svg)](https://jquery.com/)

[![jQuery](https://img.shields.io/badge/Docs-jquery-%230769AD.svg?style=flat&logo=jquery&logoColor=white)](https://api.jquery.com/) |
[![W3 Schools](https://img.shields.io/badge/W3Schools-6DA55F?style=flat&logo=w3c&logoColor=white)](https://www.w3schools.com/jquery/jquery_intro.asp)

# Table of Contents

1. [Abbreviations](#abbreviations)

1. [Introduction](#introduction)

1. [jQuery](#jquery)

1. [Including jQuery and Selecting Elements](#including-jquery-and-selecting-elements)

1. [jQuery Methods](#jquery-methods)

1. [Events and Delegation with jQuery](#events-and-delegation-with-jquery)

1. [Wrap Up](#wrap-up)

## Abbreviations

- \*[API]: Application Programming Interface
- \*[CSS]: Cascading Style Sheets
- \*[DOM]: Document Object Model
- \*[HTTP]: Hypertext Transfer Protocol
- \*[JS]: JavaScript

## Introduction

This unit will cover how to use one of the most popular libraries in web development: **[jQuery](https://jquery.com/)**. Libraries provide additional functionality outside of what is built-in the language. They provide new functionality for you to use without having to implement the functions and methods yourself. **jQuery** is a JavaScript library that provides handy tools fro DOM manipulation. This library is extremely pervasive and relatively easy to use.

In this subunit, we'll teach you about jQuery. jQuery is a JavaScript library **designed to make DOM manipulation more accessible and less tedious**. It's very user-friendly! jQuery was once the most popular JavaScript library and is still used at **three out of every four companies** doing work in JavaScript. There's tons of documentation for jQuery beyond what we're going to teach you in this subunit, and we encourage you to explore some of the fun animations and other features of this library on your own time.

Although it's not as popular as it once was, jQuery is still used by 77% of the top 1 million websites. jQuery will make your life easier and you'll use it at work all the time. Fortunately, you already have a strong foundation in DOM manipulation, so learning jQuery will be a breeze. You'll see how to select, modify, and create elements, attach event listeners, and some other great
DOM operations.

### Goals

- Develop a conceptual understanding of jQuery and its methods
- Explain what you would or would not use a library like jQuery
- Compare and contrast jQuery with [[javascript.vanilla]]

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## jQuery

### What is jQuery

It's a library for:

- Manipulating the DOM
- Adding Event Listeners
- Animating Elements
- Making HTTP Requests ([AJAX](https://api.jquery.com/jquery.ajax/))

### Why should you still learn jQuery

- Brevity and clarity
- Cross-Browser Support
- AJAX
- 77% of the top 1,000,000 most visited pages use it

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Including jQuery and Selecting Elements

### Including jQuery

- [jQuery CDN](https://releases.jquery.com/)
- Once you include jQuery script, you have access to global $

> **Note:** $ in the browser console
>
> Just because $ has a value in your browser's console, this does _not_ mean that the page you're on necessarily uses jQuery.
> Most browsers reserve $ as a sor tof shorthand for **document.querySelector**, unless some library overrides this behavior.
>
> If you see something like **f**$ (selector, [startNode]){[Command Line API]} as teh value for $, this means that jQuery is not installed.  
> On the other hand, if you see something like **f**(e,t){return new he.fn.init(e,t)}, this means that a (minified) version of jQuery has been installed.
>
> $ is just a shorter alias for a global **jQuery** object when jQuery is loaded, so another test is just to check in the console whether there's a global variable called **jQuery**.

### Selecting elements

It's as easy as using CSS selectors! (except you need to remember your CSS selectors)

```javascript
$('ul');
// like document.querySelectorAll,
// this will ALL uls

$('#todo-container');

$('.carousel-image');
// like document.querySelectorAll,
// this will select ALL the elements with that class
```

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### What does this give you

A jQuery object

**jQuery objects are NOT the same as DOM elements**

To access an element, use the **get** function:

```javascript
let $listItems = $('li');
$listItems; // a jQuery object

$listItems.get();
// an array of HTMLElements

$listItems.get(0);
// the first HTMLElement
```

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### Storing jQuery Objects in variables

It's a common convention to store jQuery objects in variable names that begin with $.

This isn't necessary, but clearly communicates your intent.

```javascript
let x = $('.class1');
let $class2Element = $('.class2');

// 200 lines later...

console.log(x);
// wtf is this

console.log($class2Element);
// nice, this is probably a jQuery object
```

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## jQuery Methods

### Common jQuery Methods

A great way to learn these are to compare them to vanilla JS methods

- **.val()**
- **.text()**
- **.attr()**
- **.html()**
- **.css()**
- **.addClass() .removeClass() .toggleClass()**
- **.empty() .remove()**
- **.append() .prepend()**
- **.find() .closest() .parent() .next() .prev()**

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### jQuery getter / setter pattern

- Vanilla JS: `.getAttribute(attrName)` and `.setAttribute(attrName, newValue)`
- jQuery: `.attr(attrName, [newValue])` (second param is optional)
- This is common with jQuery methods

### Chaining with jQuery

Almost all jQuery methods return a jQuery object, which allows for method _chaining_.

Instead of performing DOM operations line-by-line, we can chain method calls together on a single jQuery object.

Instead of:

```javascript
let todoContainer = document.querySelector('#todo-container');
todoContainer.style.color = 'red';
todoContainer.innerText = 'look at this!';
todoContainer.addEventListener('click', function (evt) {
  console.log('clicked!');
});
```

We can have:

```javascript
$("#todo-container)
  .css("color", "red")
  .text("look at this!")
  .on("click", function(evt){console.log("clicked!")});
```

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### Creating elements

Instead of using `document.createElement("li")` we can simply create an element using `$("<li>")`

- `$("<li>")` creates a new li
- `$("li")` selects existing li

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### Waiting for the DOM to load

With vanilla JS we have DOMContentLoaded and window.onload, with jQuery we have:

```javascript
// waits for the DOM to load
$(function () {});
```

You may see this version:

```javascript
// waits for the DOM to load
$(document).ready(function () {});
```

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Events and Delegation with jQuery

### jQuery events

jQuery's **on()** works similarly to **addEventListener**. It lets you specify the type of event to listen for.

```javascript
// prints when item with id "submit" is clicked
$('#submit').on('click', function () {
  console.log('Another click');
});

// alerts when ANY button is clicked
$('button').on('click', function () {
  console.log('button clicked!');
});
```

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### Why Use on()

In most cases, **click()** and **on("click")** will both get the job done. HOWEVER, there is one key difference:

- **.click(callback)** is a shorthand for **.on("click", callback)**
- **on()** accepts optional argument between type of event and callback
- This flexibility allows us to leverage event delegation.

### Event Delegation

Event delegation allows us to attach an event listener to a parent element, but only invoke the callback if the event target matches a certain selector.

This will work even if _elements matching the selector don't exist yet_!

```javascript
$('#meme-container').on('click', '.meme', function (evt) {
  deleteMeme(evt.target);
});
```

- less code
- more performant

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

### Event Delegation: Vanilla JS vs. jQuery

_Vanilla JS_

```javascript
// deletes a meme when it is clicked
// even if it doesn't exist on page load

document
  .getElementById('meme-container')
  .addEventListener('click', function (evt) {
    let target = evt.target;

    // checking for "meme" class on target
    // this logic would need to change a bit
    // if we were searching by something
    // else (e.g. tag name)

    if (target.classList.contains('meme')) {
      deleteMeme(target);
    }
  });
```

_jQuery_

```javascript
// deletes a meme when it is clicked
// even if it doesn't exist on page load

$('#meme-container').on('click', '.meme', function (evt) {
  deleteMeme(evt.target);
});
```

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## Wrap Up

### Why might you not use jQuery

- The DOM API is much more standardized
- It doesn't do anything you can’t do on your own
- It's an unnecessary dependency

> **NOTE: You might not need jQuery**
>
> If you're ever on the fence about whether you should include jQuery or not, here's a website that shows you how to implement a lot of jQuery functionality with vanilla JavaScript: [You Might Not Need jQuery](https://youmightnotneedjquery.com/).
>
> Their general philosophy is that if you want to use jQuery because it makes building your app better, great!
> Go for it.
> But if you're building a library, it's worth asking whether you need a dependency like jQuery.

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)
