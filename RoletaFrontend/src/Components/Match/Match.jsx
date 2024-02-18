import React, { useCallback, useEffect, useState } from "react";
import Wheel from "../Wheel/Wheel";
import WordBoard from "../Board/WordBoard";
import "./Match.css";
import { useDispatch, useSelector } from "react-redux";
import matchService from "../../services/MatchService";
import { startMatch } from "../../slices/sliceMatch";
import PlayerCard from "../PlayerCard/PlayerCard";

const Match = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const match = useSelector((state) => state.match);
  const hint = match.keywords ? match.keywords[0].hint : "";
  const word = match.keywords ? match.keywords[0].answer : "";
  const [spinResult, setSpinResult] = useState(0);
  const [matchScore, setMatchScore] = useState(0);
  const [playerLetter, setPlayerLetter] = useState('');
  const [playerLetterArray, setPlayerLetterArray] = useState(['']);
  const dispatch = useDispatch();
  
  
  useEffect(()=>{
    setPlayerLetterArray(prevArray => [...prevArray, playerLetter]);
  }, [playerLetter])

  

  useEffect(()=>{
    if(spinResult === "perdeu"){
      setMatchScore(0);
      return
    }
    let scoreToAdd = 0;
    [...word].forEach(letter=>{
      if(letter === playerLetter){
        scoreToAdd += spinResult;
      }
    })    
    setMatchScore(prevScore => prevScore + scoreToAdd);
    setPlayerLetter(null)
  }, [playerLetter, spinResult])


  const handleClick = () => {
    dispatch(startMatch({ username: currentUser.username }))
      .unwrap()
      .then()
      .catch();
      setPlayerLetterArray([]);
    return;
  };
  return (
    <>
      <div className="match-container">
        <button onClick={handleClick}>Generate Match</button>
        <PlayerCard
          spinResult={spinResult}
          matchScore={matchScore}
          setPlayerLetter={setPlayerLetter}
          playerLetterArray={playerLetterArray}
          setSpinResult={setSpinResult}
        />
        <WordBoard
          word={word}
          playerLetterArray={playerLetterArray}
        ></WordBoard>
        <div className="hint-container">
          {hint}
        </div>
        <Wheel setSpinResult={setSpinResult} playerLetter={playerLetter} />
      </div>
    </>
  );
};

export default Match;
