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

const initialState = {}


const matchSlice = createSlice({
    name: "match",
    initialState,
    reducers: {  
        clearMatch: () => {
            return {};
          }, 
    },
    extraReducers: (builder) => {
        builder
          .addCase(startMatch.fulfilled, (state, action) => {
            return action.payload; 
          })
          .addCase(startMatch.rejected, (state, action) => {
          })
        }
})

const {reducer} = matchSlice;
export default reducer;


  