import React from 'react';
import './Catalogue.css'
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';

const Catalogue = () => {
  return (
    <>
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
            <div  style={{position: "relative",  height: "315px", flexShrink: "0", padding:"30px", top: "-250px", background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #0E0E0E 66.15%)"}}>
            <h2 style={{color: "white", textAlign: "center", gap:"10px", alignItems:"center",fontSize:"52px", fontWeight:"400", letterSpacing:"0.2px", lineHeight:"62px", fontStyle:"normal", fontFamily:"Roboto"}}>Catalogues</h2>
            <p  style={{color: "white", gap:"10px", alignItems:"center", textAlign: "center", fontFamily:"Roboto", fontSize:"20px", fontStyle:"normal", fontWeight:"400", letterSpacing:"0.2px", lineHeight:"150%"}}>Discover innovation in our smart living catalog. Explore solutions that elevate your lifestyle to new heights</p>
            </div>
        </div>
      </section>
    </div>
    <section>
    <div>
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='house2.png' style={{width: "100%", height: "550px", marginTop:"-60px"}} />
        <div style={{ position: 'absolute', top: '50%', right: '0', transform: 'translate(0, -50%)', background: 'rgba(217, 217, 217, 0.71)', width: '100%', height:'470px', padding: '50px' }}>
          <h2 style={{textAlign:"left", fontSize:"31px", fontStyle:"normal", fontFamily:"Roboto", fontWeight:"400", letterSpacing:"0.2px", color:"black",margin:"20px", paddingLeft:"1200px", top:"40%"}}>Discover the Future of Smart Living</h2>
          <p  style={{paddingLeft:"1200px", textAlign: "left", marginBottom:"30px", color:"black"}}>
         Welcome to our world of intelligent solutions and innovative technology. Our Smart Home Catalog provides a curated selection of cutting-edge products and systems designed to enhance your lifestyle. Explore the details, benefits, 
          and opportunities that await you, and embark on a journey to make your home smarter, more comfortable, and more secure. 
          Your connected, convenient, and efficient living experience starts here. Let's redefine the way you live.
          </p>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '0', transform: 'translate(0, -50%)', paddingLeft: "350px"}}>
        <img src='house2.png' style={{width:"580px", height:"393px"}} />
        </div>
    </div>
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='house1.png' style={{width: "100%", height: "550px", marginTop:"-60px"}} />
        <div style={{ position: 'absolute', top: '50%', right: '0', transform: 'translate(0, -50%)', background: 'rgba(217, 217, 217, 0.71)', width: '100%', height:'470px', padding: '50px' }}>
          <h2 style={{textAlign:"left", fontSize:"31px", fontStyle:"normal", fontFamily:"Roboto", fontWeight:"400", letterSpacing:"0.2px", color:"black",margin:"20px", paddingLeft:"1200px", top:"40%"}}>Discover the Future of Smart Living</h2>
          <p  style={{paddingLeft:"1200px", textAlign: "left", marginBottom:"30px", color:"black"}}>
         Welcome to our world of intelligent solutions and innovative technology. Our Smart Home Catalog provides a curated selection of cutting-edge products and systems designed to enhance your lifestyle. Explore the details, benefits, 
          and opportunities that await you, and embark on a journey to make your home smarter, more comfortable, and more secure. 
          Your connected, convenient, and efficient living experience starts here. Let's redefine the way you live.
          </p>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '0', transform: 'translate(0, -50%)', paddingLeft: "350px"}}>
        <img src='house1.png' style={{width:"580px", height:"393px"}} />
        </div>
    </div>
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='boat.png' style={{width: "100%", height: "550px", marginTop:"-60px"}} />
        <div style={{ position: 'absolute', top: '50%', right: '0', transform: 'translate(0, -50%)', background: 'rgba(217, 217, 217, 0.71)', width: '100%', height:'470px', padding: '50px' }}>
          <h2 style={{textAlign:"left", fontSize:"31px", fontStyle:"normal", fontFamily:"Roboto", fontWeight:"400", letterSpacing:"0.2px", color:"black",margin:"20px", paddingLeft:"1200px", top:"40%"}}>Discover the Future of Smart Living</h2>
          <p  style={{paddingLeft:"1200px", textAlign: "left", marginBottom:"30px", color:"black"}}>
         Welcome to our world of intelligent solutions and innovative technology. Our Smart Home Catalog provides a curated selection of cutting-edge products and systems designed to enhance your lifestyle. Explore the details, benefits, 
          and opportunities that await you, and embark on a journey to make your home smarter, more comfortable, and more secure. 
          Your connected, convenient, and efficient living experience starts here. Let's redefine the way you live.
          </p>
        </div>
        <div style={{ position: 'absolute', top: '50%', left: '0', transform: 'translate(0, -50%)', paddingLeft: "350px"}}>
        <img src='boat.png' style={{width:"580px", height:"393px"}} />
        </div>
    </div>
     </div>
    </section>
    <Footer/>
    </>
  );
}

export default Catalogue;
