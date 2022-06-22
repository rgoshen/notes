# Vanilla JavaScript

## Maps

- iterates over an array and returns a new array of the same length
- it uses values from the original array, you don't necessarily need to use them but you will have access to them
- if you don't return anything from the callback function, it will automatically return undefined (i.e. `const ages = people.map(() => {}); // [undefined, undefined, undefined]`)
- what ever is returned from the callback function is what will be stored in the new array

click [here](../../javascript/jsExamples.js) for examples

for preview click [here](../../javascript/index.html)

### Map Example 1

- iterate over the people array and grab the age of each person

```javascript
const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer'
    },
    {
        name: 'anna'
        age: 25,
        position: 'designer'
    },
    {
        name: 'susy'
        age: 30,
        position: 'the boss',
    }
];

let ages = people.map((person) => person.age );
console.log(ages); // [20, 25, 30]

ages = people.map((person) => person.age * 2);
console.log(ages); // [40, 50, 60]
```

```javascript
const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer'
    },
    {
        name: 'anna'
        age: 25,
        position: 'designer'
    },
    {
        name: 'susy'
        age: 30,
        position: 'the boss',
    }
];

const getAges = (person) => person.age * 2;
const ages = person.map(getAges);

console.log(ages); // [40, 50, 60]
```

- both do the same thing, but second snippet uses reference to another function (arrow or standard) instead

### Map Example 2

- iterate over an array but return an object

```javascript
const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer'
    },
    {
        name: 'anna'
        age: 25,
        position: 'designer'
    },
    {
        name: 'susy'
        age: 30,
        position: 'the boss'
    },
];

const newPeople = people.map((item) => {
    return {
        firstName: item.name.toUpperCase(),
        oldAge: item.age + 20,
    };
});

console.log(newPeople); // [{firstName: 'BOB', oldAge: 40}, {firstName: 'ANNA', oldAge: 45}, {firstName: 'SUSY', oldAge: 50}]
```

## Unique values

- use a map to get all instances
- new Set to get only the unique values
- ['all', ...] - turn it back into an array

### Example

```javascript
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'bacon',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];

const categories = menu.map((item) => item.category);
console.log(categories); // ['breakfast', 'lunch', 'dinner', 'breakfast', 'breakfast', 'dinner']

const uniqueCategories = [...new Set(menu.map((item) => item.category))];
console.log(uniqueCategories); // ['breakfast', 'lunch', 'dinner']
```

## Dynamic Object Keys

### Dot Notation

```javascript
const person = {
  name = 'John',
}

console.log(person.name); // 'John'
person.age = 20;
console.log(person); // {name: 'John', age: 20}
```

### Square Bracket Notation

```javascript
const items = {
  'featured-items': ['item1', 'item2', 'item3'],
};

console.log(items['featured-items']); // ['item1', 'item2', 'item3']
console.log(person['name']); // 'John'
```

### Example

- for dynamic keys, must use bracket notation

```javascript
let appState = 'loading';

const app = {
  [appState]: true,
};

console.log(app); // {loading: true}

appState = 'error';
const keyName = 'computer';

const app = {
  [appState]: true,
};

console.log(app); // {error: true}

app[keyName] = 'apple';
console.log(app); // {error: true, computer: 'apple}

const state = {
  loading: true,
  name: '',
  job: '',
};

console.log(state); // {loading: true, name: '', job: ''}

function updateState(key, value) {
  state[key] = value;
}

updateState('name', 'John');
updateState('job', 'developer');
updateState('loading', false);
updateState('products', []);

console.log(state); // {loading: false, name: 'John', job: 'developer', products: []}
```

- so you can see the value set for appState becomes the key

## Filter and Find

- filter - returns a new array, can manipulate the size of the new array, returns based on some condition you set in the callback function
- find - returns a single instance, returns the first match, if no match undefined is returned

### Filter Example

```javascript
const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

// filter
const youngPeople = people.filter((person) => person.age <= 25);
console.log(youngPeople); // [{name: 'bob', age: 20, position:'developer'}, {name: 'peter', age: 25, position: 'designer'}]
```

- in the callback function, true is returned then the element is passed into the new array else moves on to the next element

### Filter No Match Example

```javascript
const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

// no match
const seniorDevelopers = people.filter(
  (person) => person.position === 'senior developer'
);

console.log(seniorDevelopers); // []
```

### Find Example

```javascript
const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

const peter = people.find((person) => person.name === 'peter');
console.log(peter); // {name: 'peter', age: 25, position: 'designer'}
```

### Find No Match Example

```javascript
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson); // undefined
```

### Find with Multiple Matches Example

```javascript
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson); // {name: 'bob', age: 20, position: 'developer'}
```
