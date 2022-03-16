const graphqlTools = require('graphql-tools');
const { gql } = require('apollo-server');

const { typeDefs: Messages, resolvers: messageResolvers } = require('./messages');

const Query = gql`
  type Query {
    messages: [Message!]
  }
`;

const Mutation = gql`
""" 
Add a new message to the conversation
"""

type Mutation {
  postMessage(AddMessageInput!): AddMessagePayload!
}
`;

const schema = graphqlTools.makeExecutableSchema({
  typeDefs: [Query, Mutation, Messages],
  resolvers: [messageResolvers],
});

module.exports = schema;
