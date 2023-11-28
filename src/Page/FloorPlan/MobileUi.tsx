import React, { useState } from 'react';
import './mobileUi.css'




type Room = {
    id: string;
    img: string;
    name: string;
    title: string;
  };



  const MobileUi = () => {
    const rooms: Room[] = [
      { id: 'kitchen', img:'/image 1 (1).png',  name: 'Kitchen Light', title: 'Off' },
      { id: 'kitchen', img:'/image 2.png',   name: 'Kitchen Light', title: 'On' },
      { id: 'living-room', img:'/image 3 (1).png',   name: 'Living Room', title: 'Off' },
      { id: 'living-room', img:'image 4.png',   name: 'Living Room', title: 'On' },
      { id: 'bedroom', img:'/image 5 (1).png',   name: 'Dinning Room', title: 'Off' },
      { id: 'bedroom', img:'/image 6.png',   name: 'Dinning Room', title: 'On' },
      { id: 'bathroom1', img:'/image 8 (1).png',   name: 'Bathroom 1', title: 'Off' },
      { id: 'bathroom1', img:'image 7.png',   name: 'Bathroom 1', title: 'On' },
      { id: 'bathroom2', img:'/image 10 (1).png',   name: 'Bathroom 2', title: 'Off' },
      { id: 'bathroom2', img:'/image 9.png',   name: 'Bathroom 2', title: 'On' },
      { id: 'dinning-room', img:'/image 11 (1).png',   name: 'Bedroom', title: 'Off' },
      { id: 'dinning-room', img:'/image 12.png',   name: 'Bedroom', title: 'On' },
      { id: 'guest-room', img:'/image 13.png',   name: 'Guest Room', title: 'Off' },
      { id: 'guest-room', img:'/image 14.png',   name: 'Guest Room', title: 'On' },
      { id: 'terrace', img:'/image 15.png',   name: 'Terrace', title: 'Off' },
      { id: 'terrace', img:'/image 16.png',   name: 'Terrace', title: 'On' },
    ];


    const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

    const handleLightSwitch = (roomId: string) => {
    setSelectedRoom((prevRoom) => (prevRoom === roomId ? null : roomId));
}


return (
    <div className='flex-container' >
      {Array.from({ length: rooms.length / 2 }, (_, rowIndex) => (
        <div key={rowIndex} style={{ display: 'flex' }}>
          {Array.from({ length: 2 }, (_, colIndex) => {
            const roomIndex = rowIndex * 2 + colIndex;
            const room = rooms[roomIndex];
            const isSelected = selectedRoom === room.id;

            return (
                <button
                key={room.id}
                onClick={() => handleLightSwitch(room.id)}
                style={{
                  flex: 1,
                  margin: '4px',
                //   padding: '8px',
                  background: isSelected ? '#FFFFFF' : '#FFFFFF',
                  color: isSelected ? '#fff' : '#2c3e50',
                  borderRadius: "20px",
                  height: "60px",
                  width:"150px", 
                  borderColor: "white",
                  boxShadow: "", 
                  cursor: "pointer"
                }}
              >
                <img src={room.img} alt='' style={{width:"150px", height:"60px"}}/>
              </button>
              
            );
          })}
        </div>
      ))}
    </div>
  );
};



export default MobileUi;
