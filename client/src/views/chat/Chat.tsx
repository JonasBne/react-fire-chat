import styled from '@emotion/styled';
import React, { useState } from 'react';
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

  const handleTypeMessage = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setConversation((prevConversation) => ({
      ...prevConversation,
      content: evt.target.value,
    }));
  };

  return (
    <ChatBox>
      <Messages recipient={conversation.recipient} />
      <MessageInput onKeyStroke={handleTypeMessage} />
    </ChatBox>
  );
}

export default Chat;
