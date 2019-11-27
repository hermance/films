import { combineReducers } from "redux";
import filmsReducer from "./films/reducer";

const reducers = combineReducers({
  films: filmsReducer,
});

export default reducers;
