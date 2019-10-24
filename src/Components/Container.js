import React from "react";
import Dashboard from "./Dashboard";
import Login from "./auth/Login";
import { Route, NavLink, Redirect, withRouter } from "react-router-dom";
import CountComponent from "../CountComponent";
import Exercises from "./Exercises";
import Signup from "./auth/Register";
import Logo from "../assets/logo.png";

import { connect } from "react-redux";
import { initialExerciseForm } from "../state/reducers";
import * as actionCreators from "../state/actionCreators";

function Container(props) {
  const Logout = () => {
    localStorage.clear();
    props.history.push("/");
  };

  const withAuthCheck = (Component, props) => {
    if (localStorage.getItem("token")) {
      return <Component {...props} />;
    }
    return <Redirect to="/" />;
  };

  return (
    <div>
      <img className="logo" src={Logo} />
      <nav>
        <NavLink className="navlink" exact to="/" activeClassName="active">
          Login
        </NavLink>
        &nbsp;
        <NavLink
          className="navlink"
          exact
          to="/dashboard"
          activeClassName="active"
        >
          Dashboard
        </NavLink>
        &nbsp;
        <NavLink
          className="navlink"
          exact
          to="/exercises/add"
          activeClassName="active"
          onClick = {() => {
            props.beginEdit(initialExerciseForm)
          }}
        >
          Exercises
        </NavLink>
        <span onClick={Logout}>Logout</span>
      </nav>

      <main>
        <Route exact path="/" component={Login} />
        <Route
          exact
          path="/count"
          component={props => withAuthCheck(CountComponent, props)}
        />
        <Route
          exact
          path="/dashboard"
          component={props => withAuthCheck(Dashboard, props)}
        />
        <Route
          exact
          path="/exercises/add"
          component={props => withAuthCheck(Exercises, props)}
        />
        &nbsp;
        <Route path="/signup" component={Signup} />
      </main>
    </div>
  );
}

export default connect(null, actionCreators)(withRouter(Container)) ;
