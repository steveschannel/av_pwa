import React from "react";
import { Paper } from "@material-ui/core";
import { Switch, Route, Link } from "react-router-dom";

export const CalculatorContainer = () => {
  return (
    <Switch>
      <Route exact path="/giz">
        <Paper>Test</Paper>
      </Route>
    </Switch>
  );
};
