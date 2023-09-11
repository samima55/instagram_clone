import React from 'react';
import './Post.css';
import { Avatar } from '@mui/material';
function Post(props) {
  return (
    <div className='post'>
          <div className='post_header'>
          <Avatar
        className='post_avatar'
        alt={props.username}
        src='/static/images/avatar/1.jpg'
        />
        <h3 className='post_username'>{props.username}</h3>
          </div>
         <img  className="post_image" src={props.imageUrl} alt='insa post' />
         <h4 className='post_caption'> <strong>{props.username}</strong> :  {props.caption}</h4>
    </div>
  )
}

export default Post;