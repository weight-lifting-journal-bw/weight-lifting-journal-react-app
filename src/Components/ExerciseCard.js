import React from 'react';
import Exercises from './Exercises';

const ExerciseCard = (props) => {
    const {title, reps_completed, targeted_area} = props;

    return (
        <div>
            <p>Title: {title}</p>
            <p>Repetitions completed: {reps_completed}</p>
            <p>Targeted area: {targeted_area}</p>
        </div>
    )
}

export default ExerciseCard;