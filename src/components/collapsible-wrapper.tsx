"use client";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useRouter } from "next/navigation";
import { useState } from "react";

export interface CollapsibleDemoProps {
  main: React.ReactNode;
  small: React.ReactNode;
  show: boolean
}

export function CollapsibleCard({ main, small, show }: CollapsibleDemoProps) {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2 border border-border rounded-lg"
    >
      <div className="" onClick={() => setIsOpen((prev) => !prev)}>
        {main}
      </div>

      {show && <CollapsibleContent className="CollapsibleContent">
        {small}
      </CollapsibleContent>}
      <button onClick={() => router.refresh()}>Hi</button>
    </Collapsible>
  );
}
