const { ApolloServer, gql } = require('apollo-server');

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

const messages = [];

const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    addMessage: (root, { input }) => {
      const id = messages.length;
      messages.push({
        id,
        user: input.user,
        content: input.content,
      });
      return id;
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
