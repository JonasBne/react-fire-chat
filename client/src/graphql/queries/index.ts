import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query getMessages {
    messages {
      content
      id
      sender
      userId
      photoUrl
      createdAt
    }
  }
`;

export const MESSAGES_SUBSCRIPTION = gql`
  subscription messages {
    messageCreated {
      id
      content
      photoUrl
      sender
      userId
      createdAt
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($input: MessageInput!) {
    addMessage(input: $input) {
      content
      id
      sender
      userId
      photoUrl
      createdAt
    }
  }
`;
