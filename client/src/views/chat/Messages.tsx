import React from 'react';
import { useQuery } from '@apollo/client';
import styled from '@emotion/styled';
import { GetMessagesQuery } from '../../graphql/types';
import { GET_MESSAGES } from '../../graphql/queries';
import UserAvatar from './User';

interface MessagesProps {
  recipient: string;
}

interface MessageProps {
  sender: string;
  recipient: string;
}

const MessagesContainer = styled.div(({ sender, recipient }: MessageProps) => ({
  display: 'flex',
  paddingBottom: '16px',
  justifyContent: sender === recipient ? 'flex-end' : 'flex-start',
}));

const Message = styled.div(({ sender, recipient }: MessageProps) => ({
  background: sender === recipient ? '#58bf56' : '#e5e6ea',
  color: sender === recipient ? 'white' : 'black',
  padding: '16px',
  borderRadius: '32px',
  maxWidth: '60%',
}));

function Messages({ recipient }: MessagesProps) {
  // TODO: move this to chat
  const { data } = useQuery<GetMessagesQuery>(GET_MESSAGES);

  if (!data) return null;

  return (
    <div>
      {data.messages?.map((message) => (
        <MessagesContainer key={message.id} sender={message.sender} recipient={recipient}>
          {recipient !== message.sender && <UserAvatar sender={message.sender} />}
          <Message sender={message.sender} recipient={recipient}>
            {message.content}
          </Message>
        </MessagesContainer>
      ))}
    </div>
  );
}

export default Messages;
