import React from "react";
import styled from "styled-components";

export const CustomList = (props: { skills: string[] }): JSX.Element => {
  const { skills } = props;
  return (
    <div>
      {skills.map((data) => (
        <p key={skills.indexOf(data)}>{data}</p>
      ))}
    </div>
  );
};
