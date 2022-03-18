const { ApolloServer } = require('apollo-server-express');
const { createServer } = require('http');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const { execute, subscribe } = require('graphql');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { WebSocketServer } = require('ws');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const express = require('express');
const morgan = require('morgan');
const { SubscriptionServer } = require('subscriptions-transport-ws');
require('dotenv').config();

// Create the schema, which will be used separately by ApolloServer and
// the WebSocket server.
const schema = makeExecutableSchema({ typeDefs, resolvers });

// Create an Express app and HTTP server; we will attach both the WebSocket
// server and the ApolloServer to this HTTP server.
const app = express();
app.use(morgan('dev'));
const httpServer = createServer(app);

const subServer = SubscriptionServer.create(
  {
    schema,
    execute,
    subscribe,
  },
  {
    server: httpServer,
    path: '/graphql',
  },
);

const server = new ApolloServer({
  schema,
  plugins: [
    {
      async serverWillStart() {
        return {
          async drainServer() {
            subServer.close();
          },
        };
      },
    },
  ],
});

server.start().then(() => server.applyMiddleware({ app }));

const PORT = 4000;

httpServer.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`));
