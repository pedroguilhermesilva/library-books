import React from "react";
import { Router, Route, Switch } from "react-router-dom";

import history from "./services/history";

import Main from "./pages/Main/index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import NotFound from "./pages/NotFound/index";
import SelectedBooks from "./pages/SelectedBooks/index";

export default function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Main}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/cadastro" component={Register}></Route>
        <Route path="/reservar" component={SelectedBooks}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}
