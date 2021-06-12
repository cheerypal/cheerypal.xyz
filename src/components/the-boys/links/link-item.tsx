import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 0 2% 0 0;
  margin: 3% 0;
`;

export const LinkItem = (props: {
  name: string;
  link: string;
}): JSX.Element => {
  return (
    <Container>
      <a href={props.link}>
        <h5>{props.name}</h5>
      </a>
    </Container>
  );
};
