import React from "react";
import Card from "./Card";
import "./WordBoard.css";
const WordBoard = ({word}) => {
  
  const renderCards = () =>{
    const cardsNumber = 56
    const letters = Array(cardsNumber).fill('');
    letters.splice(15, word.length, ...word)   
    return letters.map((element, index)=>{
    if(index == 0 || index == 13 || index == 42 || index == 55 ){
      return <div></div>
    }
    return <Card letter={element}></Card>}

  )
  }

  return (
    <div className="board">
      {renderCards()}
    </div>
  );
};

export default WordBoard;
