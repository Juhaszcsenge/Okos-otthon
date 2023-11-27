import React, { useEffect } from 'react';
import './project.css'
import Footer from '../../Component/Footer';


const ProjectSection = () => {
 
  useEffect(() => {
    languagePreferencesSystem.reloadAllLanguageResources()
  }, []);

  return (
   <section>
    <div>
      <section className='header'>
        <div className='gradient' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img className='first-img' src='il_1588xN 2.png' alt="" style={{width: "100%", height: "100%"}}/>
            <div style={{ position: 'absolute', top: '30%', left: '0', transform: 'translate(30%, -50%)', textAlign: 'center',  width: '20%', padding: '30px' }}>
            {/* <p className='img-text'>
            Animation or image
            </p> */}
            </div>
            <div className='textContainer'>
            <h2 className='header-h2'>Projects</h2>
            <p className='first-header'>Our company provide innovative integrated solutions and strive to create good partnerships, respecting architectural and innovative expressions.</p>
            </div>
        </div>
      </section>
    </div>
    <div className='project-head'>
    <img src='Chat Bot (11).png' alt="" style={{width: "100%", height: "100%"}} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img className="chatBot1" alt="" src='Chat Bot (10).png' style={{width: "100%", height: "100%"}} />
        </div>
        <div className='imgContainer' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='Chat Bot (9).png' alt="" style={{width: "100%", height: "100%"}} />
        <div className='contentContainer'>
          <h2  data-languagePartIdentifier= "blok57">Blok 57</h2>
          <h2  data-languagePartIdentifier="blok57_desc_short">Residental building in Pula, Croatia</h2>
          <p  data-languagePartIdentifier= "blok57_desc_long" className='contentContainer-p' style={{padding:"30px", textAlign: "left", marginBottom:"30px"}}>
          In collaboration with a leading construction firm, we've introduced 30 cutting-edge residential units in Pula, Croatia's city center. 
          Equipped with BeeHiveSG Smart Home systems, these apartments redefine modern living. 
          Residents experience both convenience and comfort, thanks to our meticulously designed on-site building control system, offering immediate usability
          </p>
          <button className='projectButton'  data-languagePartIdentifier="read_more">
            Read more
          </button>
        </div>
    </div>
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
    <img src='Chat Bot (8).png' alt="" style={{width: "100%", height: "100%"}} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='Chat Bot (7).png' alt="" style={{width: "100%", height: "100%"}} />
        </div>
        <div className='imgContainer' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='Chat Bot (6).png' alt="" style={{width: "100%", height: "100%"}} />
        <div className='otherContainer'>
          <h2  data-languagePartIdentifier= "odra">Odra</h2>
          <h2 data-languagePartIdentifier= "odra_desc_short">Residental Complex in Odra, Croatia</h2>
          <p  data-languagePartIdentifier="odra_desc_long" className='imgText' style={{padding:"30px", textAlign: "left", marginBottom:"30px"}}>
          Partnering with the main contractor for the 'Odra' residential complex development in Croatia, we're bringing smart living to 24 buildings and 300 apartments, 
          enhancing convenience, security, and energy efficiency. Our high-quality systems make life in this development even more exceptional.
          </p>
          <button className='projectButton'  data-languagePartIdentifier="read_more">
            Read more
          </button>
        </div>
    </div>
    <Footer/>
   </section>
  );
}

export default ProjectSection;
