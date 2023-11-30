import React from 'react';
import GoogleMaps from './Googlemaps';
import { Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './contact.css';
import Footer from '../../Component/Footer';

const Contact = () => {
  return (
    <section>
      <div>
      <section className='header'>
        <div className='gradient' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img className='first-img' src='il_1588xN 2.png' alt="" style={{width: "100%", height: "100%"}}/>
            <div style={{ position: 'absolute', top: '30%', left: '0', transform: 'translate(30%, -50%)', textAlign: 'center',  width: '20%', padding: '30px' }}>
            </div>
            <div className='gradient-text' style={{position: "relative", width: "100%", height: "315px", flexShrink: "0", padding:"30px",  background: "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #0E0E0E 66.15%)"}}>
            <h2 className='header-h2'>Contact</h2>
            </div>
        </div>
      </section>
    </div>
      <div className='parent'>
        <Row>
          {/* <div className='child' style={{ display: "inline-block"}}> */}
            <Col lg='6' md='6'  className="d-flex flex-column align-items-end">
                <h2 className='classic ml-auto' style={{marginRight: "100px"}}>Get in touch with us</h2>
                <div className='classic ml-auto' style={{marginRight: "50px", height: "20%"}}>
                <h2 style={{ paddingRight: "200px", fontSize: "20px"}}>Phone Number</h2>
                <div className='form  ml-auto' style={{height: "30px", paddingRight: "90px"}}>
                  <img src='./Vector.png' alt='' className='d-inline' style={{ paddingRight:"10px"}} />
                  <p className='form mx-auto d-inline' style={{fontSize: "14px"}}>Office Number +36 1234567899</p>
                </div>
                <div className='form mx-auto' style={{height: "30px",  paddingRight: "40px"}} >
                <img src='./Vector.png' alt='' className='d-inline' style={{ paddingRight:"10px"}} />
                  <p  className='form mx-auto d-inline' style={{fontSize: "14px"}} >Technical Information +36 1234567899</p>
                </div>
                <h2 style={{ paddingRight: "200px", paddingBottom: "15px", paddingTop: "30px", fontSize: "20px"}}>Email address</h2>
                <div className='form mx-auto' style={{height: "30px",  paddingRight: "170px"}} >
                <img src='./Message_light.png' alt='' className='d-inline' style={{ paddingRight:"10px"}} />
                  <p  className='form mx-auto d-inline' style={{ whiteSpace: "nowrap",  textAlign: "center", fontSize: "14px" }}>support@email.com</p>
                </div>
                <div  className='form mx-auto' style={{height: "30px", paddingRight: "150px"}} >
                <img src='./Message_light.png' alt='' className='d-inline' style={{ paddingRight:"10px"}} />
                  <p className='form mx-auto d-inline' style={{ whiteSpace: "nowrap",  textAlign: "center", marginTop: "20px", fontSize: "14px" }}>otheremail@email.com</p>
                </div>
                <h2 style={{ paddingRight: "220px", paddingBottom: "15px", paddingTop: "30px", fontSize: "20px"}}>Open Hours</h2>
                <div className='form mx-auto' style={{height: "30px", paddingRight: "140px"}} >
                <img src='./Time_light.png' alt='' className='d-inline' style={{ paddingRight:"10px"}} />
                  <p className='form mx-auto d-inline' style={{ whiteSpace: "nowrap",textAlign: "center", fontSize: "14px" }}>Mon - Fri - 08:00 - 16:00</p>
                </div>
                <div className='form mx-auto' style={{height: "30px", paddingRight: "190px"}} >
                <img src='./Time_light (1).png' alt='' className='d-inline' style={{ paddingRight:"10px"}} />
                  <p  className='form mx-auto d-inline' style={{ whiteSpace: "nowrap", textAlign: "center", marginTop: "20px", fontSize: "14px" }}>Sat 08:00 - 12:00</p>
                </div>
                <div className='form mx-auto' style={{height: "30px", paddingRight: "220px"}} >
                <img src='./Time_light (2).png' alt='' className='d-inline' style={{ paddingRight:"10px"}} />
                  <p className='form mx-auto d-inline' style={{ whiteSpace: "nowrap",  textAlign: "center", marginTop: "20px", fontSize: "14px" }}>Sun - Closed</p>
                </div>
                </div>
            </Col>
            <Col lg='6' md='6' className="flex-column">
              <h2 className='classic' style={{marginRight: "560px"}}>Send message</h2>
              <div>
              <form className='form' style={{width: "500px"}} >
              <label className='label' style={{ marginRight: "370px"}}>Name</label>
                <div className="input-box " >       
                  <input type="text" required placeholder="Your Full Name" name="name" />
                </div>
                <label  className='label'>Phone number</label>
                <div className="input-box">               
                  <input type="phone" required placeholder="+36 01201123" name="phone" />
                </div>
                <label  className='label'>Email Address</label>
                <div className="input-box">
                  <input type="email" required placeholder="example@examle.com" name="email" />
                </div>
                <label  className='label' style={{marginRight:"350px"}}>Message</label>
                <div className="message-box " style={{width: "500px", marginRight: "500px"}}>
                  <input type="text" className='message-box' required placeholder="Type your query here...." name="message" />
                </div>
                <div className='input-box' style={{marginBottom: "40px"}}>
                <input  type="submit" value="Send Message" className="btn"  style={{ backgroundColor: 'transparent', borderColor: 'white', borderRadius: "0", color: "white", fontWeight: 'bolder', width: "30%", marginRight: "280px" }} />
                </div>
              </form>
              </div>
            </Col>
          
        </Row>
        <GoogleMaps />
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
