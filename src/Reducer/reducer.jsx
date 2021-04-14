import React from "react";

const initialState = {
  todos: [],
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
      
    case "addBookList":
      return {
        ...state,
        bookList: action.payload,
      };

    case "filterBookList":
      return {
        ...state,
        booksToEdit: action.payload,
      };

    default:
      return state;
  }
}
