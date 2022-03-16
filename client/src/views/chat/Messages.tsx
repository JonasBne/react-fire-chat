import React from 'react';
import { useQuery } from '@apollo/client';
import { GetMessagesQuery } from '../../graphql/types';
import { GET_MESSAGES } from '../../graphql/queries';

function Messages() {
  const { data } = useQuery<GetMessagesQuery>(GET_MESSAGES);

  if (!data) return null;

  return <div>{JSON.stringify(data)}</div>;
}

export default Messages;
