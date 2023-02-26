import "../assets/EmailRow.css";

import { Checkbox, IconButton } from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { selectMail } from "../features/mailSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function EmailRow({ id, sender, subject, description, time }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectMail({
        id,
        sender,
        subject,
        description,
        time,
      })
    );
    navigate("/mail");
  };

  const newSubject =
    subject.length > 45 ? subject.slice(0, 45) + "..." : subject;
  const newDescription =
    description.length > 45 ? description.slice(0, 45) + "..." : description;
  const newSender = sender.substring(0, sender.indexOf("@"));

  return (
    <div className='emailRow'>
      <div className='emailRow_options'>
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </div>

      <div onClick={() => openMail()} className="emailRow__body">
        <h4 className='emailRow__title'>{newSender}</h4>

        <div className='emailRow__message'>
          <h4>{newSubject}</h4>
          <span style={{ color: "gray" }}>-</span>
          <p className='emailRow__description'>{newDescription}</p>
        </div>

        <h5 className='emailRow__time'>{time}</h5>
      </div>
    </div>
  );
}

export default EmailRow;
