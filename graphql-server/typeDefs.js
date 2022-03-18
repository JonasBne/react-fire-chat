const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    content: String!
    id: ID!
    sender: String!
    userId: String!
    photoUrl: String!
    createdAt: Int!
  }
  input MessageInput {
    sender: String!
    content: String!
    photoUrl: String!
    userId: String!
  }

  type AddMessagePayload {
    id: ID!
    sender: String!
    content: String!
    userId: String!
    photoUrl: String!
    createdAt: Int!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    addMessage(input: MessageInput!): AddMessagePayload!
  }

  type Subscription {
    messageCreated: Message!
  }
`;

module.exports = typeDefs;
