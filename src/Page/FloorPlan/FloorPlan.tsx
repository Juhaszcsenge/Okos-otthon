import React, { useState } from 'react';

const FloorPlan: React.FC = () => {
    const [selectedSection, setSelectedSection] = useState<string | null>(null);
  
    // const handleLightSwitch = (room: string) => {
    //   setSelectedRoom(room);
    // };
  
    // const getRoomStyle = (room: string) => {
    //   return {
    //     filter: selectedRoom === room ? 'brightness(1)' : 'brightness(0.3)',
    //   };
    // };

    const handleSectionSwitch = (section: string) => {
        setSelectedSection(section);
      };
    
      const getSectionStyle = (section: string) => {
        const baseBrightness = 0.3; // Alapértelmezett fényerősség
        const selectedBrightness = 1; // Kijelölt szekció fényerőssége
    
        const brightness = selectedSection === section ? selectedBrightness : baseBrightness;
    
        return {
            filter: `brightness(${brightness})`,
          };
        };
  
    return (
      <div>
        <img
          src="floorplan.jpg"
          alt="Floor Plan"
          style={{ width: '700px', height: '500px',  ...getSectionStyle('kitchen') }}
        />
        <div>
          <button onClick={() => handleSectionSwitch('kitchen')}>Konyha lámpa</button>
          <button onClick={() => handleSectionSwitch('bathroom')}>Fürdőszoba lámpa</button>
         
        </div>
      </div>
    );
  };
  
  export default FloorPlan;
