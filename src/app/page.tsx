import ScoreboardCard from "@/components/scoreboard-card";
import { getGameData } from "@/lib/functions";
import { mockGame } from "@/lib/utils";
import Image from "next/image";

export default async function Home() {
  const games = await getGameData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 py-12 px-2 space-y-2">
      {games.map((game, i) => (
        <ScoreboardCard key={i} game={game} />
      ))}
    </main>
  );
}
