import React from "react";
import "../assets/Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import TuneIcon from "@mui/icons-material/Tune";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png"
          alt="gmail_icon"
        />
      </div>
      <div className="header__middle">
        <div className="header__search">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search" />
          <IconButton>
            <TuneIcon />
          </IconButton>
        </div>
      </div>
      <div className="header__right">
        <IconButton>
          <HelpOutlineIcon />
        </IconButton>
        <IconButton>
          <SettingsIcon />
        </IconButton>
        <IconButton>
          <AppsIcon />
        </IconButton>
        <Avatar src="https://ih1.redbubble.net/image.766255212.6589/st,small,507x507-pad,600x600,f8f8f8.u3.jpg" />
      </div>
    </div>
  );
}

export default Header;
