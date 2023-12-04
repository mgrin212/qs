import ScoreboardCard from "@/components/scoreboard-card";
import { getGameData } from "@/lib/functions";
import { revalidatePath } from "next/cache";

export default async function Scores({ params }: { params: { date: string } }) {
  const games = await getGameData(params.date);

  console.log(games.map((game) => game.homeTeam.name));
  games.sort((a, b) => {
    const stateToNumber = {
      LIVE: 0,
      PRE: 1,
      FUT: 1,
      OFF: 2,
      CRIT: 0,
      FINAL: 2,
    };
    // if states are equal, sort by start time, but make sure that order is preserved with priority indicated by stateToNumber
    // that means LIVE and CRIT should be at the start of the list, and OFF should be at the end
    if (stateToNumber[a.state] === stateToNumber[b.state]) {
      if (a.state === "OFF" || a.state === "FINAL") {
        return 1;
      }
      if (a.state === "LIVE" || a.state === "CRIT") {
        return -1;
      }
      //starttime is in UTC formatted string format, so we need to convert it to a date object
      if (a.state === "PRE" || a.state === "FUT") {
        const aDate = new Date(a.startTime);
        const bDate = new Date(b.startTime);
        return aDate.getTime() - bDate.getTime();
      }
    }
    // if states are not equal, sort by state
    return stateToNumber[a.state] - stateToNumber[b.state];
  });
  console.log(games.map((game) => game.homeTeam.name));
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:px-24 sm:pb-24 pt-2 pb-12 px-2 space-y-2">
      {games.map((game, i) => (
        <ScoreboardCard key={i} game={game} />
      ))}
    </main>
  );
}
