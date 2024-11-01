"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { GoArrowUpRight } from "react-icons/go";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: ExperienceItem;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <Link
      href={card.website!}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "group -mx-4 flex items-baseline gap-36 rounded-md p-4 transition hover:bg-gray-200/20 lg:gap-8",
        hovered !== null && hovered !== index && "opacity-30",
      )}
    >
      <div className="min-w-fit">
        <p className="text-sm uppercase">
          {card.startDate} - {card.endDate}
        </p>
      </div>
      <div className="flex grow flex-col gap-2">
        <h1 className="flex gap-2 text-lg font-semibold group-hover:text-blue-700">
          <p>
            {card.position} · {card.company}
          </p>
          <GoArrowUpRight
            strokeWidth={0.7}
            className="-translate-x-1 translate-y-1.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
          />
        </h1>
        <p className="text-pretty">{card.description}</p>
      </div>
    </Link>
  ),
);

Card.displayName = "Card";

const FocusCards = ({ cards }: { cards: ExperienceItem[] }) => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-2">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

export default FocusCards;
