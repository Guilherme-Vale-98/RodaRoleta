import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../slices/sliceAuth";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(currentUser);
  const navigate = useNavigate();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);
  return (
    <div className="form">
      <div className="button-wrapper">
        <button onClick={() => navigate("/match")}>Jogar</button>
      </div>
      {currentUser ? (
        <div className="button-wrapper">
          <button onClick={logOut}>Logout</button>
        </div>
      ) : (
        <div className="button-wrapper">
          <button onClick={() => navigate("/login")}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Home;
