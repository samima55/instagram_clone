
import React from 'react';
import "./Header.css";
import { Button ,Modal, Box } from '@mui/material';
import { useState } from 'react';
import SignUp from '../SignUpComponent/SignUp.js';


const Header = () => {
    const [open, setOpen] =useState(false);
    const [username, setUsername] =useState();
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();
    
    const signUp=( event)=>{
       
    }
    return(
        <>
        <div className='App_header'>
        <img className='App_headerImage'
         src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png'
          alt='logo'
          />
          <SignUp></SignUp>
         </div>
         </>
    );
}
export default Header;