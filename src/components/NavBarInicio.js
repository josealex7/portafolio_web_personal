import React from 'react';
import { Typography } from '@mui/material'
import '../styles/navbarinicio.css'
import { Link } from 'react-router-dom';

const NavBarInicio = () => {
  return (
    <div className='NavbarPrincipal'>
        {/* <div className='NavbarSub'>
            <div>
            <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-vitaly-gorbachev/60/FFFFFF/external-hacker-cryptocurrency-vitaliy-gorbachev-lineal-vitaly-gorbachev.png"/>
            </div>
            <div>
                <Typography variant='h5' sx={{ml:2, mt:1}}>José Alexander Tavera Rojas</Typography>
                <Typography variant='body1' sx={{ml:2}}>Desarrollador Front-end</Typography>
            </div>
        </div> */}
        <div>
            <ul className='ulNavbar'>
                <Link to="/" className='Links'>
                    <Typography variant='h6' sx={{mr:2, ml:2}}>Mi Perfil</Typography>
                </Link>
                <Link to='contact' className='Links'>
                    <Typography variant='h6' sx={{mr:2, ml:2}}>Contactame</Typography>
                </Link>
            </ul>
        </div>
    </div>
  );
};

export default NavBarInicio;
