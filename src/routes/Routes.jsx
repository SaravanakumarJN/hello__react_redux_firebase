import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Signin";
import { PrivateRoute } from "./PrivateRoute";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Signin />
      </Route>
      <PrivateRoute component={<Home />} path="/home" />
      <Route>
        <div>Page not found</div>
      </Route>
    </Switch>
  );
};

export { Routes };
