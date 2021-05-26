import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  bookState: bookReducer,
  categoriesState: categoriesReducer
});


