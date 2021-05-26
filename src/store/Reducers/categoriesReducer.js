import React from "react";
import { SET_CATEGORIES_LIST } from "../Actions/Types";

const initialState = {
  categories: [],
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
      case SET_CATEGORIES_LIST:{
          return {
              ...state,
              categories:action.payload
          }
      }
      
  
    default:
      return state;
  }
}


