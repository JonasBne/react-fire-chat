const { ApolloServer } = require('apollo-server-express');
const schema = require('./schema');

const graphQlServer = new ApolloServer({
  schema,
  formatError: (error) => {
    // console.log(error);
    // return new Error('Internal server error');
    // Or, you can delete the exception information
    // delete error.extensions.exception;
    return error;
  },
  introspection: true,
  playground: true,
});

graphQlServer.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
