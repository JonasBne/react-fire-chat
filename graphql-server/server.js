const { ApolloServer, gql } = require('apollo-server-express');
const { initializeApp } = require('firebase-admin/app');
const { createServer } = require('http');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

// firebase setup

const firebaseClient = initializeApp({
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
});

// app setup

const app = express();
app.use(morgan('dev'));
app.use(cors());

const httpServer = createServer(app);

const schema = makeExecutableSchema({ typeDefs, resolvers });

// websocketserver setup

const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});

const serverCleanup = useServer({ schema }, wsServer);

const server = new ApolloServer({
  schema,
  plugins: [
    // proper http server shutdown
    ApolloServerPluginDrainHttpServer({ httpServer }),

    // proper websocket server shutdown
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      },
    },
  ],
  context: ({ req }) => {
    return {
      headers: req.headers,
      firebaseClient,
    };
  },
});

server.start().then((res) => {
  server.applyMiddleware({ app });

  const PORT = 4000;

  httpServer.listen(PORT, () => {
    console.log(`Server is now running on http://localhost:${PORT}${server.graphqlPath} 🔥`);
  });
});
