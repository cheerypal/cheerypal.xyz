import React from "react";
import { TitleCardContainer, Title, SubTitle } from "./title-card-styles";
import { SocialGroup } from "../social-group";
import { CustomBtn } from "../custom-btn-router";

export const TitleCard = (): JSX.Element => {
  return (
    <TitleCardContainer>
      <Title>Software Engineer</Title>
      <SubTitle>
        Hi, I'm Euan, a Graduate Software Engineer working at Arch.
      </SubTitle>

      <SubTitle>
        At Arch, I'm a backend engineer who's specialised in Serverless AWS
        development, TypeScript and Node.js.
      </SubTitle>
      <SubTitle>
        I have a 1st Class BSc(hons) Degree in Computer Science from Heriot-Watt
        University
      </SubTitle>
      <SocialGroup />
      <CustomBtn title="About Me" link="/about" />
    </TitleCardContainer>
  );
};
