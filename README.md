# Build a user management API with Nest.js and MySQL

## Description

Learn how to connect Nest.js to PlanetScale MySQL database. The complete tutorial can be found [here](https://planetscale.com/blog/build-a-user-management-api-with-nestjs-and-mysql)

## Download the application

### Clone this repository with:

```bash
git clone https://github.com/yemiwebby/nest-planetscale.git
```

### Install dependencies

```bash
npm install
```

### Connecting with PlanetScale Database

Set up a [free account on PlanetScale](https://auth.planetscale.com/sign-up) and create a new database. Obtain the username and password for your database branch. Follow the steps in [this section of the tutorial](http://link-to-be-added-later).

### Environment variable

Create a `.env` file and populate using this command:

```bash
cp .env.example .env
```

Be sure to replace the following placeholders:

```
DATABASE_USER=USERNAME
DATABASE_PASSWORD=PASSWORD
DATABASE_NAME=DATABASE_NAME
DATABASE_HOST=DATABASE_HOST
```

## Running the app

Run the application with:

```bash
npm run start:dev
```

The API will start running default port [http://localhost:3000](http://localhost:3000)

The endpoints are:

```bash

POST      '/user/create'
GET       '/user/all'
GET       '/user/:userId'
PATCH     '/user/edit/:userId'
DELETE    '/user/delete/:userId'

```
