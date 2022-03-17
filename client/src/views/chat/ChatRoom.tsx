// TODO; remove this rule
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { AddMessageMutation, AddMessageMutationVariables, GetMessagesQuery } from '../../graphql/types';
import { ADD_MESSAGE, GET_MESSAGES } from '../../graphql/queries';
import MessageInput from './MessageInput';
import Messages from './Messages';

function ChatRoom() {
  const { data: messages } = useQuery<GetMessagesQuery>(GET_MESSAGES);

  console.log(messages);

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

  // const handleTypeMessage = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
  //   setConversation((prevConversation) => ({
  //     ...prevConversation,
  //     content: evt.target.value,
  //   }));
  // };

  // const handleSendMessage = () => {
  //   if (conversation.content.trim().length > 0) {
  //     addMessage({
  //       variables: {
  //         input: {
  //           sender: 'Jonas',
  //           content: conversation.content,
  //         },
  //       },
  //     });
  //   }
  //   setConversation((prevConversation) => ({
  //     ...prevConversation,
  //     content: '',
  //   }));
  // };

  return (
    <div>
      {/* <Messages recipient={conversation.recipient} />
      <MessageInput messageContent={conversation.content} onKeyPress={handleTypeMessage} onSend={handleSendMessage} /> */}
    </div>
  );
}

export default ChatRoom;
