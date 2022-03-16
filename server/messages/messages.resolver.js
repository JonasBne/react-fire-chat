const resolvers = {
  Query: {
    messages: () => messages,
  },
  Mutation: {
    postMessage: (root, { user, content }) => {
      const id = messages.length;
      messages.push({
        id,
        user,
        content,
      });
      return id;
    },
  },
};

module.exports = resolvers;
