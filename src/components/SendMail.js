import "../assets/SendMail.css";

import { Button, IconButton } from "@mui/material";
import React, { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import { closeSendMessage } from "../features/mailSlice";
import { db } from "../db/firebase";
import { redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function SendMail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await addDoc(collection(db, "emails"), {
      to: data.to,
      subject: data.subject,
      content: data.content,
      timestamp: serverTimestamp(),
    });
    redirect("/");
    dispatch(closeSendMessage());
  };

  const dispatch = useDispatch();

  const [toSelected, setToSelected] = useState(false);

  return (
    <div className='sendMail'>
      <div className='sendMail__header'>
        <h4>New Message</h4>
        <IconButton onClick={() => dispatch(closeSendMessage())}>
          <ClearRoundedIcon />
        </IconButton>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='sendMail__to'>
          {toSelected && <h4 className='sendMail__toTag'>To</h4>}
          <input
            name='to'
            type='email'
            placeholder='Recipients'
            className='sendMail__regular'
            {...register("to", { required: true })}
            onFocus={() => setToSelected((state) => true)}
          />
        </div>

        {errors.to && (
          <p className='sendMail__error'>You must specify one recipient</p>
        )}

        <input
          name='subject'
          type='text'
          placeholder='Subject'
          className='sendMail__regular'
          {...register("subject", { required: true })}
          onFocus={() => setToSelected((state) => false)}
        />
        {errors.subject && (
          <p className='sendMail__error'>Please provide a subject</p>
        )}

        <textarea
          name='content'
          type='text'
          className='sendMail__content'
          {...register("content")}
          onFocus={() => setToSelected((state) => false)}
        />

        <div className='sendMail__options'>
          <Button className='sendMail__send' type='submit'>
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
