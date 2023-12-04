import ScoreboardCard from "@/components/scoreboard-card";
import { getGameData } from "@/lib/functions";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function Home() {

  const today = new Date();
  const todayString = today.toISOString().split("T")[0];
  redirect(`/scores/${todayString}`);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between sm:p-24 py-12 px-2 space-y-2"></main>
  );
}
