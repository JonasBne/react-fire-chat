import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { AddMessageMutation, AddMessageMutationVariables } from '../../graphql/types';
import { ADD_MESSAGE, GET_MESSAGES } from '../../graphql/queries';
import MessageInput from './MessageInput';
import Messages from './Messages';

const ChatBox = styled.div({
  margin: 'auto',
  padding: '32px',
  width: '50%',
  borderRadius: '32px',
  border: '1px solid black',
});

function Chat() {
  const [conversation, setConversation] = useState({
    recipient: 'Jonas',
    content: '',
  });

  const [addMessage] = useMutation<AddMessageMutation, AddMessageMutationVariables>(ADD_MESSAGE, {
    refetchQueries: [
      {
        query: GET_MESSAGES,
      },
    ],
  });

  const handleTypeMessage = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConversation((prevConversation) => ({
      ...prevConversation,
      content: evt.target.value,
    }));
  };

  const handleSendMessage = () => {
    if (conversation.content.trim().length > 0) {
      addMessage({
        variables: {
          input: {
            sender: 'Jonas',
            content: conversation.content,
          },
        },
      });
    }
    setConversation((prevConversation) => ({
      ...prevConversation,
      content: '',
    }));
  };

  return (
    <ChatBox>
      <Messages recipient={conversation.recipient} />
      <MessageInput messageContent={conversation.content} onKeyPress={handleTypeMessage} onSend={handleSendMessage} />
    </ChatBox>
  );
}

export default Chat;
