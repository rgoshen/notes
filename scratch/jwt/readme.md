# JWT - JSON Web Tokens

References

- [Web Dev Simplfied](https://www.youtube.com/watch?v=7Q17ubqLfaM)
- [JWT Intro](https://jwt.io/introduction)

## Table of Contents

- [What is JWT](#what-is-jwt)
- [JWT vs Session](#jwt-vs-session)
- [Components of JWT](#components-of-jwt)
- [When you should use JWT](#when-you-should-use-jwt)
- [Advantages of JWT](#advantages-of-jwt)
- [Tutorials](#tutorials)

### What is JWT

- just for authorization only not authentication
  - **authentication** takes in a username and password and make sure the username and password are correct (i.e. logging a user in)
  - **authorization** making sure the user sending requests to your server is the same user that logged in during authentication process (i.e. should this user being consuming this resource)
    - normally done using **Sessions**

### JWT vs Session

#### Session based authentication

In **session based authentication**, the user logs in from a client (by posting an email and password to a client), and the server does the authentication. If this is correct, the user is stored in the session, and the session is stored in memory on the server. The ID is then sent back to the browser using a cookie that sends the ID up to the server each time it makes a request.

![session authorization](/imgs/session_authorization.png)
image from [educative.io](https://www.educative.io/edpresso/why-should-you-use-jwts)

#### Token based authentication

In **token based authenitcation**, JWT creates a JSON web token and encodes, sterilizes, and adds a signature with a secret key that cannot be messed with. The key is sent back to the browser. Each time a request is sent, it verifies and sends the response back.

The main difference here is that the user's state is not stored on the sever as in a session based, instead it is stored inside the token on the client-side.

JWT also allows us to use the same JSON web token in multiple servers that you can run without running into problems where one server has a certain session, and the other doesn't.

![token_authorization](/imgs/token_authorization.png)
image from [educative.io](https://www.educative.io/edpresso/why-should-you-use-jwts)

### Components of JWT

Go to [JWT.io](https://jwt.io/) debugger to see how a JSON web token is constructed.

![JWT demo](/imgs/jwt.io_demo.gif)

![JWT.io](/imgs/jwt_io.png)

A typical JWT
`xxxxxxx.yyyyyyyyyyy.zzzzzzzzz`

**HEADER** (xxxxxxx)

- this contains the signing algorithm and token type

**PAYLOAD** (yyyyyyyyyyy)

- contains the claims
- claims are statements about an object (typically, the user) and additional data
- 3 types of claims
  1. **Registered claims**: set of predefined claims which are not mandatory but recommended (**iss**-issuer, **exp**-expiration time, **sub**-subject, **aud**- audience and [others](https://datatracker.ietf.org/doc/html/rfc7519#section-4.1))
  1. **Public claims**: defined at will by those using JWTs
  1. **Private calims**: custom claims created to share information between parties that agree on using them and are neither _regiesterd_ or _public_ claims.

Should always make sure you have an expires date on a token. Otherwise, a bad player should ever get a hold of your token then they could make requests as you and never worry about it expiring and denying them access.

**NOTE**: signed tokens although protected against tampering can still be read by anoyone. They are _encoded_ but not _encrypted_. Therefore, you should **NEVER** send user passwords in a JWT token.

**SIGNATURE** (zzzzzzzzz)

- to create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.
- userd to verify the message wasn't changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is.

The output is three BASE64-URL strings separated by dots that can easily be passed in HTML and HTTP environments

### When you should use JWT

Use JWTs when a stateless authrization mechanism is needed. The server's protected routes will check for a valid JWT in the `Authorization` header, and if it's present, the user will be allowed to access protected resources. If the JWT contains the necessary data, the need to query the database for certain operations may be reduced, though this may not always be the case.

If the token is sent in the `Authorization` header, Cross-Origin Resource Sharing (CORS) won't be an issue as it doesn't use cookies.

The following diagram shows how a JWT is obtained and used to access APIs or resources:

![client credentials grant](/imgs/client-credentials-grant.png)
image from [jwt.io introduction](https://jwt.io/introduction)

1. The application or client requests authorization to the authorization server. This is performed through one of the different authorization flows. For example, a typical OpenID Connect compliant web application will go through the `/oauth/authorize` endpoint using the authorization code flow.
1. When the authorization is granted, the authorization server returns an access token to the application.
1. The application uses the access token to access a protected resource (like an API).

### The advantages of JWT

JWT presents several benefits over **Simple Web Tokens (SWT)** and **Security Assertion Markup Language Tokens (SAML)**.

- less verbose than XML and more compact than SAML
- security-wise, SWT can only be symmetrically signed by a shared secret using the HMAC algorithm. However, JWT and SAML tokens can use a public/private key pair in the form of a X.509 certificate for signing. Signing XML with XML Digital Signature without introducing obscure security holes is very difficult when compared to the simplicity of signing JSON.
- JSON parsers are common in most programming languages because they map directly to objects. Conversely, XML doesn't have a natural document-to-object mapping. This makes it easier to work with JWT than SAML assertions.
- regarding usage, JWT is used at Internet scale. This highlights the ease of client-side processing of the JSON Web token on multiple platforms, especially mobile.

More about JWT can be found at [Auth0](https://auth0.com/learn/json-web-tokens/?_ga=2.149867318.1260740837.1642955465-1104985521.1642955465&_gl=1*88dwmh*rollup_ga*MTEwNDk4NTUyMS4xNjQyOTU1NDY1*rollup_ga_F1G3E656YZ*MTY0Mjk2ODAxOC40LjEuMTY0Mjk3MDU5Ni42MA..).

### Tutorials

[JWT Authentication](/node/jwt-authentication/readme.md)
