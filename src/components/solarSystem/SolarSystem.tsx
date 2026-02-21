
import React, { useState, useEffect } from 'react';
import { motion, type Transition } from 'framer-motion';
import './SolarSystem.css';
import RocketImage from '../../assets/images/rocket-man.png';

const SolarSystem = () => {
  const [isStuck, setIsStuck] = useState(false);

  const orbitTransition = (duration: number): Transition => ({
    duration: isStuck ? duration * 10 : duration,
    repeat: Infinity,
    ease: "linear",
  });
  
  return (
    <div className="space">
      <div className="sun" onClick={() => setIsStuck(!isStuck)}></div>

      {/* EARTH ORBIT */}
      <motion.div className="orbit earth-orbit" animate={{ rotate: 360 }} transition={orbitTransition(10)}>
        <div className="planet earth">
          <motion.div className="orbit moon-orbit" animate={{ rotate: 360 }} transition={orbitTransition(3)}>
            <div className="planet moon"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* NEW: CHARACTER ORBIT (Middle Orbit) */}
      <motion.div 
        className="orbit character-orbit"
        animate={{ rotate: 360 }}
        transition={orbitTransition(4)} // Slower than Earth, faster than Mars
      >
        <div className="character-container">
          <img src={RocketImage} alt="Rocket Man" className="rocket-character" />
        </div>
      </motion.div>

      {/* MARS ORBIT */}
      <motion.div className="orbit mars-orbit" animate={{ rotate: 360 }} transition={orbitTransition(25)}>
        <div className="planet mars"></div>
      </motion.div>
    </div>
  );
};


export default SolarSystem


