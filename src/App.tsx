import React from "react";
import "./App.scss";

import { TitleCard } from "./components/title-card";
import { Experience } from "./components/experience-card";
import { Boys } from "./components/the-boys";

const App = (): JSX.Element => {
  return (
    <div>
      <TitleCard />
      <Experience />
      <Boys />
    </div>
  );
};

export default App;
