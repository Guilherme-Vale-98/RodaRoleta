import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/sliceAuth";

const Home = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  console.log(currentUser)

 
  return(<div>
    HERES HOME: {currentUser?.username}
    </div>)
  
};

export default Home;
