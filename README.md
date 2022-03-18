# React 🔥 Chat

## Purpose

I developed this application to familiarize myself with GraphQL, subscriptions and Firebase (auth & database). The repository consists out of two folders: `client` and `graphql-server`.

## Client

### Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) (or an alternative IDE such as Intellij)
- [Yarn](https://yarnpkg.com/) (an alternative to NPM)

## Available Scripts

```bash
# install all dependencies
$ yarn

# start application
$ yarn start

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

# autogenerates GraphQL types and schema
$ yarn gql:gen

# build to dist folder
$ yarn build

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about https://facebook.github.io/create-react-app/docs/deployment for more information.

```

## 3th Party Modules

- Styling:
  - [Material UI](https://mui.com/)
  - [Emotion CSS](https://emotion.sh/docs/introduction)
- API:
  - [GraphQL](https://graphql.org/)
  - [Apollo Client](https://www.apollographql.com/docs/react/)
- Dev Server: [Webpack](https://webpack.js.org/)

## Features

- [x] Authentication with Google
- [x] Data fetching, manipulation and subscriptions based on GraphQL & Apollo Client
- [x] Realtime sync with Firebase database

## GraphQL Server

## Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/) (or an alternative IDE such as Intellij)
- [Yarn](https://yarnpkg.com/) (an alternative to NPM)
- [Nodejs](https://nodejs.org/en/)

## Available Scripts

```bash
# install all dependencies
$ yarn

# start server
$ yarn start

 Runs the server in the development mode on port 4000.
Open http://localhost:4000/graphql to view the Apollo Server playground.

```

## 3th Party Modules

- Server:
  - [Apollo Server](https://www.apollographql.com/docs/apollo-server/)
  - [Express](https://expressjs.com/)
- API:
  - [GraphQL](https://graphql.org/)
  - [GraphQL subscriptions transport](https://github.com/apollographql/subscriptions-transport-ws)

## Features

- [x] Authentication with Google
- [x] Data fetching, manipulation and subscriptions based on GraphQL & Apollo Server
- [x] Realtime sync with Firebase database
