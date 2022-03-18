const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    content: String!
    id: ID!
    sender: String!
    createdAt: String!
    userId: String!
    photoUrl: String!
  }
  input MessageInput {
    sender: String!
    content: String!
    photoUrl: String!
    userId: String!
  }

  type AddMessagePayload {
    name: String!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    addMessage(input: MessageInput!): AddMessagePayload!
  }

  type Subscription {
    messages: [Message!]
  }
`;

module.exports = typeDefs;
