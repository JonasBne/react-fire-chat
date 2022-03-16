import React from 'react';
import styled from '@emotion/styled';

interface UserAvatarProps {
  messageUser: string;
}

const User = styled.div({
  height: 50,
  width: 50,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '12px',
  border: '2px solid #e5e6ea',
  borderRadius: '50%',
  textAlign: 'center',
  fontWeight: 'bold',
});

function UserAvatar({ messageUser }: UserAvatarProps) {
  const userInitials = messageUser.slice(0, 2).toUpperCase();

  return <User>{userInitials}</User>;
}

export default UserAvatar;
