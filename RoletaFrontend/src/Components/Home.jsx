import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/sliceAuth";

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(currentUser);

  const logOut = useCallback(() => {
    dispatch(logout());
    
  }, [dispatch]);
  return (
    <div>
      <button onClick={logOut}>Jogar</button>
    </div>

  );
};

export default Home;
