const { ApolloServer, gql } = require('apollo-server');

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

let messages = [];

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    addMessage: (root, { input }) => {
      const messageId = messages.length;
      messages.push({
        id: messageId,
        sender: input.sender,
        content: input.content,
      });
      return {
        message: {
          id: messageId,
          sender: input.sender,
          content: input.content,
        },
      };
    },
  },
};

const server = new ApolloServer(
  { typeDefs, resolvers },
  {
    playground: true,
  },
);

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
