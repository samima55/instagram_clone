import logo from './logo.svg';
import './App.css';
import React, { useState , useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from './Components/HeaderComponent/Header';
import Post from './Components/PostComponent/Post';
import { db } from './firebase';
import { collection ,onSnapshot} from 'firebase/firestore';
import { doc, setDoc } from "firebase/firestore";


function App() {
       const[posts , setposts] = useState([]);
       const [comment, setComment]=useState([]);
        useEffect(()=>{
           onSnapshot(collection(db, 'posts'),(snapshot)=>{
            setposts(snapshot.docs.map(doc=>({
              id:doc.id,
              post:doc.data()
            })));
           })
        },[]);

       //useEffect runs a peice of code based on a specific condition ex run code when refreshed
       // if we leave it empty it will run the code inside useEffect function only once when the app component initiated 
       // but supposed we gave [posts], it will run verytime there is a change in posts 

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
        posts.map(({id,post})=>(
          <Post key ={id} username={post.username} caption={post.caption} imageUrl={post.imageUrl} />
        ))
      }

       </div>
  );
}

export default App;
