import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";

const Seperator = styled.div`
  margin: 2% 0 7% 0;
  @media (max-width: 500px) {
    margin: 5% 0 30% 0;
  }
`;

const Quote = styled.p`
  font-style: italic;
  margin: 1% 0;
  font-size: 0.9em;
`;

const Regularise = styled.span`
  font-style: normal;
  padding-left: 2%;
`;

export const Kanye = (): JSX.Element => {
  const kanyeData = useAppSelector((state) => state.kanye.data);

  console.log(kanyeData);

  return (
    <Seperator>
      <h3>If Kanye Was Here:</h3>
      <Quote>
        {kanyeData.quote} <Regularise>- Kanye</Regularise>
      </Quote>
    </Seperator>
  );
};
