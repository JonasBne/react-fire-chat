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

  type User {
    fullName: String
    email: String!
    location: String
    age: String
    citizen: Boolean
  }

  type Query {
    messages: [Message!]
    users: [User]
  }

  type Mutation {
    addMessage(input: MessageInput!): AddMessagePayload!
  }
`;

module.exports = typeDefs;
