import React, { useEffect } from 'react';
import './Partners.css'

const Partners = () => {

  useEffect(() => {
    languagePreferencesSystem.reloadAllLanguageResources()
  }, []);

  return (
    <section>
         <div className='smart-climate'>
          <div className='validation2' style={{background: "var(--dark-background, #181818)"}}>
            <h2  className="partner"  data-languagePartIdentifier="t_partners" style={{paddingTop:"30px"}} >Partners</h2>
            <p className='partners'  data-languagePartIdentifier="aboutus_partners"  >Our collaborations with leading software providers and hardware manufacturers enable us to deliver tailored solutions and robust automation 
            capabilities across diverse property types and styles. Our strong partnerships with both customers and industry leaders serve as the bedrock 
            for sustained project success and delighted users.</p>
            <div className='img-partner'>
          <img src='kaleido_logo.webp' alt="" className='kaleido' />
          <img src='softech_logo.webp' alt="" className='softech' />
          <img src='tt_logo.webp' alt="" className='tt' />
          </div>
          </div>
         
        </div>
    </section>
  );
}

export default Partners;
