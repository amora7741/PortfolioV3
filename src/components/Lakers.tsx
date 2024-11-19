"use client";

import Image from "next/image";
import { useState } from "react";

const LakersPhrase = "Los Angeles Lakers";

const Lakers = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <span
        className="lakers-phrase -mx-4 cursor-pointer whitespace-nowrap px-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {LakersPhrase.split("").map((letter, index) => (
          <span
            key={index}
            className="lakers-letter"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {(index === 3 || index === 11) && <>&nbsp;</>}
            {letter}
          </span>
        ))}
      </span>

      {isHovered && (
        <div className="pointer-events-none fixed left-1/2 top-1/2 z-[1000] -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/Lakers.gif"
            width={400}
            height={250}
            alt="Lakers Celebration"
            unoptimized
            loading="eager"
          />
        </div>
      )}
    </>
  );
};

export default Lakers;
