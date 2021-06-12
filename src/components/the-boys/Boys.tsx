import React from "react";
import styled from "styled-components";
import { Links } from "./links";

export const Seperator = styled.div`
  margin: 2% 0 7% 0;
  @media (max-width: 500px) {
    margin: 5% 0 30% 0;
  }
`;

export const SubTitle = styled.h3`
  margin-bottom: 1%;
`;

export const Boys = (): JSX.Element => {
  return (
    <Seperator>
      <SubTitle>Some of the Boys</SubTitle>
      <Links />
    </Seperator>
  );
};
