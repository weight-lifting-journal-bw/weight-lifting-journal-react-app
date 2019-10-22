import React from "react";

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { Route, NavLink } from "react-router-dom";
import * as reducers from "./state/reducers";

import "./App.css";
import CountComponent from "./CountComponent";
import Exercises from "./Components/Exercises";
import Signup from "./Components/auth/Register";

function App() {
  const rootReducer = combineReducers({
    count: reducers.countReducer,
    exercises: reducers.exerciseReducer
  });

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  console.log(store);

  return (
    <Provider store={store}>
      <div className="App">
        <NavLink exact to="/signup" activeClassName="active">
          register
        </NavLink>
        &nbsp;
        <NavLink exact to="/count" activeClassName="active">
          count
        </NavLink>
        &nbsp;
        <NavLink exact to="/exercises" activeClassName="active">
          Exercises
        </NavLink>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/count" component={CountComponent} />
        <Route exact path="/exercises" component={Exercises} />
      </div>
    </Provider>
  );
}

export default App;
