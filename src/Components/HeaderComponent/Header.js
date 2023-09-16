
import React from 'react';
import "./Header.css";
import { Button ,Modal, Box, Typography } from '@mui/material';
import { useState } from 'react';
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
    return(
        <>
        <div className='App_header'>
        <img className='App_headerImage'
         src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png'
          alt='logo'
          />
         </div>

         <div>
      <Button onClick={()=>setOpen(true)}>Open modal</Button>
      <Modal
        open={open}
        onClose={()=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
       
         </>
    );
}
export default Header;