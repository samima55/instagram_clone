import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
function Post({username, caption, imageUrl}) {
  return (
    <div className='post'>
          <div className='post_header'>
          <Avatar
        className='post_avatar'
        alt={username}
        src='/static/images/avatar/1.jpg'
        />
        <h3 className='post_username'>{username}</h3>
          </div>
         <img  className="post_image" src={imageUrl} alt='insa post' />
         <h4 className='post_caption'> <strong>{username}</strong> :  {caption}</h4>
    </div>
  )
}

export default Post;