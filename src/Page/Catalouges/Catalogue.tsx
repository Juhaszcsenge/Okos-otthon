import React, { useEffect } from 'react';
import './Catalogue.css'
import Footer from '../../Component/Footer';

const Catalogue = () => {




  useEffect(() => {
    languagePreferencesSystem.reloadAllLanguageResources()
  }, []);


  return (
    <>
    <div>
      <section className='header'>
        <div className='gradient' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img  className='first-img' src='il_1588xN 2.png' alt="" style={{width: "100%", height: "100%"}}/>
            <div style={{ position: 'absolute', top: '30%', left: '0', transform: 'translate(30%, -50%)', textAlign: 'center', width: '20%', padding: '30px' }}>
            </div>
            <div  className='gradient-text' style={{position: "relative",  height: "315px", flexShrink: "0", padding:"30px", background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #0E0E0E 66.15%)"}}>
            <h2 style={{color: "white", textAlign: "center", gap:"10px", alignItems:"center",fontSize:"52px", fontWeight:"400", letterSpacing:"0.2px", lineHeight:"62px", fontStyle:"normal", fontFamily:"Roboto"}}>Catalogues</h2>
            <p  style={{color: "white", gap:"10px", alignItems:"center", textAlign: "center", fontFamily:"Roboto", fontSize:"20px", fontStyle:"normal", fontWeight:"400", letterSpacing:"0.2px", lineHeight:"150%"}}>Discover innovation in our smart living catalog. Explore solutions that elevate your lifestyle to new heights</p>
            </div>
        </div>
      </section>
    </div>
    <section>
    <div>
    <div className='main-container'>
            <img src='11.jpg' alt="" style={{width: "100%", height: "550px", marginTop:"-60px"}} />
        <div className='text-catalogue'>
          <h2  data-languagePartIdentifier="discover_the_future" className='catalogue-p'>Discover the Future of Smart Living</h2>
          <p  data-languagePartIdentifier="discover_the_future_desc" className='catalogue-p'>
         Welcome to our world of intelligent solutions and innovative technology. Our Smart Home Catalog provides a curated selection of cutting-edge products and systems designed to enhance your lifestyle. Explore the details, benefits, 
          and opportunities that await you, and embark on a journey to make your home smarter, more comfortable, and more secure. 
          Your connected, convenient, and efficient living experience starts here. Let's redefine the way you live.
         
          </p>
        </div>
       
        <div className='image-container'>
        <img src='house2.png' alt="" style={{width:"600px", height:"400px"}} />
        </div>
    </div>
    <div className='second-container'>
            <img src='12.png' alt="" style={{width: "100%", height: "550px", marginTop:"-60px"}} />
        <div className='text-catalogue'>
          <h2  data-languagePartIdentifier= "innovative_living" className='catalogue-p'>Innovative Living, Intelligent Solutions</h2>
          <p  data-languagePartIdentifier= "innovative_living_desc" className='catalogue-p'>
          Our Smart Home Presentation unveils an array of intelligent solutions that redefine modern living. 
          From energy-efficient climate control to advanced security, seamless automation, and immersive entertainment, our smart home features elevate your lifestyle. 
          Explore the endless possibilities, discover the convenience, and embrace a new era where your home adapts to you. 
          Welcome to the future of smart living, where every day is extraordinary.
         
          </p>
        </div>
        <div className='image-container'>
        <img src='house1.png' alt="" style={{width:"600px", height:"400px"}} />
        </div>
    </div>
    <div className='third-container'>
            <img src='13.jpg' alt="" style={{width: "100%", height: "550px", marginTop:"-60px"}} />
        <div className='text-catalogue'>
        <div className='image-container'>
            <img src='boat.png' alt="" style={{width:"580px", height:"393px"}} />
            </div>
          <h2  data-languagePartIdentifier= "future_of_luxury" className='catalogue-p'>Future of Luxury Living on Yachts</h2>
          <p   data-languagePartIdentifier= "future_of_luxury_desc" className='catalogue-p'>
          Experience the epitome of modern comfort and convenience as we introduce Smart Home Solutions for Yachts. 
          Our cutting-edge technology seamlessly integrates with your onboard environment, offering intuitive control over lighting, climate, entertainment, security, and more. 
          Elevate your yachting experience, whether it's for relaxation, entertainment, or work, with a level of customization and luxury that's unparalleled.  
       
         </p>
         
    </div>
    </div>
     </div>
    </section>
    <Footer/>
    </>
  );
}

export default Catalogue;
