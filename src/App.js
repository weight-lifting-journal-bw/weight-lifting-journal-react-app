import React, {useEffect} from "react";
import { Provider } from "react-redux";
import * as reducers from "./state/reducers";
import "./App.css";
import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import Container from "./Components/Container";


function App(props) {
  const rootReducer = combineReducers({
    count: reducers.countReducer,
    exercises: reducers.exerciseReducer,
    exerciseForm: reducers.exerciseFormReducer
  });

  useEffect( () => {
    window.cloudinary.setCloudName('spotter-journal')
  }, [])

  const store = createStore(
    rootReducer,
    {},
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
    )
  );


  return (
    <Provider store={store}>
      <div className="App">
        <Container />
      </div>
    </Provider>
  );
}

export default App;
