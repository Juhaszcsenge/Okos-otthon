import React from 'react';
import './Header.css'

const Header = () => {
  return (
    <div>
      <section className='header'>
        <div className='gradient' >
            <img className='first-img' src='il_1588xN 2.png' alt="" />
            <div style={{ position: 'absolute', top: '30%', left: '0', transform: 'translate(30%, -50%)', textAlign: 'center', width: '20%', padding: '30px' }}>
            </div>
            <div className='gradient-text' >
            <h2 className='header-h2' data-languagePartIdentifier="experience_beehive">Experience BeeHive</h2>
            <p className='first-header'  data-languagePartIdentifier="redefine_modern_living">Redefine modern living with our intelligent Home Ecosystem</p>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
