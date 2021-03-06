const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const admin = require('firebase-admin');
const { v4: uuidv4 } = require('uuid');
const { PubSub } = require('graphql-subscriptions');
require('dotenv').config();

const baseURL = process.env.REACT_APP_DATABASE_URL;

const pubsub = new PubSub();

const resolvers = {
  Query: {
    messages: async () => {
      try {
        const response = await fetch(`${baseURL}/messages.json`);
        const messages = await response.json();
        // when adding a message to firebase db the original array
        // is transformed into an object of objects
        // these conditions make sure the query always returns an array of messages
        // to avoid a server error
        if (messages === typeof Array) {
          return messages;
        } else {
          const messagesArr = Object.keys(messages).map((key) => {
            let msg = messages[key];
            msg.key;
            return msg;
          });
          return messagesArr;
        }
      } catch (err) {
        console.error(`problem occured in query. Error: ${err}`);
      }
    },
  },
  Mutation: {
    addMessage: async (root, { input }) => {
      const newMessage = {
        content: input.content,
        id: uuidv4(),
        sender: input.sender,
        photoUrl: input.photoUrl,
        userId: input.userId,
        createdAt: Date.now(),
      };

      try {
        const response = await fetch(`${baseURL}/messages.json`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newMessage),
        });

        const result = await response.json();

        if (result) {
          pubsub.publish('MESSAGE_CREATED', {
            messageCreated: newMessage,
          });

          return newMessage;
        }
      } catch (err) {
        console.error(`problem when trying to add a message. Error: ${err}`);
      }
    },
  },
  Subscription: {
    messageCreated: {
      subscribe: () => pubsub.asyncIterator(['MESSAGE_CREATED']),
    },
  },
};

module.exports = resolvers;
