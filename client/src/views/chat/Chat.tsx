import styled from '@emotion/styled';
import React from 'react';
import Messages from './Messages';

const ChatBox = styled.div({
  margin: 'auto',
  padding: '32px',
  width: '50%',
  borderRadius: '32px',
  border: '1px solid black',
});

function Chat() {
  return (
    <ChatBox>
      <Messages recipient="Jonas" />
    </ChatBox>
  );
}

export default Chat;
