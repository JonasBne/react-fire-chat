import { gql } from '@apollo/client';

/* eslint-disable import/prefer-default-export */
export const GET_MESSAGES = gql`
  query getMessages {
    messages {
      id
      user
      content
    }
  }
`;
