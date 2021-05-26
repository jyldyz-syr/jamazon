import React from "react";
import { ADD_BOOK_LIST, FILTER_BOOK_LIST, ADD_BOOK_CATEGORIES  } from "../Actions/Types";

const initialState = {
  books: [],
};

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK_LIST:

      return {
        ...state,
        bookList: action.payload,
      };

    case ADD_BOOK_CATEGORIES:
      return {
        ...state,
        categoryList: action.payload,
      };

    case FILTER_BOOK_LIST:
      return {
        ...state,
        filterList: action.payload,
      };
  
    default:
      return state;
  }
}


