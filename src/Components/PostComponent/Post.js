import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
function Post() {
  return (
    <div className='post'>
          <div className='post_header'>
          <Avatar
        className='post_avatar'
        alt='CleverQazi'
        src='/static/images/avatar/1.jpg'
        />
        <h3 className='post_username'>username</h3>
          </div>
         <img  className="post_image" src='https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png' alt='insa post' />
         <h4 className='post_caption'> <strong>cleverqzi</strong> :  day 1 of instragm clone</h4>
    </div>
  )
}

export default Post;