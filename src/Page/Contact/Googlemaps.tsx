import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";


  const GoogleMaps = () => {
    const mapStyles = {
        width: '100%',
        height: '100%',
      };
    
  
   
    return (
        <Container className="map">
            <section id="menux">
                    <div className="row.map"> {/*Google map-et megjelenítek, hogy hol található az étterem. Mellette egy contact formmal,hogy küldjenek üzenetet nekünk*/}
                    <iframe 
                    title="Google Térkép"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30479.316857279693!2d19.087223693324653!3d47.528542655568806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741db0f2ac18b29%3A0x491217be41417b15!2zUGzDqWhjc8OhcmRh!5e0!3m2!1shu!2shu!4v1681907050117!5m2!1shu!2shu" 
                    width="100%" 
                    height="300px" 
                    style={{border:0}}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
            </section>
        </Container>
    )
}
export default GoogleMaps;