import React from 'react';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { GetMessagesQuery } from '../../graphql/types';
import { GET_MESSAGES } from '../../graphql/queries';

interface MessagesProps {
  user: string;
}

interface MessageProps {
  messageUser: string;
  user: string;
}

const MessagesContainer = styled.div(({ messageUser, user }: MessageProps) => ({
  display: 'flex',
  paddingBottom: '16px',
  justifyContent: messageUser === user ? 'flex-end' : 'flex-start',
}));

const Message = styled.div(({ messageUser, user }: MessageProps) => ({
  background: messageUser === user ? '#58bf56' : '#e5e6ea',
  color: messageUser === user ? 'white' : 'black',
  padding: '16px',
  borderRadius: '32px',
  maxWidth: '60%',
}));

const User = styled.div({
  height: 50,
  width: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '12px',
  border: '2px solid #e5e6ea',
  borderRadius: '50%',
  textAlign: 'center',
  fontWeight: 'bold',
});

function Messages({ user }: MessagesProps) {
  const { data } = useQuery<GetMessagesQuery>(GET_MESSAGES);

  if (!data) return null;

  return (
    <div>
      {data.messages?.map((message) => (
        <MessagesContainer key={message.id} messageUser={message.user} user={user}>
          {user !== message.user && <User>{message.user.slice(0, 2).toUpperCase()}</User>}
          <Message messageUser={message.user} user={user}>
            {message.content}
          </Message>
        </MessagesContainer>
      ))}
    </div>
  );
}

export default Messages;
