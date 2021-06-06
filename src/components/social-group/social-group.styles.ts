import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`;

export const SocialContainer = styled.div`
  margin: 2% 0;
  width: 15%;

  @media (max-width: 1200px) {
    width: 40%;
  }

  @media (max-width: 600px) {
    margin: 5% 0;
    width: 100%;
  } ;
`;
