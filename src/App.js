import React from "react";
import { Provider } from "react-redux";
import { Route, NavLink } from "react-router-dom";
import * as reducers from "./state/reducers";
import "./App.css";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Container from "./Components/Container";

import { beginEdit } from "./state/actionCreators";


function App(props) {
  const rootReducer = combineReducers({
    count: reducers.countReducer,
    exercises: reducers.exerciseReducer,
    exerciseForm: reducers.exerciseFormReducer,
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
