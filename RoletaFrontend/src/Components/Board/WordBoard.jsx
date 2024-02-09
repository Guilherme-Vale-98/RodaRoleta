import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./WordBoard.css";
const WordBoard = ({ word, playerLetterArray }) => {

  const renderCards = () => {
    const cardsNumber = 56;
    
    const letters = Array(cardsNumber).fill("");
    letters.splice(15, word.length, ...word);
    
    const cards = letters.map((element, index) => {            
      if (index == 0 || index == 13 || index == 42 || index == 55) {
        return <div key={index}></div>;
      }
      if(playerLetterArray.includes(element)){
        return <Card letter={element} chosenLetter="turn" key={index}></Card>;
      }
      return <Card letter={element} key={index}></Card>;
    });
    return cards;
  };

  return <div className="board">{renderCards()}</div>;
};

export default WordBoard;
