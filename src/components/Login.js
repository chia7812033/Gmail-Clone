import "../assets/Login.css";

import { auth, provider } from "../db/firebase";

import { Button } from "@mui/material";
import React from "react";
import { login } from "../features/userSlice";
import { signInWithPopup } from "firebase/auth";
import { useDispatch } from "react-redux";

function Login() {
  const dispatch = useDispatch();

  const signIn = () => {
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div className='login'>
      <div className='login__container'>
        <img
          src='https://storage.googleapis.com/gweb-uniblog-publish-prod/images/Gmail.max-1440x810.format-webp.webp'
          alt='gmail-login'
        />
        <Button variant='contained' color='primary' onClick={signIn}>
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
