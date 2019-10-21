import * as actionTypes from './actionTypes'

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