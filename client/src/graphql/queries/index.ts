import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
  query getMessages {
    messages {
      content
      id
      sender
      createdAt
    }
  }
`;

export const ADD_MESSAGE = gql`
  mutation addMessage($input: MessageInput!) {
    addMessage(input: $input) {
      name
    }
  }
`;
