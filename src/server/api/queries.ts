import server$ from "solid-start/server";

// TODO throw this in as an env var
const RIOT_API_KEY = "RGAPI-158a13fd-716f-4e2b-9975-b42aa4f8f0ed";

export const fetchSummoner = server$(
  async (summonerName) =>
    await fetch(
      `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}/`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      },
    ),
);

export const fetchRanked = server$(
  async (encryptedSummonerId) =>
    await fetch(
      `https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedSummonerId}/`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      },
    ),
);

export const fetchMatches = server$(
  async ({ puuid, start = 0 }) =>
    await fetch(
      `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=5`, // TODO change back to 20
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      },
    ),
);

export const fetchMatchDetails = server$(
  async (matchId) =>
    await fetch(
      `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}`,
      {
        headers: {
          "X-Riot-Token": RIOT_API_KEY,
        },
      },
    ),
);
