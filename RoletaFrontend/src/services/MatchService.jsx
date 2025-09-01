import axios from "axios";
import authHeader from "./authHeader";


const API_URL = `${import.meta.env.VITE_API_BASE_URL}/user/match`;


const saveMatchScore = (matchId, score) => {
    console.log('aqui: saveMatchScore')
    return axios.post(API_URL + "/save-score", {
      id:matchId,
      score,
    }, { headers: authHeader() });
  };

const generateMatch = async (username)=>{
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