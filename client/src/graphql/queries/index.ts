import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query getMessages {
    messages {
      content
      id
      sender
      createdAt
      userId
      photoUrl
    }
  }
`;

export const MESSAGES_SUBSCRIPTION = gql`
  subscription messages {
    messageCreated {
      content
      photoUrl
      sender
      userId
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($input: MessageInput!) {
    addMessage(input: $input) {
      content
      id
      sender
      createdAt
      userId
      photoUrl
    }
  }
`;
