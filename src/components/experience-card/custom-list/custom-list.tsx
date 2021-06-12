import React from "react";
import styled from "styled-components";

const List = styled.div`
  margin: 2% 0 5% 0;

  @media (max-width: 1030px) {
    margin: 5% 0 8% 0;
  }

  @media (max-width: 500px) {
    margin: 10% 0 10% 0;
  }
`;

const ListItem = styled.p`
  margin: 0.5% 0;
`;

export const CustomList = (props: { skills: string[] }): JSX.Element => {
  const { skills } = props;
  return (
    <List>
      {skills.map((data) => (
        <ListItem key={skills.indexOf(data)}>{data}</ListItem>
      ))}
    </List>
  );
};
