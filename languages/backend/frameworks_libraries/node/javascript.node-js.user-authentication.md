# User Authentication
### A tutorial for user authentication with password in Node.js using bcrypt library

[![nodejs](../../../../assets/images/nodejs.png)](https://nodejs.org/en/)

[![Youtube Gaming](https://img.shields.io/badge/Youtube-FF0000?style=flat&logo=Youtube&logoColor=white)](https://www.youtube.com/watch?v=Ud5xKCYQTjM&t=0s) |
[![bcrypt](https://img.shields.io/badge/-bcrypt-blue?style=flat&?style=for-the-badge&logo=appveyor&logoColor=white)](https://www.npmjs.com/package/bcrypt) |
[![NodeJS](https://img.shields.io/badge/Docs-node.js-6DA55F?style=flat&logo=node.js&logoColor=white)](https://nodejs.org/en/docs/) |
[![Express.js](https://img.shields.io/badge/Docs-express.js-%23404d59.svg?style=flat&logo=express&logoColor=%2361DAFB)](https://expressjs.com/en/guide/routing.html) |
[![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=flat&logo=npm&logoColor=white)](https://www.npmjs.com/)

# Table of Contents

1. [Abbreviations](#abbreviations)
2. [Introduction](#introduction)
3. [What is password salt](#what-is-password-salt)
4. [How to properly hash a password](#how-to-properly-hash-a-password)
5. [User login](#user-login)
6. [Steps](#steps)

## Abbreviations

- \*[npm]: Node Package Manager

## Introduction

In this tutorial we are going to build a secure Node.js user authentication system. I will be covering all of the security concerns that you will run into while building an authentication system. We will also cover how to securely store a password in case of a database breach. Lastly, we will cover how to login a user securely based on their name and password.

## What is password salt

- allows multiple users to have the same password but when stored they look different from each other

- Ex without salt:

```nodejs
//user 1 password
hash('password');    // stores as asdoifaosidk

//user 1 password
hash('password');    // stores as asdoifaosidk
```

    - If a bad player gets into out db, they maybe able to figure out that both passwords are the same and therefore if they crack one then they have multiple passwords and access to multiple accounts

- Ex with salt:

```nodejs
//user 1 password
hash(salt + 'password');    // stores as lkasdlfoijig

//user 1 password
hash(salt + 'password');    // stores as asdoifaosidk
```

    - In the above example, two different users can have the same password but look like they are different, so if a bad player gets into our db, it makes it incredibly hard to figure out the passwords. The salt is different for every user

- the bcrypt library takes care of all this for us
  - bcrypt is an async library

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## How to properly hash a password

```nodejs
const bcrypt = require('bcrypt');
const saltRounds = 10;  // the more rounds the more secure and also more slow
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
```

### Technique 1

(generate a salt and hash on separate function calls)

```nodejs
bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
        // store hash in your password DB.
    });
});
```

### Technique 2

(auto-gen a salt and hash)

```nodejs
bcrypt.hash(myPlaintextPassword, saltRounds, (err, hash) => {
    // Store hash in your password DB.
})
```

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)

## User login

```nodejs
async function checkUser(username, password) {
    //... fetch user from a db etc.

    const match = await bcrypt.compare(password, user.passwordHash);

    if(match) {
        //login
    }

    //...
}
```

- compare method gets the salt out of the hashed password, uses it on the plain test password and then compares it to see if they match
- compare method also protects against timing attacks

## Steps

1. make project folder and cd into it

```bash
mkdir example
cd example
```

2. initialize npm

   1. this will set up the initial project structure and create package.json

```bash
npm init -y
```

3. install required dependencies

```bash
   npm i express bcrypt
```

4. install `nodemon` as a developer dependency

   1. anytime a change is made to a file, it will automatically refresh the server instead of manually having to do it

```bash
npm i nodemon --save-dev
```

5. go into `package.json` and create the script `devServer` to start `nodemon`

   1. you do not have to call it `deServer`, you can call it whatever you want

```json
{
  "scripts": {
    "devServer": "nodemon server.js"
  }
}
```

6. create [server.js](./javascript.node-js.user-authentication.examples.server-js.md)

   1. this will be the main server in [node.js](https://nodejs.org/en/)

7. start up the server (see [server.js](./javascript.node-js.user-authentication.examples.server-js.md) for steps)

```bash
npm run devServer
```

[![toc](https://img.shields.io/badge/back%20to%20top-%E2%86%A9-red)](#table-of-contents)
