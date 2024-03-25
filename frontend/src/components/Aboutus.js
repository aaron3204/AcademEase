import React from 'react';
import './Aboutus.css';
// import AboutAnimi from '../Aboutanimi.json'; // Corrected file name and import
import Lottie from 'lottie-react';
import { requirePropFactory } from '@mui/material';

export default function Aboutus() {
  return (
    <div>


      <div className="about-us-container">
      <div className='Ab'>
        <h1>About Us</h1>
      </div>
      </div>
      <div className='abcd'>
        <div className="person">
          <img src={require('./zishan.jpeg')} alt="Person 1" />
          <h2>Zishan Alam</h2>
          <p>Department: Computer Engineering</p>
          <p>Mobile no.: 9993204547</p>
          <p>Jharkhand</p>
        </div>
        <div className="person">
          <img src={require('./faisal.png')} alt="Person 2" />
          <h2>Faisal Jamil</h2>
          <p>Department: Computer Engineering</p>
          <p>Mobile no.: 9267767787</p>
          <p>Bihar</p>
        </div>
        <div className="person">
          <img src={require('./aaron.jpeg')} alt="Person 3" />
          <h2>Aaron John Jacob</h2>
          <p>Department: Computer Engineering</p>
          <p>Mobile no.: 9995473205</p>
          <p>Kerala</p>
        </div>
        </div>
        <div className="animation-container">
        {/* <Lottie animationData={AboutAnimi} /> Corrected animation data prop */}
      </div>
      <div className="mission-statement">
        <h1 className='mis'>We're on a mission to expand the potential of education.</h1>
        <br/>
        <p>Unleashing the true potential of education providers with cutting-edge technology.</p>
        <p>AcademEase is a leading multinational corporation and creator of the Integrated School Platform (ISP) with over 15 million users in 25+ countries. Available in 20+ languages, the ISP is a school operating system empowering all stakeholders in a school with a unique all-in-one platform that offers state-of-the-art administrator tools for better school management and a modern LMS to enable better learning outcomes in schools. With our powerful and innovative SaaS solution, our aim is to enable educators worldwide to transform teaching & learning experiences in schools.</p>
      </div>
      
    </div>
  );
}
