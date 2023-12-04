import { Button } from "@/components/ui/button";
import { ChevronRightIcon, ChevronLeftIcon } from "@radix-ui/react-icons";
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
  return (
    <div>
      <div className="flex flex-row justify-between w-[350px] mx-auto">
        <Link href={`/scores/${yesterdayString}`}>
          <Button
            variant="outline"
            size="icon"
            className=" focus:outline-none focus-visible:outline-none"
          >
            <ChevronLeftIcon className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="flex flex-col justify-center">{params.date}</h1>
        <Link href={`/scores/${tomorrowString}`}>
          <Button
            variant="outline"
            size="icon"
            className=" focus:outline-none focus-visible:outline-none"
          >
            <ChevronRightIcon className="h-4 w-4" />
          </Button>
        </Link>
      </div>
      {children}
    </div>
  );
}
