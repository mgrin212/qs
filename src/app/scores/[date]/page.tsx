import ScoreboardCard from "@/components/scoreboard-card";
import { getGameData } from "@/lib/functions";

export default async function Scores({ params }: { params: { date: string } }) {
  const games = await getGameData(params.date);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 py-12 px-2 space-y-2">
      {games.map((game, i) => (
        <ScoreboardCard key={i} game={game} />
      ))}
    </main>
  );
}
