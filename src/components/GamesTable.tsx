import { For } from "solid-js";
import { useRouteData } from "solid-start";
import { routeData } from "~/routes/summoners/[region]/[summonerName]";
import { GameInfo } from "./GameInfo";

export const GamesTable = () => {
  const summonerData = useRouteData<typeof routeData>();
  const matchList = summonerData()?.matchList;

  matchList?.forEach((match) => console.log(match));

  return (
    <For each={matchList}>
      {(match, i) => <GameInfo imageId={match.imageId} level={match.level} />}
    </For>
  );
};
