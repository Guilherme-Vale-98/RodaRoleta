import React, { useCallback } from "react";
import Wheel from "../Wheel/Wheel";
import WordBoard from "../Board/WordBoard";
import "./Match.css";
import { useDispatch, useSelector } from "react-redux";
import matchService from "../../services/MatchService";
import { startMatch } from "../../slices/sliceMatch";
import PlayerCard from "../PlayerCard/PlayerCard";

const Match = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const match = useSelector(state => state.match);
  const hint = match.keywords ? match.keywords[0].hint : '';
  const word = match.keywords ? match.keywords[0].answer : '';
  console.log(hint);
  const handleClick=()=>{
    dispatch(startMatch({username: currentUser.username})).unwrap().then().catch();
    return 
  }


  return (
    <>
      <div className="match-container">
      <button onClick={handleClick}>Generate Match</button>
        <PlayerCard/>
        <WordBoard word={word}></WordBoard>
        <div className="hint-container">
            {hint}
        </div>
        <Wheel />
      </div>
    </>
  );
};

export default Match;
