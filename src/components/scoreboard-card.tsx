import React from "react";
import ScoreboardRow from "./scoreboard-row";
import { Game } from "@/lib/utils";
import { CollapsibleCard } from "./collapsible-wrapper";
import Goalcard from "./goal-card";

interface ScoreboardCardProps {
  game: Game;
}

function ScoreboardCard({ game }: ScoreboardCardProps) {
  return (
    <CollapsibleCard
      main={
        <div className="w-full bg-background border border-border p-2 shadow-sm rounded-lg">
          <div className="flex flex-row justify-between px-4 font-semibold text-lg">
            <p>{game.timeRemaining}</p> <p>{game.period}</p>
          </div>
          <ScoreboardRow team={game.awayTeam} />
          <ScoreboardRow team={game.homeTeam} />
        </div>
      }
      small={
        <div className="w-full flex flex-row overflow-x-scroll">
          {game.goals.map((goal, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <Goalcard goal={goal} />
            </div>
          ))}
        </div>
      }
    />
  );
}

export default ScoreboardCard;
