import React from "react";
import { Button, Card, Heading, Content } from "react-bulma-components";
import styled from "styled-components";
import "react-bulma-components/dist/react-bulma-components.min.css";

export default function Exercise(props) {
    console.log(props);
    const {targeted_area, reps_completed, title} = props.exercise;
  return (
    <StyledCard>
      <Heading>{title}</Heading>
      <Content>{`Targeted Area: ${targeted_area}`}</Content>
      <Content>{`Reps Completed: ${reps_completed}`}</Content>
      <div>
        <Button
        
            color="dark"
        >
          Edit
        </Button>
        <Button onClick={() => {}} color="danger">
          Delete
        </Button>
      </div>
    </StyledCard>
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