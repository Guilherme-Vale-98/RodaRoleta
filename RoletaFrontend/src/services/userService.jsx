import axios from "axios";
import authHeader from "./authHeader";

const API_URL = "http://localhost:8080/user/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const saveMatchScore = (matchId, score) => {
  return axios.post(API_URL + "match/save-score", {
    id:matchId,
    score,
  });
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const userService = {
  getPublicContent,
  saveScore
};

export default userService