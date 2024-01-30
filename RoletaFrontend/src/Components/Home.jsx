import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/sliceAuth";
import WordBoard from "./Board/WordBoard";

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(currentUser);

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  return (
    <div>
      HERES HOME: {currentUser?.username}
      <button onClick={logOut}>Logout</button>
      <WordBoard word={"BANANA"}></WordBoard>
    </div>

  );
};

export default Home;
