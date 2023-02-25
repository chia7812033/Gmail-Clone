import "./App.css";

import { HashRouter, Route, Routes } from "react-router-dom";

import EmailList from "./components/EmailList";
import Header from "./components/Header";
import Mail from "./components/Mail";
import React from "react";
import SendMail from "./components/SendMail";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <HashRouter>
      <div className='app'>
        <Header />

        <div className='app__body'>
          <Sidebar />

          <Routes>
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />
          </Routes>
        </div>

        <SendMail />

      </div>
    </HashRouter>
  );
}

export default App;
