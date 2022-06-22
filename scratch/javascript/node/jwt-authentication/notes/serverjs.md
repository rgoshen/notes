# server.js

1. **const express = require('express')** bring in the express library
2. **const app = express()** setup (instantiate) the express server
   1. **app.listen(<PORT>)** needs to be the last line of code in `server.js` and at a minimum you need to pass in a port number
3. setup authenitcate with JWT
   1. example would be so only certain users can have access to posts and not just everyone
   1. **const jwt = require('jsonwebtoken')** bring in jwt library
   1. **app.use(express.json)** since json will be passed into the server from login route, need to allow the server to be able to read the json that gets passed up to it from the body
   1. **jwt.sign(obj, TOKEN_SECRET)** serialize the obj with a JWT
   1. create a **ACCESS_TOKEN_SECRET** in the `.env` file (see step 10 in [notes](/readme.md))
   1. **require('dotenv').config()** load `.env` file
4. create a middleware function to attach to what ever routes we want to protect
5. attach `authenticateToken` middleware to all routes that need an authenticated user to access
   1. `authHeader && authHeader.split(' ')[1]` checks for the presence of an `authHeader` and if there return the token portion of the authHeader array ([BEARER JWT_TOKEN]) after it is split otherwise returns undefined
   1. `jwt.verify()` takes the token, SECRET and callback function
   1. the callback function which takes in the error and serialized obj parameters
   1. `next()` passes control on to the next piece of code whether that is another middleware or back to the main file
6. `post.username === req.user.name` this will only padd back the posts that belong to the authenticated user

```nodejs
require('dotenv').config();

const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

const posts = [
    {
        username: 'Kyle',
        title: 'Post 1'
    },
    {
        username: 'Jim',
        title: 'Post 2'
    }
];

app.get('/posts', authenticateToken,(req, res) => {
    res.json(posts.filter((post) => post.username === req.user.name));
});

// middleware to authenticate user
function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];

  const token = authHeader && authHeader.split(' ')[1];

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;
    next();
  });
}

app.listen(3000)
```
