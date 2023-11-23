import React from 'react';
import './SmarterLiving.css'


const SmarterLiving = () => {
  return (
    <section className='smarte-living' style={{background: "var(--dark-background, #181818)"}}>
        <div style={{margin:"30px"}}>
            <h2 data-languagePartIdentifier= "smart_living">Smarter Living Starts Here</h2>
            <p style={{textAlign:"center", color:"white", marginBottom:"30px"}} data-languagePartIdentifier="smart_living_desc">
              Explore the limitless possibilities of our advanced smart home system, where every corner of your living space is connected, controlled, 
              and optimized to cater to your desires, creating a life-enhancing sanctuary..</p>
              <button className='smarterliving'>See More</button>
        </div>
    </section>
  );
}

export default SmarterLiving;
