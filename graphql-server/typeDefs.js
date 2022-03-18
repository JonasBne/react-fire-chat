const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type CreatedMessage {
    content: String!
    sender: String!
    userId: String!
    photoUrl: String!
  }

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
    sender: String!
    content: String!
    userId: String!
    photoUrl: String!
    createdAt: String!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    addMessage(input: MessageInput!): AddMessagePayload!
  }

  type Subscription {
    messageCreated: CreatedMessage!
  }
`;

module.exports = typeDefs;
