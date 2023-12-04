import React, { useEffect } from 'react';
import './SmarterLiving.css'


const SmarterLiving = () => {

  useEffect(() => {
    languagePreferencesSystem.reloadAllLanguageResources()
  }, []);

  return (
    <section className='smarte-living' style={{background: "var(--dark-background, #181818)"}}>
        <div style={{margin:"30px"}}>
            <h2 className='smarter-h2' data-languagePartIdentifier= "smart_living">Smarter Living Starts Here</h2>
            <p className='black-p'  data-languagePartIdentifier="smart_living_desc">
              Explore the limitless possibilities of our advanced smart home system, where every corner of your living space is connected, controlled, 
              and optimized to cater to your desires, creating a life-enhancing sanctuary..</p>
              <a href='/catalogues'>
              <button className='smarterliving' data-languagePartIdentifier="see_more">See More</button>
              </a>
        </div>
    </section>
  );
}

export default SmarterLiving;
