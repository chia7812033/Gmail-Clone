import "../assets/Header.css";

import { Avatar, IconButton } from "@mui/material";
import { logout, selectUser } from "../features/userSlice";
import { useDispatch, useSelector } from "react-redux";

import AppsIcon from "@mui/icons-material/Apps";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import TuneIcon from "@mui/icons-material/Tune";
import { auth } from "../db/firebase";
import { signOut } from "firebase/auth";

function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const signOutGoogle = () => {
    dispatch(logout());
    signOut(auth)
      .then(() => {
        alert("Sign out successfully");
      })
      .catch((error) => {
        alert("Sign out fail");
      });
  };

  return (
    <div className='header'>
      <div className='header__left'>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png'
          alt='gmail_icon'
        />
      </div>
      <div className='header__rightSection'>
        <div className='header__middle'>
          <div className='header__search'>
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input type='text' placeholder='Search' />
            <IconButton>
              <TuneIcon />
            </IconButton>
          </div>
        </div>
        <div className='header__right'>
          <IconButton>
            <HelpOutlineIcon />
          </IconButton>
          <IconButton>
            <SettingsIcon />
          </IconButton>
          <IconButton>
            <AppsIcon />
          </IconButton>
          <Avatar src={user.photoUrl} onClick={signOutGoogle} />
        </div>
      </div>
    </div>
  );
}

export default Header;
