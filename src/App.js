import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/HeaderComponent/Header';
import Post from './Components/PostComponent/Post';
function App() {
  return (
    <div className='App'>
      
      
       <Header/>
       <Post username='cleverQzi' caption='wow didnt know this works' imageUrl='https://cdn-icons-png.flaticon.com/512/5949/5949033.png'/>
       <Post/>
       <Post/>
      
       </div>
  );
}

export default App;
