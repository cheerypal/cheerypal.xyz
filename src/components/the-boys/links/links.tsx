import React from "react";
import styled from "styled-components";

import { useAppSelector } from "../../../hooks";
import { LinkItem } from "./link-item";

const Grid = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 60%;
  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const Links = (): JSX.Element => {
  const bois = useAppSelector((state) => state.mates.data);

  return (
    <Grid>
      {bois.map(({ id, name, link }) => (
        <LinkItem key={id} name={name} link={link} />
      ))}
    </Grid>
  );
};
