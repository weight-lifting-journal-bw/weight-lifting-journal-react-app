import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "./state/actionCreators";

export const CountComponent = ({count, increment}) => {
    return(
        <>
        <h4>
            {count}
        </h4>
        <button onClick={() => increment()} >Click me</button>
        </>
    )
}

export default connect(
    state => state,
    actionCreators
)(CountComponent)