import React from "react";
import Dashboard from "./Dashboard";
import Login from "./auth/Login";
import { Route, NavLink, Redirect, withRouter } from "react-router-dom";

import CountComponent from "../CountComponent";
import Exercises from "./Exercises";
import Signup from "./auth/Register";

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
      <nav>
        <NavLink exact to="/" activeClassName="active">
          Login
        </NavLink>
        &nbsp;
        <NavLink exact to="/dashboard" activeClassName="active">
          Dashboard
        </NavLink>
        <NavLink exact to="/count" activeClassName="active">
          count
        </NavLink>
        &nbsp;
        <NavLink exact to="/exercises" activeClassName="active">
          Exercises
        </NavLink>
        <button onClick={Logout}>Logout</button>
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
          path="/exercises"
          component={props => withAuthCheck(Exercises, props)}
        />
        <Route
          exact
          path="/exercises/add"
          component={props => withAuthCheck(Dashboard, props)}
        />
        &nbsp;
        <Route path="/signup" component={Signup} />
      </main>
    </div>
  );
}

export default withRouter(Container);
