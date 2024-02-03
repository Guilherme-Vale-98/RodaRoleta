import React, { useState } from "react";
import { motion } from "framer-motion";
import wheel from "../../assets/wheel.png";
import "./Wheel.css";

const Wheel = () => {
  const [rotationDegree, setRotationDegree] = useState(0);
  const [spinResult, setSpinResult] = useState(null);

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
    const randomIndex = Math.random() * wheelValues.length;
    setRotationDegree((prevRotationdegree) => {
      const nextRotationDegree = prevRotationdegree + 15 * randomIndex + 360;
      setSpinResult(wheelValues[Math.floor(nextRotationDegree / 15) % 24]);
      return nextRotationDegree;
    });
  };

  console.log(spinResult);

  return (
    <div>
      Wheel:
      <div className="wheel-container">
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
      </div>
    </div>
  );
};

export default Wheel;
