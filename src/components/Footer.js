import { Button, Typography } from '@mui/material';
import React from 'react';
import '../styles/Footer.css'
import {
    FaInstagram,
    FaGithub,
    FaTwitter,
    FaYoutube,
    FaLinkedin,
    FaFacebookSquare
} from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {



    return (    
        <div className='contenedorFooter'>
            <div className='contenedorFrase'>
                <Typography className='frase' variant='h5' sx={{mt:2, mb:4}}>Viviendo, aprendiendo y subiendo de nivel un día a la vez.</Typography>
            </div>
            <a target="_blank" className='' href="https://github.com/josealex7">
                <FaGithub className='colorWhiteIcon'/>
            </a>
            <a target="_blank" className='' href="https://www.linkedin.com/in/alexander-tavera-rojas">
                <FaLinkedin className='colorWhiteIcon'/>
            </a>
            <FaYoutube className='colorWhiteIcon'/>
        </div>
    )
}

export default Footer