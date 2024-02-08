import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/sliceAuth";
import messageReducer from "./slices/sliceMessage";
import matchReducer from "./slices/sliceMatch"
const reducer = {
  auth: authReducer,
  message: messageReducer,
  match: matchReducer,
}

const store = configureStore({
  reducer: reducer,
  devTools: true,
})

export default store;
