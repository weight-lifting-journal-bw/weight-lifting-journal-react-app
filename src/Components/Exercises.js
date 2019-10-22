import React, { useState } from "react";
import axiosWithAuth from '../utils/AxiosWithAuth';

const Exercises = (props) => {
  const [exercise, setExercise] = useState({title: '', targeted_area: '', date: new Date(365 * 24 * 60 * 60 * 1000) })

  const handleChange = e => {
    setExercise({
      ...exercise, 
      [e.target.name]: e.target.value
    });
  };

  const exercises = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://weight-lift-1.herokuapp.com/api/exercises`)
    .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload);
        props.history.push('/exercises')
    })
    .catch(err => console.log(err));
  }

  return (
    <>
      <form className= "exerciseForm" onSubmit={exercises}>
        <h2>Create exercise</h2>
        <label>Title
        <input
          type='text'
          name='title'
          value={exercise.title}
          onChange={handleChange}
        />
        </label>
        <label>Targeted Area
        <input 
          type='text'
          name='targeted_area'
          value={exercise.targeted_area}
          onChange={handleChange}
        />
        </label>
        <label>Repetitions completed
        <input 
          type='text'
          name='reps_completed'
          value={exercise.targeted_area}
          onChange={handleChange}
        />
        </label>
        <button>Start Exercise</button>
      </form>
    </>
  );
};

export default Exercises;
