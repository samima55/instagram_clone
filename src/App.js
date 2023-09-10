import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/HeaderComponent/Header';
function App() {
  return (
    <div className='App'>
       <Router>
        <Routes>
       <Route exact path="/" element={ <Header />}/>
       </Routes>
        
        
       </Router>
       </div>
  );
}

export default App;
