import React, { useEffect } from 'react';
import './HomePage.css'
import Header from '../../Component/Header';
import Card from '../Card/Card';
import SmarterLiving from '../SmarterLiving';
import ImgSection from '../ImgSection/ImgSection';
import Footer from '../../Component/Footer';
import ReactPlayer from 'react-player';
import MobileUi from '../FloorPlan/MobileUi';
import FloorPlan from '../FloorPlan/FloorPlan';
import Kitchen from '../FloorPlan/Kitchen';



const HomePage = () => {
  useEffect(() => {
    languagePreferencesSystem.reloadAllLanguageResources()
  }, []);
  return (
    <>
    <Header/>
    <section className='home' >
    {/* <div className='text-container'> */}
      {/* <div className='home-text' style={{ textAlign: "center", paddingTop:"-25px", position:"relative", }}>
        <p className='home-p'>Intuitive Interface</p>
      </div> */}
      {/* <div className='home-table' style={{background: "#D9D9D9", boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)", position:"relative", bottom:"-470px", left:"230px"}}> */}
     
      {/* <ReactPlayer
                url={'/main.mp4'}
                playing={true}
                loop={true}
                muted={true}
                filter="brightness(60%)"
                width="1000px"
                height="100%"
                style={{justifyContent:"center" }}
              /> */}
      
      
       {/* </div> */}
       {/* </div> */}
       {/* <FloorPlan/> */}
       {/* <Kitchen/> */}
       <MobileUi/>
    </section>
    <Card/>
    <SmarterLiving/>
    <ImgSection/>
    <Footer />
    </>
  );
}

export default HomePage;
