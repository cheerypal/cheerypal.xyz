import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 20%;

  @media (max-width: 1030px) {
    width: 60%;
  }

  @media (max-width: 800px) {
    width: 50%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const SocialContainer = styled.div`
  margin: 2% 0;
  @media (max-width: 500px) {
    margin: 5% 0;
  }
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 70%;
  @media (max-width: 500px) {
    width: 100%;
  }
`;
