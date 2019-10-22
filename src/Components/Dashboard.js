import React, {useEffect} from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const Dashboard = ({getExercises, exercises}) => {

    useEffect(() => {
        getExercises()
    }, [])
    return (
        <div>
            {exercises.map(exercise => <h4 key={exercise.id} >{exercise.targeted_area}</h4>)}
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Dashboard)