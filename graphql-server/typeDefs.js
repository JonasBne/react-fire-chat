const { gql } = require('apollo-server-express');

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

module.exports = typeDefs;
