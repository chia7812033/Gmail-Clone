import "../assets/SendMail.css";

import { Button, IconButton } from "@mui/material";

import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import React from "react";
import { useForm } from "react-hook-form";

function SendMail() {
  const { register, handleSubmit, watch, errors } = useForm();

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h4>New Message</h4>
        <IconButton>
          <ClearRoundedIcon />
        </IconButton>
      </div>
      <form>
        <input
          name='to'
          type='text'
          placeholder='Recipients'
          className='sendMail__regular'
        />
        <input
          name='subject'
          type='text'
          placeholder='Subject'
          className='sendMail__regular'
        />
        <input name='content' type='text' className='sendMail__content' />

        <div className='sendMail__options'>
          <Button className='sendMail__send'>Send</Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
