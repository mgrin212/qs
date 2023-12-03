"use client";

import * as React from "react";
import { CaretSortIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export interface CollapsibleDemoProps {
  main: React.ReactNode;
  small: React.ReactNode;
}

export function CollapsibleCard({ main, small }: CollapsibleDemoProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div
        className=""
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {main}
      </div>

      <CollapsibleContent>{small}</CollapsibleContent>
    </Collapsible>
  );
}