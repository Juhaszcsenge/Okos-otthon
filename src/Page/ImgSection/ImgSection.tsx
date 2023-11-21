import React, { useEffect } from 'react';
import './ImgSection.css'

const ImgSection = () => {
  useEffect(() => {
    languagePreferencesSystem.reloadAllLanguageResources()
  }, []);
  return (
    <section className='imgSection'>
        <div className='cover' style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img className='section-img' alt="" src='Chat Bot (13).png' style={{width: "100%", height: "100%"}} />
            <div className='term' >
        <p className='img-text'>
        Temp sensor animation, giff or image
        </p>
        </div>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img className='section-img' alt="" src='Chat Bot (14).png' style={{width: "100%", height: "100%",marginTop:"-60px"}} />
            <div className='term'>
        <p className='img-text'>
        Air Quality sensoranimation, giff or image
        </p>
        </div>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <img className='section-img' alt="" src='Chat Bot (15).png' style={{width: "100%", height: "100%", marginTop:"-60px"}} />
            <div  className='term-up' >
        <p className='img-text'>
        Humidity sensor animation, giff or image
        </p>
        </div>
        <div className='contentContainer'>
          <h2 data-languagePartIdentifier="your_comfort">Your Comfort, Our Priority:</h2>
          <h2 data-languagePartIdentifier="advanced_sensor">Advanced sensor technology</h2>
          <p className='imgText' style={{padding:"30px", textAlign: "left", marginBottom:"30px"}} data-languagePartIdentifier="advanced_sensor_desc">
          Discover the essence of smart living through our advanced sensors. Our temperature sensor takes the role of your comfort curator, diligently adjusting each room's climate to create an ideal living space. 
          The air quality sensor guarantees the air you breathe is consistently pure and fresh, seamlessly adjusting ventilation for optimal well-being. Meanwhile, the humidity sensor maintains the perfect balance to prevent excess dryness or moisture, ensuring your comfort and health. 
          These cutting-edge sensors effortlessly integrate into your smart home, fostering a harmonious and healthier living environment where technology adapts to your needs, enhancing your lifestyle with unparalleled convenience and well-being.
          </p>
        </div>
        </div>
        <div className='smart-climate' style={{marginTop: "20px"}}>
          <div className='validation' style={{background: "var(--dark-background, #181818)"}}>
            <h2 style={{textAlign:"center"}} data-languagePartIdentifier= "smart_climate">Smart Climate Solutions</h2>
            <p className='black-p' data-languagePartIdentifier= "smart_climate_desc_short">Elevate your environment with our advanced climate control solutions, crafting a personalised Home haven</p>
          </div>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img className='section-img' alt="" src='Chat Bot (16).png' style={{ width: '100%', height: '100%', marginTop:"-40px" }} />
        <div className='term-center' >
        <p>
            Temp control module and actuators animation, giff or image
        </p>
        </div>
        <div className='comfort-container' >
          <p className='img-text' data-languagePartIdentifier= "smart_climate_desc_long">Optimize your home's climate with our Temperature Control Module and Heating Actuators. 
            Ensure comfort and energy efficiency with precision temperature management and heating control for each room. 
            Experience a smarter, more eco-friendly way of living.</p>
        </div>
      </div>
        <div className='smart-climate'>
          <div className='validation' style={{background: "black"}}>
            <h2 className='validation-h2'  data-languagePartIdentifier= "advanced_home_security">Advanced Home Securitys</h2>
            <p className='black-p' data-languagePartIdentifier= "advanced_home_security_desc">Unlock the seamless potential of smart living with our integrated sensors, monitoring system, and home control technology, offering a comprehensive,
            intuitive solution that brings convenience, security, and personalized living to the forefront of your daily experience.</p>
          </div>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img className='section-img' alt="" src='Chat Bot (17).png' style={{width: "100%", height: "100%"}} />
        <div className='term-right' >
        <p className='imgText'>
        Door and window contact sensor animation, giff or image
        </p>
        </div>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img className='section-img' alt="" src='Chat Bot (18).png' style={{width: "100%", height: "100%", marginTop:"-60px"}} />
        <div  className='term-right-down' >
        <p className='imgText'>
        Motion detector animation, giff or image
        </p>
        </div>
        <div className='keeping-home'>
          <h2 className='keeping-h2'  data-languagePartIdentifier= "keeping_your_home_safe">Keeping Your Home Safe:</h2>
          <h2  className='keeping-h2' data-languagePartIdentifier= "smart_security_solutions">Smart Security Solutions </h2>
          <p  className='keeping-imgText' data-languagePartIdentifier= "smart_security_solutions_desc">
            Elevate your home's security and convenience with our Door and Window Contact Sensors and Motion Detectors. 
            Our Contact Sensors provide an added layer of protection by alerting you to door or window activity, 
            while our Motion Detectors keep a watchful eye on your home, detecting any movement and ensuring peace of mind. 
            Embrace a more secure and efficient living space where technology works to enhance your safety and daily life.
          </p>
        </div>
        </div>
        <div className='smart-climate'>
          <div className='validation' style={{background: "black"}}>
            <h2 className='validation-h2' data-languagePartIdentifier= "realtime_home_management">Real-Time Home Management</h2>
            <p className='black-p' data-languagePartIdentifier= "realtime_home_management_desc_short" >Discover the future of home management with our integrated sensors, monitoring system, and home control technology, providing a holistic 
          solution that not only brings convenience, security, and personalization to the forefront but also keeps you informed with
          real-time notifications about every aspect of your home.</p>
          </div>
        </div>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <img className='section-img' alt="" src='Chat Bot (19).png' style={{width: "100%", height: "100%"}} />
        <div  className='term-center'>
        <p className='img-text'>
        Water leak detector animation, giff or image
        </p>
        </div>
        <div  className='term-optimize'>
        <p className='img-text-safeguard' style={{ padding: '20px' }} data-languagePartIdentifier=  "realtime_home_management_desc_long">
        Safeguard your home with our advanced Water Leak Sensor, your trusted Early Warning System against potential water disasters. 
        This intelligent sensor monitors for early leaks, ensuring timely alerts to prevent issues. Enjoy peace, knowing your home is protected.
        </p>
      </div>
        </div>
        <div className='smart-climate'>
          <div className='validation' style={{background: "black"}}>
            <h2 className='validation-h2' data-languagePartIdentifier= "beehive_energy_saving">BeeHive AI Energy Saving</h2>
            <p className='black-p' data-languagePartIdentifier= "beehive_energy_saving_desc">Beehive AI transforms your Home into a smart and energy-efficient living space. 
                Harnessing advanced AI technology, it optimizes energy usage by learning your preferences and adjusting heating, 
                cooling, and lighting accordingly. Experience reduced energy bills and a greener lifestyle, all with the touch of a button.</p>
            <div className='first-section'>
            {/* <div className='last-section'> */}
            </div>
            {/* </div> */}
            <button style={{border: "1px solid var(--light-text, #FFF)", padding: "20px", margin:"40px", boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)", background:"black", color:"white"}}>Save Energy</button>
          </div>
        </div>
    </section>
  );
}

export default ImgSection;
