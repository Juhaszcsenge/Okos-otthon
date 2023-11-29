import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <section>
    <div className="footer-container" style={{ background: "var(--dark-background, #181818)", color: "white", marginTop: "50px" }}>
      <div className="footer-column">
        <h3>Fingertipe</h3>
        <ul className="no-list-style">
          <li>Home</li>
          <li>Examples</li>
          <li>Pricing</li>
          <li>Updates</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>Resource</h3>
        <ul className="no-list-style">
          <li>Home</li>
          <li>Examples</li>
          <li>Pricing</li>
          <li>Updates</li>
        </ul>
      </div>
      <div className="footer-column">
        <h3>About</h3>
        <ul className="no-list-style">
          <li>Home</li>
          <li>Examples</li>
          <li>Pricing</li>
          <li>Updates</li>
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
          <img src='ant-design_twitter-outlined.png' id='footer-img' alt='' />
          <img src='ant-design_facebook-filled.png' id='footer-img' alt='' />
          <img src='ant-design_linkedin-filled.png' id='footer-img' alt='' />
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
