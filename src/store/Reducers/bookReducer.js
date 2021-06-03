import React from "react";
import {
  ADD_BOOK_LIST,
  FILTER_BOOK_LIST,
  ADD_BOOK_CATEGORIES,
  SET_BOOKS
} from "../Actions/Types";

const initialState = {
  books: [],
  page:1,
  total:0,
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

    case SET_BOOKS:
      return {
        ...state,
        books: action.payload.books,
        total: action.payload.total,
        page: action.payload.page,
      };

    default:
      return state;
  }
}
