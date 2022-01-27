import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import{ init } from '@emailjs/browser';
import '../styles/contacto.css';

init("user_Hk7dtQXhhReHfpL6BpZRy");


const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();
        console.log(init)
        emailjs.sendForm('service_taqa3pu', 'template_75zehoo', e.target, "user_Hk7dtQXhhReHfpL6BpZRy")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
     return (
        <div className='ContenedorContacto'>
          <div className='contenedor-Formulario'>
            <form className="contact-form" onSubmit={sendEmail}>
              <Typography className='bold' variant='h5' sx={{mt:4, mb:2}} textAlign={'center'}>Contactame</Typography>
              <input type="hidden" name="contact_number" />
              <TextField fullWidth sx={{mt:2}} required type="text" name="user_name" label='Ingresa tu nombre'/>
              <TextField fullWidth sx={{mt:2}} required label='Escribe tu correo'type="email" name="user_email"/>
              <TextField
              fullWidth
              sx={{mt:2}}
              required
              name="message"
              label="Escribe tu mensaje"
              multiline
              rows={4}
              fullWidth
              />
              <Button fullWidth sx={{mt:2, mb:4}} type="submit" variant='outlined' className='botonEnviar'>
                  Enviar
              </Button>
            </form>
          </div>
        </div>
      );
};

export default Contact;
