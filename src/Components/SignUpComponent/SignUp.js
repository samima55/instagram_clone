import React from 'react';
import { Button ,Modal, Box } from '@mui/material';
import { useState } from 'react';
import './SignUp.css';
export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    display:'block',
    boxShadow: 24,
    p: 4,
  };


  const SignUp = () => {
    const [open, setOpen] =useState(false);
    const [username, setUsername] =useState();
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();
    
    const signUp=( event)=>{
       
    }
    return(
        <div>
        <Button onClick={()=>setOpen(true)}>signUp</Button>
        <Modal
          open={open}
          onClose={()=>setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <from>
            <img className='App_headerImage'
           src='https://1000logos.net/wp-content/uploads/2017/02/Logo-Instagram.png'
            alt='logo'
            />
            <input 
             type="text"
             placeholder="username"
             value={username}
             onChange={(e)=>setUsername(e.target.value)}
             />
             <input 
             
             type="text"
             placeholder="email"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />
             <input 
            
             type="text"
             placeholder="password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             />
             <Button onClick={signUp}>signUp</Button>
            </from>
          </Box>
        </Modal>
      </div>
    );}

    export default SignUp;