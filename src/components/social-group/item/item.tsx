import React from "react";
import styled from "styled-components";

const IconLink = styled.a`
  @media (max-widith: 500px) {
    margin: 0% 2%;
    width: 30%;
  } ;
`;

export const Item = (props: {
  link: string;
  element: JSX.Element;
}): JSX.Element => {
  return (
    <IconLink href={props.link}>
      <>{props.element}</>
    </IconLink>
  );
};
