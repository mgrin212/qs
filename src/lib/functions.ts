"use server";

import { Game, Goal } from "./utils";
import { RootType } from "./mock";

export async function getGameData(date: string) {
  let out: Game[] = [];

  const data = (await fetch(`https://api-web.nhle.com/v1/score/${date}`, {
    cache: "no-store",
  }).then((r) => r.json())) as RootType;

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
            player: goal.name.default || "",
            scoreAtTime: goal.timeInPeriod,
            playerLink: goal.mugshot,
          } as Goal;
        }) || [],
      period: game.period?.toString() || "",
      timeRemaining: game.clock?.timeRemaining || "",
      state: game.gameState,
      clock: game.clock,
      startTime: game.startTimeUTC,
    } as Game);
  });

  return out;
}
