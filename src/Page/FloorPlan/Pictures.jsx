// import room from 'szoba.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { Row, Col} from 'react-bootstrap'

import './index.css'




export default function Pictures() {
  const [selectedRoom] = useState(null);

  // const handleButtonClick = (room) => {
  //   setSelectedRoom(room);
  // };

  // const handleLightSwitch = (roomId) => {
  //   setSelectedRoom((prevRoom) => (prevRoom === roomId ? null : roomId));
  // };

 

  const StyledButton = ({ onClick, isSelected, img }) => (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        margin: '4px',
        // background: isSelected ? '#FFFFFF' : '#FFFFFF',
        color: isSelected ? '#fff' : '#2c3e50',
        borderRadius: "20px",
        height: "60px",
        width: "150px",
        borderColor: "white",
        boxShadow: "",
        cursor: "pointer"
      }}
    >
      <img src={img} alt='' style={{ width: "150px", height: "60px" }} />
    </button>
  );

  const root = document.querySelector(':root');

  function leftBedRoomButtonOn() {
    root.style.setProperty('--leftBedRoom', `${0}%`);
  }

  function leftBedRoomButtonOff() {
    root.style.setProperty('--leftBedRoom', `${50}%`);
  }

  function rightBedRoomButtonOff() {
    root.style.setProperty('--rightBedRoom', `${50}%`);
  }

  function rightBedRoomButtonOn() {
    root.style.setProperty('--rightBedRoom', `${0}%`);
  }

  function kitchenButtonOff() {
    root.style.setProperty('--kitchen', `${50}%`);
  }

  function kitchenButtonOn() {
    root.style.setProperty('--kitchen', `${0}%`);
  }

  function leftTerraceButtonOn(){
    root.style.setProperty('--leftTerrace',`${0}%`);
  }
  function leftTerraceButtonOff(){
    root.style.setProperty('--leftTerrace',`${50}%`);
  }
  function livingRoomButtonOn(){
    root.style.setProperty('--livingRoom',`${0}%`);
  }
  function livingRoomButtonOff(){
    root.style.setProperty('--livingRoom',`${50}%`);
  }
 function topTerraceButtonOn(){
  root.style.setProperty('--topTerrace', `${0}%`);
 } 
 function topTerraceButtonOff(){
  root.style.setProperty('--topTerrace', `${50}%`);
 }
//  function leftTerraceButtonOn(){
//   root.style.setProperty('--leftTerrace', `${0}%`);
//  } 
//  function leftTerraceButtonOff(){
//   root.style.setProperty('--leftTerrace', `${50}%`);
//  }
function leftBathRoomButtonOn(){
  // root.style.setProperty('--leftbathRoom', `${0}%`);
  root.style.setProperty('--bathRoom',`${0}%`)
  root.style.setProperty('--rightHalf', `${0}%`);
}
function bathRoomButtonOff(){
  root.style.setProperty('--rightHalf', `${50}%`);
  root.style.setProperty('--bathRoom',`${50}%`)
}
 
  return ( 
    <Row style={{marginTop: "300px"}}>
    <Col md={6} className='d-flex justify-content-center'>
    <div className="mainWrapper">
      <div className="container-pictures">
        <div className="houseImage">
          <div className="imageBlanket">
            <div className="blanketRows">
              <div className="blanketCols" id="a01" />
              <div className="blanketCols" id="a02" />
              <div className="blanketCols" id="a03" />
              <div className="blanketCols" id="a04" />
              <div className="blanketCols" id="a05" />
              <div className="blanketCols" id="a06" />
              <div className="blanketCols" id="a07" />
              <div className="blanketCols" id="a08" />
              <div className="blanketCols" id="a09" />
              <div className="blanketCols" id="a10" />
              <div className="blanketCols" id="a11" />
              <div className="blanketCols" id="a12" />
              <div className="blanketCols" id="a13" />
              <div className="blanketCols" id="a14" />
              <div className="blanketCols" id="a15" />
              <div className="blanketCols" id="a16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="b01" />
              <div className="blanketCols" id="b02" />
              <div className="blanketCols" id="b03" />
              <div className="blanketCols" id="b04" />
              <div className="blanketCols" id="b05" />
              <div className="blanketCols" id="b06" />
              <div className="blanketCols" id="b07" />
              <div className="blanketCols" id="b08" />
              <div className="blanketCols" id="b09" />
              <div className="blanketCols" id="b10" />
              <div className="blanketCols" id="b11" />
              <div className="blanketCols" id="b12" />
              <div className="blanketCols" id="b13" />
              <div className="blanketCols" id="b14" />
              <div className="blanketCols" id="b15" />
              <div className="blanketCols" id="b16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="c01" />
              <div className="blanketCols" id="c02" />
              <div className="blanketCols" id="c03" />
              <div className="blanketCols" id="c04" />
              <div className="blanketCols" id="c05" />
              <div className="blanketCols" id="c06" />
              <div className="blanketCols" id="c07" />
              <div className="blanketCols topTerrace" id="c08" />
              <div className="blanketCols topTerrace" id="c09" />
              <div className="blanketCols topTerrace" id="c10" />
              <div className="blanketCols topTerrace" id="c11" />
              <div className="blanketCols rightBedRoom" id="c12" />
              <div className="blanketCols rightBedRoom" id="c13" />
              <div className="blanketCols rightBedRoom" id="c14" />
              <div className="blanketCols rightBedRoom" id="c15" />
              <div className="blanketCols rightBedRoom" id="c16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="d01" />
              <div className="blanketCols" id="d02" />
              <div className="blanketCols" id="d03" />
              <div className="blanketCols" id="d04" />
              <div className="blanketCols" id="d05" />
              <div className="blanketCols" id="d06" />
              <div className="blanketCols" id="d07" />
              <div className="blanketCols topTerrace" id="d08" />
              <div className="blanketCols topTerrace" id="d09" />
              <div className="blanketCols topTerrace" id="d10" />
              <div className="blanketCols topTerrace" id="d11" />
              <div className="blanketCols rightBedRoom" id="d12" />
              <div className="blanketCols rightBedRoom" id="d13" />
              <div className="blanketCols rightBedRoom" id="d14" />
              <div className="blanketCols rightBedRoom" id="d15" />
              <div className="blanketCols rightBedRoom" id="d16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="e01" />
              <div className="blanketCols leftBedRoom" id="e02" />
              <div className="blanketCols leftBedRoom" id="e03" />
              <div className="blanketCols leftBedRoom" id="e04" />
              <div className="blanketCols leftBedRoom" id="e05" />
              <div className="blanketCols leftBedRoom" id="e06" />
              <div className="blanketCols halfCol" id="e07">
                <div className="halfTile leftHalf" />
                <div className="halfTile rightHalf" />
              </div>
              <div className="blanketCols topTerrace" id="e08" />
              <div className="blanketCols topTerrace" id="e09" />
              <div className="blanketCols topTerrace" id="e10" />
              <div className="blanketCols topTerrace" id="e11" />
              <div className="blanketCols rightBedRoom" id="e12" />
              <div className="blanketCols rightBedRoom" id="e13" />
              <div className="blanketCols rightBedRoom" id="e14" />
              <div className="blanketCols rightBedRoom" id="e15" />
              <div className="blanketCols rightBedRoom" id="e16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="f01" />
              <div className="blanketCols leftBedRoom" id="f02" />
              <div className="blanketCols leftBedRoom" id="f03" />
              <div className="blanketCols leftBedRoom" id="f04" />
              <div className="blanketCols leftBedRoom" id="f05" />
              <div className="blanketCols leftBedRoom" id="f06" />
              <div className="blanketCols halfCol" id="f07">
                <div className="halfTile leftHalf" />
                <div className="halfTile rightHalf" />
              </div>
              <div className="blanketCols bathRoom" id="f08" />
              <div className="blanketCols bathRoom" id="f09" />
              <div className="blanketCols bathRoom" id="f10" />
              <div className="blanketCols bathRoom" id="f11" />
              <div className="blanketCols rightBedRoom" id="f12" />
              <div className="blanketCols rightBedRoom" id="f13" />
              <div className="blanketCols rightBedRoom" id="f14" />
              <div className="blanketCols rightBedRoom" id="f15" />
              <div className="blanketCols rightBedRoom" id="f16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols leftTerrace" id="g01" />
              <div className="blanketCols leftBedRoom leftTerrace" id="g02" />
              <div className="blanketCols leftBedRoom" id="g03" />
              <div className="blanketCols leftBedRoom" id="g04" />
              <div className="blanketCols leftBedRoom" id="g05" />
              <div className="blanketCols leftBedRoom" id="g06" />
              <div className="blanketCols halfCol" id="g07">
                <div className="halfTile leftHalf" />
                <div className="halfTile rightHalf" />
              </div>
              <div className="blanketCols bathRoom" id="g08" />
              <div className="blanketCols bathRoom" id="g09" />
              <div className="blanketCols bathRoom" id="g10" />
              <div className="blanketCols bathRoom" id="g11" />
              <div className="blanketCols rightBedRoom" id="g12" />
              <div className="blanketCols rightBedRoom" id="g13" />
              <div className="blanketCols rightBedRoom" id="g14" />
              <div className="blanketCols rightBedRoom" id="g15" />
              <div className="blanketCols rightBedRoom" id="g16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols leftTerrace" id="h01" />
              <div className="blanketCols leftTerrace" id="h02" />
              <div className="blanketCols leftBedRoom" id="h03" />
              <div className="blanketCols leftBedRoom" id="h04" />
              <div className="blanketCols leftBedRoom" id="h05" />
              <div className="blanketCols leftBedRoom" id="h06" />
              <div className="blanketCols halfCol" id="h07">
                <div className="halfTile leftHalf" />
                <div className="halfTile rightHalf" />
              </div>
              <div className="blanketCols bathRoom" id="h08" />
              <div className="blanketCols bathRoom" id="h09" />
              <div className="blanketCols bathRoom" id="h10" />
              <div className="blanketCols bathRoom" id="h11" />
              <div className="blanketCols rightBedRoom" id="h12" />
              <div className="blanketCols rightBedRoom" id="h13" />
              <div className="blanketCols rightBedRoom" id="h14" />
              <div className="blanketCols rightBedRoom" id="h15" />
              <div className="blanketCols rightBedRoom" id="h16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols leftTerrace" id="i01" />
              <div className="blanketCols leftTerrace" id="i02" />
              <div className="blanketCols leftBedRoom" id="i03" />
              <div className="blanketCols leftBedRoom" id="i04" />
              <div className="blanketCols leftBedRoom" id="i05" />
              <div className="blanketCols leftBedRoom" id="i06" />
              <div className="blanketCols halfCol" id="i07">
                <div className="halfTile leftHalf" />
                <div className="halfTile rightHalf" />
              </div>
              <div className="blanketCols bathRoom" id="i08" />
              <div className="blanketCols bathRoom" id="i09" />
              <div className="blanketCols bathRoom" id="i10" />
              {/* változsarva */}
              <div className="blanketCols bathRoom" id="i11" />
              <div className="blanketCols livingRoom" id="i12" />
              <div className="blanketCols livingRoom" id="i13" />
              <div className="blanketCols livingRoom" id="i14" />
              <div className="blanketCols livingRoom" id="i15" />
              <div className="blanketCols livingRoom" id="i16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols leftTerrace" id="j01" />
              <div className="blanketCols leftTerrace" id="j02" />
              <div className="blanketCols kitchen" id="j03" />
              <div className="blanketCols kitchen" id="j04" />
              <div className="blanketCols kitchen" id="j05" />
              <div className="blanketCols kitchen" id="j06" />
              <div className="blanketCols kitchen" id="j07" />
              <div className="blanketCols kitchen" id="j08" />
              <div className="blanketCols kitchen" id="j09" />
              <div className="blanketCols kitchen" id="j10" />
              <div className="blanketCols kitchen" id="j11" />
              <div className="blanketCols livingRoom" id="j12" />
              <div className="blanketCols livingRoom" id="j13" />
              <div className="blanketCols livingRoom" id="j14" />
              <div className="blanketCols livingRoom" id="j15" />
              <div className="blanketCols livingRoom" id="j16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols leftTerrace" id="k01" />
              <div className="blanketCols leftTerrace" id="k02" />
              <div className="blanketCols kitchen" id="k03" />
              <div className="blanketCols kitchen" id="k04" />
              <div className="blanketCols kitchen" id="k05" />
              <div className="blanketCols kitchen" id="k06" />
              <div className="blanketCols kitchen" id="k07" />
              <div className="blanketCols kitchen" id="k08" />
              <div className="blanketCols kitchen" id="k09" />
              <div className="blanketCols kitchen" id="k10" />
              <div className="blanketCols kitchen" id="k11" />
              <div className="blanketCols livingRoom" id="k12" />
              <div className="blanketCols livingRoom" id="k13" />
              <div className="blanketCols livingRoom" id="k14" />
              <div className="blanketCols livingRoom" id="k15" />
              <div className="blanketCols livingRoom" id="k16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="l01" />
              <div className="blanketCols kitchen" id="l02" />
              <div className="blanketCols kitchen" id="l03" />
              <div className="blanketCols kitchen" id="l04" />
              <div className="blanketCols kitchen" id="l05" />
              <div className="blanketCols kitchen" id="l06" />
              <div className="blanketCols kitchen" id="l07" />
              <div className="blanketCols kitchen" id="l08" />
              <div className="blanketCols kitchen" id="l09" />
              <div className="blanketCols kitchen" id="l10" />
              <div className="blanketCols kitchen" id="l11" />
              <div className="blanketCols livingRoom" id="l12" />
              <div className="blanketCols livingRoom" id="l13" />
              <div className="blanketCols livingRoom" id="l14" />
              <div className="blanketCols livingRoom" id="l15" />
              <div className="blanketCols livingRoom" id="l16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols kitchen" id="m01" />
              <div className="blanketCols kitchen" id="m02" />
              <div className="blanketCols kitchen" id="m03" />
              <div className="blanketCols kitchen" id="m04" />
              <div className="blanketCols kitchen" id="m05" />
              <div className="blanketCols kitchen" id="m06" />
              <div className="blanketCols kitchen" id="m07" />
              <div className="blanketCols kitchen" id="m08" />
              <div className="blanketCols kitchen" id="m09" />
              <div className="blanketCols kitchen" id="m10" />
              <div className="blanketCols kitchen" id="m11" />
              <div className="blanketCols livingRoom" id="m12" />
              <div className="blanketCols livingRoom" id="m13" />
              <div className="blanketCols livingRoom" id="m14" />
              <div className="blanketCols livingRoom" id="m15" />
              <div className="blanketCols livingRoom" id="m16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols kitchen" id="n01" />
              <div className="blanketCols kitchen" id="n02" />
              <div className="blanketCols kitchen" id="n03" />
              <div className="blanketCols kitchen" id="n04" />
              <div className="blanketCols kitchen" id="n05" />
              <div className="blanketCols kitchen" id="n06" />
              <div className="blanketCols kitchen" id="n07" />
              <div className="blanketCols kitchen" id="n08" />
              <div className="blanketCols kitchen" id="n09" />
              <div className="blanketCols kitchen" id="n10" />
              <div className="blanketCols kitchen" id="n11" />
              <div className="blanketCols livingRoom" id="n12" />
              <div className="blanketCols livingRoom" id="n13" />
              <div className="blanketCols livingRoom" id="n14" />
              <div className="blanketCols livingRoom" id="n15" />
              <div className="blanketCols livingRoom" id="n16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="o01" />
              <div className="blanketCols" id="o02" />
              <div className="blanketCols" id="o03" />
              <div className="blanketCols" id="o04" />
              <div className="blanketCols" id="o05" />
              <div className="blanketCols" id="o06" />
              <div className="blanketCols" id="o07" />
              <div className="blanketCols" id="o08" />
              <div className="blanketCols" id="o09" />
              <div className="blanketCols" id="o10" />
              <div className="blanketCols" id="o11" />
              <div className="blanketCols" id="o12" />
              <div className="blanketCols" id="o13" />
              <div className="blanketCols" id="o14" />
              <div className="blanketCols" id="o15" />
              <div className="blanketCols" id="o16" />
            </div>
            <div className="blanketRows">
              <div className="blanketCols" id="p01" />
              <div className="blanketCols" id="p02" />
              <div className="blanketCols" id="p03" />
              <div className="blanketCols" id="p04" />
              <div className="blanketCols" id="p05" />
              <div className="blanketCols" id="p06" />
              <div className="blanketCols" id="p07" />
              <div className="blanketCols" id="p08" />
              <div className="blanketCols" id="p09" />
              <div className="blanketCols" id="p10" />
              <div className="blanketCols" id="p11" />
              <div className="blanketCols" id="p12" />
              <div className="blanketCols" id="p13" />
              <div className="blanketCols" id="p14" />
              <div className="blanketCols" id="p15" />
              <div className="blanketCols" id="p16" />
            </div>
          </div>
          <img src="./szoba.jpg" alt="room" />
        </div>
      </div>
      </div>
      </Col>
      <Col md={6} className="mobile-left">
        <div className="buttons-container" style={{backgroundColor: 'transparent'} }>
          <div className="mobile-container" style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat : 'no-repeat' }}>
            <div>
        <StyledButton
          onClick={ leftBedRoomButtonOn}
          isSelected={selectedRoom === 'leftBedRoomOn'}
          img="/image 12.png"
          title="On"
          name="Left Bedroom"
        />
          <StyledButton onClick={rightBedRoomButtonOn}  isSelected={selectedRoom === 'rightBedRoomButtonOn'}
                img="/image 12.png"
                title="On"
                name="Left Bedroom"/>
        {/* <StyledButton
          onClick={leftBedRoomButtonOff}
          isSelected={selectedRoom === 'leftBedRoomOn'}
          img="/image 11 (1).png"
          title="Off"
          name="Left Bedroom"
        /> */}
            </div>
            <div>
            <StyledButton 
             onClick={kitchenButtonOn} 
            isSelected={selectedRoom === 'kitchenButtonOn'}
                img="/image 2.png"
                title="On"
                name="Left Bedroom"/>
                    <StyledButton onClick={livingRoomButtonOn}  isSelected={selectedRoom === 'livingRoomButtonOn'}
                img="/image 4.png"
                title="On"
                name="Left Bedroom"/>
            {/* <StyledButton onClick={rightBedRoomButtonOff}  isSelected={selectedRoom === 'rightBedRoomButtonOff'}
                img="/image 11 (1).png"
                title="Off"
                name="Left Bedroom" /> */}
            </div>
            <div>
            <StyledButton onClick={leftBathRoomButtonOn}  isSelected={selectedRoom === 'bathRoomButtonOn'}
                img="/image 7.png"
                title="On"
                name="Left Bedroom"/>
                        <StyledButton onClick={leftTerraceButtonOn}  isSelected={selectedRoom === 'leftTerraceButtonOn'}
                img="/image 7.png"
                title="On"
                name="Left Bedroom"/>
            {/* <StyledButton 
             onClick={kitchenButtonOff} 
            isSelected={selectedRoom === 'kitchenButtonOff'}
                img="/image 1 (1).png"
                title="Off"
                name="Left Bedroom" /> */}
            </div>
            <div>
            <StyledButton onClick={topTerraceButtonOn}  isSelected={selectedRoom === 'topTerraceButtonOn'}
                img="/image 14.png"
                title="On"
                name="Left Bedroom"/>
                         <StyledButton onClick={leftTerraceButtonOn}  isSelected={selectedRoom === 'leftTerraceButtonOn'}
                img="/image 16.png"
                title="On"
                name="Left Bedroom"/>
            {/* <StyledButton onClick={livingRoomButtonOff}  isSelected={selectedRoom === 'livingRoomButtonOff'}
                img="/image 3 (1).png"
                title="Off"
                name="Left Bedroom" /> */}
            </div>
            <div>
     
            {/* <StyledButton onClick={bathRoomButtonOff}  isSelected={selectedRoom === 'bathRoomButtonOff'}
                img="/image 8 (1).png"
                title="Off"
                name="Left Bedroom" /> */}
            </div>
          
            <div>
    
            {/* <StyledButton onClick={leftTerraceButtonOff}  isSelected={selectedRoom === 'leftTerraceButtonOff'}
                img="/image 8 (1).png"
                title="Off"
                name="Left Bedroom" /> */}
            </div>
            <div>
  
            {/* <StyledButton onClick={topTerraceButtonOff}  isSelected={selectedRoom === 'topTerraceButtonOff'}
                img="/image 13.png"
                title="Off"
                name="Left Bedroom" /> */}
            </div>
            <div>
   
            {/* <StyledButton onClick={leftTerraceButtonOff}  isSelected={selectedRoom === 'leftTerraceButtonOff'}
                img="/image 15.png"
                title="Off"
                name="Left Bedroom" /> */}
            </div>
            {/* <div>
              <button type="button" id="allButtonOn">Be</button>
              <button type="button" id="allButtonOff">Ki</button>
            </div> */}
            </div>
            </div>
            </Col>
            </Row>

  );
}
