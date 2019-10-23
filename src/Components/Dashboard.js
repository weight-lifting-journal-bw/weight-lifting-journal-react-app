import React, {useEffect} from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Exercise from "./Exercise";

export const Dashboard = ({getExercises, exercises}) => {

    useEffect(() => {
        getExercises()
    }, [])
    return (
        <div>
            {exercises.map(exercise => <Exercise key={exercise.id} exercise={exercise} />)}
        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Dashboard)