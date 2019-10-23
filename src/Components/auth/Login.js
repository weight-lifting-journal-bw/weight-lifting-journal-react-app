import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import Styled from "styled-components";
import "./auth.css";
import  jwt_decode  from 'jwt-decode';

const Login = props => {
  const [existingUser, setExistingUser] = useState({
    username: "",
    password: ""
  });

  const submitInfo = (event, credentials) => {
    event.preventDefault();
    axios
      .post("https://weight-lift-1.herokuapp.com/api/auth/login", credentials)
      .then(res => {
        localStorage.setItem("token", res.data.authToken);
        var decoded = jwt_decode(res.data.authToken);
        console.log(decoded);
        console.log(res.data);
        localStorage.setItem("userID", decoded.subject);
        props.history.push("/dashboard");
      })
      .catch(err => console.log(err));
  };

  const handleNewUser = event => {
    const { name, value } = event.target;
    setExistingUser({ ...existingUser, [name]: value });
  };

  return (
    <div>
      <StyledForm onSubmit={e => submitInfo(e, existingUser)}>
        <StyledH3>Please login</StyledH3>
        <Label>username</Label>
        <StyledInput
          type="text"
          value={existingUser.username}
          name="username"
          onChange={handleNewUser}
        />
        <Label>password</Label>
        <StyledInput
          type="text"
          value={existingUser.password}
          name="password"
          onChange={handleNewUser}
        />
        <StyledButton>Login</StyledButton>
        <StyledParagraph>
          Already have an account?
          <NavLink to="/signup">signup</NavLink>
        </StyledParagraph>
      </StyledForm>
    </div>
  );
};

export default Login;

//styles

const StyledForm = Styled.form`
    padding: 0 30px 25px 30px;
    width: 300px;
  margin: 0 auto;
  position: relative;
  text-align: left;
  background: #f3f3f3;
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Label = Styled.label`
    text-align: center;
`;
const StyledInput = Styled.input`
width: 188px;
padding: 10px 25px;
margin: 0 auto;
font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue",
  Helvetica, Arial, "Lucida Grande", sans-serif;
font-weight: 400;
font-size: 20px;
color: #9d9e9e;
text-shadow: 1px 1px 0 rgba(256, 256, 256, 1);
background: #fff;
border: 1px solid #fff;
border-radius: 5px;
box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-moz-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
-webkit-box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
`;

const StyledH3 = Styled.h3`
text-align:center
`;

const StyledButton = Styled.button`
background: #28d;
border-color: transparent;
color: #fff;
cursor: pointer;
width: 80%
margin: 0 auto;
margin-top:25px;
font-weight:bold;
font-size:14px;
height:50px;
border-radius:5px
&:hover{
  background:skyblue
}
`;

const StyledParagraph = Styled.div`
text-align: center;
margin-top:15px
`;
