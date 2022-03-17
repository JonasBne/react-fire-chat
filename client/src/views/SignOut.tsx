import React from 'react';
import { signOut } from 'firebase/auth';
import { Button } from '@mui/material';
import { auth } from '../firebase';

function SignOut() {
  return (
    <Button type="button" variant="contained" onClick={() => signOut(auth)}>
      Sign Out
    </Button>
  );
}

export default SignOut;
