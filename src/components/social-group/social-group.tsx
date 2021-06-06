import React from "react";

import { FlexRow, SocialContainer } from "./social-group.styles";
import { Item } from "./item";

import { useAppSelector } from "../../hooks";

export const SocialGroup = (): JSX.Element => {
  const social = useAppSelector((state) => state.social.data);

  return (
    <SocialContainer>
      <FlexRow>
        {social.map(({ id, link, element }) => (
          <Item key={id} link={link} element={element} />
        ))}
      </FlexRow>
    </SocialContainer>
  );
};
