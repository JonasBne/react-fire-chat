import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { AddMessageMutation, AddMessageMutationVariables } from '../../graphql/types';
import { ADD_MESSAGE, GET_MESSAGES } from '../../graphql/queries';
import MessageInput from './MessageInput';
import Messages from './Messages';

function ChatRoom() {
  // TODO: add data fetching here
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
    <div>
      <Messages recipient={conversation.recipient} />
      <MessageInput messageContent={conversation.content} onKeyPress={handleTypeMessage} onSend={handleSendMessage} />
    </div>
  );
}

export default ChatRoom;
