import React from 'react';
import './SmarterLiving.css'


const SmarterLiving = () => {
  return (
    <section className='smarte-living' style={{background: "var(--dark-background, #181818)"}}>
        <div style={{margin:"70px"}}>
            <h2 style={{textAlign:"center",  fontSize:"52px", fontStyle:"normal", fontFamily:"Roboto", fontWeight:"400", letterSpacing:"0.2px"}}>Smarter Living Starts Here</h2>
            <p style={{textAlign:"center"}}>Explore the limitless possibilities of our advanced smart home system, where every corner of your living space is connected, controlled, 
                and optimized to cater to your desires, creating a life-enhancing sanctuary..</p>
                <button style={{
                border: "1px solid var(--light-text, #FFF)",
                padding: "20px",
                textAlign: "center",
                margin: "40px auto", 
                boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)",
                background: "rgba(0, 0, 0, 0.15)",
                color: "white",
                display: "block",
                }}>See more</button>
        </div>
    </section>
  );
}

export default SmarterLiving;
