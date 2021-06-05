import React from "react";
import "./App.scss";

import { TitleCard } from "./components/title-card";
import { Experience } from "./components/experience-card";

const App = (): JSX.Element => {
  return (
    <div>
      <TitleCard />
      <Experience />
    </div>
  );
};

export default App;
