import React from "react";
import { Title, SubTitle } from "./title-card-styles";

export const TitleCard = (): JSX.Element => {
  return (
    <div>
      <Title>Software Engineer</Title>
      <SubTitle>
        Hi, I'm Euan, a Graduate Software Engineer working at Arch
      </SubTitle>
      <SubTitle>
        At Arch, I'm a backend engineer who's specialised in Serverless AWS
        development, TypeScript and Node.js.
      </SubTitle>
    </div>
  );
};
