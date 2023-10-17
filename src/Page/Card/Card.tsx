import React from 'react';
import './Card.css'

const Card = () => {
  return (
    <>
    <section style={{background: "black", margin:"50px", padding:"300px"}} className='card'>
    <div className='home-table' style={{background: "black", boxShadow: "0px 4px 31px 0px rgba(0, 0, 0, 0.15)", position:"relative", bottom:"-470px", left:"230px"}}>
       </div>
        <div className='section' style={{background: "black"}}>
        <div className='card' style={{background: "black"}}>
        <div style={{width: "29px", height: "29px", background:"#D9D9D9"}}></div>
        <h2 style={{color: "white"}}>Effortless Living with Our Smart 
        Home Solution</h2>
        <p style={{color: "white"}}>Experience a new level of home living as you 
        interact effortlessly with our smart home system, 
        making comfort and convenience the cornerstones of your daily life.</p>
        </div>
        <div className='card' style={{background: "black"}}>
        <div style={{width: "29px", height: "29px", background:"#D9D9D9"}}></div>
        <h2 style={{color: "white"}}>Effortless Living with Our Smart Home Solution</h2>
        <p style={{color: "white"}}>Experience a new level of home living as you 
        interact effortlessly with our smart home system, 
        making comfort and convenience the cornerstones of your daily life.</p>
        </div>
        <div className='card' style={{background: "black"}}>
        <div style={{width: "29px", height: "29px", background:"#D9D9D9"}}></div>
        <h2 style={{color: "white"}}>Effortless Living with Our Smart Home Solution</h2>
        <p style={{color: "white"}}>Experience a new level of home living as you 
        interact effortlessly with our smart home system,
         making comfort and convenience the cornerstones of your daily life.</p>
        </div>
        </div>
    </section>
    </>
  );
}

export default Card;
