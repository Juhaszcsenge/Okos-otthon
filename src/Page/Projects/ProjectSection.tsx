import React from 'react';
import Navbar from '../../Component/Navbar';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import './project.css'

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
            <div className='textContainer' style={{position: "relative", width: "96.8%", height: "315px", flexShrink: "0", padding:"30px", top: "-250px", background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #0E0E0E 66.15%)"}}>
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
            <img className="chatBot1" src='Chat Bot (2).png' style={{width: "100%", height: "100%"}} />
        </div>
        <div className='imgContainer' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='Chat Bot.png' style={{width: "100%", height: "100%"}} />
        <div className='contentContainer'>
          <h2>Blok 57</h2>
          <h2>Residental building in Pula, Croatia</h2>
          <p className='imgText' style={{padding:"30px", textAlign: "left", marginBottom:"30px"}}>
          In collaboration with a leading construction firm, we've introduced 30 cutting-edge residential units in Pula, Croatia's city center. 
          Equipped with BeeHiveSG Smart Home systems, these apartments redefine modern living. 
          Residents experience both convenience and comfort, thanks to our meticulously designed on-site building control system, offering immediate usability
          </p>
          <button className='projectButton'>
            Read more
          </button>
        </div>
    </div>
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <img src='Chat Bot (1).png' style={{width: "100%", height: "100%"}} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='Chat Bot (2).png' style={{width: "100%", height: "100%"}} />
        </div>
        <div className='imgContainer' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='Chat Bot.png' style={{width: "100%", height: "100%"}} />
        <div className='otherContainer'>
          <h2>Odra</h2>
          <h2>Residental Complex in Odra, Croatia</h2>
          <p className='imgText' style={{padding:"30px", textAlign: "left", marginBottom:"30px"}}>
          Partnering with the main contractor for the 'Odra' residential complex development in Croatia, we're bringing smart living to 24 buildings and 300 apartments, 
          enhancing convenience, security, and energy efficiency. Our high-quality systems make life in this development even more exceptional.
          </p>
          <button className='projectButton'>
            Read more
          </button>
        </div>
    </div>
    <Footer/>
   </section>
  );
}

export default ProjectSection;
