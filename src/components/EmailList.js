import "../assets/EmailList.css";

import { Checkbox, IconButton } from "@mui/material";
import React, { useEffect } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EmailRow from "./EmailRow";
import InboxIcon from "@mui/icons-material/Inbox";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RefreshIcon from "@mui/icons-material/Refresh";
import Section from "./Section";
import { db } from "../db/firebase";
import {selectSendMessageIsOpen} from '../features/mailSlice'
import { useSelector } from "react-redux";
import { useState } from "react";

function EmailList() {

  const squreButtonStyle = {
    borderRadius: 1,
    size: "small",
    paddingLeft: 0.2,
    paddingRight: 0.2,
  };

  const SendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  const [emails, setEmails] = useState([]);

  useEffect(() => {
    getAllMail(db);
  }, [SendMessageIsOpen]);

  const getAllMail = async (db) => {
    const q = query(collection(db, "emails"), orderBy("timestamp", "desc"));

    const querySnapshot = await getDocs(q);
    setEmails(
      querySnapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data(),
      }))
    );
  };

  return (
    <div className='emailList'>
      <div className='emailList__settings'>
        <div className='emailList__settingsLeft'>
          <div className='emailList__settingsSet'>
            <Checkbox sx={squreButtonStyle} />
            <IconButton sx={squreButtonStyle}>
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
        <Section Icon={InboxIcon} title='Primary' selected={true} />
        <Section Icon={LocalOfferIcon} title='Promotions' />
        <Section Icon={PeopleAltIcon} title='Social' />
      </div>

      <div className='emailList__list'>
        {emails.map(({ id, data: { to, subject, content, timestamp } }) => (
          <EmailRow
            id={id}
            key={id}
            sender={to}
            subject={subject}
            description={content}
            time={new Date(timestamp.seconds * 1000).toLocaleString("en-US")}
          />
        ))}
      </div>
    </div>
  );
}

export default EmailList;
