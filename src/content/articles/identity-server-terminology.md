---
title: 'Identity Server Jargon & Related Terminology'
titleTag: 'A Complete Guide'
description: 'A complete guide to Identity Server terminology, including authentication, authorization, OAuth 2.0, OpenID Connect, and the differences between Identity Server & IdentityServer4.'
pubDate: '20 Feb 2025'
heroImage: '/articles/identity-server-terminology2.jpg'
articleTag: 'Software Architecture'
previousArticle: ''
nextArticle: '/article/building-auth-service'
---

## Why do people often confuse Identity Server with IdentityServer4?
Due to naming similarities between Identity Server & IdentityServer4, this happens. Let me clarify it in detail:
- **Identity Server** is a generic term that refers to any authentication & authorization service that handles user identity management, token issuance & access control. Examples are Azure AD, Octa, Keycloak, and OAuth (here OAuth is the name of an organization)
- **IdentityServer4** is an open-source implementation of Identity provider built for .NET Core. It is based on OAuth 2.0 and OpenID Connect (OIDC).
- IdentityServer4 was the default choice for implementing an identity provider in .NET Core applications.
- Microsoft provides **.NET Core Identity**. It is a user store and authentication system (not an OAuth/OIDC server).
- IdentityServer4 extends .NET Core Identity and acts as an OAuth/OIDC identity provider.
- IdentityServer4 was free and open-source, but later, Duende IdentityServer replaced it with a commercial license.

## What is an Identity Server?
In an ideal world, an **Identity Server** for any application should act as a **centralized authentication and authorization hub** that ensures security, scalability, and seamless integration across all services. It should provide:
- Authentication & Authorization as a Service:
    - **User Authentication**: Support for password-based, social logins (OAuth, OpenID Connect), and multi-factor authentication (MFA).
    - **Token-based Authorization**: Issue JWT or opaque tokens for secure access.
- Support identity federation with external providers (Google, Azure AD, etc.).
- Secure token handling (refresh tokens, expiration policies).
- Compliance with security standards (OAuth 2.0, OIDC, SAML, Zero Trust).
- Serve multiple customers (tenants) with isolated or shared identity stores.

## What is OAuth?
OAuth (Open Authorization) is an open standard for token-based authentication and authorization. It allows users to grant applications access to their data without sharing passwords.

## Common Confusion: OAuth (Standard) vs. OAuth Organization vs. Auth0
- **OAuth** (Protocol/Standard) → A framework for authorization. It enables third-party applications to access a user's data without exposing their credentials.
- **[OAuth Organization](https://oauth.net/)** → A non-profit organization that maintains and promotes OAuth standards. It is not a service provider like Google or Facebook.
- **[Auth0](https://auth0.com/)** → Auth0 is a cloud-based Identity as a Service (IDaaS) platform that provides authentication and authorization for applications. It allows developers to implement secure login, Single Sign-On (SSO), Multi-Factor Authentication (MFA), and API security without building a custom identity management system.

## What is OAuth 2.0?
OAuth 2.0, introduced in 2012, is the current version of OAuth. It is widely used for secure API authorization. It replaced OAuth 1.0, simplifying the process by removing cryptographic signatures and introducing token-based authentication.

**Key Features of OAuth 2.0**:
- Access Tokens → Short-lived tokens used to access resources without sharing credentials.
- Refresh Tokens → Long-lived tokens that get new access tokens when they expire.
- Scopes → Define what data an application can access (e.g., "read emails" but not "send emails").
- Flows (Grant Types) → Different ways to obtain access tokens based on use cases (e.g., authorization code flow for web apps, client credentials for machine-to-machine communication).
## How People Confuse OAuth with Authentication?
- OAuth is for Authorization, NOT Authentication
- OAuth 2.0 grants access to resources, but it does not verify who the user is.
- OpenID Connect (OIDC) extends OAuth 2.0 to provide authentication (who the user is).
- Many confuse OAuth with authentication because services like Google and Facebook use OAuth and OIDC to log in.

**Final Summary**
- OAuth → A standard for secure authorization.
- [OAuth Organization](http://OAuth.net) → Maintains OAuth specs but does not provide authentication.
- OAuth 2.0 → The modern, widely used version for API security.
- OAuth ≠ Authentication → Use OpenID Connect (OIDC) for authentication.

## What is JWT?
JWT (JSON Web Token) is a secure information exchange format. Data is stored in a Base64-encoded string and sent in headers along with the request.