import * as actionTypes from './actionTypes'
import AxiosWithAuth from "../utils/AxiosWithAuth";
export const addExercise = (exercises) => {
    return ({
        type: actionTypes.ADD_EXERCISE,
        payload: exercises
    })
}

export const increment = () => {
    return ({
        type: actionTypes.INCREMENT
    })
}

export const beginEdit = (userForm) => {
    return ({
        type: actionTypes.BEGIN_EDIT,
        payload: userForm,
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
    .then(({data}) => {
        dispatch(addExercise(data))
    })
    .catch(err => console.log(err))
}