import React, { useEffect, useState } from 'react'
import './PlayerCard.css'
import { motion, useAnimation } from "framer-motion";
import { useSelector } from 'react-redux';



const PlayerCard = ({spinResult, matchScore, setPlayerLetter, playerLetterArray, animate, setAnimate}) => {
  const [chosenLetter, setChosenLetter] = useState('');
  const { user: currentUser } = useSelector((state) => state.auth);
  const handleChange = (event) => {
    setChosenLetter(event.target.value);
  };

  const [isActive, setIsActive] = useState(false);
  const controls = useAnimation();

  const toggleAnimation = () => { 
    setIsActive(!isActive);
    if(spinResult==='perdeu'){
      setTimeout(() => {
        controls.start({ y: isActive ? 0 : 250 });      
      }, isActive ? 1000 : 9 * 1000);
      return
    }
    setTimeout(() => {
      controls.start({ y: isActive ? 0 : 250 });      
    }, isActive ? 3 * 1000 : 9 * 1000);
  };
  useEffect(()=>{
    if(spinResult){
      toggleAnimation();
    }  
  }, [animate])

  const chooseClickHandler = () => {
      if(!chosenLetter){
        return
      }
      if(playerLetterArray.includes(chosenLetter.toLocaleUpperCase())){
        return
      }
      setAnimate(!animate);
      setPlayerLetter(chosenLetter.toLocaleUpperCase());
      setChosenLetter('');
  }

  return (
    <motion.div className="card-container"
      animate={controls}
      transition={{ duration: 1, ease: "easeInOut"}}
    >
      {spinResult === "perdeu"? (<><p>Ah que pena, perdeu tudo!</p>
      <div>Score: {matchScore}</div>
        <button onClick={() => setAnimate(!animate)}>Continuar</button>
      </>):(<><p>Player: {currentUser.username}</p>
      <div>Score: {matchScore}</div>
      <div>Letras escolhidas: {playerLetterArray}</div>
      <div>Escolha uma letra por: {spinResult}
        <input type="text" disabled={!isActive} value={chosenLetter} 
        onChange={handleChange} maxLength="1"/>
        <button onClick={chooseClickHandler}>Escolher</button>
      </div></>)}    
    </motion.div>
  )
}

export default PlayerCard