import { useState } from "react";
import "./Card.css";

export const Card = ({letter, chosenLetter}) => {
  const [turn, setTurn] = useState("");
  
  return (
    <div className={`${turn} ${chosenLetter} card`}>
      <div className={`content`}>
        <div className="front">
          {letter}        
        </div>
        <div className={`back ${letter? "white": ''} ${chosenLetter ? "green": ''}`}>         
        </div>
      </div>
    </div>
  );
};

export default Card;
