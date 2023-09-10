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
       <Post/>
     
      
       </div>
  );
}

export default App;
