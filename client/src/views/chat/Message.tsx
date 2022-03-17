import React from 'react';
import { auth } from '../../firebase';

interface MessageProps {
  content: string;
  userId: string;
  photoUrl: string;
}

function Message({ content, userId, photoUrl }: MessageProps) {
  console.log('authenticated user', auth.currentUser);
  console.log('userid', userId);
  return (
    <div>
      <img src={photoUrl ?? 'https://dummyimage.com/40x40/c72cc7/ffffff.png&text=U'} alt="user-avatar" />
      <p>{content}</p>
    </div>
  );
}

export default Message;
