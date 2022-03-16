import React from 'react';
import styled from '@emotion/styled';

const Input = styled.textarea({
  display: 'block',
  margin: '48px auto 0 auto',
  width: '80%',
  resize: 'none',
  borderRadius: '16px',
});

function MessageInput() {
  return <Input id="message-input" name="message-input" />;
}

export default MessageInput;
