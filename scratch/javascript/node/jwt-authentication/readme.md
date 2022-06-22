# JWT Authentication Tutorial in Node.js/Express.js

References

- [Web Dev Simplified](https://www.youtube.com/watch?v=mbsmsi7l3r4)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken#readme)

## Table of Contents

- [Introduction](#introduction)
- [Part 1: Simple JWT authentication](#part-1-simple-jwt-authentication)
- [Part 2: Refresh Tokens](#part-2-refresh-tokens)

## Introduction

JSON web tokens are one of the more popular ways to secure applications, especially in micro-services, but JWT is much more complex than a simple session based user authentication. In this tutorial I will be breaking down exactly how to set up authentication with JWT and how to ensure the authentication is secure. I will also be showing how to setup refresh tokens with JWT so that your application is even more resilient and secure. Lastly, I will show how to invalidate refresh tokens which is the ultimate last step in securing an application.

## Part 1: Simple JWT authentication

- create tokens and send tokens to users and then authenticate those tokens on the server
- JWT is incredibly powerful
  - allows the same token to be used across servers (steps 11 creates a second server to show this) as long as they access to the same secret token

### Steps

1. make project folder and cd into it

```bash
mkdir example
cd example
```

2. initialize npm

   1. this will setup the inital project structure and create package.json

```bash
npm init -y
```

3. install required dependancies

```bash
   npm i express jsonwebtoken dotenv
```

4. create .env file

   1. this allows you to store whatever you need to keep secret
   1. in this instance `TOKEN_SECRET`

5. install `nodemon` as a developer dependancy

   1. anytime a change is made to a file, it will automatically refresh the server instead of manually having to do it

```bash
npm i nodemon --save-dev
```

6. create [server.js](/node/jwt-authentication/notes/serverjs.md)

   1. this will be the main server in node.js

7. go into `package.json` and create the script `devServer` to start `nodemon`

   1. you do not have to call it `deServer`, you can call it whatever you want

```json
{
  "scripts": {
    "devServer": "nodemon server.js"
  }
}
```

8. start up the server

```bash
npm run devServer
```

9. create a [requests.rest](/node/jwt-authentication/notes/requests.rest.md) file

   1. you need to have [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) extension installed
   1. allows you to make REST requests to your api right inside vscode instead of using Postman or Insomnia

10. how to create a with the crypt library inside of node.js

```bash
node

> require('crypto').randomBytes(64).toString('hex')
'7d95ffc652289719329cfc607e66998d07aaccfaa691077b47aa16d86be8b988c2816ff3c5f14b8e18290a9d522e01b4611b24a730de609ac6c08c5cb1abfffa'
```

11. copy [server.js](/node/jwt-authentication/notes/serverjs.md) file and rename to [authServer.js](/node/jwt-authentication/notes/authServerjs.md) and change port number

12. in [server.js](/node/jwt-authentication/notes/serverjs.md) remove login route

13. in [authServer.js](/node/jwt-authentication/notes/authServerjs.md) remove get post route and `authenticateToken` middleware

14. add start script in `package.json'

```json
{
  "scripts": {
    "devServer": "nodemon server.js",
    "authServer": "nodemone authServer.js"
  }
}
```

15. shutdown down the server and restart server and start authServer

```bash
npm run devServer
npm run authServer
```

## Part 2: Refresh Tokens

- increases the security of the server
- able to revoke privalages from users we no longer want to have those privalages (similar to logout)
- right now the token we built has no expiration, so once a user has been authenticated their token is good for forever, so if a bad player gets a hold of the token, then they would have access to whatever that user has access to -- **NOT GOOD** -- not the most secure
- idea is to save the refresh token in a safe spot and for the access token to have a very short expiration time, therefore if some bad player happens to get your access token, then they only access for a few minutes versus forever
- access token gets revoked after some many minutes then the user needs to have the refresh token in order to keep access, then once user is done, the refresh token gets invalidated and user logs out
  - this refresh token gets removed from a list of valid refresh tokens
- Reasons for a refresh token
  1. invalidate users that steal access that shouldn't have access
  1. take all your authenication and authorization and remove it away from your normal server
     1. allows scaling of servers separately
