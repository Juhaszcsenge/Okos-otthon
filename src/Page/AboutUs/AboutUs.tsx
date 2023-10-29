import React from 'react';
import Navbar from '../../Component/Navbar';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import Partners from './Partners';
import './aboutUs.css'

const AboutUs = () => {
  return (
    <section>
    <Navbar/>
    <div>
      <section className='header'>
        <div className='gradient' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='il_1588xN 1.png' style={{width: "100%", height: "100%"}}/>
            <div style={{ position: 'absolute', top: '30%', left: '0', transform: 'translate(30%, -50%)', textAlign: 'center', background: '#FFE39B', width: '20%', padding: '30px' }}>
            <p className='img-text'>
            Animation or image
            </p>
            </div>
            <div  style={{position: "relative", width: "96.8%", height: "315px", flexShrink: "0", padding:"30px", top: "-250px", background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #0E0E0E 66.15%)"}}>
            <h2 style={{color: "white", textAlign: "center", gap:"10px", alignItems:"center",fontSize:"52px", fontWeight:"400", letterSpacing:"0.2px", lineHeight:"62px", fontStyle:"normal", fontFamily:"Roboto"}}>About Us</h2>
            <p  style={{color: "white", gap:"10px", alignItems:"center", textAlign: "center", fontFamily:"Roboto", fontSize:"20px", fontStyle:"normal", fontWeight:"400", letterSpacing:"0.2px", lineHeight:"150%"}}>Guiding You Through the World of Smart Living: Meet Our Team of Experts in Home Automation and Innovation</p>
            </div>
        </div>
      </section>
    </div>
    <div  style={{ position: 'relative', width: '100%', height: '100%', top:"-50%"}}>
    <img src='Chat Bot (1).png' style={{width: "100%", height: "100%"}} />
    <div style={{ position: 'absolute', top: '49%', right: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', background: 'rgba(217, 217, 217, 0.67)', width: '30.05%', height:"79%", padding: '30px' }}>
          <p className='img-text' style={{padding:"20px", textAlign:"center"}}>
        At BeeHive Smart Homes, we're dedicated to reshaping the way you live. Our journey began with a vision of bringing intelligent solutions into everyday life, 
        simplifying and enhancing your home experience. With a passionate team of experts, we've transformed that vision into reality. 
        From smart home systems that prioritize convenience, security, and efficiency to integrated solutions that elevate modern living, we're at the forefront of innovation.</p>
        <p className='img-text' style={{padding:"20px", textAlign:"center"}}>Our commitment extends beyond technology; it's about understanding your unique needs and aspirations. We're your partner in creating a smarter, more comfortable, and safer living space. Each project we undertake is a testament to our relentless pursuit of excellence. 
        We invite you to join us on this exciting journey as we redefine smart living, one home at a time."</p>
        </div>
    </div>
    <div className='about' style={{ position: 'relative', width: '100%', height: '100%'}}>
    <img src='Chat Bot (3).png' style={{width: "100%", height: "700px"}} />
    <div className='about-container'>
          <p className='about-text' style={{padding:"20px", textAlign:"center"}}>
        At BeeHive Smart Homes, we're dedicated to reshaping the way you live. Our journey began with a vision of bringing intelligent solutions into everyday life, 
        simplifying and enhancing your home experience. With a passionate team of experts, we've transformed that vision into reality. 
        From smart home systems that prioritize convenience, security, and efficiency to integrated solutions that elevate modern living, we're at the forefront of innovation.</p>
        <p className='about-text' style={{padding:"20px", textAlign:"center"}}>Our commitment extends beyond technology; it's about understanding your unique needs and aspirations. We're your partner in creating a smarter, more comfortable, and safer living space. Each project we undertake is a testament to our relentless pursuit of excellence. 
        We invite you to join us on this exciting journey as we redefine smart living, one home at a time."</p>
    </div>
    </div>
    <Partners/>
    <Footer/>
    </section>
  );
}

export default AboutUs;
