const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Message {
    content: String!
    id: ID!
    sender: String!
  }
  input MessageInput {
    sender: String!
    content: String!
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
`;

module.exports = typeDefs;
