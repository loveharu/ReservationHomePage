import logo from './logo.svg';
import React from 'react';
import { useEffect,useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from './components/Slider';
import About from './components/About';
import Pick from './components/Pick';
import Vendor from './components/Vendor';
import Footer from './components/Footer';

function App() {
  const [message, setMessage] = useState("")
 
  useEffect(()=>{
    fetch("ex/test")
      .then(res => res.text())
      .then(m=>setMessage(m))
  }, [])
  return (
    <div className="App">
     <Header/>
     <ImageSlider/>  
     <About/> 
     <Pick/>
     <Vendor/>
     <Footer/>
    </div>
  );
}

export default App;
