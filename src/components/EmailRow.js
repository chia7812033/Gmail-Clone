import "../assets/EmailRow.css";

import { Checkbox, IconButton } from "@mui/material";

import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import React from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function EmailRow({ id, title, subject, description, time }) {
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

      <h4 className='emailRow__title'>{title}</h4>

      <div className='emailRow__message'>
        <h4>{subject}</h4>
        <span>-</span>
        <p className='emailRow__description'>{description}</p>
      </div>

      <h5 className='emailRow__time'>{time}</h5>
    </div>
  );
}

export default EmailRow;
