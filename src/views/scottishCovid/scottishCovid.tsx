import React from "react";
import styled from "styled-components";
import { Data } from "../../components/covid-stats/item";
import { useAppSelector } from "../../hooks";

const Title = styled.h1`
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

const Seperator = styled.div`
  margin: 2% 0 7% 0;
  @media (max-width: 500px) {
    margin: 5% 0 30% 0;
  }
`;

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

const SubTitle = styled.h3`
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

const Check = styled.p`
  font-size: 0.5em;
`;

export const Scotland = (): JSX.Element => {
  const covidData = useAppSelector((state) => state.covid.data);
  return (
    <Container>
      <Title>Scottish Covid-19 Data</Title>
      <Seperator>
        <h3>Recent Update</h3>
        <RowData>
          <Data type="Date" data={covidData.date} />
          <Data type="Cases*" data={covidData.newCases} />
          <Data type="Deaths*" data={covidData.newDeaths} />
        </RowData>
        <Check>*New Cases/Deaths</Check>
      </Seperator>
      <Seperator></Seperator>
    </Container>
  );
};
