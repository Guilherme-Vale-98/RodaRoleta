import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import matchService from "../services/MatchService";
import { setMessage } from "./sliceMessage";

export const startMatch = createAsyncThunk(
    "match/start",
    async ({ username }, thunkAPI) => {
      try {
        const response = await matchService.generateMatch(username);
        thunkAPI.dispatch(setMessage("Partida iniciada"));
        return response;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );


  export const saveScore = createAsyncThunk(
    "match/save",
    async ({ matchId, score }, thunkAPI) => {
      try { 
        const response = await matchService.saveMatchScore(matchId, score);
        thunkAPI.dispatch(setMessage("Partida salva"));
        return response;
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        thunkAPI.dispatch(setMessage(message));
        return thunkAPI.rejectWithValue();
      }
    }
  );

const initialState = {}

const matchSlice = createSlice({
    name: "match",
    initialState,
    reducers: {  
        clearMatch: () => {
            return {};
          },
        addScore: (state, action) =>{
          const score = action.payload;
          state.score = score;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(startMatch.fulfilled, (state, action) => {
            return action.payload; 
          })
          .addCase(startMatch.rejected, (state, action) => {
          })
          .addCase(saveScore.fulfilled, (state, action) => {
          })
          .addCase(saveScore.rejected, (state, action) => {
          });
        }
})

const {reducer, actions} = matchSlice;
export const { clearMatch, addScore } = actions;
export default reducer;


  