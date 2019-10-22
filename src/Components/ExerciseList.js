import React from 'react';
import { connect } from 'react-redux';
import { getExercise } from '../state/actionCreators';
import ExerciseCard from './ExerciseCard';

const ExerciseList = (props) => {
    const {getExercise, exercises} = props;

    useEffect(() => {
        getExercise()
    },[]);


    return (
        <div>
            {
                exercises.map(rep => <ExerciseCard key={rep.id} rep={rep}/>)
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
     exercises: state.exercises
    }   
}

export default connect(mapStateToProps)(ExerciseList);