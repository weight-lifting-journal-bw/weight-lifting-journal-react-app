import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

import axiosWithAuth from '../utils/AxiosWithAuth';

const Exercises = (props) => {
  const form = props.exerciseForm
  console.log(props);
  const [exerciseForm, setExerciseForm] = useState(form)

  const handleChange = e => {
    setExerciseForm({
      ...exerciseForm, 
      [e.target.name]: e.target.value
    });
  };

  const exercises = e => {
    e.preventDefault();
    axiosWithAuth()
      .post(`https://weight-lift-1.herokuapp.com/api/exercises`, exerciseForm)
    .then(res => {
        console.log(res);
        // localStorage.setItem('token', res.data.payload);
        props.history.push('/dashboard')
    })
    .catch(err => console.log(err));
  }

  return (
    <>
      <form className= "exerciseForm" onSubmit={exercises}>
        <h2>Create exercise</h2>
        <label>Title
          </label>
        <input
          type='text'
          name='title'
          value={exerciseForm.title}
          onChange={handleChange}
        />
        <label>Targeted Area
          </label>
        <input 
          type='text'
          name='targeted_area'
          value={exerciseForm.targeted_area}
          onChange={handleChange}
        />
        <label>Repetitions completed
          </label>
        <input 
          type='text'
          name='reps_completed'
          value={Number(exerciseForm.reps_completed)}
          onChange={handleChange}
        />
        {/* <Link to='/exercises/add'> */}
        <button type="submit">Start Exercise</button>
        {/* </Link> */}
      </form>
    </>
  );
};

export default connect(
  state => state,
  actionCreators,
)(Exercises);
