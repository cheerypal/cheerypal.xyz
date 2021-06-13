import React from "react";

import { TitleCard } from "../../components/title-card";
import { Boys } from "../../components/the-boys";
import { fetchKanyeAsync } from "../../redux/kanye-quotes";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { Kanye } from "../../components/quotes-from-kanye";

export const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchKanyeAsync());
  }, []);

  return (
    <div>
      <TitleCard />
      <Kanye />
      <Boys />
    </div>
  );
};
