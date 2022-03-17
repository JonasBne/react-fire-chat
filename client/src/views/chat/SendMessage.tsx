import { Button, Input } from '@mui/material';
import React from 'react';

interface SendMessageProps {
  message: string;
  onKeyPress: (evt: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSend: () => void;
}

function SendMessage({ message, onKeyPress, onSend }: SendMessageProps) {
  const handleSendMessageOnEnter = (evt: React.KeyboardEvent) => {
    if (evt.key === 'Enter') {
      onSend();
    }
  };

  const handleSendMessage = () => {
    onSend();
  };

  const handleChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    onKeyPress(evt);
  };

  return (
    <div>
      <form onSubmit={handleSendMessage}>
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
      </form>
    </div>
  );
}

export default SendMessage;
