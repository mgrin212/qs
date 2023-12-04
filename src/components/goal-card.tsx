import React from "react";
import { Goal } from "../lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export interface GoalcardProps {
  goal: Goal;
}

function Goalcard({ goal }: GoalcardProps) {
  return (
    <div className="w-[300px] bg-background border border-border p-2 rounded-lg ml-2">
      <Avatar>
        <AvatarImage src={goal.playerLink} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="flex flex-row justify-between px-4 font-semibold text-lg">
        <p>{goal.time}</p> <p>{goal.scoreAtTime}</p>
      </div>
      <div className="flex flex-row justify-between px-4 font-semibold text-lg">
        <p>
          {goal.team} {goal.player}
        </p>
      </div>
    </div>
  );
}

export default Goalcard;
