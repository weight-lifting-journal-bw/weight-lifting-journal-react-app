import React, {useEffect} from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export const Dashboard = ({getExercises}) => {

    useEffect(() => {
        getExercises()
    }, [])
    return (
        <div>

        </div>
    )
}

export default connect(
    state => state,
    actionCreators
)(Dashboard)