const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config();
const baseURL = process.env.REACT_APP_DATABASE_URL;

const resolvers = {
  Query: {
    // TODO: fix this
    messages: async () => {
      const data = await fetch(`${baseURL}/messages.json`);
      const dataJson = await data.json();
      const keys = Object.keys(dataJson);
    },
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
