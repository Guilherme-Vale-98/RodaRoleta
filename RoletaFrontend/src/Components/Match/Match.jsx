import React, { useCallback, useEffect, useState } from "react";
import Wheel from "../Wheel/Wheel";
import WordBoard from "../Board/WordBoard";
import "./Match.css";
import { useDispatch, useSelector } from "react-redux";
import matchService from "../../services/MatchService";
import { startMatch, addScore, saveScore } from "../../slices/sliceMatch";
import PlayerCard from "../PlayerCard/PlayerCard";
import { Navigate } from "react-router-dom";

const Match = () => {
  const { user: currentUser } = useSelector((state) => state.auth);

  if (!currentUser) {
    return <Navigate to="/" replace />;
  }

  const match = useSelector((state) => state.match);
  const hint = match.keywords ? match.keywords[0].hint : "";
  const word = match.keywords ? match.keywords[0].answer : "";
  const [isLoading, setIsLoading] = useState(false);
  const [spinResult, setSpinResult] = useState(0);
  const [matchScore, setMatchScore] = useState(0);
  const [playerLetter, setPlayerLetter] = useState("");
  const [playerLetterArray, setPlayerLetterArray] = useState([]);
  const dispatch = useDispatch();
  const [animate, setAnimate] = useState(false);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    dispatch(startMatch({ username: currentUser.username }))
      .unwrap()
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    setPlayerLetterArray((prevArray) => [...prevArray, playerLetter]);
    word && [...word].every((e) => playerLetterArray.includes(e))
      ? finishMatch()
      : null;
  }, [playerLetter]);

  useEffect(() => {
    if (spinResult === "perdeu") {
      setMatchScore(0);
      return;
    }
    let scoreToAdd = 0;
    [...word].forEach((letter) => {
      if (letter === playerLetter) {
        scoreToAdd += spinResult;
      }
    });
    setMatchScore((prevScore) => prevScore + scoreToAdd);
    setPlayerLetter(null);
  }, [playerLetter, spinResult]);

  const finishMatch = () => {
    dispatch(saveScore({ matchId: match.id, score: matchScore }));
    setTimeout(() => setFinished(true), 2800);
  };
  return (
    <div>
      {finished ? (
        <div>
          <WordBoard word={word} playerLetterArray={playerLetterArray} />
          <div className="finish-card">
            <span>Parabéns você conseguiu !!</span>
            <span>Pontuação: {matchScore}</span>
          </div>
        </div>
      ) : (
        renderMatch()
      )}
    </div>
  );

  function renderMatch() {
    return isLoading ? (
      "Loading..."
    ) : (
      <>
        <div className="match-container">
          <PlayerCard
            spinResult={spinResult}
            matchScore={matchScore}
            setPlayerLetter={setPlayerLetter}
            playerLetterArray={playerLetterArray}
            animate={animate}
            setAnimate={setAnimate}
          />
          <WordBoard
            word={word}
            playerLetterArray={playerLetterArray}
          ></WordBoard>
          <div className="hint-container">{hint}</div>
          <Wheel
            setSpinResult={setSpinResult}
            playerLetter={playerLetter}
            animate={animate}
            setAnimate={setAnimate}
            spinResult={spinResult}
          />
        </div>
      </>
    );
  }
};

export default Match;
