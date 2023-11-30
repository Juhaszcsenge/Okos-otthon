import React, { useEffect } from 'react';
import Partners from './Partners';
import './aboutUs.css'
import Footer from '../../Component/Footer';

const AboutUs = () => {

  useEffect(() => {
    languagePreferencesSystem.reloadAllLanguageResources()
  }, []);

  return (
    <section>
    <div>
    <section className='header' style={{backgroundImage: "url('/il_1588xN 2.png')"}}>
        <div className='gradient' >
            {/* <img className='first-img' src='il_1588xN 2.png' alt="" /> */}
            <div style={{ position: 'absolute', top: '30%', left: '0', transform: 'translate(30%, -50%)', textAlign: 'center', width: '20%', padding: '30px' }}>
            </div>
            <div className='gradient-text' >
            <h2 className='header-h2' data-languagePartIdentifier="m_aboutus">About Us</h2>
            <p className='first-header'  data-languagePartIdentifier="redefine_modern_living">Guiding You Through the World of Smart Living: Meet Our Team of Experts in Home Automation and Innovation</p>
            </div>
        </div>
      </section>
    </div>
    <div className='aboutLeft'>
    <img src='Chat Bot (5).png' alt="" style={{width: "100%", height: "100%"}} />
    <div className='about-containerLeft'>
          <p  className='about-text' data-languagePartIdentifier="aboutus_part1">At BeeHive Smart Homes, we're dedicated to reshaping the way you live. Our journey began with a vision of bringing intelligent solutions into everyday life, simplifying and enhancing your home experience. 
          With a passionate team of experts, we've transformed that vision into reality. 
          From smart home systems that prioritize convenience, security, and efficiency to integrated solutions that elevate modern living, we're at the forefront of innovation.</p>
          <p className='about-text'  data-languagePartIdentifier="our_commited">Our commitment extends beyond technology; it's about understanding your unique needs and aspirations. We're your partner in creating a smarter, more comfortable, and safer living space. 
          Each project we undertake is a testament to our relentless pursuit of excellence. 
          We invite you to join us on this exciting journey as we redefine smart living, one home at a time."</p>
        </div>
    </div>
    <div className='about' style={{ position: 'relative', width: '100%', height: '100%'}}>
    <img src='Chat Bot (4).png' alt="" style={{width: "100%", height: "100%"}} />
    <div className='about-container'>
          <p className='about-text'  data-languagePartIdentifier="aboutus_part2">
          As we stand at the intersection of innovation and human-centered design, our mission remains crystal clear: to empower you with solutions that seamlessly adapt to your lifestyle. 
          Our journey is marked by collaborations with leading construction firms and esteemed partners, working together to create spaces that harmonize technology and aesthetics.</p>
        <p className='about-text' >Our commitment extends beyond technology; it's about understanding your unique needs and aspirations. We're your partner in creating a smarter, more comfortable, and safer living space. Each project we undertake is a testament to our relentless pursuit of excellence. 
        We invite you to join us on this exciting journey as we redefine smart living, one home at a time."</p>
    </div>
    </div>
    <Partners/>
    <Footer/>
    </section>
  );
}

export default AboutUs;
