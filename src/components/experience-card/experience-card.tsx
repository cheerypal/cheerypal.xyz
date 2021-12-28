import React from "react";
import styled from "styled-components";

// import { CustomList } from "./custom-list";
import { useAppSelector } from "../../hooks";
import { ProjectSection } from "../project-section";
import { Section } from "./experience-section";
import { snafler } from "../../data";

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
  margin: 1% 50% 1% 0;
  line-height: 1.5;

  @media (max-width: 1200px) {
    margin: 1% 30% 1% 0;
  }

  @media (max-width: 800px) {
    margin: 1% 20% 1% 0;
  }

  @media (max-width: 500px) {
    margin: 5% 0;
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
        <Paragraph>{Work.para1}</Paragraph>
        <Paragraph>{Work.para2}</Paragraph>
        <Section
          title={snafler.title}
          description={snafler.description}
          link={snafler.link}
          skills={snafler.skills}
        />
      </Seperator>
      <ProjectSection projectname="University" projectarray={ProjectsUni} />
      <ProjectSection
        projectname="Additional Projects"
        projectarray={ProjectsAd}
      />
    </Container>
  );
};
