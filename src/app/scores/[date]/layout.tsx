import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { date: string };
}) {
  //make date from params.date, which is in YYYY-MM-DD format
  const date = new Date(params.date);
  //make tomorrow and yesterday dates
  const tomorrow = new Date(date);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yesterday = new Date(date);
  yesterday.setDate(yesterday.getDate() - 1);
  //make tomorrow and yesterday strings in YYYY-MM-DD format
  const tomorrowString = tomorrow.toISOString().split("T")[0];
  const yesterdayString = yesterday.toISOString().split("T")[0];

  console.log(tomorrowString, yesterdayString);
  return (
    <div>
      <Button variant="outline" size="icon" className=" focus:outline-none focus-visible:outline-none">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <div className="">
        <Link href={`/scores/${yesterdayString}`}> Yesterday </Link>
        <Link href={`/scores/${tomorrowString}`}> Tomorrow </Link>
      </div>
      {children}
    </div>
  );
}
