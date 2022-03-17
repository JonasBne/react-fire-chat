import React from 'react';
import styled from '@emotion/styled';
import { auth } from '../../firebase';

interface MessageProps {
  content: string;
  userId: string;
  photoUrl: string;
}

const UserImage = styled.img({
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  margin: '2px 5px',
});

function Message({ content, userId, photoUrl }: MessageProps) {
  console.log('authenticated user', auth.currentUser);
  console.log('userid', userId);
  return (
    <div>
      <UserImage src={photoUrl ?? 'https://dummyimage.com/40x40/c72cc7/ffffff.png&text=U'} alt="user-avatar" />
      <p>{content}</p>
    </div>
  );
}

export default Message;
