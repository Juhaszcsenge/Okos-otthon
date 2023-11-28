import React, { useState } from 'react'

const styles = {
    header: {
    backgroundImage: 'url("/floorplan.jpg")',
      height: '100vh',
      width:"100%",
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    content: {
      height: '100%',
      width: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    kitchen: {
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
    },
  };



const Kitchen = () => {
    const [isKitchenVisible, setIsKitchenVisible] = useState(false);
  
    return (
      <div style={styles.header}>
        <div style={styles.content}>
          <button onClick={() => setIsKitchenVisible(!isKitchenVisible)}>Kitchen</button>
          <div style={isKitchenVisible ? { ...styles.content, ...styles.kitchen } : styles.content}>Hello World!</div>
        </div>
      </div>
    );
}

export default Kitchen
