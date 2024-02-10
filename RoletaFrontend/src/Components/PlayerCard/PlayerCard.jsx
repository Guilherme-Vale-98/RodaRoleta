import React, { useState } from 'react'
import './PlayerCard.css'
import { motion, useAnimation } from "framer-motion";


const PlayerCard = ({spinResult, matchScore, setPlayerLetter, playerLetterArray}) => {
  const [chosenLetter, setChosenLetter] = useState('');
  const handleChange = (event) => {
    setChosenLetter(event.target.value);
  };
  
  const [isActive, setIsActive] = useState(false);
  const controls = useAnimation();

  const toggleAnimation = () => {
    setIsActive(!isActive);
    controls.start({ y: isActive ? 0 : 0 });
  };
  const chooseClickHandler = () => {
      if(!chosenLetter){
        return
      }  
    setPlayerLetter(chosenLetter.toLocaleUpperCase());
    setChosenLetter('');
  }

  return (
    <motion.div className="card-container"
      animate={controls}
      transition={{ duration: 1, ease: "easeInOut" }}
      onClick={toggleAnimation}
    >
      <p>Player: </p>
      <div>Score: {matchScore}</div>
      <div>Letras escolhidas: {playerLetterArray}</div>
      <div>Escolha uma letra por: {spinResult}
        <input type="text"  value={chosenLetter} 
        onChange={handleChange} maxLength="1"/>
        <button onClick={chooseClickHandler}>Escolher</button>
      </div>
    
    </motion.div>
  )
}

export default PlayerCard