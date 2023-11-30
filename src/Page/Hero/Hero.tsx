import React from 'react';

const Hero = () => {
  return (
    <>
      <div className='hero'  style={{height: "700px"}}>
        <div className='conatiner' style={{backgroundImage: "url('./il_1588xN 2.png')",alignItems: "center", textAlign: "center"}}>
          <div className='row' style={{alignItems: "center", justifyContent: "center"}}>
            <h2 style={{color: "black"}}>Experience BeeHive</h2> 
            <p className="valami" style={{alignItems: "center", color:"black"}}>Redefine modern living with our intelligent Home Ecosystem</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
