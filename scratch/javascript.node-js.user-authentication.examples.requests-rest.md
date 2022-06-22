---
id: bPSef7Xo3SVZTbF5RORJc
title: requests.rest
desc: 'User Authentication Example resquests.rest'
updated: 1643169650122
created: 1642994404721
---

```bash
GET http://localhost:3000/users

###

POST http://localhost:3000/users
Content-Type: application/json

{
"name": "Rick",
"password": "password"
}

###

POST http://localhost:3000/users/login
Content-Type: application/json

{
"name": "Rick",
"password": "password"
}
```

'###' denotes line separation
