"use client";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import { useState } from "react";

export interface CollapsibleDemoProps {
  main: React.ReactNode;
  small: React.ReactNode;
  show: boolean;
}

export function CollapsibleCard({ main, small, show }: CollapsibleDemoProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2 border border-border rounded-lg"
    >
      <div className="" onClick={() => setIsOpen((prev) => !prev)}>
        {main}
      </div>

      {show && (
        <CollapsibleContent className="CollapsibleContent h-[110px]">
          {small}
        </CollapsibleContent>
      )}
    </Collapsible>
  );
}
