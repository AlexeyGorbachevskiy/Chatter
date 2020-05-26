import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import Nav from "./components/NavBar/Nav";

function App() {
  return (

      <div className='container'>
        <Header/>
        <Nav/>
        <Profile/>
      </div>
  );
}

export default App;
