# Foodlus Technical Test

## Steps to follow

1. Create Revo tables/zones models
2. Create getRevoTables function (index.ts)
3. Create unit tests for getRevoTables function
4. The freelancer will set up a server with an endpoint (POST) which will listen to queries from the outside (getTables)
5. The freelancer will set up an authorization via a Dummy API Token

## Delivery (48 hours from the reception of the assignment)

-   The freelancer will provide the code for an Express Server using Typescript
-   The freelancer will provide documentation for connecting to the endpoint (token and options)
-   The freelancer will provide the repository containing the freelancer's code

# Docuementation

## Getting Started

# Assignment for the freelancer

#### 1. Install Dependencies

```bash
$ npm i
```

#### 2. Setup dot env file(s)

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

#### 4. Build project

```bash
$ npm run dev:build
```

#### 4. Serve the server

```bash
$ npm run dev:serve # Running at http://localhost:8080/
```
