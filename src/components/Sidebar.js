import "../assets/Sidebar.css";

import { Button, IconButton } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CreateIcon from "@mui/icons-material/Create";
import DuoIcon from "@mui/icons-material/Duo";
import InboxIcon from "@mui/icons-material/Inbox";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import NearMeIcon from "@mui/icons-material/NearMe";
import NoteIcon from "@mui/icons-material/Note";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import React from "react";
import SidebarOption from "./SidebarOption";
import StarIcon from "@mui/icons-material/Star";
import { openSendMessage } from "../features/mailSlice";
import { useDispatch } from "react-redux";

function Sidebar() {

  const dispatch = useDispatch()

  return (
    <div className='sidebar'>
      <Button startIcon={<CreateIcon />} className='sidebar__compose' onClick={() => dispatch(openSendMessage())}>
        Compose
      </Button>

      <div className='sidebar__options'>
        <SidebarOption
          Icon={InboxIcon}
          title='Inbox'
          number={45}
          selected={true}
        />
        <SidebarOption Icon={StarIcon} title='Starred' number={45} />
        <SidebarOption Icon={AccessTimeIcon} title='Snoozed' number={45} />
        <SidebarOption
          Icon={LabelImportantIcon}
          title='Important'
          number={45}
        />
        <SidebarOption Icon={NearMeIcon} title='Sent' number={45} />
        <SidebarOption Icon={NoteIcon} title='Drafts' number={45} />
        <SidebarOption Icon={KeyboardArrowDownIcon} title='More' />
      </div>

      <div className='sidebar__footer'>
        <div className='sidebar__footerIcons'>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <DuoIcon />
          </IconButton>
          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
