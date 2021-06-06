import React from "react";
import { TitleCardContainer, Title, SubTitle } from "./title-card-styles";
import { SocialGroup } from "../social-group";
import { CustomBtn } from "../custom-btn";

export const TitleCard = (): JSX.Element => {
  return (
    <TitleCardContainer>
      <Title>Software Engineer</Title>
      <SubTitle>
        Hi, I'm Euan, a Graduate Software Engineer working at Arch
      </SubTitle>
      <SubTitle>
        At Arch, I'm a backend engineer who's specialised in Serverless AWS
        development, TypeScript and Node.js.
      </SubTitle>
      <SocialGroup />
      <CustomBtn title="Request CV" link="mailto:euangordon32@gmail.com" />
    </TitleCardContainer>
  );
};
