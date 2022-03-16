import React from 'react';
import styled from '@emotion/styled';
import { Send } from '@emotion-icons/boxicons-solid/Send';
import FlexBox from '../../components/FlexBox';

interface MessageInputProps {
  messageContent: string;
  onKeyPress: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

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

const TextArea = styled.textarea({
  display: 'block',
  margin: '48px auto 0 auto',
  width: '80%',
  resize: 'none',
  borderRadius: '12px',
  padding: '12px',
});

function MessageInput({ messageContent, onKeyPress, onSend }: MessageInputProps) {
  const handleSendMessage = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter') {
      onSend();
    }
  };

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    onKeyPress(evt);
  };

  return (
    <Wrapper>
      <TextArea
        id="message-input"
        name="message-input"
        value={messageContent}
        onKeyUp={handleSendMessage}
        onChange={handleChange}
      />
      <SendIcon size="24" onClick={() => onSend()} />
    </Wrapper>
  );
}

export default MessageInput;
