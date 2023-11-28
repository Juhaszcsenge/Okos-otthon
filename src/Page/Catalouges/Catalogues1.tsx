import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Footer from '../../Component/Footer'


const Catalogues1 = () => {


    const pdf = () => {
        window.open('/SmartHome_Brochure_HR.pdf'); 
      };
    
    useEffect(() => {
      languagePreferencesSystem.reloadAllLanguageResources()
    }, []);



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
      <div className='parent'  style={{backgroundImage: "url('11.jpg')", backgroundSize: "cover", height: "600px"}}>
      <Row style={{backgroundColor: "rgba(217, 217, 217, 0.67)"}}>
    <Col lg='6' md='6' style={{display: 'flex', alignItems: 'center'}}>
      <div className='form'>
        <img src='11.jpg' alt='' style={{width: "700px", height: "400px"}}></img>
      </div>
    </Col>

    <Col lg='6' md='6' className="d-flex flex-column justify-content-center">
      <h2 data-languagePartIdentifier="discover_the_future" className='catalogue-h2'>Discover the Future of Smart Living</h2>
      <p data-languagePartIdentifier="discover_the_future_desc" className='catalogue-p'>
        Welcome to our world of intelligent solutions and innovative technology. Our Smart Home Catalog provides a curated selection of cutting-edge products and systems designed to enhance your lifestyle. Explore the details, benefits, and opportunities that await you, and embark on a journey to make your home smarter, more comfortable, and more secure. Your connected, convenient, and efficient living experience starts here. Let's redefine the way you live.
      </p>
      <button className='catalouge-button' onClick={pdf}>Read More</button>
    </Col>
  </Row>
      </div>
      <Footer />
    </section>
  )
}

export default Catalogues1