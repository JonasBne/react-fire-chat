import React from 'react';
import styled from '@emotion/styled';
import { Send } from '@emotion-icons/boxicons-solid/Send';
import FlexBox from '../../components/FlexBox';

const Wrapper = styled(FlexBox)({
  justifyContent: 'space-around',
});

const SendIcon = styled(Send)({
  background: '#1DA1F2',
  color: 'white',
  borderRadius: '50%',
  padding: '16px',
  margin: '48px auto auto auto',
});

const Input = styled.textarea({
  display: 'block',
  margin: '48px auto 0 auto',
  width: '80%',
  resize: 'none',
  borderRadius: '12px',
  padding: '12px',
});

function MessageInput() {
  return (
    <Wrapper>
      <Input id="message-input" name="message-input" />
      <SendIcon size="24" />
    </Wrapper>
  );
}

export default MessageInput;
