import { useState } from "react";
import "./Card.css";

export const Card = ({letter, chosenLetter}) => {
  const [turn, setTurn] = useState("");
  const handleClick = () => {
    if (turn === "") {
      setTurn("turn");
      return;
    }
    setTurn("");
    return;
  };
  return (
    <div className={`${turn} ${chosenLetter} card`}>
      <div className={`content`} onClick={handleClick}>
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
