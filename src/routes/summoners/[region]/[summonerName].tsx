import { RouteDataArgs, useRouteData } from "solid-start";
import { IconNumberBox } from "~/components/IconNumberBox";
import {
  fetchMatchDetails,
  fetchMatches,
  fetchRanked,
  fetchSummoner,
} from "rpc/queries";
import { RankedGraph } from "~/components/RankedGraph";
import { createServerData$ } from "solid-start/server";
import { GamesTable } from "~/components/GamesTable";
import { Suspense } from "solid-js";

interface ISummonerData {
  id: encryptedSummonerId;
  accountId: string;
  puuid: string;
  name: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
}

interface IRankedData {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: boolean;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

interface IMatchData {
  metadata: {
    dataVersion: string;
    matchId: string;
    participants: encryptedSummonerId[];
  };
  info: {
    gameCreation: number;
    gameDuration: number;
    gameEndTimestamp: number;
    gameId: number;
    gameMode: string;
    gameName: string;
    gameStartTimestamp: number;
    gameType: string;
    gameVersion: string;
    mapId: number;
    participants: participant[];
    platformId: string;
    queueId: number;
    teams: team[];
    tournamentCode: "";
  };
}

type participant = {};

type matchId = string;
type encryptedSummonerId = string;

export function routeData({ params }: RouteDataArgs) {
  return createServerData$(
    async (summonerName) => {
      let response = await fetchSummoner(summonerName);
      const summonerData = (await response.json()) as ISummonerData;

      response = await fetchRanked(summonerData.id);
      const rankedData = (await response.json()) as IRankedData[];

      response = await fetchMatches({ puuid: summonerData.puuid });
      const matchList = await Promise.all(
        (await response.json()).map(async (matchId: matchId) => {
          const response = await fetchMatchDetails(matchId);
          return await response.json();
        }),
      );

      return { summonerData, rankedData, matchList };
    },
    {
      key: () => params.summonerName,
    },
  );
}

export default function SummonerDetails() {
  const summonerData = useRouteData<typeof routeData>();

  return (
    <Suspense fallback={<p>loading...</p>}>
      <div class="flex [&>*]:m-2">
        <IconNumberBox
          imageId={summonerData()?.summonerData.profileIconId}
          level={summonerData()?.summonerData.summonerLevel}
        />
        <ul class="list-none ps-none">
          <li>{summonerData()?.summonerData.name}</li>
          <li>{`
        ${summonerData()?.rankedData[0].tier} 
        ${summonerData()?.rankedData[0].rank}
        `}</li>
          <li>{`${summonerData()?.rankedData[0].leaguePoints} LP`}</li>
        </ul>
        <RankedGraph data={[1, 2, 3]} />
      </div>
      <GamesTable />
    </Suspense>
  );
}
