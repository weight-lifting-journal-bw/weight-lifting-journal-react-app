import React from 'react';

import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";

import * as reducers from "./state/reducers";

import './App.css';

function App() {

  const rootReducer = combineReducers({
    count: reducers.countReducer,
    exercises: reducers.exerciseReducer,
  })

  const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return (
    <Provider store = {store}>
      <div className="App">
      
      </div>
    </Provider>
  );
}

export default App;
