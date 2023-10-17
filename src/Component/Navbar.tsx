import React from 'react';

const Navbar = () => {
  return (
    <div>
      <nav className='nav' style={{padding: "30px"}}>
        <a href='/' className='site-title'>
           LOGO
        </a>
       <ul>
        <li>
            <a href='/home'>Home</a>
        </li>
        <li>
            <a href='/projects'>Projects</a>
        </li>
        <li>
            <a href='/catalogues'>Catalogues</a>
        </li>
        <li>
            <a href='/aboutUs'>About Us</a>
        </li>
        <li>
            <a href='/contact'>Contact</a>
        </li>
       </ul>
      </nav>
    </div>
  );
}

export default Navbar;
