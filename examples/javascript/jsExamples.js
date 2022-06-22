// Map example

let people = [
  {
    name: 'bob',
    age: 20,
    position: 'developer',
  },
  {
    name: 'anna',
    age: 25,
    position: 'designer',
  },
  {
    name: 'susy',
    age: 30,
    position: 'the boss',
  },
  {
    name: 'jane',
    age: 35,
    position: 'developer',
  },
];

let ages = people.map((person) => person.age);
ages = people.map((person) => person.age * 2);

const neePeople = people.map((item) => {
  return {
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
  };
});

const names = people.map((person) => `<h3>${person.name}</h3>`);
const mapResults = document.getElementById('map-result');

mapResults.innerHTML = names.join('');

// Unique Values example

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
console.log(categories);

const uniqueCategories = [...new Set(menu.map((item) => item.category))];
console.log(uniqueCategories);

const uniqueValuesResults = document.getElementById('unique-values-result');
uniqueValuesResults.innerHTML = uniqueCategories
  .map((item) => `<button>${item}</button>`)
  .join('');

// Dynamic Object Keys
let appState = 'loading';
appState = 'error';

const keyName = 'computer';

const app = {
  [appState]: true,
};

console.log(app);

app[keyName] = 'apple';
console.log(app);

const state = {
  loading: true,
  name: '',
  job: '',
};

console.log(state);

function updateState(key, value) {
  state[key] = value;
}

updateState('name', 'John');
updateState('job', 'developer');
updateState('loading', false);
updateState('products', ['software', 'hardware']);

console.log(state);

//filter example
console.log('filter example');

people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];

const youngPeople = people.filter((person) => person.age <= 25);
console.log(youngPeople);

// filter no match example
const seniorDevelopers = people.filter(
  (person) => person.position === 'senior developer'
);

console.log(seniorDevelopers);

// find example
console.log('find examples');
const peter = people.find((person) => person.name === 'peter');
console.log(peter);

// find no match example
const oldPerson = people.find((person) => person.age > 35);
console.log(oldPerson);

// find with multiple matches example
const randomPerson = people.find((person) => person.age < 35);
console.log(randomPerson);
