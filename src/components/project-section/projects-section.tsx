import React from "react";
import styled from "styled-components";

import { Section } from "../experience-card/experience-section";

export const Seperator = styled.div`
  margin: 2% 0 7% 0;
`;

export const SubTitle = styled.h3`
  margin-bottom: 1%;
`;

export const ProjectSection = (props: {
  projectname: string;
  projectarray: any[];
}): JSX.Element => {
  const { projectname, projectarray } = props;

  return (
    <Seperator>
      <SubTitle>{projectname}</SubTitle>
      {projectarray.map(({ id, title, description, link, skills }) => (
        <Section
          key={id}
          title={title}
          description={description}
          link={link}
          skills={skills}
        />
      ))}
    </Seperator>
  );
};
