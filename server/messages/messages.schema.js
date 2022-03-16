const { gql } = require('apollo-server');

const typeDefs = gql`
  type Message {
    id: ID!
    user: String!
    content: String!
  }

  type MessageInput {
    user: String!
    content: String!
  }

  type AddMessagePayload {
    id: ID!
  }
`;

module.exports = typeDefs;
