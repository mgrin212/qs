import { Team } from "@/lib/utils";
import Image from "next/image";
import React from "react";

export interface ScoreboardRowProps {
  team: Team;
}

export default function ScoreboardRow({ team }: ScoreboardRowProps) {
  //get ref to div with id="scoreboard-row"

  return (
    <div className="flex w-full items-center justify-between px-4 py-2 border-gray-300">
      <div className="flex items-center space-x-2">
        <Image
          alt="Team Logo"
          className="h-10 w-10"
          height="40"
          src={team.logoLink}
          style={{
            aspectRatio: "40/40",
            // objectFit: "cover",
          }}
          width="40"
        />
        <div>
          <div className="text-lg font-bold">{team.name}</div>
          <div className="text-sm text-gray-600">SOG: {team.SOG}</div>
        </div>
      </div>
      <div className="text-2xl font-bold">{team.score}</div>
    </div>
  );
}
