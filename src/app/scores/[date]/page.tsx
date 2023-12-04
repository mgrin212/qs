import ScoreboardCard from "@/components/scoreboard-card";
import { getGameData } from "@/lib/functions";

export default async function Scores({ params }: { params: { date: string } }) {
  const games = await getGameData(params.date);

  //sort games by state, with "LIVE" being first, "PRE" being second, "FUT" third, and "OFF" being last. IF THERE IS A TIE, sort by start time
  games.sort((a, b) => {
    if (a.state === "LIVE" && b.state !== "LIVE") return -1;
    if (a.state !== "LIVE" && b.state === "LIVE") return 1;
    if (a.state === "PRE" && b.state !== "PRE") return -1;
    if (a.state !== "PRE" && b.state === "PRE") return 1;
    if (a.state === "FUT" && b.state !== "FUT") return -1;
    if (a.state !== "FUT" && b.state === "FUT") return 1;
    if (a.state === "OFF" && b.state !== "OFF") return 1;
    if (a.state !== "OFF" && b.state === "OFF") return -1;
    if (a.startTime < b.startTime) return -1;
    if (a.startTime > b.startTime) return 1;
    return 0;
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 py-12 px-2 space-y-2">
      {games.map((game, i) => (
        <ScoreboardCard key={i} game={game} />
      ))}
    </main>
  );
}
