import React, {useEffect} from "react";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import Exercise from "./Exercise";
import styled from "styled-components";
import Dashpic from '../assets/dashpic.jpg';

export const Dashboard = ({getExercises, exercises}) => {
    const userId = localStorage.getItem('userID')
    useEffect(() => {
        getExercises()
    }, [])

    var style= {
        backgroundImage: `url(${Dashpic})`,
        height: "800px",
        margin: "20px 0"
    }

    return (
        <div style={style}>
               <StyledDiv >
            {
                exercises
                .filter(exercise => exercise.user_id == userId)
                .map(exercise => <Exercise key={exercise.id} exercise={exercise} />)}
        </StyledDiv>  
        </div>
   
    )
}

const StyledDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    >div {
        width: 25%;
    }
`

export default connect(
    state => state,
    actionCreators
)(Dashboard)