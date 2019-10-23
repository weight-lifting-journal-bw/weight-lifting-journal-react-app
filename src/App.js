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

function App() {
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

  console.log(store);

  return (
    <Provider store={store}>
      <div className="App">
        <NavLink exact to="/login" activeClassName="active">
          Login
        </NavLink>
        &nbsp;
        <NavLink exact to="/count" activeClassName="active">
          count
        </NavLink>
        &nbsp;
        <NavLink exact to="/exercises" activeClassName="active">
          Exercises
        </NavLink>
        &nbsp;
        <NavLink exact to="/dashboard" activeClassName="active">
          Dashboard
        </NavLink>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/count" component={CountComponent} />
        <Route exact path="/exercises" component={Exercises} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Provider>
  );
}

export default App;
