import React from 'react';
import './Partners.css'

const Partners = () => {
  return (
    <section>
         <div className='smart-climate' style={{marginTop: "20px"}}>
          <div className='validation' style={{background: "var(--dark-background, #181818)"}}>
            <h2  className="partner">Partners</h2>
            <p style={{textAlign:"center"}}>Our collaborations with leading software providers and hardware manufacturers enable us to deliver tailored solutions and robust automation 
            capabilities across diverse property types and styles. Our strong partnerships with both customers and industry leaders serve as the bedrock 
            for sustained project success and delighted users.</p>
          </div>
          <div className='img'>
          <img src='logo.png' />
          <img src='logo.png'/>
          <img src='logo.png'/>
          </div>
        </div>
    </section>
  );
}

export default Partners;
