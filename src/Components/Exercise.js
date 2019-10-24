import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { CloudinaryContext, Image } from "cloudinary-react";

import * as actionCreators from "../state/actionCreators";
import { Button, Card, Heading, Content } from "react-bulma-components";
import styled from "styled-components";
import "react-bulma-components/dist/react-bulma-components.min.css";
import axiosWithAuth from "../utils/AxiosWithAuth";
import { fetchPhotos } from "../utils/CloudinaryService";

import { openUploadWidget } from "../utils/CloudinaryService";

export function Exercise(props) {
  const { exercise, beginEdit, removeExercise } = props;
  const { targeted_area, reps_completed, title } = exercise;
  const startEdit = exercise => {
    beginEdit(exercise);
    console.log(exercise);
    props.history.push("/exercises/add");
  };
  const [imageIds, setIds] = useState([]);
  useEffect(() => {
    fetchPhotos(exercise.id, setIds);
  }, []);

  const deleteExercise = id => {
    axiosWithAuth()
      .delete(`https://weight-lift-1.herokuapp.com/api/exercises/${id}`)
      .then(({ data }) => {
        removeExercise(exercise);
      })
      .catch(err => console.log(err));
  };

  function uploadImageWithCloudinary() {
    const uploadOptions = {
      cloudName: "emkaydauda",
      tags: [exercise.id, exercise.title],
      uploadPreset: "presetOne"
    };
    openUploadWidget(uploadOptions, (error, photos) => {
      if (!error) {
        console.log(photos);
      } else {
        console.log(error);
      }
    });
  }

  return (
    <CloudinaryContext cloudName='emkaydauda'>
      <StyledCard>
        <Heading>{title}</Heading>
        <Content>{`Targeted Area: ${targeted_area}`}</Content>
        <Content>{`Reps Completed: ${reps_completed}`}</Content>

        <div>
          {
            imageIds.map(image => 
              <Image key = {image}
            publicId={image}
            fetch-format="auto"
            quality="auto"
          />
              )
          }
        </div>

        <div>
          
          <Button onClick={() => startEdit(exercise)} color="dark">
            Edit
          </Button>
          <Button onClick={() => uploadImageWithCloudinary()} color="primary">
            Upload Images
          </Button>
          <Button onClick={() => deleteExercise(exercise.id)} color="danger">
            Delete
          </Button>
        </div>
      </StyledCard>
    </CloudinaryContext>
  );
}

const StyledCard = styled(Card)`
  width: 25rem;
  margin-left: 5rem;
  border-radius: 0.4rem;
  margin-top: 1.5rem;
  padding-bottom: 1rem;

  div {
    display: flex;
    justify-content: space-evenly;
  }
`;

export default connect(
  state => state,
  actionCreators
)(withRouter(Exercise));
