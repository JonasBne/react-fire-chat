const baseURL = process.env.REACT_APP_DATABASE_URL;

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

module.exports = resolvers;
