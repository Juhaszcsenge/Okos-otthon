import React from 'react';
import './SmarterLiving.css'


const SmarterLiving = () => {
  return (
    <section className='smarte-living' style={{background: "var(--dark-background, #181818)"}}>
        <div style={{margin:"70px"}}>
            <h2 >Smarter Living Starts Here</h2>
            <p style={{textAlign:"center"}}>Explore the limitless possibilities of our advanced smart home system, where every corner of your living space is connected, controlled, 
                and optimized to cater to your desires, creating a life-enhancing sanctuary..</p>
                <button className='smart-btn'>See more</button>
        </div>
    </section>
  );
}

export default SmarterLiving;
