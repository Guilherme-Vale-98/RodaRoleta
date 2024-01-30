import { useState } from "react";
import "./Card.css";

export const Card = ({letter}) => {
  const [turn, setTurn] = useState("");
  const handleClick = () => {
    if (turn == "") {
      setTurn("turn");
      return;
    }
    setTurn("");
    return;
  };
  return (
    <div className={`${turn} card`}>
      <div className={`content`} onClick={handleClick}>
        <div className="front">
          {letter}        
        </div>
        <div className="back">
         
        </div>
      </div>
    </div>
  );
};

export default Card;
