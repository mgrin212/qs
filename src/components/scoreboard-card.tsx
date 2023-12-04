import React from "react";
import ScoreboardRow from "./scoreboard-row";
import { Game } from "@/lib/utils";
import { CollapsibleCard } from "./collapsible-wrapper";
import Goalcard from "./goal-card";

interface ScoreboardCardProps {
  game: Game;
}

function ScoreboardCard({ game }: ScoreboardCardProps) {
  //sort goals by state, with "LIVE" being first, "FUT" being second, and "FINAL" being last

  function periodFactory(period: any) {
    if (game.state === "FUT" || game.state === "PRE")
      return timeToTime(game.startTime);
    switch (period) {
      case "1":
        return "1st";
      case "2":
        return "2nd";
      case "3":
        return "3rd";
      case "4":
        return "OT";
      case "5":
        return "SO";
    }
  }

  //function that takes UTC time and converts it to local time in HH:MM format 12 hour clock
  function timeToTime(time: any) {
    const date = new Date(time);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
    return formattedHours + ":" + formattedMinutes + " " + ampm;
  }

  function timeRemainingFactory(timeRemaining: any) {
    if (game.state === "FUT" || game.state === "PRE")
      return "Upcoming";
    if (game.state === "OFF") return "FINAL";
    //check if in intermission
    if (game.clock?.inIntermission) {
      return game.clock.timeRemaining;
    }

    return timeRemaining;
  }

  console.log(timeRemainingFactory(game.clock?.timeRemaining), game.state);

  // periodToPeriod("1")
  return (
    <CollapsibleCard
      main={
        <div className="w-full bg-background p-2 shadow-sm rounded-lg">
          {!game.clock?.inIntermission && (
            <div className="flex flex-row justify-between px-4 font-semibold text-lg">
              <p>{periodFactory(game.period)}</p>
              <p>{timeRemainingFactory(game.clock?.timeRemaining)}</p>{" "}
            </div>
          )}

          {game.clock?.inIntermission && (
            <div className="flex flex-row justify-between px-4 font-semibold text-lg">
              <p>{timeRemainingFactory(game.clock?.timeRemaining)}</p>{" "}
              <p>{periodFactory(game.period)} Intermission</p>
            </div>
          )}
          <ScoreboardRow team={game.awayTeam} />
          <ScoreboardRow team={game.homeTeam} />
        </div>
      }
      small={
        <div className="w-full flex flex-row overflow-x-scroll no-scrollbar pb-2 pr-2">
          {game.goals.map((goal, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <Goalcard goal={goal} />
            </div>
          ))}
        </div>
      }
      show={game.goals.length > 0}
    />
  );
}

export default ScoreboardCard;
