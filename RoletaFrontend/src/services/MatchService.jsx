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

const generateMatch = async (username)=>{
    console.log('aqui: '+ username)
    const response = await axios.post(API_URL, {
        username
    }, { headers: authHeader() });
    return response.data;
}
const matchService = {
    saveMatchScore,
    generateMatch
}

export default matchService;