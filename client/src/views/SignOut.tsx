import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { Button } from '@mui/material';

// TODO: remove logs and provide more valuable feedback and UI

function SignOut() {
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log(`successful signout`);
      })
      .catch((error) => {
        console.error(`problem during logout occured. Error ${error}`);
      });
  };

  return (
    <Button type="button" variant="contained" onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}

export default SignOut;
