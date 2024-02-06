# Foodlus Technical Test

## Description

I chose to construct the SERVER REST API with the ports & adapters architecture, as it benefits scalability, organization, testability and new features integrations of the backend.

## Features

-   [x] Express.js server using typescript
    -   [x] REST API
    -   [x] Ports & Adapters architecture (clean architecture)
    -   [x] Error handler
    -   [x] Routes
-   [x] Revo Module
    -   [x] Revo API integration
    -   [x] Zones and Tables models
    -   [x] /api/tables endpoint - get all tables separated by zone
    -   [x] Unit tests
-   [x] Auth Module
    -   [x] Json Web Token integration
    -   [x] User validation middleware
    -   [x] /api/login endpoint - get access token. It's used to fetch protected endpoints

## Upgrades

-   [ ] Frontend development such as a dashboard to analyse statitics on charts
-   [ ] Improve the error handler logic
-   [ ] Implement the user authentication with persistence
-   [ ] Integrate more endpoints from REVO API
-   [ ] Implement unit, functional, acceptance, and integration testing

# Documentation

## Getting Started

#### 1. Install Dependencies

```bash
$ npm i
```

#### 2. Setup .env file

Place the bellow content in the root .env

```bash
REVO_API_DOCUMENTATION_URL=https://api.revo.works/
REVO_API_BASE_URL=https://integrations.revoxef.works/api/external/v2
REVO_TENANT=myrapidwaiter
REVO_AUTH_TOKEN=bVUglVtjpJ8lycy3
REVO_CLIENT_TOKEN=gy5oHFUJCdKFqLtb740431EEe4FB1bThdfPwWZre5LMm1BtBTEIcgJ4Vy9RI

HOST=localhost
PORT=8080
NODE_ENV=development

VALID_USER_USERNAME=smzt
VALID_USER_EMAIL=smzt@gmail.com
VALID_USER_PASSWORD=admin

JWT_SECRET_TOKEN=9jKleFxuVL03IdhqRU4GsAWOzD7y1ZkH
JWT_EXPIRE_IN=10h
```

#### 3. Run tests

```bash
$ npm run test
```

#### 4. Run build command

```bash
$ npm run dev:build
```

#### 5. Serving the server

```bash
$ npm run dev:serve # Running at http://localhost:8080/
```

## API

### Authorization

#### api/login

-   {`POST`} Should retrieve the bearer token

Body

```bash
username: {VALID_USER_USERNAME}
email {VALID_USER_EMAIL}
password {VALID_USER_PASSWORD}
```

-   Example: 200
    ```json
    {
        "userValidated": {
            "username": "smzt",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InNtenQiLCJpYXQiOjE3MDcxNjA5NDZ9.AlYBGO5dZ_8zQ-8fQAgNvfXJ_s6AuNka8BsEGOyKLFk"
        }
    }
    ```

### Revo API integration

#### api/tables

Header

```bash
Bearer {TOKEN_LOGIN_RESPONSE}
```

-   {`GET`} Should retrieve all available Zones with Tables
    -   Example: 200
    ```json
    [
        {
            "name": "Room 1",
            "serviceLocations": [
                {
                    "name": "Table 1",
                    "code": 1,
                    "zoneId": 1,
                    "zoneName": "Room 1"
                }
            ]
        }
    ]
    ```
