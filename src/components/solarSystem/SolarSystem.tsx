
import React from 'react';
import { motion } from 'framer-motion';
import './SolarSystem.css';
import RocketImage from '../../assets/images/rocket-man.png';

export const Animation = () => {
  // A Fibonacci-style spiral uses the formula: r = a * e^(b * angle)
  // We'll simulate this by animating 'scale' and 'rotate' simultaneously
  
  return (
    <div className="space-container">
      {/* THE BLACK HOLE */}
      <div className="black-hole">
        <div className="event-horizon"></div>
      </div>

      {/* THE CHARACTER / TRANSACTION */}
      <motion.div
        className="character-wrapper"
        animate={{ 
          rotate: [0, 1440], // Multiple full rotations
          scale: [1, 0],     // Shrinks as it hits the center
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeIn" // Gets faster as it gets closer
        }}
      >
       <div className="rocket-container">
        {/* YOUR CUSTOM IMAGE */}
        <img 
          src={RocketImage} 
          alt="Man on Rocket" 
          className="custom-rocket-icon"
        />
        </div>

        {/* SUBSCRIPTION DATA */}
      {  /*
        <div className="price-tag">
          <span className="label">{label}</span>
          <span className="cost">-${cost}</span>
        </div>
      </div>
      */}
      </motion.div>
    </div>
  );
};