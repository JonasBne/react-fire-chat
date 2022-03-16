/* eslint-disable react/require-default-props */
import React from 'react';
import { useQuery } from '@apollo/client';
import { GetMessagesQuery } from '../../graphql/types';
import { GET_MESSAGES } from '../../graphql/queries';

interface MessagesProps {
  user: string;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function Messages({ user }: MessagesProps) {
  const { data } = useQuery<GetMessagesQuery>(GET_MESSAGES);

  if (!data) return null;

  return (
    <div>
      {data.messages?.map((message) => (
        <div key={message.id} className="flex">
          <div className="text-2xl font-bold underline">{message.content}</div>
        </div>
      ))}
    </div>
  );
}

export default Messages;
