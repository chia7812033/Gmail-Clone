import "../assets/EmailList.css";

import { Checkbox, IconButton } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import InboxIcon from "@mui/icons-material/Inbox";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import React from "react";
import RefreshIcon from "@mui/icons-material/Refresh";
import Section from "./Section";

function EmailList() {
  const squreButtonStyle = {
    borderRadius: 1,
    size: "small",
    paddingLeft: 0.2,
    paddingRight: 0.2,
  };

  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <div className='emailList__settingsSet'>
            <Checkbox sx={squreButtonStyle} />
            <IconButton iconSize={1.0} sx={squreButtonStyle}>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
          <IconButton>
            <RefreshIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='emailList__settingsRight'>
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>
          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>
          <div className='emailList__settingsSet'>
            <IconButton sx={squreButtonStyle}>
              <KeyboardHideIcon />
            </IconButton>
            <IconButton sx={squreButtonStyle}>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <div className='emailList__sections'>
        <Section Icon={InboxIcon} title='Inbox'selected={true} />
        <Section Icon={LocalOfferIcon} title='Promotions'/>
        <Section Icon={PeopleAltIcon} title='Social'/>
      </div>
    </div>
  );
}

export default EmailList;
