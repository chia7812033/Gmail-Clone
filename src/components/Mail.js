import "../assets/Mail.css";

import { Avatar, Button, IconButton } from "@mui/material";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AddTaskIcon from "@mui/icons-material/AddTask";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardHideIcon from "@mui/icons-material/KeyboardHide";
import LabelIcon from "@mui/icons-material/Label";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MoveToInboxIcon from "@mui/icons-material/MoveToInbox";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import PrintIcon from "@mui/icons-material/Print";
import React from "react";
import ReplyIcon from "@mui/icons-material/Reply";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import TurnLeftRoundedIcon from "@mui/icons-material/TurnLeftRounded";
import TurnRightRoundedIcon from "@mui/icons-material/TurnRightRounded";
import { useNavigate } from "react-router-dom";

function Mail({ id, title }) {
  const navigate = useNavigate();

  const squreButtonStyle = {
    borderRadius: 1,
    size: "small",
    paddingLeft: 0.2,
    paddingRight: 0.2,
  };

  return (
    <div className='mail'>
      <div className='mail__tools'>
        <div className='mail__toolsLeft'>
          <IconButton onClick={() => navigate("/")} className='mail__back'>
            <ArrowBackIcon />
          </IconButton>

          <IconButton>
            <MoveToInboxIcon />
          </IconButton>

          <IconButton>
            <ReportGmailerrorredIcon />
          </IconButton>

          <IconButton>
            <DeleteOutlineIcon />
          </IconButton>

          <IconButton>
            <MailOutlineIcon />
          </IconButton>

          <IconButton>
            <AccessTimeIcon />
          </IconButton>

          <IconButton>
            <AddTaskIcon />
          </IconButton>

          <IconButton>
            <DriveFileMoveIcon />
          </IconButton>

          <IconButton>
            <LabelIcon />
          </IconButton>

          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
        <div className='mail_toolsRight'>
          <IconButton>
            <KeyboardArrowLeftIcon />
          </IconButton>

          <IconButton>
            <KeyboardArrowRightIcon />
          </IconButton>

          <div className='mail__settingsSet'>
            <IconButton sx={squreButtonStyle}>
              <KeyboardHideIcon />
            </IconButton>

            <IconButton sx={squreButtonStyle}>
              <ArrowDropDownIcon />
            </IconButton>
          </div>
        </div>
      </div>

      <div className='mail__body'>
        <div className='mail__header'>
          <div className='mail__subject'>
            <h3>This is subject</h3>
            <IconButton>
              <LabelIcon />
            </IconButton>
          </div>

          <div className='mail__headerTools'>
            <IconButton>
              <PrintIcon />
            </IconButton>
            <IconButton>
              <OpenInNewIcon />
            </IconButton>
          </div>
        </div>

        <div className='mail__sender'>
          <Avatar />
          <div className='mail__senderMain'>
            <div>
              <h4>This is title</h4>
              <p>This is time</p>
              <div className='mail__senderTools'>
                <IconButton>
                  <StarBorderIcon />
                </IconButton>
                <IconButton>
                  <ReplyIcon />
                </IconButton>
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
              </div>
            </div>
            <div className='mail__senderTo'>
              <p>to</p>
              <ArrowDropDownIcon />
            </div>
          </div>
        </div>

        <div className='mail__content'>
          <p>This is description</p>
        </div>

        <div className='mail__buttons'>
          <Button startIcon={<TurnLeftRoundedIcon />} className='mail__button'>
            Reply
          </Button>
          <Button startIcon={<TurnRightRoundedIcon />} className='mail__button'>
            Forward
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Mail;
