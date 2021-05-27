import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore, compose, applyMiddleware } from "redux";

import thunk from 'redux-thunk';
import rootReducer from "./store/Reducers/rootReducer";

const composeEnhancers =
  typeof window === "object" && window.REDUX_DEVTOOLS_EXTENSION_COMPOSE
    ? window.REDUX_DEVTOOLS_EXTENSION_COMPOSE({})
    : compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const Elements = <Provider store={store}>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>

const rootElement = document.getElementById("root");
ReactDOM.render(Elements, rootElement );