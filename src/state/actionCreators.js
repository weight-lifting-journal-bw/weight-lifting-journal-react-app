import * as actionTypes from './actionTypes'
import AxiosWithAuth from "../utils/AxiosWithAuth";
export const addExercise = (exercise) => {
    return ({
        type: actionTypes.ADD_EXERCISE,
        payload: exercise
    })
}

export const increment = () => {
    return ({
        type: actionTypes.INCREMENT
    })
}

export const removeExercise = (exercise) => {
    return ({
        type: actionTypes.REMOVE_EXERCISE,
        payload: exercise
    })
}

export const getExercises = () => dispatch => {
    AxiosWithAuth().get('https://weight-lift-1.herokuapp.com/api/exercises')
    .then(response => {
        console.log(response)
    })
    .catch(err => console.log(err))
}