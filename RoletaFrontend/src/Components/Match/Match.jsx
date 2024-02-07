import React from "react";
import Wheel from "../Wheel/Wheel";
import WordBoard from "../Board/WordBoard";
import "./Match.css";

const Match = () => {
  return (
    <>
      <div className="match-container">
        <WordBoard word={"GIRAFA"}></WordBoard>
        <div className="hint-container">
            Tem no zoologico
        </div>
        <Wheel />
      </div>
    </>
  );
};

export default Match;
