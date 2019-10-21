import React from 'react';

import { Provider } from "react-redux";
import { combineReducers, createStore , applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";

import * as reducers from "./state/reducers";

import './App.css';
import CountComponent from './CountComponent';

function App() {

  const rootReducer = combineReducers({
    count: reducers.countReducer,
    exercises: reducers.exerciseReducer,
  })

  const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
  );

  console.log(store);
  

  return (
    <Provider store = {store}>
      <div className="App">
      <CountComponent />
      
      </div>
    </Provider>
  );
}

export default App;
