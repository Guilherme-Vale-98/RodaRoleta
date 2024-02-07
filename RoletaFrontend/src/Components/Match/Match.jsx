import React, { useCallback } from "react";
import Wheel from "../Wheel/Wheel";
import WordBoard from "../Board/WordBoard";
import "./Match.css";
import { useSelector } from "react-redux";
import matchService from "../../services/MatchService";

const Match = () => {
    const { user: currentUser } = useSelector((state) => state.auth);

    
  const handleClick=()=>{
    return matchService.generateMatch(currentUser.username)
  }

  return (
    <>
      <div className="match-container">
      <button onClick={handleClick}>Generate Match</button>
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
