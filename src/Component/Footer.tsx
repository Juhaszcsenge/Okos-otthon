import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <section>
    <div className="footer-container" style={{ background: "var(--dark-background, #181818)", color: "white", marginTop: "50px" }}>
      <div className="footer-column-no">
        <ul className="no-list-style">
        <img src='./behive_cover 2.png' alt='' />
        </ul>
      </div>
      <div className="footer-column">
        <ul className="no-list-style">
        </ul>
      </div>
      <div className="footer-column-list">
        <ul className="no-list-style">
          <li style={{padding: "10px"}}>Projets</li>
          <li style={{padding: "10px"}}>Catalogue</li>
          <li style={{padding: "10px"}}>About Us</li>
          <li style={{padding: "10px"}}>Contact</li>
          <li style={{padding: "10px"}}>Privacy Policy</li>
        </ul>
      </div>
      <div className='contact-info'>
        <div className='info-item'>
          <img src='bx_bx-map (1).png' alt='' />
          <p>Ul. Vjekoslava Heinzela 40, 10000 Zagreb, Hrvatska</p>
        </div>
        <div className='info-item'>
          <img src='ic_baseline-phone-android.png' alt='' />
          <p>(239) 555-0108</p>
        </div>
        <div>
         
          <img src='ant-design_facebook-filled.png' id='footer-img' alt='' />
          <img src='ant-design_linkedin-filled.png' id='footer-img' alt='' />
          <img src='insta.png' id='footer-img' alt='' />
        </div>
      </div>

    
    </div>
      <div className='copy'>
      <p className='copy-p'>© 2023 BeeHiveSG. All rights reserved.</p>
    </div>
    </section>
  );
};

export default Footer;
