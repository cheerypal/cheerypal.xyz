import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../hooks";
// import { Link } from "react-router-dom";
import { Data } from "./item";

const RowData = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 60%;
  margin: 1% 0 2% 0;
  @media (max-width: 500px) {
    width: 100%;
    margin: 4% 0;
  }
`;

const Seperator = styled.div`
  margin: 2% 0 7% 0;
  @media (max-width: 500px) {
    margin: 5% 0 30% 0;
  }
`;

const VIROLL = styled.a`
  font-size: 1.2em;
`;

const Check = styled.p`
  font-size: 0.5em;
`;

export const Covid = (): JSX.Element => {
  const covidData = useAppSelector((state) => state.covid.data);
  return (
    <Seperator>
      <h3>Scottish Covid Data</h3>
      <RowData>
        <Data type="Date" data={covidData.date} />
        <Data type="Cases*" data={covidData.newCases} />
        <Data type="Deaths*" data={covidData.newDeaths} />
      </RowData>
      <RowData>
        <VIROLL href="https://viroll.herokuapp.com/">
          World data on VIROLL
        </VIROLL>
      </RowData>
      <Check>*New Cases/Deaths</Check>
    </Seperator>
  );
};
