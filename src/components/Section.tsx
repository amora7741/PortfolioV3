"use client";

import { useIntersectionObserver } from "@uidotdev/usehooks";
import useNavbarStore from "@/store/navbar";
import { useEffect } from "react";

const Section = ({
  id,
  children,
}: {
  id: SectionID;
  children: React.ReactNode;
}) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.2,
    rootMargin: "-30% 0px -30% 0px",
  });

  const setActiveSection = useNavbarStore((state) => state.setActiveSection);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setActiveSection(id);
    }
  }, [entry?.isIntersecting, id, setActiveSection]);

  return (
    <section
      className={`flex flex-col ${id === "about-me" ? "gap-4" : ""}`}
      id={id}
      ref={ref}
    >
      {children}
    </section>
  );
};

export default Section;
