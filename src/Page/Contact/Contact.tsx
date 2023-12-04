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
      <section className='header' style={{backgroundImage: "url('/il_1588xN 2.png')"}}>
        <div className='gradient' >
            {/* <img className='first-img' src='il_1588xN 2.png' alt="" /> */}
            <div style={{ position: 'absolute', top: '30%', left: '0', transform: 'translate(30%, -50%)', textAlign: 'center', width: '20%', padding: '30px' }}>
            </div>
            <div className='gradient-text'>
            <h2 className='header-h2' data-languagePartIdentifier="m_contact">Contact</h2>
            {/* <p className='first-header'  data-languagePartIdentifier="redefine_modern_living">Redefine modern living with our intelligent Home Ecosystem</p> */}
            </div>
        </div>
      </section>
    </div>
      <div className='parent' style={{marginTop: "200px"}}>
        <Row style={{width: "100%"}}>
          {/* <div className='child' style={{ display: "inline-block"}}> */}
            <Col lg='6' md='6'  className="d-flex flex-column align-items-end">
                <h2 className='classic-g ml-auto' data-languagePartIdentifier="get_in_touch">Get in touch with us</h2>
                <div className='classic-f ml-auto' style={{marginRight: "50px", height: "20%"}}>
                <h2 className='h2-f'>Phone Number</h2>
                <div className='form  ml-auto'  style={{height: "30px", paddingRight: "90px"}}>
                  <img src='./phone--android-phone-mobile-device-smartphone-iphone.png' alt='' className='d-inline' style={{ paddingRight:"10px", height: "22px", width:"32px"}} />
                  <p className='form mx-auto d-inline' style={{fontSize: "14px"}} data-languagePartIdentifier="office">Office Number +36 1234567899</p>
                </div>
                <div className='form mx-auto' style={{height: "30px",  paddingRight: "40px"}} >
                <img src='./phone--android-phone-mobile-device-smartphone-iphone.png' alt='' className='d-inline' style={{ paddingRight:"10px", height: "22px", width:"32px"}} />
                  <p  className='form mx-auto d-inline' style={{fontSize: "14px"}} data-languagePartIdentifier="technical">Technical Information +36 1234567899</p>
                </div>
                <h2 className='h2-f' data-languagePartIdentifier="email">Email address</h2>
                <div className='form mx-auto' style={{height: "30px",  paddingRight: "170px"}} >
                <img src='./Message_light (1).png' alt='' className='d-inline' style={{ paddingRight:"10px",  height: "28px", width:"36px"}} />
                  <p  className='form mx-auto d-inline' style={{ whiteSpace: "nowrap",  textAlign: "center", fontSize: "14px" }}>support@email.com</p>
                </div>
                <div  className='form mx-auto' style={{height: "30px", paddingRight: "150px"}} >
                <img src='./Message_light (1).png' alt='' className='d-inline' style={{ paddingRight:"10px",  height: "28px", width:"36px"}} />
                  <p className='form mx-auto d-inline' style={{ whiteSpace: "nowrap",  textAlign: "center", marginTop: "20px", fontSize: "14px" }}>otheremail@email.com</p>
                </div>
                <h2 className='h2-f' data-languagePartIdentifier="open">Open Hours</h2>
                <div className='form mx-auto' style={{height: "30px", paddingRight: "140px"}} >
                <img src='./Time_light (4).png' alt='' className='d-inline' style={{ paddingRight:"10px", height: "36px", width:"38px", paddingBottom: "10px"}} />
                  <p className='form mx-auto d-inline' style={{ whiteSpace: "nowrap",textAlign: "center", fontSize: "14px" }}>Mon - Fri - 08:00 - 16:00</p>
                </div>
                <div className='form mx-auto' style={{height: "30px", paddingRight: "190px"}} >
                <img src='./Time_light (5).png' alt='' className='d-inline' style={{ paddingRight:"10px", width: "38px", height: "36px", paddingBottom: "10px"}} />
                  <p  className='form mx-auto d-inline' style={{ whiteSpace: "nowrap", textAlign: "center", marginTop: "20px", fontSize: "14px" }}>Sat 08:00 - 12:00</p>
                </div>
                <div className='form-c mx-auto' style={{}} >
                <img src='./Time_light (3).png' alt='' className='d-inline' style={{ paddingRight:"10px",  height: "36px", width:"38px",  paddingBottom: "10px"}} />
                  <p className='form mx-auto d-inline' style={{ whiteSpace: "nowrap",  textAlign: "center", marginTop: "20px", fontSize: "14px", marginRight: "100px" }}>Sun - Closed</p>
                </div>
                </div>
            </Col>
            <Col lg='6' md='6' className="flex-column">
              <h2 className='classic' data-languagePartIdentifier="send_message">Send message</h2>
              <div className='send-form'>
              <form className='form'  >
              <label className='label-n' data-languagePartIdentifier="name">Name</label>
                <div className="input-box " >       
                  <input type="text" required placeholder="Your Full Name" name="name" />
                </div>
                <label  className='label-p' data-languagePartIdentifier="phone">Phone number</label>
                <div className="input-box">               
                  <input type="phone" required placeholder="+36 01201123" name="phone" />
                </div>
                <label  className='label-p' data-languagePartIdentifier="email">Email Address</label>
                <div className="input-box">
                  <input type="email" required placeholder="example@examle.com" name="email" />
                </div>
                <label  className='label-n' data-languagePartIdentifier="message">Message</label>
                <div className="message-box " >
                  <input type="text" className='message-box' required placeholder="Type your query here...." name="message" />
                </div>
                <div className='input-box-btn' style={{marginBottom: "40px"}}>
                <input  type="submit" value="Send Message" data-languagePartIdentifier="send_message" className="contact-button"></input>
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
