import React from 'react';
import './HomePage.css'
import Navbar from '../../Component/Navbar';
import Header from '../../Component/Header';
import Card from '../Card/Card';
import SmarterLiving from '../SmarterLiving';
import ImgSection from '../ImgSection/ImgSection';
import Footer from '../../Component/Footer';



const HomePage = () => {
  return (
    <>
    <Navbar/>
    <Header/>
    <section className='home' style={{background:"rgba(255, 255, 255, 0.67)", boxShadow:"0px 4px 31px 0px rgba(0, 0, 0, 0.15)"}}>
    <div className='text-container'>
      <div className='home-text' style={{background:"#FFE39B", textAlign: "center", paddingTop:"-25px", position:"relative", }}>
        <p className='home-p'>Intuitive Interface</p>
      </div>
      <div className='home-table' style={{background: "#D9D9D9", boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)", position:"relative", bottom:"-470px", left:"230px"}}>
       {/* <div className='home-text2' style={{textAlign: "center", paddingTop:"-25px", padding: "40px"}}>
       <p className='home-p2' style={{ textAlign: "center", background:"#FFE39B" }}>Tablet</p>
       </div> */}
       </div>
       </div>
    </section>
    <Card/>
    <SmarterLiving/>
    <ImgSection/>
    <Footer />
    </>
  );
}

export default HomePage;
