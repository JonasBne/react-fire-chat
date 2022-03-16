const { gql } = require('apollo-server');

const typeDefs = gql`
  type Message {
    id: ID!
    user: String!
    content: String!
  }
  input MessageInput {
    user: String!
    content: String!
  }
  type AddMessagePayload {
    id: ID!
  }

  type Query {
    messages: [Message!]
  }

  type Mutation {
    addMessage(input: MessageInput!): AddMessagePayload!
  }
`;

module.exports = typeDefs;
