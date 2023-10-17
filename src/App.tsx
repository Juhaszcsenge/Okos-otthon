import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Navbar from './Component/Navbar';
import HomePage from './Page/Home/HomePage';
import Card from './Page/Card/Card';
import ImgSection from './Page/ImgSection/ImgSection';
import Footer from './Component/Footer';
import SmarterLiving from './Page/SmarterLiving';

function App() {
  return (
    <div style={{backgroundColor: "black"}}>
      <Navbar />
      <Header />
      <HomePage />
      <Card/>
      <SmarterLiving/>
      <ImgSection/>
      <Footer />
    </div>
  );
}

export default App;
