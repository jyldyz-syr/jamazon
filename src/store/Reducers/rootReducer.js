import { combineReducers } from "redux";
import bookReducer from "./bookReducer";
import categoriesReducer from "./categoriesReducer";
import productReducer from "./productReducer";

export default combineReducers({
  bookState: bookReducer,
  categoriesState: categoriesReducer,
  productState: productReducer,
});


