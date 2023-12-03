"use server";

import { Game, Goal } from "./utils";
import { RootType } from "./mock";

export async function getGameData() {
  let out: Game[] = [];

  const data = (await fetch(
    "https://api-web.nhle.com/v1/score/2023-12-03"
  ).then((r) => r.json())) as RootType;

  data.games.forEach((game) => {
    out.push({
      awayTeam: {
        logoLink: game.awayTeam.logo,
        name: game.awayTeam.name.default,
        score: game.awayTeam.score || 0,
        SOG: game.awayTeam.sog || 0,
      },
      homeTeam: {
        logoLink: game.homeTeam.logo,
        name: game.homeTeam.name.default,
        score: game.homeTeam.score || 0,
        SOG: game.homeTeam.sog || 0,
      },
      goals:
        game.goals?.map((goal) => {
          return {
            team: goal.teamAbbrev,
            assist: ["hi"],
            numberOfGoals: goal.goalsToDate,
            player: goal.name.default,
            scoreAtTime: goal.timeInPeriod,
            playerLink: goal.mugshot,
          } as Goal;
        }) || [],
      period: game.period || "",
      timeRemaining: game.clock?.timeRemaining || "",
      powerPlay: game.gameState,
    } as Game);
  });

  return out;
}
