import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_MESSAGES = gql`
  query {
    messages {
      id
      content
      user
    }
  }
`;

function Messages() {
  const { data } = useQuery(GET_MESSAGES);

  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
}

export default Messages;
