import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Button, TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fum24bj', 'template_ld2lsyd', form.current, 'Xbn0xj_4LjNugxYGl')
      .then((result) => {
          // console.log(result.text);
          toast.success("E-mail sent!")
      }, (error) => {
          // console.log(error.text);
          toast.error("Error while sending!")
      });
  };

  return (
    <form className="center" ref={form} onSubmit={sendEmail}>
      <br /><br />
      <ToastContainer />
      <TextField label="Name" type="text" name="from_name" /> <br />
      <br />
      <TextField label="Email" type="email" name="from_email" /> <br />
      <br />
      <TextField label="Message" multiline name="message" /> <br />
      <br />
      <Button variant="contained">Send</Button>
    </form>
  );
};