import React, { useState, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { User } from '@firebase/auth/dist/auth-public';
import { useMutation, useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { AddMessageMutation, AddMessageMutationVariables, GetMessagesQuery } from '../../graphql/types';
import { ADD_MESSAGE, GET_MESSAGES } from '../../graphql/queries';

import SendMessage from './SendMessage';
import Message from './Message';

interface ChatRoomProps {
  user: User;
}

const Main = styled.main({
  padding: '10px',
  height: '80vh',
  margin: '10vh 0 10vh',
  overflowY: 'scroll',
  display: 'flex',
  flexDirection: 'column',
});

function ChatRoom({ user }: ChatRoomProps) {
  const messagesEndRef = useRef<null | HTMLElement>(null);
  const [message, setMessage] = useState('');

  const { data } = useQuery<GetMessagesQuery>(GET_MESSAGES);
  const messages = data?.messages ?? [];

  const [addMessage] = useMutation<AddMessageMutation, AddMessageMutationVariables>(ADD_MESSAGE, {
    refetchQueries: [
      {
        query: GET_MESSAGES,
      },
    ],
  });

  const handleTypeMessage = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(evt.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim().length > 0) {
      addMessage({
        variables: {
          input: {
            sender: user.displayName ?? 'unknown',
            content: message,
            userId: user.uid,
            photoUrl: user.photoURL ?? '',
          },
        },
      });
    }
    setMessage('');
    if (messagesEndRef === null) {
      return;
    }
    if (messagesEndRef !== null) {
      messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (messagesEndRef !== null) {
    messagesEndRef?.current?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Main>
        {messages &&
          messages.map((msg) => (
            <Message key={msg.id} content={msg.content} photoUrl={msg.photoUrl} userId={msg.userId} />
          ))}
        <span ref={messagesEndRef} />
      </Main>
      <SendMessage message={message} onKeyPress={handleTypeMessage} onSend={handleSendMessage} />
    </>
  );
}

export default ChatRoom;
