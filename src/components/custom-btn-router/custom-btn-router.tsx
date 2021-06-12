import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CstmBtn = styled.button`
  padding: 15px 60px;
  border: 1px solid var(--accent-color);
  font-family: "mont-black";
  background-color: transparent;
  outline: none;
  font-size: 0.5em;
  transition: all 0.2s ease-in-out;
  border-radius: 20px;
  color: var(--accent-color);

  :hover {
    cursor: pointer;
    color: var(--secondary-color);
    background-color: var(--accent-color);
    border: none;
    box-shadow: 0 8px 20px #000000;
  }
`;

export const CustomBtn = (props: {
  title: string;
  link: string;
}): JSX.Element => {
  return (
    <Link to={props.link}>
      <CstmBtn>{props.title}</CstmBtn>
    </Link>
  );
};
