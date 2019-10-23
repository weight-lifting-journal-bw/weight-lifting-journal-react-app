import React from "react";

import { Provider } from "react-redux";
import { Route, NavLink } from "react-router-dom";
import * as reducers from "./state/reducers";

import "./App.css";
import CountComponent from "./CountComponent";
import Exercises from "./Components/Exercises";
import Signup from "./Components/auth/Register";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/auth/Login";
import Container from "./Components/Container";

function App(props) {
  const rootReducer = combineReducers({
    count: reducers.countReducer,
    exercises: reducers.exerciseReducer
  });

  const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  const Logout = () => {
    localStorage.clear();
    props.history.push("/login");
  };

  console.log(store);

  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
