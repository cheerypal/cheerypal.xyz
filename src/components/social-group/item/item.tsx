import React from "react";
import styled from "styled-components";

const IconLink = styled.a``;

export const Item = (props: {
  link: string;
  element: JSX.Element;
}): JSX.Element => {
  return (
    <div>
      <IconLink href={props.link}>
        <>{props.element}</>
      </IconLink>
    </div>
  );
};
