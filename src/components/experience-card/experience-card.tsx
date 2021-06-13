import React from "react";
import styled from "styled-components";

import { CustomList } from "./custom-list";

import { useAppSelector } from "../../hooks";
import { ProjectSection } from "../project-section";

export const Title = styled.h1`
  user-select: none;
  padding: 0;

  @media (max-width: 1240px) {
    font-size: 4em;
  }

  @media (max-width: 800px) {
    font-size: 3em;
  }

  @media (max-width: 500px) {
    font-size: 2em;
  }
`;

export const Seperator = styled.div`
  margin: 2% 0 7% 0;
  @media (max-width: 500px) {
    margin: 5% 0 30% 0;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 1%;
`;

const Paragraph = styled.p`
  margin: 1% 0;
  @media (max-width: 500px) {
    font-size: 0.9em;
  }
`;

const Container = styled.div`
  @media (max-width: 500px) {
    margin: 20% 0;
  }
`;

export const Experience = (): JSX.Element => {
  const Work = useAppSelector((state) => state.work.data);
  const ProjectsUni = useAppSelector((state) => state.projects.uni);
  const ProjectsAd = useAppSelector((state) => state.projects.additional);
  return (
    <Container>
      <Title>Experience</Title>
      <Seperator>
        <SubTitle>Work Experience</SubTitle>
        <Paragraph>
          Currently working in backend app development. Not much more I can say
          really ;)
        </Paragraph>
        <Paragraph>
          By working with Arch I have gained a massive amount of experience in
          modern web technologies:
        </Paragraph>
        <CustomList skills={Work.languages} />
      </Seperator>
      <ProjectSection projectname="University" projectarray={ProjectsUni} />
      <ProjectSection
        projectname="Additional Projects"
        projectarray={ProjectsAd}
      />
    </Container>
  );
};
