import * as actionTypes from "./actionTypes";

const initialExerciseList = [];

export const exerciseReducer = (state = initialExerciseList, action) => {
  switch (action.type) {
    case actionTypes.ADD_EXERCISE:
      return state;

    case actionTypes.REMOVE_EXERCISE:
      return state;

    default:
      return state;
  }
};


const initialCount = 0;

export const countReducer = (state = initialCount, action) => {
  switch (action.type) {
    case actionTypes.ADD_EXERCISE:
      return state++;

    default:
      return state;
  }
};
