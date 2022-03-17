import styled from '@emotion/styled';
import { Button, Input } from '@mui/material';
import React from 'react';

interface SendMessageProps {
  message: string;
  onKeyPress: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

const Form = styled.form({
  height: '10vh',
  position: 'fixed',
  bottom: 0,
  backgroundColor: 'rgb(24, 23, 23)',
  width: ' 100%',
  maxWidth: '728px',
  display: 'flex',
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
    <div>
      <Form onSubmit={(evt) => handleSendMessage(evt)}>
        <Input
          sx={{ backgroundColor: 'white' }}
          placeholder="Start typing..."
          value={message}
          onKeyUp={handleSendMessageOnEnter}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </Form>
    </div>
  );
}

export default SendMessage;
