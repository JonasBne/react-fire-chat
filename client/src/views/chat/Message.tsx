import React from 'react';
import styled from '@emotion/styled';
import { auth } from '../../firebase';

interface MessageProps {
  content: string;
  userId: string;
  photoUrl: string;
}

interface MsgProps {
  status: 'sent' | 'received';
}

const Msg = styled.div(({ status }: MsgProps) => ({
  display: 'flex',
  alignItems: 'center',
  flexDirection: status === 'sent' ? 'row-reverse' : 'row',
}));

const Text = styled.p(({ status }: MsgProps) => ({
  maxWidth: '500px',
  marginBottom: '12px',
  lineHeight: '24px',
  padding: '10px 20px',
  borderRadius: '25px',
  position: 'relative',
  textAlign: 'center',
  color: status === 'sent' ? 'white' : 'black',
  background: status === 'sent' ? '#0b93f6' : '#e5e5ea',
  alignSelf: status === 'sent' ? 'flex-end' : '',
}));

const UserImage = styled.img({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  margin: '2px 5px',
});

function Message({ content, userId, photoUrl }: MessageProps) {
  console.log('authenticated user', auth.currentUser);
  console.log('userid', userId);

  const messageStatus = userId === auth.currentUser?.uid ? 'sent' : 'received';

  return (
    <Msg status={messageStatus}>
      <UserImage src={photoUrl ?? 'https://dummyimage.com/40x40/c72cc7/ffffff.png&text=U'} alt="user-avatar" />
      <Text status={messageStatus}>{content}</Text>
    </Msg>
  );
}

export default Message;
