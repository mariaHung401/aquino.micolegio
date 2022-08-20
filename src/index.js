import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import HeaderPage from "views/pages/HeaderPage.js";
import TeachersPage from "views/pages/TeacherPages/TeachersHeader.js";
import GaleryPage from "views/pages/GaleryPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" component={Components} />
      <Route exact path="/servicios" component={HeaderPage} />
      <Route exact path="/docentes" component={TeachersPage} />
      <Route exact path="/galeria" component={GaleryPage} />
      {/* <Route exact path="/servicios" component={ServicesPrimaria} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
