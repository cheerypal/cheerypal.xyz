import React from "react";
import styled from "styled-components";

const Info = styled.p`
  font-size: 1.3em;
  margin: 2% 0;
`;
const DataContainer = styled.div``;

export const Data = (props: {
  type: string;
  data: string | number;
}): JSX.Element => {
  const { type, data } = props;
  return (
    <DataContainer>
      <h4>{type}</h4>
      <Info>{data}</Info>
    </DataContainer>
  );
};
