import "../assets/EmailRow.css";

import { Checkbox, IconButton } from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

function EmailRow({ id, sender, subject, description, time }) {

  const navigate = useNavigate();

  const newDescription =
    description.length > 45 ? description.slice(0, 45) + "..." : description;

  return (
    <div onClick={() => navigate('/mail')} className='emailRow'>
      <div className='emailRow_options'>
        <Checkbox />
        <IconButton>
          <StarBorderIcon />
        </IconButton>
        <IconButton>
          <BookmarkBorderIcon />
        </IconButton>
      </div>

      <h4 className='emailRow__title'>{sender}</h4>

      <div className='emailRow__message'>
        <h4>{subject}</h4>
        <span style={{ color: "gray" }}>-</span>
        <p className='emailRow__description'>{newDescription}</p>
      </div>

      <h5 className='emailRow__time'>{time}</h5>
    </div>
  );
}

export default EmailRow;
