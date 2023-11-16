import { Container } from "react-bootstrap";


  const GoogleMaps = () => {
    // const mapStyles = {
    //     width: '100%',
    //     height: '100%',
    //   };
    
  
   
    return (
        <Container className="map">
            <section id="menux">
                    <div className="row.map"> 
                    <iframe 
                    title="Google Térkép"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2781.0340574484753!2d15.99875297665604!3d45.81057631026061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4765d64cce338533%3A0x785b3ddf9725447d!2sUl.%20Vjekoslava%20Heinzela%2040%2C%2010000%2C%20Zagreb%2C%20Horv%C3%A1torsz%C3%A1g!5e0!3m2!1shu!2shu!4v1699891179607!5m2!1shu!2shu" 
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