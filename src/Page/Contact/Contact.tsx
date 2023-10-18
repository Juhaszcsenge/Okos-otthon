import React from 'react';
import Navbar from '../../Component/Navbar';
import Header from '../../Component/Header';
import Footer from '../../Component/Footer';
import GoogleMaps from './Googlemaps';

const Contact = () => {
  return (
   <section>
    <Navbar/>
    <Header/>
    <div>
    <GoogleMaps/>
    </div>
    <Footer/>
   </section>
  );
}

export default Contact;
