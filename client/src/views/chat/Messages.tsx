import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { GetMessagesQuery } from '../../graphql/types';

const GET_MESSAGES = gql`
  query getMessages {
    messages {
      id
      user
      content
    }
  }
`;

function Messages() {
  const { data } = useQuery<GetMessagesQuery>(GET_MESSAGES);

  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
}

export default Messages;
