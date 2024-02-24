import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import wheel from "../../assets/wheel.png";
import "./Wheel.css";

const Wheel = ({setSpinResult, playerLetter, spinResult, animate, setAnimate }) => {
  const [rotationDegree, setRotationDegree] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const controls = useAnimation();

  const toggleAnimation = () => {
    setIsActive(!isActive);
    if(spinResult==='perdeu'){
      setTimeout(() => {
        controls.start({ x: isActive ? 0 : 900 });      
      }, isActive ? 1000 : 9 * 1000);
      return
    }
    setTimeout(()=>{
      controls.start({ x: isActive ? 0 : 900 });
    }, isActive ? 3 * 1000 : 9 * 1000);
  };

  useEffect(()=>{  
    if(rotationDegree){
      toggleAnimation();
    }     
  }, [animate])

  const wheelValues = [
    "perdeu",
    800,
    50,
    500,
    850,
    600,
    "perdeu",
    250,
    700,
    350,
    200,
    950,
    "perdeu",
    750,
    100,
    450,
    900,
    550,
    "perdeu",
    300,
    650,
    400,
    650,
    1000,
  ];


  const handleSpinButtonClick = () => {
    console.log(isActive)
    if(isActive){
      return
    }
    setAnimate(!animate);
    const randomIndex = Math.random() * wheelValues.length;
    setRotationDegree((prevRotationdegree) => {
    const nextRotationDegree = prevRotationdegree + 15 * randomIndex + 360;
    

    setSpinResult(wheelValues[Math.floor(nextRotationDegree / 15) % 24]);
    return nextRotationDegree;
    });
  };


  return (
      <motion.div className="wheel-container toLeft"
      initial={{ x: 0 }}
      animate={controls}
      transition={{ duration: 1, ease: "easeInOut"}}
      >
        <div className="picker"></div>
        <motion.img
          src={wheel}
          alt="Wheel"
          animate={{ rotate: rotationDegree }}
          transition={{
            duration: 7,
            ease: [0.2, 0.8, 0.2, 0.8],
          }}
        />
        <div className="spin-button" onClick={handleSpinButtonClick}>
          Spin Wheel
        </div>
      </motion.div>
  );
};

export default Wheel;
