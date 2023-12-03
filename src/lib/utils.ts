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
  state: "FUT" | "LIVE" | "FINAL";
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
