const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const express = require('express');

const app = express();

const typeDefs = gql`
  type Message {
    id: ID!
    sender: String!
    content: String!
  }
  input MessageInput {
    sender: String!
    content: String!
  }
  type AddMessagePayload {
    message: Message!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    addMessage(input: MessageInput!): AddMessagePayload!
  }
`;

let messages = [];

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    addMessage: (root, { input }) => {
      const messageId = messages.length;
      messages.push({
        id: messageId,
        sender: input.sender,
        content: input.content,
      });
      return {
        message: {
          id: messageId,
          sender: input.sender,
          content: input.content,
        },
      };
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    return {
      headers: req.headers,
    };
  },
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () => {
  console.log('Server has started 🚀 http://localhost:4000/graphql');
});
