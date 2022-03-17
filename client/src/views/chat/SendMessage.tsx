import styled from '@emotion/styled';
import { Button, Input } from '@mui/material';
import React from 'react';

interface SendMessageProps {
  message: string;
  onKeyPress: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

const Form = styled.form({
  height: '8vh',
  position: 'fixed',
  bottom: 0,
  backgroundColor: 'rgb(24, 23, 23)',
  width: '100%',
  maxWidth: '728px',
  display: 'flex',
});

const TextInput = styled(Input)({
  lineHeight: '1.5',
  width: '100%',
  outline: 'none',
  padding: '0 10px',
  background: 'white',
});

function SendMessage({ message, onKeyPress, onSend }: SendMessageProps) {
  const handleSendMessageOnEnter = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter') {
      onSend();
    }
  };

  const handleSendMessage = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    onSend();
  };

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    onKeyPress(evt);
  };

  return (
    <Form onSubmit={(evt) => handleSendMessage(evt)}>
      <TextInput
        placeholder="Start typing..."
        value={message}
        onKeyUp={handleSendMessageOnEnter}
        onChange={handleChange}
      />
      <Button type="submit" variant="contained" sx={{ width: '20%' }}>
        Send
      </Button>
    </Form>
  );
}

export default SendMessage;
