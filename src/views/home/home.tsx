import React from "react";

import { TitleCard } from "../../components/title-card";
import { Boys } from "../../components/the-boys";
import { fetchKanyeAsync } from "../../redux/kanye-quotes";
import { fetchCovidAsync } from "../../redux/covid-data";
import { useEffect } from "react";
import { useAppDispatch } from "../../hooks";
import { Kanye } from "../../components/quotes-from-kanye";
import { Covid } from "../../components/covid-stats";

export const Home = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchKanyeAsync());
    dispatch(fetchCovidAsync());
  }, [dispatch]);

  return (
    <div>
      <TitleCard />
      <Covid />
      <Kanye />
      <Boys />
    </div>
  );
};
