import React, { useState } from "react";

import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";


import axiosWithAuth from '../utils/AxiosWithAuth';
import Background from '../assets/formpic.jpg';

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
        props.history.push('/dashboard')
    })
    .catch(err => console.log(err));
  }

  var sectionStyle = {
    backgroundImage: `url(${Background})`,
    height: "800px"
  };
  
  return (
    <>
      <form style = {sectionStyle} className= "exerciseForm" onSubmit={exercises}>
        <p>Create exercise</p>
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
        <button type="submit">Start Exercise</button>
      </form>
    </>
  );
};

export default connect(
  state => state,
  actionCreators,
)(Exercises);
