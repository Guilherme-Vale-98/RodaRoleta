import React, { useState } from 'react'
import './PlayerCard.css'
import { motion, useAnimation } from "framer-motion";


const PlayerCard = () => {

  
  const [isActive, setIsActive] = useState(false);
  const controls = useAnimation();

  const toggleAnimation = () => {
    setIsActive(!isActive);
    controls.start({ y: isActive ? 0 : 0 });
  };


  return (
    <motion.div className="card-container"
      animate={controls}
      transition={{ duration: 1, ease: "easeInOut" }}
      onClick={toggleAnimation}
    >
      <p>Player: </p>
      <div>Score: </div>
      <div>Letras escolhidas:</div>
      <div>Escolha uma letra por: {}
        <input type="text" maxLength="1"/>
        <button>Escolher</button>
      </div>
    
    </motion.div>
  )
}

export default PlayerCard