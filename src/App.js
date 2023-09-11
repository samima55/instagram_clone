import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/HeaderComponent/Header';
import Post from './Components/PostComponent/Post';
function App() {
       const[posts , setposts] = useState([
        {username: 'cleverQzi',
         caption: 'wow didnt know this works' ,
         imageUrl: 'https://cdn-icons-png.flaticon.com/512/5949/5949033.png'},
        {
          username:'LazyGirl' ,
          caption: 'wanted to sleep more ' ,
          imageUrl:'https://cdn-icons-png.flaticon.com/512/5949/5949033.png'
        }
       ]);
  return (
    <div className='App'>
  
       <Header/>
      {/*
        rather than hard coding this , we can use state which is a short term memory store in react
        and then loop through the array of posts by map
     <Post username='cleverQzi' caption='wow didnt know this works' imageUrl='https://cdn-icons-png.flaticon.com/512/5949/5949033.png'/>
       <Post username='LazyGirl' caption='wanted to sleep more ' imageUrl='https://cdn-icons-png.flaticon.com/512/5949/5949033.png'/>
       <Post username='Smarty' caption='i want to learn new programing lang ' imageUrl='https://cdn-icons-png.flaticon.com/512/5949/5949033.png'/>
      
       */}

      {
        posts.map(post=>(
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

       </div>
  );
}

export default App;
