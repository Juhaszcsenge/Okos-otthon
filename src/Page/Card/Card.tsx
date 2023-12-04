import React from 'react';
import './Card.css'

const Card = () => {
  return (
    <>
    <section style={{background: "black"}} className='card'>
    <div className='home-table' style={{background: "black", boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)", position:"relative"}}>
       </div>
        <div className='section' style={{background: "black"}}>
        <div className='card' style={{background: "black"}}>
        <div style={{width: "32px", height: "32px"}}>
          <img src='one-finger-tap.png' alt='' style={{height:"42px", width:"42px"}}></img>
        </div>
        <h2 className='card-h2' data-languagePartIdentifier="seamless_home_management"  style={{color: "white"}}>Seamless Home Management at Your Fingertips</h2>
        <p className='card-p' style={{color: "white"}} data-languagePartIdentifier="seamless_home_management_desc">
        Easily adjust settings, customize your environment, 
        and enhance security with our user-friendly smart home control interface, simplifying your daily routines.
        </p>
        </div>
        <div className='card' style={{background: "black"}}>
        <div style={{width: "29px", height: "29px"}}>
        <img src='./hierarchy-13--node-organization-links-structure-link-nodes-network-hierarchy.png' alt=''  style={{height:"42px", width:"42px"}}></img>
        </div>
        <h2 className='card-h2' data-languagePartIdentifier="elevate_your_home" style={{color: "white"}}>Elevate Your Home Experience with Intuitive Control</h2>
        <p className='card-p' style={{color: "white"}} data-languagePartIdentifier="elevate_your_home_desc">Experience a new level of home living as you 
        interact effortlessly with our smart home system, 
        making comfort and convenience the cornerstones of your daily life.</p>
        </div>
        <div className='card' style={{background: "black"}}>
        <div style={{width: "29px", height: "29px"}}>
        <img src='Check_ring_light.png' alt=''  style={{height:"42px", width:"42px"}}></img>
        </div>
        <h2 className='card-h2' data-languagePartIdentifier="effortless_living" style={{color: "white"}}>Effortless Living with Our Smart Home Solution</h2>
        <p className='card-p' style={{color: "white"}} data-languagePartIdentifier="effortless_living_desc">
        Transform your living space into a haven of convenience and efficiency, 
        where you can effortlessly manage and optimize every aspect of your 
        home environment, ensuring a stress-free and enjoyable lifestyle.
        </p>
        </div>
        </div>
    </section>
    </>
  );
}

export default Card;
