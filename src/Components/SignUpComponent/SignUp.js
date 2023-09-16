import React from 'react';
import { Button ,Modal, Box } from '@mui/material';
import { useState } from 'react';
import "./SignUp.css";

  const SignUp = () => {
    const [open, setOpen] =useState(false);
    const [username, setUsername] =useState();
    const [email, setEmail] =useState();
    const [password, setPassword] =useState();
    
    const signUp=( event)=>{
       
    }
    return(
        <div>
        <button onClick={()=>setOpen(true)} className="signUp-button">signUp</button>
        <Modal
          open={open}
          onClose={()=>setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="box">
            <from className="signUp-form" >
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
             <button  onClick={signUp} className='signUp-button'>signUp</button>
            </from>
          </Box>
        </Modal>
      </div>
    );}

    export default SignUp;