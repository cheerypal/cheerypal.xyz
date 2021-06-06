import React from "react";
import styled from "styled-components";

import { useAppSelector } from "../../../hooks";
import { LinkItem } from "./link-item";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 80%;
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
