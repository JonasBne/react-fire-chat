// TODO; remove this rule
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import Button from '@mui/material/Button';
import { auth } from '../firebase';

function SignIn() {
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider);
    // .then((result) => {
    //   // This gives you a Google Access Token. You can use it to access the Google API.
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential?.accessToken;
    //   // The signed-in user info.
    //   const { user } = result;
    //   // ...
    // })
    // .catch((error) => {
    //   // Handle Errors here.
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // The email of the user's account used.
    //   const { email } = error;
    //   // The AuthCredential type that was used.
    //   const credential = GoogleAuthProvider.credentialFromError(error);
    //   // ...
    // });
  };

  return (
    <Button type="button" onClick={signInWithGoogle} variant="contained">
      Sign In With Google
    </Button>
  );
}

export default SignIn;
