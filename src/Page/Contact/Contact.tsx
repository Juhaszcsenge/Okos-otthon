import React from 'react';
import GoogleMaps from './Googlemaps';
import { Col, Row } from 'react-bootstrap';
import './contact.css';
import Navbar from '../../Component/Navbar';
import Footer from '../../Component/Footer';

const Contact = () => {
  return (
    <section>
      <Navbar/>
      <div>
      <section className='header'>
        <div className='gradient' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img src='il_1588xN 2.png' style={{width: "100%", height: "100%"}}/>
            <div style={{ position: 'absolute', top: '30%', left: '0', transform: 'translate(30%, -50%)', textAlign: 'center', background: '#FFE39B', width: '20%', padding: '30px' }}>
            <p className='img-text'>
            Animation or image
            </p>
            </div>
            <div style={{position: "relative", width: "100%", height: "315px", flexShrink: "0", padding:"30px", top: "-250px", background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #0E0E0E 66.15%)"}}>
            <h2 style={{color: "white", textAlign: "center", gap:"10px", alignItems:"center",fontSize:"52px", fontWeight:"400", letterSpacing:"0.2px", lineHeight:"62px", fontStyle:"normal", fontFamily:"Roboto"}}>Contact</h2>
            </div>
        </div>
      </section>
    </div>
      <div className='parent' style={{marginTop:"-200px"}}>
        <Row>
          <div className='child' style={{ display: "inline-block",  margin:"60px"}}>
            <Col lg='6' md='6' style={{ alignItems: "center"}}>
              <div style={{ color: "white"}}>
                <h2 className='first'>Get in touch with us</h2>
                <h2 className='ContactTitle'>Phone Number</h2>
                <div style={{ width: "18px", height: "14px", background: "#D9D9D9" }}>
                  <p style={{ whiteSpace: "nowrap", paddingLeft: "50px", textAlign: "center", marginTop: "20px" }}>Office Number +36 1234567899</p>
                </div>
                <div style={{ width: "18px", height: "14px", background: "#D9D9D9" }}>
                  <p style={{ whiteSpace: "nowrap", paddingLeft: "50px", textAlign: "center", marginTop: "20px" }}>Technical Information +36 1234567899</p>
                </div>
                <h2 style={{ paddingRight: "200px", paddingBottom: "15px", paddingTop: "50px" }}>Email address</h2>
                <div style={{ width: "18px", height: "14px", background: "#D9D9D9" }}>
                  <p style={{ whiteSpace: "nowrap", paddingLeft: "50px", textAlign: "center" }}>support@email.com</p>
                </div>
                <div style={{ width: "18px", height: "14px", background: "#D9D9D9" }}>
                  <p style={{ whiteSpace: "nowrap", paddingLeft: "50px", textAlign: "center", marginTop: "20px" }}>otheremail@email.com</p>
                </div>
                <h2 style={{ paddingRight: "220px", paddingBottom: "15px", paddingTop: "50px" }}>Open Hours</h2>
                <div style={{ width: "18px", height: "14px", background: "#D9D9D9" }}>
                  <p style={{ whiteSpace: "nowrap", paddingLeft: "50px", textAlign: "center" }}>Mon - Fri - 08:00 - 16:00</p>
                </div>
                <div style={{ width: "18px", height: "14px", background: "#D9D9D9" }}>
                  <p style={{ whiteSpace: "nowrap", paddingLeft: "50px", textAlign: "center", marginTop: "20px" }}>Sat 08:00 - 12:00</p>
                </div>
                <div style={{ width: "18px", height: "14px", background: "#D9D9D9" }}>
                  <p style={{ whiteSpace: "nowrap", paddingLeft: "50px", textAlign: "center", marginTop: "20px" }}>Sun - Closed</p>
                </div>
              </div>
            </Col>
          </div>

          <div className='child' style={{ margin:"60px"}}>
            <Col lg='6' md='6' className="d-flex justify-content-end align-items-center">
              <h2 className='classic'>Send message</h2>
              <form>
                <div className="input-box">
                  <input type="text" required placeholder="Your Full Name" name="name" />
                </div>
                <div className="input-box">
                  <input type="phone" required placeholder="+36 01201123" name="phone" />
                </div>
                <div className="input-box">
                  <input type="email" required placeholder="example@examle.com" name="email" />
                </div>
                <div className="message-box">
                  <input type="text" className='message-box' required placeholder="Type your query here...." name="message" />
                </div>
                <div className='input-box'>
                <input  type="submit" value="Send Message" className="btn" style={{ backgroundColor: "black", color: "white"}} />
                </div>
              </form>
            </Col>
          </div>
        </Row>
        <GoogleMaps />
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
