import React, { useState } from 'react';
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
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
    
      </div>
    
      <ul className="nav-menu">
    
      <li style={{listStyle: "none", marginTop: "5px"}}>
      <img src="./logo2.png" alt="" style={{height: "50px"}} />
      </li>
      <Link to='/'></Link>
      <Link to='/home'><li data-languagePartIdentifier="m_home" style={{marginLeft: "200px", marginTop: "15px"}}>Home</li></Link>
      <Link to='/projects'><li data-languagePartIdentifier="m_projects" style={{marginTop: "15px"}}>Projects</li></Link>
      <Link to='/catalogues'><li data-languagePartIdentifier="m_catalogues" style={{marginTop: "15px"}}>Catalogues</li></Link>
      <Link to='/aboutUs' ><li data-languagePartIdentifier="m_aboutus" style={{marginTop: "15px"}} >About Us</li></Link>
      <Link to='/contact'><li data-languagePartIdentifier="m_contact" style={{marginRight: "200px", marginTop: "15px"}}>Contact</li></Link> 
   
       {/*@ts-ignore*/}
       <button switchlanguage='en' style={{background: "black", color: "white", border: "black", whiteSpace: "1", letterSpacing:"1.5px", cursor: "pointer"}}>EN/</button> <br></br>
      {/*@ts-ignore*/}
      <button switchlanguage='hr' style={{background: "black", color: "white", border: "black", letterSpacing:"1.5px", cursor: "pointer"}}>HR/</button>
       {/*@ts-ignore*/}
       <button switchlanguage='hu' style={{background: "black", color: "white", border: "black", whiteSpace: "1", letterSpacing:"1.5px", cursor: "pointer"}}>HU/</button> <br></br>
      {/*@ts-ignore*/}
      <button switchlanguage='sr' style={{background: "black", color: "white", border: "black", letterSpacing:"1.5px", cursor: "pointer"}}>SR</button>
      </ul>
     
      <div className="hamburger" onClick={handleNav}>
      {!nav ? (<HiOutlineMenuAlt4 className='iconNav' />) : (<AiOutlineClose style={{ color: 'white' }} className='iconNav' />)}
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">

        <li style={{listStyle: "none"}}><img src="./logo2.png" alt="" style={{height: "50px"}} /></li>
      <Link to='/'></Link>
      <Link to='/home'><li>Home</li></Link>
      <Link to='/projects'><li>Projects</li></Link>
      <Link to='/catalogues'><li>Catalogues</li></Link>
      <Link to='/aboutUs'><li>About Us</li></Link> 
      <Link to='/contact'><li >Contact</li></Link>

       {/*@ts-ignore*/}
       <button switchlanguage='en' style={{background: "black", color: "white", border: "black", whiteSpace: "1", letterSpacing:"1.5px", cursor: "pointer"}}>EN/</button> 
      {/*@ts-ignore*/}
      <button switchlanguage='hr' style={{background: "black", color: "white", border: "black", letterSpacing:"1.5px", cursor: "pointer"}}>HR/</button>
       {/*@ts-ignore*/}
       <button switchlanguage='hu' style={{background: "black", color: "white", border: "black", whiteSpace: "1", letterSpacing:"1.5px", cursor: "pointer"}}>HU/</button> <br></br>
      {/*@ts-ignore*/}
      <button switchlanguage='sr' style={{background: "black", color: "white", border: "black", letterSpacing:"1.5px", cursor: "pointer"}}>SR</button>
      
        </ul>
      </div>
    </div>
  );
}

export default Navbar;