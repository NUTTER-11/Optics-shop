"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function TextRevealCardPreview() {
  return (
    <div className="flex items-center justify-center bg-[#0E0E10] h-[30rem] rounded-2xl w-full">
      <TextRevealCard
        text="Want to explore <br /> theWorld ?"
        revealText="Step into a world of clarity and style"
      >
        <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          Thats why we are always here to help you 
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}
