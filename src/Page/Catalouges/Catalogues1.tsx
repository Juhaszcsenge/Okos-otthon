import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect } from 'react'
import { Row, Col, Container, Image , Button } from 'react-bootstrap'
import Footer from '../../Component/Footer'
// import './cat.css'

const Catalogues1 = () => {


    const pdf = () => {
        window.open('/SmartHome_Brochure_HR.pdf'); 
      };

      const pdf1 = () => {
        window.open('/SmartHome_Brochure.pdf'); 
      };

      const pdf2 = () => {
        window.open('/Yachts.pdf'); 
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
            <h2 className='header-h2'>Catalogues</h2>
            <p className='first-header'>Discover innovation in our smart living catalog. Explore solutions that elevate your lifestyle to new heights.</p>
            </div>
        </div>
      </section>
    </div>
    <Container fluid >
      <Row style={{ backgroundImage: "url('/11.jpg')", backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>
        <Col md={6}  className='d-flex justify-content-center' style={{ backgroundColor: 'rgba(217, 217, 217, 0.67)', padding: '20px', backgroundRepeat: "no-repeat", paddingLeft: "50px"  }}>
          <Image src="./house2.png" alt="Your Image"  />
        </Col>       
        <Col style={{backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', backgroundColor: "rgba(217, 217, 217, 0.67)", backgroundRepeat: "no-repeat"}} md={6} className="text-left" >
        <h2 className='catalogue-h2' style={{ marginBottom: '40px' }}>Discover the Future of Smart Living</h2>
          <p style={{ color: "black", marginBottom: '40px', marginRight: "290px" }}>Welcome to our world of intelligent solutions and innovative technology. Our Smart Home Catalog provides a curated selection of cutting-edge products and systems designed to enhance your lifestyle. Explore the details, benefits, and opportunities that await you, and embark on a journey to make your home smarter, more comfortable, and more secure. 
          Your connected, convenient, and efficient living experience starts here. Let's redefine the way you live.</p>
          <Button style={{ backgroundColor: 'transparent', borderColor: 'black', borderRadius: "0", color: "black", fontWeight: 'bolder', width: "20%" }}  onClick={pdf}> Read More</Button>
        </Col>
      </Row>
    </Container>

    <Container fluid >
      <Row style={{ backgroundImage: "url('/12.png')",  backgroundRepeat: "no-repeat", backgroundSize: 'cover' }}>
        <Col md={6}  className='d-flex justify-content-center' style={{ backgroundColor: 'rgba(217, 217, 217, 0.67)', padding: '20px',  paddingLeft: "50px" }}>
          <Image src="./house1.png" alt="Your Image" style={{width: "63%"}} />
        </Col>       
        <Col style={{backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', backgroundColor: "rgba(217, 217, 217, 0.67)"}} md={6} className="text-left" >
        <h2 className='catalogue-h2' style={{ marginBottom: '40px' }}>Innovative Living, Intelligent Solutions</h2>
          <p style={{ color: "black", marginBottom: '40px', marginRight: "290px" }}> Our Smart Home Presentation unveils an array of intelligent solutions that redefine modern living. From energy-efficient climate control to advanced security, seamless automation, and immersive entertainment, our smart home features elevate your lifestyle. Explore the endless possibilities, 
          discover the convenience, and embrace a new era where your home adapts to you. Welcome to the future of smart living, where every day is extraordinary.</p>
          <Button style={{ backgroundColor: 'transparent', borderColor: 'black', borderRadius: "0", color: "black", fontWeight: 'bolder', width: "20%"}} onClick={pdf1}> Read More</Button>
        </Col>
      </Row>
    </Container>

    <Container fluid>
  <Row style={{ backgroundImage: "url('/13.jpg')",  backgroundRepeat: "no-repeat", backgroundSize: 'cover'}}>
    <Col md={6} className='d-flex justify-content-center' style={{ backgroundColor: 'rgba(217, 217, 217, 0.67)', padding: '20px',  paddingLeft: "50px"  }}>
      <Image src="./boat.png" alt="Your Image" />
    </Col>
    <Col md={6} style={{ backgroundSize: 'cover', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', backgroundColor: "rgba(217, 217, 217, 0.67)" }}>
      <h2 style={{ marginBottom: '40px' }} className='catalogue-h2'>Future of Luxury Living on Yachts</h2>
      <p style={{ color: "black", marginBottom: '40px', marginRight: "290px" }}>Experience the epitome of modern comfort and convenience as we introduce Smart Home Solutions for Yachts. Our cutting-edge technology seamlessly integrates with your onboard environment, offering intuitive control over lighting, climate, entertainment, security, and more. 
      Elevate your yachting experience, whether it's for relaxation, entertainment, or work, with a level of customization and luxury that's unparalleled.</p>
      <Button style={{ backgroundColor: 'transparent', borderColor: 'black', borderRadius: "0", color: "black", fontWeight: 'bolder', width: "20%" }} onClick={pdf2}> Read More</Button>
    </Col>
  </Row>
</Container>
      <Footer />
    </section>
  )
}

export default Catalogues1