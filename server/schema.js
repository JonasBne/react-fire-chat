const { typeDefs: Messages, resolvers: messageResolvers } = require('./messages');

const Query = `
type Query {
  messages: [Message!]
}
`;

const Mutation = `
""" 
Add a new message to the conversation
"""

type Mutation {
  postMessage(AddMessageInput!): AddMessagePayload!
}
`;
