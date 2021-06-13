import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./views/home";
import { About } from "./views/about";
import { Scotland } from "./views/scottishCovid";

const Navigator = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/covid-scotland" component={Scotland} />
      </Switch>
    </div>
  );
};

export default Navigator;
