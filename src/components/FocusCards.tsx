"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
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
    variant = "experience",
  }: {
    card: ExperienceItem | ProjectItem;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    variant?: "experience" | "project";
  }) => (
    <Link
      href={card.website!}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "group -mx-4 grid grid-cols-[200px_1fr] gap-5 rounded-sm p-4 backdrop-blur-sm transition hover:bg-gray-200/20 lg:grid-cols-[150px_1fr]",
        hovered !== null && hovered !== index && "opacity-30",
      )}
    >
      {variant === "experience" ? (
        <p className="mt-1 text-sm uppercase tracking-wide">
          {(card as ExperienceItem).startDate} —{" "}
          {(card as ExperienceItem).endDate}
        </p>
      ) : (
        <Image
          src={(card as ProjectItem).photoUrl}
          alt={(card as ProjectItem).title}
          className="mt-1 h-auto w-full rounded-sm object-cover"
          width={200}
          height={200}
        />
      )}
      <div className="flex grow flex-col gap-2">
        <h1 className="flex gap-2 text-lg font-semibold group-hover:text-blue-700">
          <p>
            {variant === "experience"
              ? `${(card as ExperienceItem).position} · ${(card as ExperienceItem).company}`
              : (card as ProjectItem).title}
          </p>
          <GoArrowUpRight
            strokeWidth={0.7}
            className="-translate-x-1 translate-y-1.5 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
          />
        </h1>
        <p className="text-pretty">{card.description}</p>
        <ul className="mt-1 flex flex-wrap gap-2">
          {card.technologies.map((technology, index) => (
            <li
              key={index}
              className="rounded-full bg-slate-300/20 px-3 py-1 text-sm font-medium leading-5 text-blue-700 transition-colors group-hover:bg-blue-400/10"
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  ),
);

Card.displayName = "Card";

const FocusCards = ({
  cards,
  variant = "experience",
}: {
  cards: (ExperienceItem | ProjectItem)[];
  variant?: "experience" | "project";
}) => {
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
          variant={variant}
        />
      ))}
    </div>
  );
};

export default FocusCards;
