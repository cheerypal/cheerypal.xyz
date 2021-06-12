import React from "react";
import { Switch, Route } from "react-router-dom";

import { Home } from "./views/home";
import { About } from "./views/about";

const Navigator = (): JSX.Element => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Switch>
    </div>
  );
};

export default Navigator;
