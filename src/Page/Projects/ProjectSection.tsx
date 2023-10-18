import React from 'react';
import Navbar from '../../Component/Navbar';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';

const ProjectSection = () => {
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
            <h2 style={{color: "white", textAlign: "center", gap:"10px", alignItems:"center",fontSize:"52px", fontWeight:"400", letterSpacing:"0.2px", lineHeight:"62px", fontStyle:"normal", fontFamily:"Roboto"}}>Projects</h2>
            <p  style={{color: "white", gap:"10px", alignItems:"center", textAlign: "center", fontFamily:"Roboto", fontSize:"20px", fontStyle:"normal", fontWeight:"400", letterSpacing:"0.2px", lineHeight:"150%"}}>Our company provide innovative integrated solutions and strive to create good partnerships, 
respecting architectural and innovative expressions.</p>
            </div>
        </div>
      </section>
    </div>
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <img src='Chat Bot (1).png' style={{width: "100%", height: "100%"}} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='Chat Bot (2).png' style={{width: "100%", height: "100%",marginTop:"-60px"}} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='Chat Bot.png' style={{width: "100%", height: "100%", marginTop:"-60px"}} />
        <div style={{ position: 'absolute', top: '-56%', right: '0', transform: 'translate(0, -50%)', background: 'rgba(217, 217, 217, 0.71)', width: '40%', height:'712px', padding: '50px' }}>
          <h2 style={{textAlign:"left", fontSize:"31px", fontStyle:"normal", fontFamily:"Roboto", fontWeight:"400", letterSpacing:"0.2px", color:"black",margin:"20px"}}>Keeping Your Home Safe:</h2>
          <h2 style={{textAlign:"left", fontSize:"52px", fontStyle:"normal", fontFamily:"Roboto", fontWeight:"400", letterSpacing:"0.2px", color:"black", margin:"20px"}}>Smart Security Solutions </h2>
          <p className='imgText' style={{padding:"30px", textAlign: "left", marginBottom:"30px"}}>
            Elevate your home's security and convenience with our Door and Window Contact Sensors and Motion Detectors. 
            Our Contact Sensors provide an added layer of protection by alerting you to door or window activity, 
            while our Motion Detectors keep a watchful eye on your home, detecting any movement and ensuring peace of mind. 
            Embrace a more secure and efficient living space where technology works to enhance your safety and daily life.
          </p>
        </div>
    </div>
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <img src='Chat Bot (1).png' style={{width: "100%", height: "100%"}} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='Chat Bot (2).png' style={{width: "100%", height: "100%",marginTop:"-60px"}} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='Chat Bot.png' style={{width: "100%", height: "100%", marginTop:"-60px"}} />
        <div style={{ position: 'absolute', top: '-56%', left: '0', transform: 'translate(0, -50%)', background: 'rgba(217, 217, 217, 0.71)', width: '40%', height:'712px', padding: '50px' }}>
          <h2 style={{textAlign:"left", fontSize:"31px", fontStyle:"normal", fontFamily:"Roboto", fontWeight:"400", letterSpacing:"0.2px", color:"black",margin:"20px"}}>Keeping Your Home Safe:</h2>
          <h2 style={{textAlign:"left", fontSize:"52px", fontStyle:"normal", fontFamily:"Roboto", fontWeight:"400", letterSpacing:"0.2px", color:"black", margin:"20px"}}>Smart Security Solutions </h2>
          <p className='imgText' style={{padding:"30px", textAlign: "left", marginBottom:"30px"}}>
            Elevate your home's security and convenience with our Door and Window Contact Sensors and Motion Detectors. 
            Our Contact Sensors provide an added layer of protection by alerting you to door or window activity, 
            while our Motion Detectors keep a watchful eye on your home, detecting any movement and ensuring peace of mind. 
            Embrace a more secure and efficient living space where technology works to enhance your safety and daily life.
          </p>
        </div>
    </div>
    <Footer/>
   </section>
  );
}

export default ProjectSection;
