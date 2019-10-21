import * as actionTypes from "./actionTypes";

const initialExerciseList = [];

export const exerciseReducer = (state = initialExerciseList, action) => {
  switch (action.type) {
    case actionTypes.ADD_EXERCISE:
      return action.payload;

    case actionTypes.REMOVE_EXERCISE:
      return state;

    default:
      return state;
  }
};


const initialCount = 0;

export const countReducer = (state = initialCount, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return state + 1;

    default:
      return state;
  }
};
