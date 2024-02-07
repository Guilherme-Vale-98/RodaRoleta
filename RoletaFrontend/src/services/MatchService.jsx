import axios from "axios";
import authHeader from "./authHeader";


const API_URL = "http://localhost:8080/user/match";


const saveMatchScore = (matchId, score) => {
    console.log('aqui: saveMatchScore')
    return axios.post(API_URL + "/save-score", {
      id:matchId,
      score,
    }, { headers: authHeader() });
  };

const generateMatch = (username)=>{
    console.log('aqui: '+ username)
    return axios.post(API_URL, {
        username
      }, { headers: authHeader() });
}
const matchService = {
    saveMatchScore,
    generateMatch
}

export default matchService;