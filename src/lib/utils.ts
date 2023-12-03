import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface Game {
  homeTeam: Team;
  awayTeam: Team;
  timeRemaining: string;
  period: string;
  goals: Goal[];
  powerPlay: string;
  powerPlayTime: string;
  strength: string;
}

export interface Goal {
  team: string;
  player: string;
  time: string;
  assist: string[];
  numberOfGoals: number;
  playerLink: string;
  scoreAtTime: string;
}

export interface Team {
  name: string;
  score: number;
  SOG: number;
  logoLink: string;
}

export const mockGame: Game = {
  homeTeam: {
    name: "Home Tigers",
    score: 3,
    SOG: 28,
    logoLink: "https://assets.nhle.com/logos/nhl/svg/CHI_light.svg",
  },
  awayTeam: {
    name: "Away Falcons",
    score: 2,
    SOG: 24,
    logoLink: "https://assets.nhle.com/logos/nhl/svg/MIN_light.svg",
  },
  timeRemaining: "12:30",
  period: "3rd",
  goals: [
    {
      team: "Home Tigers",
      player: "John Doe",
      time: "05:24",
      assist: ["Player 1", "Player 2"],
      numberOfGoals: 1,
      playerLink: "https://link-to-player.com",
      scoreAtTime: "1-0",
    },
    {
      team: "Away Falcons",
      player: "Mike Smith",
      time: "10:15",
      assist: ["Player 3"],
      numberOfGoals: 1,
      playerLink: "https://link-to-player.com",
      scoreAtTime: "1-1",
    },
    {
      team: "Home Tigers",
      player: "Alex Johnson",
      time: "15:45",
      assist: [],
      numberOfGoals: 1,
      playerLink: "https://link-to-player.com",
      scoreAtTime: "2-1",
    },
    {
      team: "Home Tigers",
      player: "Chris Lee",
      time: "25:10",
      assist: ["Player 4", "Player 5"],
      numberOfGoals: 1,
      playerLink: "https://link-to-player.com",
      scoreAtTime: "3-1",
    },
    {
      team: "Away Falcons",
      player: "Ryan Clark",
      time: "32:08",
      assist: ["Player 6"],
      numberOfGoals: 1,
      playerLink: "https://link-to-player.com",
      scoreAtTime: "3-2",
    },
  ],
  powerPlay: "Away Falcons",
  powerPlayTime: "02:00",
  strength: "5v4",
};
