import React, { useState } from 'react';
import { BiSearch } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaYoutube } from 'react-icons/fa'
import './Navbar.css'
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import '../../src'


const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  return (
    <div id='home' className={nav ? 'navbar navbar-bg' : 'navbar'} style={{backgroundColor: "black"}}>
    <div className={nav ? 'logo dark' : 'logo'}>
      <li>LOGO</li>
      </div>
      <ul className="nav-menu">
      <Link to='/'></Link>
      <Link to='/home'><li data-languagePartIdentifier="m_home">Home</li></Link>
      <Link to='/projects'><li data-languagePartIdentifier="m_projects">Projects</li></Link>
      <Link to='/catalogues'><li data-languagePartIdentifier="m_catalogues">Catalogues</li></Link>
      <Link to='/aboutUs' ><li data-languagePartIdentifier="m_aboutus" >About Us</li></Link>
      <Link to='/contact'><li data-languagePartIdentifier="m_contact">Contact</li></Link> 
      </ul>
      {/*@ts-ignore*/}
      <button switchlanguage='en' style={{background: "black", color: "white", border: "black", whiteSpace: "1", letterSpacing:"1.5px", cursor: "pointer"}}>EN/</button> <br></br>
      {/*@ts-ignore*/}
      <button switchlanguage='hr' style={{background: "black", color: "white", border: "black", letterSpacing:"1.5px", cursor: "pointer"}}>HR</button>
      <div className="hamburger" onClick={handleNav}>
      {!nav ? (<HiOutlineMenuAlt4 className='iconNav' />) : (<AiOutlineClose style={{ color: 'white' }} className='iconNav' />)}
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
      <Link to='/'></Link>
      <Link to='/home'><li>Home</li></Link>
      <Link to='/projects'><li>Projects</li></Link>
      <Link to='/catalogues'><li>Catalogues</li></Link>
      <Link to='/aboutUs'><li>About Us</li></Link> 
      <Link to='/contact'><li>Contact</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;