/* eslint-disable react/require-default-props */
import React from 'react';
import { useQuery } from '@apollo/client';
import { GetMessagesQuery } from '../../graphql/types';
import { GET_MESSAGES } from '../../graphql/queries';

// TODO: remove this optional character
interface MessagesProps {
  user?: string;
}

// TODO: remove this disable
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Messages({ user = 'Jonas' }: MessagesProps) {
  const { data } = useQuery<GetMessagesQuery>(GET_MESSAGES);

  if (!data) return null;

  return (
    // TODO: remove this disable
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {data.messages?.map((message) => (
        <div>{message.content}</div>
      ))}
    </>
  );
}

export default Messages;
