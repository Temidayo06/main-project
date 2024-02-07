import React from 'react';
import "../../../styles/User Styles/USerWhyChooseUs.css";
import houseKey from "../../../assets/images/houseKey.png"
import handshake from "../../../assets/images/handShake.png"
import camera from "../../../assets/images/Camera.png"
import ring from "../../../assets/images/ring.png";



const USerWhyChooseUs = () => {


  return (
    <section className='whyChooseUs'>
    <div className='whyChoose-cover'>
      <h1>Why Choose Us</h1>

      <div className="whyChoose-textIcon">
       <div className="houseKey same">
          <img src={houseKey} alt=""/>
          <h3>Wide Range of Properties</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, voluptas!</p>
       </div>
       <div className="choose-lines"></div>
       <div className="handshake same">
          <img src={handshake} alt="" />
          <h3>Trusted by thousands</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, voluptas!</p>
       </div>
       <div className="choose-lines"></div>
       <div className="houseKey same">
          <img src={camera} alt="" />
          <h3>Financing made easy</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, voluptas!</p>
       </div>
       <div className="choose-lines"></div>
       <div className="houseKey same">
          <img src={ring} alt="" />
          <h3>24/7 support</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, voluptas!</p>
       </div>
    </div>
    </div>
    
</section>
  )
}

export default USerWhyChooseUs