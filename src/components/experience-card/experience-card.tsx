import React from "react";
import styled from "styled-components";

import { Section } from "./experience-section";
import { useAppSelector } from "../../hooks";

export const Title = styled.h1`
  user-select: none;
  padding: 0;
  margin: 2% 0;
  font-size: 6em;
`;

export const Experience = (): JSX.Element => {
  const ProjectsUni = useAppSelector((state) => state.projects.uni);
  const ProjectsAd = useAppSelector((state) => state.projects.additional);
  return (
    <div>
      <Title>Experience</Title>
      <h3>Work Experience</h3>

      {ProjectsUni.map(({ id, title, description, link, skills }) => (
        <Section
          key={id}
          title={title}
          description={description}
          link={link}
          skills={skills}
        />
      ))}
    </div>
  );
};
