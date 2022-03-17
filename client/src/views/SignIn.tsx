import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Button from '@mui/material/Button';

function SignIn() {
  const signInWithGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  return (
    <Button type="button" onClick={signInWithGoogle} variant="contained">
      Sign In With Google
    </Button>
  );
}

export default SignIn;
