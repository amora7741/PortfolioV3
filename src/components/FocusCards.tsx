"use client";

import { cn } from "@/lib/utils";
import { useWindowSize } from "@uidotdev/usehooks";
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
    width,
  }: {
    card: ExperienceItem | ProjectItem;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
    variant?: "experience" | "project";
    width: number;
  }) => {
    const isFlexRow = width < 1280;

    const sharedProps = {
      onMouseEnter: () => setHovered(index),
      onMouseLeave: () => setHovered(null),
      className: cn(
        "-mx-4 grid gap-2 rounded-sm p-4 backdrop-blur-sm transition  sm:grid-cols-[200px_1fr] sm:gap-5 xl:grid-cols-[110px_1fr]",
        !isFlexRow && hovered !== null && hovered !== index && "opacity-30",
        !isFlexRow && "group hover:bg-gray-200/20",
      ),
    };

    const content = (
      <>
        {variant === "experience" ? (
          <p className="text-xs uppercase tracking-wide sm:mt-1">
            {(card as ExperienceItem).startDate} —{" "}
            {(card as ExperienceItem).endDate}
          </p>
        ) : (
          <Image
            src={(card as ProjectItem).photoUrl}
            alt={(card as ProjectItem).title}
            className="order-last mt-1 rounded-sm border-2 object-cover transition-colors group-hover:border-blue-700/50 sm:order-none"
            width={240}
            height={140}
          />
        )}
        <div className="flex grow flex-col gap-2">
          {isFlexRow ? (
            <Link
              href={card.website!}
              target="_blank"
              rel="noopener noreferrer"
              className="-m-2 flex w-fit gap-2 p-2 text-base font-semibold hover:text-blue-700"
            >
              <p>
                {variant === "experience"
                  ? `${(card as ExperienceItem).position} · ${(card as ExperienceItem).company}`
                  : (card as ProjectItem).title}
              </p>
              <GoArrowUpRight
                strokeWidth={0.7}
                className="-translate-x-1 translate-y-1"
              />
            </Link>
          ) : (
            <h1 className="flex gap-2 text-base font-semibold group-hover:text-blue-700">
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
          )}
          <p className="text-pretty text-sm leading-normal tracking-[0.015em]">
            {card.description}
          </p>
          <ul className="flex flex-wrap gap-2 sm:mt-1">
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
      </>
    );

    return isFlexRow ? (
      <div {...sharedProps}>{content}</div>
    ) : (
      <Link
        {...sharedProps}
        href={card.website!}
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </Link>
    );
  },
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

  const size = useWindowSize().width ?? 0;

  return (
    <div className="flex flex-col gap-6 xl:gap-2">
      {cards.map((card, index) => (
        <Card
          key={index}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
          variant={variant}
          width={size}
        />
      ))}
    </div>
  );
};

export default FocusCards;
