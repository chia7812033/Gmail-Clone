import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";
import { login, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";

import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Login from "./components/Login";
import Mail from "./components/Mail";
import React from "react";
import SendMail from "./components/SendMail";
import Sidebar from "./components/Sidebar";
import { auth } from "./db/firebase";
import {onAuthStateChanged} from 'firebase/auth'
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { useEffect } from "react";

function App() {
  const SendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoURL,
          })
        );
      }
    });
  }, []);

  return (
    <HashRouter>
      {!user ? (
        <Login />
      ) : (
        <div className='app'>
          <Header />
          <div className='app__body'>
            <Sidebar />

            <Routes>
              <Route path='/mail' element={<Mail />} />
              <Route path='/' element={<EmailList />} />
            </Routes>
          </div>

          {SendMessageIsOpen && <SendMail />}
        </div>
      )}
    </HashRouter>
  );
}

export default App;
