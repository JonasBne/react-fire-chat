const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const express = require('express');

const firebaseClient = firebase.initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      headers: req.headers,
      firebaseClient,
    };
  },
});

const app = express();

server.start().then((res) => {
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log('Server has started 🚀 http://localhost:4000/graphql');
  });
});
