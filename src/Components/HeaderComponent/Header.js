
import React from 'react';
import "./Header.css";
import { Button ,Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';
import { Input } from '@mui/icons-material';
 export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
const Header = () => {
    const [open, setOpen] =useState(false);
    const [username, setUsername] =useState();

    const signUp=( event)=>{
       
    }
    return(
        <>
        <div className='App_header'>
        <img className='App_headerImage'
         src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png'
          alt='logo'
          />
         </div>

         <div>
      <Button onClick={()=>setOpen(true)}>signUp</Button>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <img className='App_headerImage'
         src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png'
          alt='logo'
          />
          <Input 
           type="text"
           placeholder="username"
           value={username}
           onChange={(e)=>setUsername(e.target.value)}
           />
        </Box>
      </Modal>
    </div>
       
         </>
    );
}
export default Header;