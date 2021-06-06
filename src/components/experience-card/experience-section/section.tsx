import React from "react";
import styled from "styled-components";
import { CustomBtn } from "../../custom-btn";
import { CustomList } from "../custom-list";

const Paragraph = styled.p`
  margin: 1% 50% 1% 0;
  line-height: 1.5;

  @media (max-width: 1200px) {
    margin: 1% 30% 1% 0;
  }

  @media (max-width: 800px) {
    margin: 1% 20% 1% 0;
  }

  @media (max-width: 500px) {
    margin: 5% 0;
  }
`;

const Seperator = styled.div`
  margin: 0 0 10% 0;
`;

const SubTitle = styled.h4`
  margin-bottom: 1%;
`;

const ListTitle = styled.p`
  margin-top: 2%;
`;

export const Section = (props: {
  title: string;
  description: string;
  skills: string[];
  link: string;
}): JSX.Element => {
  // function to split the description up into a list after each sentence

  /**
   * const layerDescription = (desc: string): string[] => {
   * if (desc.includes(".")) return desc.split(".");
   * else return [desc];
   * };
   *
   * let newDescription = layerDescription(props.description);
   *
   * console.log(newDescription);
   */

  return (
    <Seperator>
      <SubTitle>{props.title}</SubTitle>
      <div>
        <Paragraph>{props.description}</Paragraph>
      </div>

      <ListTitle>This project was developed with:</ListTitle>
      <CustomList skills={props.skills} />

      <div>
        <CustomBtn title={props.title} link={props.link} />
      </div>
    </Seperator>
  );
};
