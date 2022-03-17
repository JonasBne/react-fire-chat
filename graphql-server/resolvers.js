const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
require('dotenv').config();

const baseURL = process.env.REACT_APP_DATABASE_URL;

//TODO: provide better error feedback

const resolvers = {
  Query: {
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
    addMessage: async (root, { input }) => {
      try {
        const response = await fetch(`${baseURL}/messages.json`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sender: input.sender,
            content: input.content,
          }),
        });

        console.log(await response.json());
        return await response.json();
      } catch (err) {
        console.error(`problem when trying to add a message. Error: ${err}`);
      }
    },
  },
};

module.exports = resolvers;
