const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const admin = require('firebase-admin');
require('dotenv').config();

const baseURL = process.env.REACT_APP_DATABASE_URL;

const resolvers = {
  Query: {
    // TODO: fix this
    messages: async () => {
      try {
        const response = await fetch(`${baseURL}/messages.json`);
        const messages = await response.json();
        return messages;
      } catch (err) {
        console.error(`problem occured in query. Error: ${err}`);
      }
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
