import React from 'react';
import { motion } from 'framer-motion';
import './AsteroidBelt.css';
import RocketImage from '../../../assets/images/rocket-man.png';

const AsteroidBelt = () => {
  // Create an array of 10 asteroids with random starting positions
  const asteroids = Array.from({ length: 10 });

  return (
    <div className="space-scene">
      {/* THE CHARACTER: TURBULENCE EFFECT */}
      <motion.div
        className="rocket-character"
        animate={{ 
          x: [0, 2, -2, 1, -1, 0], // High frequency jitter
          y: [0, -3, 3, -1, 1, 0] 
        }}
        transition={{ 
          duration: 0.1, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <img src={RocketImage} alt="Rocket Man" className="rocket-img" />
      </motion.div>

      {/* THE ASTEROIDS: FLYING RIGHT TO LEFT */}
      {asteroids.map((_, i) => (
        <motion.div
          key={i}
          className="asteroid"
          initial={{ x: '110vw', y: `${Math.random() * 100}vh` }}
          animate={{ x: '-10vw' }}
          transition={{
            duration: 2 + Math.random() * 3, // Random speed
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear"
          }}
        >
          🪨
        </motion.div>
      ))}
    </div>
  );
};

export default AsteroidBelt
